import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Progress } from './ui/progress';
import { Badge } from './ui/badge';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, LineChart, Line } from 'recharts';
import { 
  TrendingUp, Heart, Brain, Target, Calendar, Clock, Award, 
  BookOpen, CheckCircle, AlertTriangle, Flame, Star,
  GraduationCap, FileText, Clock3, TrendingDown
} from 'lucide-react';

interface User {
  firstName: string;
  lastName: string;
  username: string;
  role: string;
}

interface StudentDashboardProps {
  user: User;
}

const stressData = [
  { name: 'Anxiety', value: 65, color: '#ef4444' },
  { name: 'Bipolar Disorder', value: 20, color: '#f97316' },
  { name: 'Overthinking', value: 85, color: '#eab308' },
  { name: 'Procrastination', value: 75, color: '#22c55e' },
];

const quickStats = [
  { label: 'Stress Level', value: 45, icon: Brain, color: 'from-red-500 to-orange-500' },
  { label: 'Mood Score', value: 72, icon: Heart, color: 'from-pink-500 to-rose-500' },
  { label: 'Focus Level', value: 68, icon: Target, color: 'from-blue-500 to-indigo-500' },
];

const recentGrades = [
  { subject: 'Data Structures', grade: 'A-', score: 87, trend: 'up' },
  { subject: 'Web Development', grade: 'B+', score: 82, trend: 'stable' },
  { subject: 'Database Systems', grade: 'B', score: 78, trend: 'down' },
  { subject: 'Software Engineering', grade: 'A', score: 92, trend: 'up' },
];

const upcomingDeadlines = [
  { 
    title: 'Assignment 2 - Data Structures', 
    course: 'CS201', 
    dueDate: 'Tomorrow', 
    priority: 'high',
    timeLeft: '18 hours'
  },
  { 
    title: 'Project Demo - Web Development', 
    course: 'CS301', 
    dueDate: 'In 3 days', 
    priority: 'medium',
    timeLeft: '3 days'
  },
  { 
    title: 'Lab Internal - Database Systems', 
    course: 'CS302', 
    dueDate: 'In 1 week', 
    priority: 'low',
    timeLeft: '7 days'
  },
];

const weeklyTrends = [
  { day: 'Mon', stress: 6, mood: 7, focus: 6 },
  { day: 'Tue', stress: 7, mood: 6, focus: 5 },
  { day: 'Wed', stress: 5, mood: 8, focus: 7 },
  { day: 'Thu', stress: 8, mood: 5, focus: 4 },
  { day: 'Fri', stress: 4, mood: 9, focus: 8 },
  { day: 'Sat', stress: 3, mood: 8, focus: 7 },
  { day: 'Sun', stress: 5, mood: 7, focus: 6 },
];

export function StudentDashboard({ user }: StudentDashboardProps) {
  const currentStreak = 7;
  const wellnessPoints = 210;
  const studyHours = 6.5;
  const weeklyGoalsMet = 4;
  const totalWeeklyGoals = 6;
  const assignmentsCompleted = 1;
  const totalAssignments = 4;
  const backlogs = 2;

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'text-red-600 bg-red-50 border-red-200';
      case 'medium': return 'text-orange-600 bg-orange-50 border-orange-200';
      case 'low': return 'text-blue-600 bg-blue-50 border-blue-200';
      default: return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up': return <TrendingUp className="w-4 h-4 text-green-500" />;
      case 'down': return <TrendingDown className="w-4 h-4 text-red-500" />;
      default: return <div className="w-4 h-4 rounded-full bg-gray-400" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-slate-100 via-slate-200 to-slate-100 border border-slate-300 p-8 rounded-2xl shadow-lg">
        <h1 className="text-2xl md:text-3xl font-semibold mb-2 text-slate-800">
          Hi {user.firstName}, welcome back! 👋
        </h1>
        <p className="text-slate-600 text-lg">
          Here's your mental wellness snapshot today
        </p>
      </div>

      {/* Streaks and Rewards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="border-0 shadow-md bg-gradient-to-br from-orange-50 to-red-50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center">
                <Flame className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-orange-700">{currentStreak}</span>
            </div>
            <h3 className="font-medium text-slate-700 mb-1">Current Streak</h3>
            <p className="text-sm text-slate-600">Days in a row</p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-md bg-gradient-to-br from-yellow-50 to-orange-50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-yellow-500 to-orange-500 flex items-center justify-center">
                <Star className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-yellow-700">{wellnessPoints}</span>
            </div>
            <h3 className="font-medium text-slate-700 mb-1">Wellness Points</h3>
            <p className="text-sm text-slate-600">Total earned</p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-md bg-gradient-to-br from-blue-50 to-indigo-50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-blue-700">{studyHours}h</span>
            </div>
            <h3 className="font-medium text-slate-700 mb-1">Study Hours</h3>
            <p className="text-sm text-slate-600">Today</p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-md bg-gradient-to-br from-green-50 to-teal-50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-green-500 to-teal-500 flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-green-700">{weeklyGoalsMet}/{totalWeeklyGoals}</span>
            </div>
            <h3 className="font-medium text-slate-700 mb-1">Weekly Goals</h3>
            <p className="text-sm text-slate-600">Completed</p>
          </CardContent>
        </Card>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {quickStats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="border-0 shadow-md bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${stat.color} flex items-center justify-center`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-2xl font-bold text-slate-800">{stat.value}%</span>
                </div>
                <h3 className="font-medium text-slate-700 mb-2">{stat.label}</h3>
                <Progress value={stat.value} className="h-2" />
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Productivity Snapshot */}
        <Card className="border-0 shadow-md bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-slate-800">
              <Target className="w-5 h-5 text-green-500" />
              Productivity Snapshot
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
              <div className="flex items-center gap-3">
                <BookOpen className="w-5 h-5 text-blue-600" />
                <div>
                  <p className="font-medium text-slate-800">Study Hours Today</p>
                  <p className="text-sm text-slate-600">{studyHours} hours completed</p>
                </div>
              </div>
              <span className="text-xl font-bold text-blue-700">{studyHours}h</span>
            </div>

            <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
              <div className="flex items-center gap-3">
                <Target className="w-5 h-5 text-green-600" />
                <div>
                  <p className="font-medium text-slate-800">Weekly Goals Met</p>
                  <p className="text-sm text-slate-600">{weeklyGoalsMet} out of {totalWeeklyGoals} goals</p>
                </div>
              </div>
              <span className="text-xl font-bold text-green-700">{weeklyGoalsMet}/{totalWeeklyGoals}</span>
            </div>

            <div className="flex items-center justify-between p-4 bg-orange-50 rounded-lg">
              <div className="flex items-center gap-3">
                <FileText className="w-5 h-5 text-orange-600" />
                <div>
                  <p className="font-medium text-slate-800">Assignment Progress</p>
                  <p className="text-sm text-slate-600">{totalAssignments - assignmentsCompleted} pending assignments</p>
                </div>
              </div>
              <span className="text-xl font-bold text-orange-700">{assignmentsCompleted}/{totalAssignments}</span>
            </div>

            {backlogs > 0 && (
              <div className="flex items-center justify-between p-4 bg-red-50 rounded-lg border border-red-200">
                <div className="flex items-center gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-600" />
                  <div>
                    <p className="font-medium text-slate-800">Backlogs</p>
                    <p className="text-sm text-slate-600">Subjects with pending work</p>
                  </div>
                </div>
                <Badge variant="destructive" className="text-lg font-bold">{backlogs}</Badge>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Upcoming Deadlines */}
        <Card className="border-0 shadow-md bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-slate-800">
              <Calendar className="w-5 h-5 text-red-500" />
              Upcoming Deadlines
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {upcomingDeadlines.map((deadline, index) => (
              <div key={index} className={`p-4 rounded-lg border ${getPriorityColor(deadline.priority)}`}>
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <h4 className="font-medium text-slate-800 mb-1">{deadline.title}</h4>
                    <p className="text-sm text-slate-600">{deadline.course}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock3 className="w-4 h-4 text-slate-500" />
                    <span className="text-sm font-medium">{deadline.timeLeft}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <Badge variant="secondary" className="text-xs">
                    Due {deadline.dueDate}
                  </Badge>
                  <Badge className={`text-xs ${deadline.priority === 'high' ? 'bg-red-100 text-red-700' : deadline.priority === 'medium' ? 'bg-orange-100 text-orange-700' : 'bg-blue-100 text-blue-700'}`}>
                    {deadline.priority} priority
                  </Badge>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Grades */}
        <Card className="border-0 shadow-md bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-slate-800">
              <GraduationCap className="w-5 h-5 text-purple-500" />
              Recent Grades
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {recentGrades.map((grade, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                <div className="flex items-center gap-3">
                  {getTrendIcon(grade.trend)}
                  <div>
                    <p className="font-medium text-slate-800">{grade.subject}</p>
                    <p className="text-sm text-slate-600">Score: {grade.score}%</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className={`text-xl font-bold ${
                    grade.score >= 90 ? 'text-green-600' :
                    grade.score >= 80 ? 'text-blue-600' :
                    grade.score >= 70 ? 'text-orange-600' : 'text-red-600'
                  }`}>
                    {grade.grade}
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Weekly Wellness Trends */}
        <Card className="border-0 shadow-md bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-slate-800">
              <TrendingUp className="w-5 h-5 text-blue-500" />
              Weekly Wellness Trends
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={weeklyTrends}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="day" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} domain={[0, 10]} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'white', 
                    border: '1px solid #e2e8f0',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                  }}
                />
                <Line type="monotone" dataKey="stress" stroke="#ef4444" strokeWidth={2} name="Stress" />
                <Line type="monotone" dataKey="mood" stroke="#10b981" strokeWidth={2} name="Mood" />
                <Line type="monotone" dataKey="focus" stroke="#3b82f6" strokeWidth={2} name="Focus" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Mental Health Categories Chart */}
      <Card className="border-0 shadow-md bg-white/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-slate-800">Mental Health Categories</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={stressData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis 
                dataKey="name" 
                tick={{ fontSize: 12 }}
                angle={-45}
                textAnchor="end"
                height={80}
              />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'white', 
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                }}
              />
              <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                {stressData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}