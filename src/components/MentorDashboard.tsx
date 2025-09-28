import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  PieChart, Pie, Cell, LineChart, Line, Area, AreaChart
} from 'recharts';
import { 
  Users, AlertTriangle, TrendingUp, DollarSign, Calendar, 
  MessageSquare, Phone, Mail, Eye, UserCheck, UserX,
  BarChart3, Activity, Clock, Award, Target, Bell,
  GraduationCap, BookOpen, CreditCard, Wifi, WifiOff
} from 'lucide-react';

interface User {
  firstName: string;
  lastName: string;
  username: string;
  role: string;
  class?: string;
}

interface MentorDashboardProps {
  user: User;
}

const studentData = [
  { 
    id: 1, 
    name: 'Arjun Sharma', 
    attendance: 92, 
    trend: 'improving', 
    backlogs: 0, 
    stressScore: 4.2, 
    riskStatus: 'low',
    feeStatus: 'paid',
    lastActive: '2 hours ago'
  },
  { 
    id: 2, 
    name: 'Priya Patel', 
    attendance: 88, 
    trend: 'stable', 
    backlogs: 1, 
    stressScore: 6.8, 
    riskStatus: 'medium',
    feeStatus: 'paid',
    lastActive: '1 hour ago'
  },
  { 
    id: 3, 
    name: 'Rahul Kumar', 
    attendance: 67, 
    trend: 'declining', 
    backlogs: 3, 
    stressScore: 8.2, 
    riskStatus: 'high',
    feeStatus: 'overdue',
    lastActive: '5 hours ago'
  },
  { 
    id: 4, 
    name: 'Sneha Reddy', 
    attendance: 95, 
    trend: 'improving', 
    backlogs: 0, 
    stressScore: 3.1, 
    riskStatus: 'low',
    feeStatus: 'paid',
    lastActive: '30 min ago'
  },
  { 
    id: 5, 
    name: 'Vikram Singh', 
    attendance: 71, 
    trend: 'declining', 
    backlogs: 2, 
    stressScore: 7.5, 
    riskStatus: 'high',
    feeStatus: 'paid',
    lastActive: '3 hours ago'
  },
];

const riskCategories = [
  { name: 'Low Attendance', value: 12, color: '#ef4444' },
  { name: 'Poor Scores', value: 8, color: '#f97316' },
  { name: 'High Stress', value: 15, color: '#eab308' },
  { name: 'Multiple Backlogs', value: 6, color: '#8b5cf6' },
];

const monthlyTrends = [
  { month: 'May', attendance: 82, stress: 5.8, performance: 7.2 },
  { month: 'June', attendance: 79, stress: 6.2, performance: 6.9 },
  { month: 'July', attendance: 75, stress: 6.8, performance: 6.5 },
  { month: 'August', attendance: 78, stress: 6.1, performance: 6.8 },
  { month: 'September', attendance: 78, stress: 6.1, performance: 6.8 },
];

const criticalAlerts = [
  { id: 1, student: 'Rahul Kumar', type: 'High Stress', severity: 'critical', time: '5 min ago', score: 8.2 },
  { id: 2, student: 'Vikram Singh', type: 'Low Attendance', severity: 'high', time: '15 min ago', attendance: 71 },
  { id: 3, student: 'Anita Gupta', type: 'Assignment Overdue', severity: 'medium', time: '1 hour ago', count: 3 },
];

const earlyAlerts = [
  { type: 'Critical Stress Threshold', count: 3, students: ['Rahul K.', 'Vikram S.', 'Amit T.'] },
  { type: 'Attendance Below 75%', count: 5, students: ['Vikram S.', 'Raj M.', 'Pooja L.', 'Kiran N.', 'Dev P.'] },
  { type: 'Multiple Assignment Delays', count: 2, students: ['Anita G.', 'Rohit J.'] },
];

export function MentorDashboard({ user }: MentorDashboardProps) {
  const [selectedStudent, setSelectedStudent] = useState<number | null>(null);
  const [alertsSent, setAlertsSent] = useState<Set<string>>(new Set());

  const totalStudents = 45;
  const activeStudents = 38;
  const criticalAlertsCount = 3;
  const highRiskCount = 2;
  const avgWellnessScore = 7.2;
  const wellnessChange = 2;
  const feeOverdueCount = 2;

  const sendAlert = (type: string, studentId?: number) => {
    const alertKey = studentId ? `${type}_${studentId}` : type;
    setAlertsSent(prev => new Set(prev.add(alertKey)));
    
    // Show feedback to mentor
    setTimeout(() => {
      alert(`SMS alert sent successfully for ${type}`);
    }, 500);
  };

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'high': return 'text-red-600 bg-red-50 border-red-200';
      case 'medium': return 'text-orange-600 bg-orange-50 border-orange-200';
      case 'low': return 'text-green-600 bg-green-50 border-green-200';
      default: return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'improving': return <TrendingUp className="w-4 h-4 text-green-500" />;
      case 'declining': return <TrendingUp className="w-4 h-4 text-red-500 rotate-180" />;
      default: return <div className="w-4 h-4 rounded-full bg-gray-400" />;
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical': return 'text-red-700 bg-red-100';
      case 'high': return 'text-orange-700 bg-orange-100';
      case 'medium': return 'text-yellow-700 bg-yellow-100';
      default: return 'text-blue-700 bg-blue-100';
    }
  };

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-slate-100 via-slate-200 to-slate-100 border border-slate-300 p-8 rounded-2xl shadow-lg">
        <h1 className="text-2xl md:text-3xl font-semibold mb-2 text-slate-800">
          Hi {user.firstName}, welcome to your mentor dashboard! 👨‍🏫
        </h1>
        <p className="text-slate-600 text-lg">
          Monitor and support your students' wellness journey - {user.class}
        </p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="border-0 shadow-md bg-gradient-to-br from-blue-50 to-indigo-50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-blue-700">{activeStudents}/{totalStudents}</span>
            </div>
            <h3 className="font-medium text-slate-700 mb-1">Active Students</h3>
            <p className="text-sm text-slate-600">This semester</p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-md bg-gradient-to-br from-red-50 to-pink-50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-red-500 to-pink-500 flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-white" />
              </div>
              <div className="text-right">
                <span className="text-2xl font-bold text-red-700">{criticalAlertsCount}</span>
                <div className="text-sm text-red-600">Critical</div>
              </div>
            </div>
            <h3 className="font-medium text-slate-700 mb-1">Risk Alerts</h3>
            <p className="text-sm text-slate-600">{highRiskCount} high risk students</p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-md bg-gradient-to-br from-green-50 to-teal-50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-green-500 to-teal-500 flex items-center justify-center">
                <Activity className="w-6 h-6 text-white" />
              </div>
              <div className="text-right">
                <span className="text-2xl font-bold text-green-700">{avgWellnessScore}/10</span>
                <div className="text-sm text-green-600">+{wellnessChange}% ↗️</div>
              </div>
            </div>
            <h3 className="font-medium text-slate-700 mb-1">Avg Wellness</h3>
            <p className="text-sm text-slate-600">From last month</p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-md bg-gradient-to-br from-orange-50 to-yellow-50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-orange-500 to-yellow-500 flex items-center justify-center">
                <CreditCard className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-orange-700">{feeOverdueCount}</span>
            </div>
            <h3 className="font-medium text-slate-700 mb-1">Fee Overdue</h3>
            <p className="text-sm text-slate-600">Students with pending fees</p>
          </CardContent>
        </Card>
      </div>

      {/* Critical Alerts */}
      <Card className="border-0 shadow-md bg-white/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-slate-800">
            <Bell className="w-5 h-5 text-red-500" />
            Critical Alerts Today
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {criticalAlerts.map((alert) => (
            <div key={alert.id} className="flex items-center justify-between p-4 border border-slate-200 rounded-lg">
              <div className="flex items-center gap-3">
                <AlertTriangle className={`w-5 h-5 ${alert.severity === 'critical' ? 'text-red-500' : alert.severity === 'high' ? 'text-orange-500' : 'text-yellow-500'}`} />
                <div>
                  <p className="font-medium text-slate-800">{alert.student}</p>
                  <p className="text-sm text-slate-600">{alert.type} - {alert.time}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Badge className={getSeverityColor(alert.severity)}>
                  {alert.severity}
                </Badge>
                <Button size="sm" variant="outline" onClick={() => setSelectedStudent(alert.id)}>
                  <Eye className="w-4 h-4 mr-1" />
                  View Details
                </Button>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Early Alerts & Actions */}
      <Card className="border-0 shadow-md bg-white/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-slate-800">
            <Calendar className="w-5 h-5 text-orange-500" />
            Early Alerts & Quick Actions
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {earlyAlerts.map((alert, index) => (
            <div key={index} className="p-4 bg-slate-50 rounded-lg">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center">
                    <span className="text-orange-600 font-bold text-sm">{alert.count}</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-800">{alert.type}</h4>
                    <p className="text-sm text-slate-600">
                      {alert.students.join(', ')}
                      {alert.students.length > 3 && ` +${alert.students.length - 3} more`}
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button 
                    size="sm" 
                    variant="outline"
                    onClick={() => sendAlert(alert.type)}
                    disabled={alertsSent.has(alert.type)}
                  >
                    {alertsSent.has(alert.type) ? (
                      <>
                        <UserCheck className="w-4 h-4 mr-1" />
                        SMS Sent
                      </>
                    ) : (
                      <>
                        <MessageSquare className="w-4 h-4 mr-1" />
                        Send SMS
                      </>
                    )}
                  </Button>
                  <Button size="sm" variant="ghost">
                    View All
                  </Button>
                </div>
              </div>
              {alertsSent.has(alert.type) && (
                <p className="text-sm text-green-600 bg-green-50 p-2 rounded">
                  📱 SMS alerts sent to guardian and student regarding {alert.type.toLowerCase()}
                </p>
              )}
            </div>
          ))}
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Risk Categories */}
        <Card className="border-0 shadow-md bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-slate-800">
              <BarChart3 className="w-5 h-5 text-purple-500" />
              Risk Categories
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={riskCategories}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  dataKey="value"
                  label={(entry) => `${entry.name}: ${entry.value}`}
                >
                  {riskCategories.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="grid grid-cols-2 gap-2 mt-4">
              {riskCategories.map((category, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: category.color }}></div>
                  <span className="text-xs text-slate-600">{category.name}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Monthly Trends */}
        <Card className="border-0 shadow-md bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-slate-800">
              <TrendingUp className="w-5 h-5 text-blue-500" />
              Monthly Trends
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <AreaChart data={monthlyTrends}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="month" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'white', 
                    border: '1px solid #e2e8f0',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                  }}
                />
                <Area type="monotone" dataKey="attendance" stackId="1" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.6} name="Attendance %" />
                <Area type="monotone" dataKey="performance" stackId="2" stroke="#10b981" fill="#10b981" fillOpacity={0.6} name="Performance" />
                <Line type="monotone" dataKey="stress" stroke="#ef4444" strokeWidth={2} name="Avg Stress" />
              </AreaChart>
            </ResponsiveContainer>
            <div className="mt-4 p-3 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-700">
                <strong>September:</strong> 78% avg attendance, 6.1 avg stress, 6.8 performance score
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Student Overview Table */}
      <Card className="border-0 shadow-md bg-white/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-slate-800">
            <Users className="w-5 h-5 text-indigo-500" />
            Student Overview - {user.class}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Attendance</TableHead>
                  <TableHead>Trend</TableHead>
                  <TableHead>Backlogs</TableHead>
                  <TableHead>Stress Score</TableHead>
                  <TableHead>Risk Status</TableHead>
                  <TableHead>Fee Status</TableHead>
                  <TableHead>Last Active</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {studentData.map((student) => (
                  <TableRow key={student.id} className="hover:bg-slate-50">
                    <TableCell className="font-medium">{student.name}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <span className={student.attendance >= 75 ? 'text-green-600' : 'text-red-600'}>
                          {student.attendance}%
                        </span>
                        <Progress value={student.attendance} className="w-16 h-2" />
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        {getTrendIcon(student.trend)}
                        <span className="text-sm capitalize">{student.trend}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant={student.backlogs > 0 ? "destructive" : "secondary"}>
                        {student.backlogs}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <span className={
                        student.stressScore >= 7 ? 'text-red-600' :
                        student.stressScore >= 5 ? 'text-orange-600' : 'text-green-600'
                      }>
                        {student.stressScore}/10
                      </span>
                    </TableCell>
                    <TableCell>
                      <Badge className={getRiskColor(student.riskStatus)}>
                        {student.riskStatus}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge variant={student.feeStatus === 'paid' ? 'secondary' : 'destructive'}>
                        {student.feeStatus}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-sm text-slate-600">
                      <div className="flex items-center gap-1">
                        {student.lastActive.includes('hour') || student.lastActive.includes('min') ? 
                          <Wifi className="w-3 h-3 text-green-500" /> : 
                          <WifiOff className="w-3 h-3 text-red-500" />
                        }
                        {student.lastActive}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-1">
                        <Button size="sm" variant="ghost" onClick={() => setSelectedStudent(student.id)}>
                          <Eye className="w-3 h-3" />
                        </Button>
                        <Button 
                          size="sm" 
                          variant="ghost"
                          onClick={() => sendAlert('Student Check-in', student.id)}
                          disabled={alertsSent.has(`Student Check-in_${student.id}`)}
                        >
                          {alertsSent.has(`Student Check-in_${student.id}`) ? 
                            <UserCheck className="w-3 h-3 text-green-600" /> :
                            <MessageSquare className="w-3 h-3" />
                          }
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {/* Institution Wellness Index */}
      <Card className="border-0 shadow-md bg-white/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-slate-800">
            <Award className="w-5 h-5 text-yellow-500" />
            Institution Wellness Index
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-teal-50 rounded-lg">
              <div className="text-3xl font-bold text-green-700 mb-2">7.2/10</div>
              <div className="text-green-600 font-medium mb-2">Good</div>
              <div className="text-sm text-slate-600">Institution Score</div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-slate-700">State Average</span>
                <span className="font-medium text-slate-800">6.8/10</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-700">National Average</span>
                <span className="font-medium text-slate-800">6.5/10</span>
              </div>
              <div className="p-3 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-700">
                  <strong>Performance:</strong> 0.4 points above state, 0.7 points above national average
                </p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span>Benchmark Comparison</span>
                <Badge className="bg-green-100 text-green-700">Above Average</Badge>
              </div>
              <Progress value={72} className="h-3" />
              <p className="text-xs text-slate-600">
                Institution scores 1.0 and 0.4 points above state and national averages respectively
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Predictive Analytics Summary */}
      <Card className="border-0 shadow-md bg-gradient-to-br from-purple-50 to-indigo-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-slate-800">
            <Target className="w-5 h-5 text-purple-500" />
            Predictive Analytics & Recommendations
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-white rounded-lg border border-purple-200">
              <h4 className="font-medium text-slate-800 mb-2">🎯 Early Intervention Opportunities</h4>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• 3 students at risk of crossing critical stress threshold</li>
                <li>• 5 students with declining attendance patterns</li>
                <li>• 2 students showing multiple assignment delays</li>
              </ul>
            </div>
            <div className="p-4 bg-white rounded-lg border border-purple-200">
              <h4 className="font-medium text-slate-800 mb-2">📊 Data-Driven Insights</h4>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• High correlation between low attendance and stress</li>
                <li>• Students with 3+ backlogs show 40% higher dropout risk</li>
                <li>• Early alerts reduce critical incidents by 60%</li>
              </ul>
            </div>
          </div>
          <div className="p-4 bg-white rounded-lg border border-purple-200">
            <h4 className="font-medium text-slate-800 mb-2">🔮 Predictive Recommendations</h4>
            <p className="text-sm text-slate-600 mb-3">
              By merging attendance, assessment scores, and wellness data, the system applies rule-based thresholds 
              to identify at-risk students and provides timely alerts for early intervention.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge className="bg-purple-100 text-purple-700">Automated Risk Detection</Badge>
              <Badge className="bg-purple-100 text-purple-700">Guardian Notifications</Badge>
              <Badge className="bg-purple-100 text-purple-700">Intervention Tracking</Badge>
              <Badge className="bg-purple-100 text-purple-700">Dropout Prevention</Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}