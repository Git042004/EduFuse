import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { toast } from 'sonner@2.0.3';
import { 
  Users, 
  AlertTriangle, 
  TrendingUp, 
  TrendingDown, 
  Calendar,
  MessageSquare,
  Phone,
  Mail,
  Search,
  Filter,
  Download,
  Bell,
  Activity,
  BookOpen,
  CreditCard,
  Brain,
  BarChart3,
  PieChart,
  Send,
  CheckCircle,
  Clock,
  UserCheck
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, PieChart as RechartsPieChart, Pie, Cell, AreaChart, Area } from 'recharts';

interface User {
  id: string;
  username: string;
  firstName: string;
  lastName: string;
  role: 'student' | 'admin';
  class?: string;
  studentId?: string;
  email: string;
}

interface AdminDashboardProps {
  user: User;
  activeView?: 'dashboard' | 'students' | 'analytics' | 'alerts';
}

// Mock data for demonstration
const keyMetrics = {
  totalStudents: 1247,
  criticalAlerts: 23,
  highRiskStudents: 89,
  avgWellnessScore: 7.2,
  pendingFees: 156,
  trends: {
    students: 12,
    alerts: -3,
    highRisk: 8,
    wellness: 0.3,
    fees: -12
  }
};

const atRiskStudents = [
  { id: 1, name: 'Alex Johnson', attendance: 45, backlogs: 3, stressScore: 8.2, gpa: 2.1, risk: 'critical', lastAssessment: '2 days ago', testTrend: 'declining', feeStatus: 'pending' },
  { id: 2, name: 'Sarah Chen', attendance: 62, backlogs: 2, stressScore: 7.8, gpa: 2.8, risk: 'high', lastAssessment: '1 day ago', testTrend: 'stable', feeStatus: 'paid' },
  { id: 3, name: 'Michael Brown', attendance: 58, backlogs: 4, stressScore: 9.1, gpa: 1.9, risk: 'critical', lastAssessment: '3 days ago', testTrend: 'declining', feeStatus: 'pending' },
  { id: 4, name: 'Emma Wilson', attendance: 71, backlogs: 1, stressScore: 6.9, gpa: 3.2, risk: 'moderate', lastAssessment: '1 day ago', testTrend: 'improving', feeStatus: 'paid' },
  { id: 5, name: 'David Lee', attendance: 55, backlogs: 2, stressScore: 8.5, gpa: 2.3, risk: 'high', lastAssessment: '2 days ago', testTrend: 'stable', feeStatus: 'pending' },
];

const riskCategories = [
  { name: 'Low Risk', value: 58, color: '#10b981' },
  { name: 'Moderate Risk', value: 23, color: '#f59e0b' },
  { name: 'High Risk', value: 15, color: '#f97316' },
  { name: 'Critical Risk', value: 4, color: '#ef4444' }
];

const monthlyTrends = [
  { month: 'Jan', attendance: 78, stress: 6.2, performance: 7.8 },
  { month: 'Feb', attendance: 82, stress: 5.9, performance: 8.1 },
  { month: 'Mar', attendance: 79, stress: 6.8, performance: 7.5 },
  { month: 'Apr', attendance: 85, stress: 5.5, performance: 8.3 },
  { month: 'May', attendance: 83, stress: 6.1, performance: 8.0 },
  { month: 'Jun', attendance: 87, stress: 5.3, performance: 8.5 }
];

const notifications = [
  { id: 1, type: 'Critical Alert', student: 'Alex Johnson', message: 'Attendance dropped below 50%', status: 'sent', timestamp: '10 min ago' },
  { id: 2, type: 'SMS Reminder', student: 'Sarah Chen', message: 'Counseling appointment reminder', status: 'delivered', timestamp: '2 hours ago' },
  { id: 3, type: 'Email Alert', student: 'Michael Brown', message: 'Multiple backlog subjects detected', status: 'pending', timestamp: '1 day ago' },
  { id: 4, type: 'Wellness Check', student: 'Emma Wilson', message: 'Stress level monitoring required', status: 'sent', timestamp: '2 days ago' }
];

export function AdminDashboard({ user, activeView = 'dashboard' }: AdminDashboardProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRiskFilter, setSelectedRiskFilter] = useState('all');

  // Toast notification handlers
  const handleSendSMS = (studentName?: string) => {
    toast.success(`SMS has been sent successfully${studentName ? ` to ${studentName}` : ''}!`, {
      description: studentName ? `Notification sent to ${studentName}` : 'Batch SMS notifications sent to selected students',
      duration: 3000,
    });
  };

  const handleSendEmail = (studentName?: string) => {
    toast.success(`Email has been sent successfully${studentName ? ` to ${studentName}` : ''}!`, {
      description: studentName ? `Email notification sent to ${studentName}` : 'Batch email notifications sent to selected students',
      duration: 3000,
    });
  };

  const handleAssignMentor = (studentName?: string) => {
    toast.success(`Mentor has been assigned successfully${studentName ? ` to ${studentName}` : ''}!`, {
      description: studentName ? `A mentor has been assigned to ${studentName}` : 'Mentors have been assigned to selected students',
      duration: 3000,
    });
  };

  const getRiskBadgeColor = (risk: string) => {
    switch (risk) {
      case 'critical': return 'bg-red-100 text-red-800 border-red-200';
      case 'high': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'moderate': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'low': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getTrendIcon = (value: number) => {
    return value > 0 ? (
      <TrendingUp className="w-4 h-4 text-green-600" />
    ) : value < 0 ? (
      <TrendingDown className="w-4 h-4 text-red-600" />
    ) : null;
  };

  // Content for dashboard/overview view
  const DashboardOverview = () => (
    <div className="space-y-6">
      {/* Critical Alerts Table */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-red-600" />
              Critical Alerts & At-Risk Students
            </CardTitle>
            <Button variant="outline" size="sm">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Student</TableHead>
                  <TableHead>Attendance</TableHead>
                  <TableHead>Backlogs</TableHead>
                  <TableHead>Stress Score</TableHead>
                  <TableHead>GPA</TableHead>
                  <TableHead>Risk Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {atRiskStudents.slice(0, 5).map((student) => (
                  <TableRow key={student.id}>
                    <TableCell>
                      <div>
                        <p className="font-medium">{student.name}</p>
                        <p className="text-sm text-slate-500">Last assessment: {student.lastAssessment}</p>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <span className={`font-medium ${student.attendance < 60 ? 'text-red-600' : student.attendance < 75 ? 'text-orange-600' : 'text-green-600'}`}>
                          {student.attendance}%
                        </span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant={student.backlogs > 2 ? 'destructive' : student.backlogs > 0 ? 'secondary' : 'default'}>
                        {student.backlogs}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <span className={`font-medium ${student.stressScore > 8 ? 'text-red-600' : student.stressScore > 6 ? 'text-orange-600' : 'text-green-600'}`}>
                        {student.stressScore}/10
                      </span>
                    </TableCell>
                    <TableCell>
                      <span className={`font-medium ${student.gpa < 2.5 ? 'text-red-600' : student.gpa < 3.0 ? 'text-orange-600' : 'text-green-600'}`}>
                        {student.gpa}
                      </span>
                    </TableCell>
                    <TableCell>
                      <Badge className={getRiskBadgeColor(student.risk)}>
                        {student.risk}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Button 
                          size="sm" 
                          variant="outline" 
                          className="h-8"
                          onClick={() => handleSendSMS(student.name)}
                        >
                          <Phone className="w-3 h-3 mr-1" />
                          SMS
                        </Button>
                        <Button 
                          size="sm" 
                          variant="outline" 
                          className="h-8"
                          onClick={() => handleSendEmail(student.name)}
                        >
                          <Mail className="w-3 h-3 mr-1" />
                          Email
                        </Button>
                        <Button 
                          size="sm" 
                          variant="outline" 
                          className="h-8"
                          onClick={() => handleAssignMentor(student.name)}
                        >
                          <UserCheck className="w-3 h-3 mr-1" />
                          Assign
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

      {/* Risk Categories and Trends */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <PieChart className="w-5 h-5 text-emerald-600" />
              Risk Categories
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <RechartsPieChart>
                  <Pie
                    data={riskCategories}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    dataKey="value"
                    label={({ name, value }) => `${name}: ${value}`}
                  >
                    {riskCategories.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </RechartsPieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-emerald-600" />
              Monthly Trends
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={monthlyTrends}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Line type="monotone" dataKey="attendance" stroke="#10b981" strokeWidth={2} name="Attendance" />
                  <Line type="monotone" dataKey="stress" stroke="#ef4444" strokeWidth={2} name="Stress" />
                  <Line type="monotone" dataKey="performance" stroke="#3b82f6" strokeWidth={2} name="Performance" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  // Content for students view
  const StudentsView = () => (
    <div className="space-y-6">
      {/* Student Search and Filters */}
      <Card>
        <CardHeader>
          <CardTitle>Student Overview</CardTitle>
          <div className="flex items-center gap-4">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
              <Input
                placeholder="Search students..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <select 
              value={selectedRiskFilter}
              onChange={(e) => setSelectedRiskFilter(e.target.value)}
              className="px-3 py-2 border border-slate-300 rounded-md text-sm"
            >
              <option value="all">All Risk Levels</option>
              <option value="critical">Critical</option>
              <option value="high">High</option>
              <option value="moderate">Moderate</option>
              <option value="low">Low</option>
            </select>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Student</TableHead>
                  <TableHead>Attendance Trend</TableHead>
                  <TableHead>Test Trend</TableHead>
                  <TableHead>Backlogs</TableHead>
                  <TableHead>Stress Score</TableHead>
                  <TableHead>Fee Status</TableHead>
                  <TableHead>Risk Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {atRiskStudents.map((student) => (
                  <TableRow key={student.id}>
                    <TableCell>
                      <div>
                        <p className="font-medium">{student.name}</p>
                        <p className="text-sm text-slate-500">GPA: {student.gpa}</p>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <div className="w-16 h-8 bg-slate-100 rounded flex items-center justify-center">
                          {student.attendance < 60 ? (
                            <TrendingDown className="w-4 h-4 text-red-500" />
                          ) : student.attendance > 80 ? (
                            <TrendingUp className="w-4 h-4 text-green-500" />
                          ) : (
                            <span className="text-xs text-slate-500">→</span>
                          )}
                        </div>
                        <span className="text-sm">{student.attendance}%</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <div className="w-16 h-8 bg-slate-100 rounded flex items-center justify-center">
                          {student.testTrend === 'declining' ? (
                            <TrendingDown className="w-4 h-4 text-red-500" />
                          ) : student.testTrend === 'improving' ? (
                            <TrendingUp className="w-4 h-4 text-green-500" />
                          ) : (
                            <span className="text-xs text-slate-500">→</span>
                          )}
                        </div>
                        <span className="text-sm capitalize">{student.testTrend}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant={student.backlogs > 2 ? 'destructive' : student.backlogs > 0 ? 'secondary' : 'default'}>
                        {student.backlogs} subject{student.backlogs !== 1 ? 's' : ''}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <div className={`w-3 h-3 rounded-full ${
                          student.stressScore > 8 ? 'bg-red-500' : 
                          student.stressScore > 6 ? 'bg-orange-500' : 'bg-green-500'
                        }`} />
                        <span className="text-sm">{student.stressScore}/10</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant={student.feeStatus === 'pending' ? 'secondary' : 'default'}>
                        {student.feeStatus}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge className={getRiskBadgeColor(student.risk)}>
                        {student.risk}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Button 
                          size="sm" 
                          variant="outline" 
                          className="h-8"
                          onClick={() => {
                            toast.success(`Contact initiated with ${student.name}!`, {
                              description: `Communication channel opened with ${student.name}`,
                              duration: 3000,
                            });
                          }}
                        >
                          <MessageSquare className="w-3 h-3 mr-1" />
                          Contact
                        </Button>
                        <Button 
                          size="sm" 
                          variant="outline" 
                          className="h-8"
                          onClick={() => handleAssignMentor(student.name)}
                        >
                          <UserCheck className="w-3 h-3 mr-1" />
                          Assign
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
    </div>
  );

  // Content for analytics view
  const AnalyticsView = () => (
    <div className="space-y-6">
      {/* Detailed Trends */}
      <Card>
        <CardHeader>
          <CardTitle>Wellness Trends Analysis</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={monthlyTrends}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Area type="monotone" dataKey="attendance" stackId="1" stroke="#10b981" fill="#10b981" fillOpacity={0.3} />
                <Area type="monotone" dataKey="performance" stackId="2" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.3} />
                <Area type="monotone" dataKey="stress" stackId="3" stroke="#ef4444" fill="#ef4444" fillOpacity={0.3} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  // Content for alerts view
  const AlertsView = () => (
    <div className="space-y-6">
      {/* Notification Center */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <Bell className="w-5 h-5 text-emerald-600" />
              Notification Center
            </CardTitle>
            <Button 
              className="bg-emerald-600 hover:bg-emerald-700"
              onClick={() => {
                toast.success('Batch alert sent successfully!', {
                  description: 'Batch notifications have been sent to all selected recipients',
                  duration: 3000,
                });
              }}
            >
              <Send className="w-4 h-4 mr-2" />
              Send Batch Alert
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {notifications.map((notification) => (
              <div key={notification.id} className="flex items-center justify-between p-4 border border-slate-200 rounded-lg">
                <div className="flex items-center gap-4">
                  <div className={`w-3 h-3 rounded-full ${
                    notification.status === 'sent' ? 'bg-green-500' :
                    notification.status === 'delivered' ? 'bg-blue-500' :
                    'bg-yellow-500'
                  }`} />
                  <div>
                    <p className="font-medium">{notification.type}</p>
                    <p className="text-sm text-slate-600">{notification.student} • {notification.message}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm text-slate-500">{notification.timestamp}</span>
                  <Badge variant="outline" className={
                    notification.status === 'sent' ? 'border-green-200 text-green-700' :
                    notification.status === 'delivered' ? 'border-blue-200 text-blue-700' :
                    'border-yellow-200 text-yellow-700'
                  }>
                    {notification.status}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-6 text-center">
            <Phone className="w-8 h-8 text-emerald-600 mx-auto mb-3" />
            <h3 className="font-medium mb-2">Send SMS Alerts</h3>
            <p className="text-sm text-slate-600 mb-4">Send immediate SMS notifications to students</p>
            <Button 
              size="sm" 
              className="w-full"
              onClick={() => handleSendSMS()}
            >
              Send SMS
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 text-center">
            <Mail className="w-8 h-8 text-emerald-600 mx-auto mb-3" />
            <h3 className="font-medium mb-2">Email Notifications</h3>
            <p className="text-sm text-slate-600 mb-4">Send detailed email reports to stakeholders</p>
            <Button 
              size="sm" 
              className="w-full"
              onClick={() => handleSendEmail()}
            >
              Send Email
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 text-center">
            <UserCheck className="w-8 h-8 text-emerald-600 mx-auto mb-3" />
            <h3 className="font-medium mb-2">Assign Mentors</h3>
            <p className="text-sm text-slate-600 mb-4">Assign dedicated mentors to high-risk students</p>
            <Button 
              size="sm" 
              className="w-full"
              onClick={() => handleAssignMentor()}
            >
              Assign Mentor
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">Admin Dashboard</h1>
          <p className="text-slate-600">Comprehensive student wellness monitoring and intervention system</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="flex items-center gap-2">
            <Download className="w-4 h-4" />
            Export Report
          </Button>
          <Button 
            className="bg-emerald-600 hover:bg-emerald-700 flex items-center gap-2"
            onClick={() => {
              toast.success('Alert sent successfully!', {
                description: 'Emergency alert has been sent to all stakeholders',
                duration: 3000,
              });
            }}
          >
            <Bell className="w-4 h-4" />
            Send Alert
          </Button>
        </div>
      </div>

      {/* Key Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        <Card className="border-emerald-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">Total Students</p>
                <p className="text-2xl font-bold text-slate-800">{keyMetrics.totalStudents}</p>
              </div>
              <div className="flex items-center gap-1 text-green-600">
                {getTrendIcon(keyMetrics.trends.students)}
                <span className="text-sm">+{keyMetrics.trends.students}</span>
              </div>
            </div>
            <Users className="w-8 h-8 text-emerald-600 mt-2" />
          </CardContent>
        </Card>

        <Card className="border-red-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">Critical Alerts</p>
                <p className="text-2xl font-bold text-red-600">{keyMetrics.criticalAlerts}</p>
              </div>
              <div className="flex items-center gap-1 text-green-600">
                {getTrendIcon(keyMetrics.trends.alerts)}
                <span className="text-sm">{keyMetrics.trends.alerts}</span>
              </div>
            </div>
            <AlertTriangle className="w-8 h-8 text-red-600 mt-2" />
          </CardContent>
        </Card>

        <Card className="border-orange-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">High-Risk Students</p>
                <p className="text-2xl font-bold text-orange-600">{keyMetrics.highRiskStudents}</p>
              </div>
              <div className="flex items-center gap-1 text-red-600">
                {getTrendIcon(keyMetrics.trends.highRisk)}
                <span className="text-sm">+{keyMetrics.trends.highRisk}</span>
              </div>
            </div>
            <Brain className="w-8 h-8 text-orange-600 mt-2" />
          </CardContent>
        </Card>

        <Card className="border-blue-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">Avg Wellness Score</p>
                <p className="text-2xl font-bold text-blue-600">{keyMetrics.avgWellnessScore}</p>
              </div>
              <div className="flex items-center gap-1 text-green-600">
                {getTrendIcon(keyMetrics.trends.wellness)}
                <span className="text-sm">+{keyMetrics.trends.wellness}</span>
              </div>
            </div>
            <Activity className="w-8 h-8 text-blue-600 mt-2" />
          </CardContent>
        </Card>

        <Card className="border-purple-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">Pending Fees</p>
                <p className="text-2xl font-bold text-purple-600">{keyMetrics.pendingFees}</p>
              </div>
              <div className="flex items-center gap-1 text-green-600">
                {getTrendIcon(keyMetrics.trends.fees)}
                <span className="text-sm">{keyMetrics.trends.fees}</span>
              </div>
            </div>
            <CreditCard className="w-8 h-8 text-purple-600 mt-2" />
          </CardContent>
        </Card>
      </div>

      {/* Render content based on activeView */}
      {activeView === 'dashboard' && <DashboardOverview />}
      {activeView === 'students' && <StudentsView />}
      {activeView === 'analytics' && <AnalyticsView />}
      {activeView === 'alerts' && <AlertsView />}
    </div>
  );
}