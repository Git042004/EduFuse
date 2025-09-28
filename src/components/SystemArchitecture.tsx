import React from 'react';
import { Card } from './ui/card';

export function SystemArchitecture() {
  return (
    <div className="max-w-7xl mx-auto p-6 space-y-8">
      <h1 className="text-3xl font-bold text-center text-slate-800 mb-8">
        StressFree.co System Architecture
      </h1>
      
      {/* Overall Architecture */}
      <Card className="p-8 bg-gradient-to-br from-blue-50 to-green-50">
        <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">
          Three-Tier Architecture Overview
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Frontend Layer */}
          <div className="bg-white rounded-lg p-6 shadow-lg border-2 border-blue-200">
            <h3 className="text-xl font-bold text-blue-700 mb-4 text-center">
              Frontend Layer
            </h3>
            <div className="space-y-3">
              <div className="bg-blue-50 p-3 rounded-lg">
                <h4 className="font-semibold text-blue-800">Student Portal</h4>
                <ul className="text-sm text-blue-700 mt-2 space-y-1">
                  <li>• Dashboard</li>
                  <li>• Daily Mood Survey</li>
                  <li>• PHQ-9 Self-Assessment</li>
                  <li>• AI Chatbot</li>
                  <li>• Resources Library</li>
                  <li>• Mood Calendar</li>
                  <li>• Counselor Booking</li>
                  <li>• Peer Support Forum</li>
                </ul>
              </div>
              <div className="bg-green-50 p-3 rounded-lg">
                <h4 className="font-semibold text-green-800">Admin Portal</h4>
                <ul className="text-sm text-green-700 mt-2 space-y-1">
                  <li>• Student Analytics</li>
                  <li>• Wellness Reports</li>
                  <li>• Content Management</li>
                  <li>• User Management</li>
                  <li>• System Monitoring</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Backend Layer */}
          <div className="bg-white rounded-lg p-6 shadow-lg border-2 border-green-200">
            <h3 className="text-xl font-bold text-green-700 mb-4 text-center">
              Backend Layer
            </h3>
            <div className="space-y-3">
              <div className="bg-green-50 p-3 rounded-lg">
                <h4 className="font-semibold text-green-800">API Gateway</h4>
                <ul className="text-sm text-green-700 mt-2 space-y-1">
                  <li>• Authentication Service</li>
                  <li>• User Management API</li>
                  <li>• Wellness Data API</li>
                  <li>• Analytics API</li>
                  <li>• Content Management API</li>
                </ul>
              </div>
              <div className="bg-blue-50 p-3 rounded-lg">
                <h4 className="font-semibold text-blue-800">Business Logic</h4>
                <ul className="text-sm text-blue-700 mt-2 space-y-1">
                  <li>• Mood Analysis Engine</li>
                  <li>• Recommendation System</li>
                  <li>• Alert System</li>
                  <li>• Report Generation</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Database Layer */}
          <div className="bg-white rounded-lg p-6 shadow-lg border-2 border-slate-200">
            <h3 className="text-xl font-bold text-slate-700 mb-4 text-center">
              Database Layer
            </h3>
            <div className="space-y-3">
              <div className="bg-slate-50 p-3 rounded-lg">
                <h4 className="font-semibold text-slate-800">Core Data</h4>
                <ul className="text-sm text-slate-700 mt-2 space-y-1">
                  <li>• User Profiles</li>
                  <li>• Authentication Data</li>
                  <li>• Mood Survey Responses</li>
                  <li>• PHQ-9 Assessments</li>
                  <li>• Chat History</li>
                  <li>• Counselor Appointments</li>
                  <li>• Forum Posts</li>
                </ul>
              </div>
              <div className="bg-purple-50 p-3 rounded-lg">
                <h4 className="font-semibold text-purple-800">Analytics</h4>
                <ul className="text-sm text-purple-700 mt-2 space-y-1">
                  <li>• Wellness Trends</li>
                  <li>• Usage Analytics</li>
                  <li>• Report Data</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Data Flow Arrows */}
        <div className="mt-8 flex justify-center">
          <div className="text-center space-y-2">
            <div className="flex items-center gap-4">
              <span className="text-lg">Frontend</span>
              <span className="text-2xl">⟷</span>
              <span className="text-lg">Backend</span>
              <span className="text-2xl">⟷</span>
              <span className="text-lg">Database</span>
            </div>
            <p className="text-sm text-slate-600">
              RESTful APIs & Real-time WebSocket Connections
            </p>
          </div>
        </div>
      </Card>

      {/* Technology Stack */}
      <Card className="p-8 bg-gradient-to-br from-green-50 to-blue-50">
        <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">
          Technology Stack
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-bold text-blue-700 mb-3">Frontend</h3>
            <ul className="space-y-2 text-sm">
              <li>• React.js + TypeScript</li>
              <li>• Tailwind CSS</li>
              <li>• Shadcn/ui Components</li>
              <li>• Recharts for Analytics</li>
              <li>• Lucide Icons</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-bold text-green-700 mb-3">Backend</h3>
            <ul className="space-y-2 text-sm">
              <li>• Supabase (BaaS)</li>
              <li>• PostgreSQL Database</li>
              <li>• Edge Functions</li>
              <li>• Real-time Subscriptions</li>
              <li>• Row Level Security</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-bold text-purple-700 mb-3">Authentication</h3>
            <ul className="space-y-2 text-sm">
              <li>• Supabase Auth</li>
              <li>• JWT Tokens</li>
              <li>• Role-based Access</li>
              <li>• Social Login Support</li>
              <li>• Session Management</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-bold text-orange-700 mb-3">Security</h3>
            <ul className="space-y-2 text-sm">
              <li>• HTTPS Encryption</li>
              <li>• Data Anonymization</li>
              <li>• Input Validation</li>
              <li>• Rate Limiting</li>
              <li>• GDPR Compliance</li>
            </ul>
          </div>
        </div>
      </Card>

      {/* Database Schema */}
      <Card className="p-8 bg-gradient-to-br from-slate-50 to-blue-50">
        <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">
          Database Schema Overview
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-blue-500">
            <h3 className="font-bold text-blue-700 mb-3">Users</h3>
            <ul className="text-sm space-y-1">
              <li>• id (UUID)</li>
              <li>• email</li>
              <li>• name</li>
              <li>• role (student/admin)</li>
              <li>• created_at</li>
              <li>• last_login</li>
            </ul>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-green-500">
            <h3 className="font-bold text-green-700 mb-3">Mood Surveys</h3>
            <ul className="text-sm space-y-1">
              <li>• id (UUID)</li>
              <li>• user_id (FK)</li>
              <li>• mood_rating</li>
              <li>• stress_level</li>
              <li>• focus_level</li>
              <li>• submitted_at</li>
            </ul>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-purple-500">
            <h3 className="font-bold text-purple-700 mb-3">PHQ-9 Assessments</h3>
            <ul className="text-sm space-y-1">
              <li>• id (UUID)</li>
              <li>• user_id (FK)</li>
              <li>• responses (JSON)</li>
              <li>• total_score</li>
              <li>• severity_level</li>
              <li>• completed_at</li>
            </ul>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-orange-500">
            <h3 className="font-bold text-orange-700 mb-3">Chat Sessions</h3>
            <ul className="text-sm space-y-1">
              <li>• id (UUID)</li>
              <li>• user_id (FK)</li>
              <li>• messages (JSON)</li>
              <li>• session_start</li>
              <li>• session_end</li>
              <li>• status</li>
            </ul>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-red-500">
            <h3 className="font-bold text-red-700 mb-3">Appointments</h3>
            <ul className="text-sm space-y-1">
              <li>• id (UUID)</li>
              <li>• user_id (FK)</li>
              <li>• counselor_id (FK)</li>
              <li>• appointment_date</li>
              <li>• status</li>
              <li>• notes</li>
            </ul>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-teal-500">
            <h3 className="font-bold text-teal-700 mb-3">Forum Posts</h3>
            <ul className="text-sm space-y-1">
              <li>• id (UUID)</li>
              <li>• user_id (FK)</li>
              <li>• title</li>
              <li>• content</li>
              <li>• category</li>
              <li>• created_at</li>
            </ul>
          </div>
        </div>
      </Card>

      {/* API Endpoints */}
      <Card className="p-8 bg-gradient-to-br from-blue-50 to-green-50">
        <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">
          API Endpoints Structure
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-bold text-blue-700 mb-4">Student Portal APIs</h3>
            <div className="space-y-3">
              <div className="bg-blue-50 p-3 rounded">
                <code className="text-sm font-mono">GET /api/dashboard</code>
                <p className="text-xs text-slate-600 mt-1">Fetch user dashboard data</p>
              </div>
              <div className="bg-blue-50 p-3 rounded">
                <code className="text-sm font-mono">POST /api/mood-survey</code>
                <p className="text-xs text-slate-600 mt-1">Submit daily mood survey</p>
              </div>
              <div className="bg-blue-50 p-3 rounded">
                <code className="text-sm font-mono">POST /api/phq9-assessment</code>
                <p className="text-xs text-slate-600 mt-1">Submit PHQ-9 assessment</p>
              </div>
              <div className="bg-blue-50 p-3 rounded">
                <code className="text-sm font-mono">GET/POST /api/chat</code>
                <p className="text-xs text-slate-600 mt-1">AI chatbot interactions</p>
              </div>
              <div className="bg-blue-50 p-3 rounded">
                <code className="text-sm font-mono">GET /api/mood-calendar</code>
                <p className="text-xs text-slate-600 mt-1">Retrieve mood tracking data</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-bold text-green-700 mb-4">Admin Portal APIs</h3>
            <div className="space-y-3">
              <div className="bg-green-50 p-3 rounded">
                <code className="text-sm font-mono">GET /api/admin/analytics</code>
                <p className="text-xs text-slate-600 mt-1">System-wide analytics</p>
              </div>
              <div className="bg-green-50 p-3 rounded">
                <code className="text-sm font-mono">GET /api/admin/users</code>
                <p className="text-xs text-slate-600 mt-1">User management data</p>
              </div>
              <div className="bg-green-50 p-3 rounded">
                <code className="text-sm font-mono">GET /api/admin/reports</code>
                <p className="text-xs text-slate-600 mt-1">Generate wellness reports</p>
              </div>
              <div className="bg-green-50 p-3 rounded">
                <code className="text-sm font-mono">POST /api/admin/content</code>
                <p className="text-xs text-slate-600 mt-1">Manage resources content</p>
              </div>
              <div className="bg-green-50 p-3 rounded">
                <code className="text-sm font-mono">GET /api/admin/alerts</code>
                <p className="text-xs text-slate-600 mt-1">Crisis alert monitoring</p>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Deployment Architecture */}
      <Card className="p-8 bg-gradient-to-br from-purple-50 to-blue-50">
        <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">
          Deployment Architecture
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="font-bold text-purple-700 mb-4 text-center">Development</h3>
            <ul className="space-y-2 text-sm">
              <li>• Local Development Server</li>
              <li>• Hot Module Replacement</li>
              <li>• Dev Database Instance</li>
              <li>• Mock API Endpoints</li>
              <li>• Debug Mode Enabled</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="font-bold text-blue-700 mb-4 text-center">Staging</h3>
            <ul className="space-y-2 text-sm">
              <li>• Pre-production Testing</li>
              <li>• Sanitized Test Data</li>
              <li>• Performance Testing</li>
              <li>• Security Audits</li>
              <li>• User Acceptance Testing</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="font-bold text-green-700 mb-4 text-center">Production</h3>
            <ul className="space-y-2 text-sm">
              <li>• CDN Distribution</li>
              <li>• Load Balancing</li>
              <li>• Auto-scaling</li>
              <li>• Monitoring & Alerts</li>
              <li>• Backup & Recovery</li>
            </ul>
          </div>
        </div>
      </Card>
    </div>
  );
}