import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import { createClient } from "npm:@supabase/supabase-js";
import * as kv from "./kv_store.tsx";

const app = new Hono();

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Initialize Supabase client for server operations
const supabase = createClient(
  Deno.env.get('SUPABASE_URL')!,
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
);

// Health check endpoint
app.get("/make-server-2e1dbc7f/health", (c) => {
  return c.json({ status: "ok" });
});

// User registration endpoint
app.post("/make-server-2e1dbc7f/auth/signup", async (c) => {
  try {
    const body = await c.req.json();
    const { email, password, firstName, lastName, role = 'student' } = body;

    // Validate required fields
    if (!email || !password || !firstName || !lastName) {
      return c.json({ error: "Missing required fields" }, 400);
    }

    // Create user with Supabase Auth
    const { data, error } = await supabase.auth.admin.createUser({
      email,
      password,
      user_metadata: { 
        name: `${firstName} ${lastName}`,
        first_name: firstName,
        last_name: lastName,
        role 
      },
      // Automatically confirm the user's email since an email server hasn't been configured
      email_confirm: true
    });

    if (error) {
      console.log(`Registration error for ${email}: ${error.message}`);
      return c.json({ error: error.message }, 400);
    }

    // Store additional user profile data in KV store
    await kv.set(`user_profile:${data.user.id}`, {
      id: data.user.id,
      email,
      firstName,
      lastName,
      role,
      createdAt: new Date().toISOString(),
      lastLogin: null,
      profileComplete: false
    });

    console.log(`User registered successfully: ${email} (${role})`);
    return c.json({ 
      success: true, 
      message: "User registered successfully",
      user: {
        id: data.user.id,
        email: data.user.email,
        role
      }
    });

  } catch (error) {
    console.log(`Registration error: ${error}`);
    return c.json({ error: "Internal server error during registration" }, 500);
  }
});

// User authentication endpoint
app.post("/make-server-2e1dbc7f/auth/signin", async (c) => {
  try {
    const body = await c.req.json();
    const { email, password } = body;

    if (!email || !password) {
      return c.json({ error: "Email and password are required" }, 400);
    }

    // Sign in with Supabase Auth
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      console.log(`Sign in error for ${email}: ${error.message}`);
      return c.json({ error: "Invalid credentials" }, 401);
    }

    // Update last login time
    const userProfile = await kv.get(`user_profile:${data.user.id}`);
    if (userProfile) {
      await kv.set(`user_profile:${data.user.id}`, {
        ...userProfile,
        lastLogin: new Date().toISOString()
      });
    }

    console.log(`User signed in successfully: ${email}`);
    return c.json({
      success: true,
      user: {
        id: data.user.id,
        email: data.user.email,
        access_token: data.session.access_token,
        role: userProfile?.role || 'student'
      }
    });

  } catch (error) {
    console.log(`Sign in error: ${error}`);
    return c.json({ error: "Internal server error during sign in" }, 500);
  }
});

// Get user profile endpoint
app.get("/make-server-2e1dbc7f/auth/profile", async (c) => {
  try {
    const accessToken = c.req.header('Authorization')?.split(' ')[1];
    
    if (!accessToken) {
      return c.json({ error: "Authorization token required" }, 401);
    }

    const { data: { user }, error } = await supabase.auth.getUser(accessToken);
    
    if (error || !user) {
      return c.json({ error: "Invalid token" }, 401);
    }

    // Get user profile from KV store
    const userProfile = await kv.get(`user_profile:${user.id}`);
    
    if (!userProfile) {
      return c.json({ error: "User profile not found" }, 404);
    }

    return c.json({
      success: true,
      profile: userProfile
    });

  } catch (error) {
    console.log(`Profile fetch error: ${error}`);
    return c.json({ error: "Internal server error fetching profile" }, 500);
  }
});

// Dashboard data endpoint
app.get("/make-server-2e1dbc7f/dashboard", async (c) => {
  try {
    const accessToken = c.req.header('Authorization')?.split(' ')[1];
    
    if (!accessToken) {
      return c.json({ error: "Authorization token required" }, 401);
    }

    const { data: { user }, error } = await supabase.auth.getUser(accessToken);
    
    if (error || !user) {
      return c.json({ error: "Unauthorized" }, 401);
    }

    // Get user's latest mood survey data
    const latestSurvey = await kv.get(`mood_survey:${user.id}:latest`);
    
    // Get user's wellness trends
    const wellnessTrends = await kv.get(`wellness_trends:${user.id}`) || {
      anxiety: 65,
      bipolarDisorder: 30,
      overthinking: 80,
      procrastination: 45
    };

    // Get recent activities
    const recentActivities = await kv.get(`recent_activities:${user.id}`) || [
      { type: 'survey', message: 'Survey completed today', timestamp: new Date().toISOString() },
      { type: 'mood', message: 'Mood tracked: Calm', timestamp: new Date(Date.now() - 3600000).toISOString() },
      { type: 'resource', message: 'Resource viewed', timestamp: new Date(Date.now() - 7200000).toISOString() }
    ];

    return c.json({
      success: true,
      data: {
        stressLevel: latestSurvey?.stressLevel || 6,
        wellnessTrends,
        recentActivities,
        lastSurveyDate: latestSurvey?.submittedAt || null
      }
    });

  } catch (error) {
    console.log(`Dashboard data error: ${error}`);
    return c.json({ error: "Internal server error fetching dashboard data" }, 500);
  }
});

// Submit mood survey endpoint
app.post("/make-server-2e1dbc7f/mood-survey", async (c) => {
  try {
    const accessToken = c.req.header('Authorization')?.split(' ')[1];
    
    if (!accessToken) {
      return c.json({ error: "Authorization token required" }, 401);
    }

    const { data: { user }, error } = await supabase.auth.getUser(accessToken);
    
    if (error || !user) {
      return c.json({ error: "Unauthorized" }, 401);
    }

    const body = await c.req.json();
    const { moodRating, stressLevel, focusLevel, notes } = body;

    const surveyData = {
      userId: user.id,
      moodRating,
      stressLevel,
      focusLevel,
      notes: notes || '',
      submittedAt: new Date().toISOString(),
      id: crypto.randomUUID()
    };

    // Store the survey data
    await kv.set(`mood_survey:${user.id}:${surveyData.id}`, surveyData);
    await kv.set(`mood_survey:${user.id}:latest`, surveyData);

    // Update recent activities
    const activities = await kv.get(`recent_activities:${user.id}`) || [];
    activities.unshift({
      type: 'survey',
      message: 'Daily mood survey completed',
      timestamp: new Date().toISOString()
    });
    // Keep only last 10 activities
    await kv.set(`recent_activities:${user.id}`, activities.slice(0, 10));

    console.log(`Mood survey submitted by user: ${user.id}`);
    return c.json({
      success: true,
      message: "Mood survey submitted successfully",
      data: surveyData
    });

  } catch (error) {
    console.log(`Mood survey submission error: ${error}`);
    return c.json({ error: "Internal server error submitting survey" }, 500);
  }
});

// Admin analytics endpoint
app.get("/make-server-2e1dbc7f/admin/analytics", async (c) => {
  try {
    const accessToken = c.req.header('Authorization')?.split(' ')[1];
    
    if (!accessToken) {
      return c.json({ error: "Authorization token required" }, 401);
    }

    const { data: { user }, error } = await supabase.auth.getUser(accessToken);
    
    if (error || !user) {
      return c.json({ error: "Unauthorized" }, 401);
    }

    // Check if user is admin
    const userProfile = await kv.get(`user_profile:${user.id}`);
    if (!userProfile || userProfile.role !== 'admin') {
      return c.json({ error: "Admin access required" }, 403);
    }

    // Get all user profiles for analytics
    const allProfiles = await kv.getByPrefix('user_profile:');
    const totalStudents = allProfiles.filter(p => p.role === 'student').length;
    
    // Mock analytics data for demo
    const analyticsData = {
      totalStudents,
      activeToday: Math.floor(totalStudents * 0.3),
      crisisAlerts: 3,
      avgWellnessScore: 7.2,
      recentAlerts: [
        { type: 'Crisis', message: 'High-risk assessment detected for Student #1024', time: '5 min ago', severity: 'high' },
        { type: 'System', message: 'Database backup completed successfully', time: '1 hour ago', severity: 'low' },
        { type: 'Warning', message: 'Unusual pattern in mood data detected', time: '2 hours ago', severity: 'medium' }
      ]
    };

    return c.json({
      success: true,
      data: analyticsData
    });

  } catch (error) {
    console.log(`Admin analytics error: ${error}`);
    return c.json({ error: "Internal server error fetching analytics" }, 500);
  }
});

Deno.serve(app.fetch);