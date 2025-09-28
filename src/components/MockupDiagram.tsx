import React from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { 
  Home, 
  ClipboardCheck, 
  FileQuestion, 
  MessageCircle, 
  BookOpen, 
  Calendar,
  UserCheck,
  Users,
  Settings,
  Bell,
  User,
  Heart,
  Brain,
  Zap,
  Clock
} from 'lucide-react';

export function MockupDiagram() {
  return (
    <div className="max-w-7xl mx-auto p-6 space-y-8">
      <h1 className="text-3xl font-bold text-center text-slate-800 mb-8">
        StressFree.co Interface Mockups
      </h1>

      {/* Student Dashboard Mockup */}
      <Card className="p-8 bg-gradient-to-br from-blue-50 to-green-50">
        <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">
          Student Dashboard Interface
        </h2>
        
        <div className="bg-white rounded-lg shadow-lg border border-slate-200 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-500 to-green-500 text-white p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <Heart className="w-4 h-4" />
                </div>
                <h3 className="text-xl font-bold">StressFree.co</h3>
              </div>
              <div className="flex items-center gap-3">
                <Bell className="w-5 h-5" />
                <User className="w-5 h-5" />
              </div>
            </div>
          </div>
          
          <div className="flex">
            {/* Sidebar */}
            <div className="w-64 bg-slate-50 border-r p-4">
              <div className="space-y-2">
                {[
                  { icon: Home, label: 'Dashboard', active: true },
                  { icon: ClipboardCheck, label: 'Daily Survey' },
                  { icon: FileQuestion, label: 'Self-Test' },
                  { icon: MessageCircle, label: 'AI Assistant' },
                  { icon: BookOpen, label: 'Resources' },
                  { icon: Calendar, label: 'Mood Tracking' },
                  { icon: UserCheck, label: 'Book Counselor' },
                  { icon: Users, label: 'Peer Support' }
                ].map((item, index) => (
                  <div key={index} className={`flex items-center gap-3 p-2 rounded ${item.active ? 'bg-blue-100 text-blue-700' : 'text-slate-600'}`}>
                    <item.icon className="w-4 h-4" />
                    <span className="text-sm">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Main Content */}
            <div className="flex-1 p-6">
              {/* Welcome Section */}
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-slate-800 mb-2">Hi Rida, welcome back! 👋</h2>
                <p className="text-slate-600">Here's your wellness overview for today</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Stress Score Gauge */}
                <Card className="p-4">
                  <h3 className="font-semibold text-slate-800 mb-3">Current Stress Level</h3>
                  <div className="flex items-center justify-center">
                    <div className="relative w-24 h-24">
                      <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="40" stroke="#e5e7eb" strokeWidth="8" fill="none" />
                        <circle cx="50" cy="50" r="40" stroke="#ef4444" strokeWidth="8" fill="none" 
                          strokeDasharray="251.2" strokeDashoffset="125.6" className="transition-all duration-300" />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-xl font-bold text-red-500">6/10</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-center text-sm text-slate-600 mt-2">Moderate stress detected</p>
                </Card>
                
                {/* Quick Actions */}
                <Card className="p-4">
                  <h3 className="font-semibold text-slate-800 mb-3">Quick Actions</h3>
                  <div className="space-y-2">
                    <Button className="w-full justify-start" variant="outline" size="sm">
                      <ClipboardCheck className="w-4 h-4 mr-2" />
                      Take Daily Survey
                    </Button>
                    <Button className="w-full justify-start" variant="outline" size="sm">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Chat with AI
                    </Button>
                    <Button className="w-full justify-start" variant="outline" size="sm">
                      <UserCheck className="w-4 h-4 mr-2" />
                      Book Counselor
                    </Button>
                  </div>
                </Card>
                
                {/* Recent Activity */}
                <Card className="p-4">
                  <h3 className="font-semibold text-slate-800 mb-3">Recent Activity</h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-slate-600">Survey completed today</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-sm text-slate-600">Mood tracked: Calm</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span className="text-sm text-slate-600">Resource viewed</span>
                    </div>
                  </div>
                </Card>
                
                {/* Mental Health Categories Chart */}
                <Card className="p-4 md:col-span-2 lg:col-span-3">
                  <h3 className="font-semibold text-slate-800 mb-4">Mental Health Categories</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                      { label: 'Anxiety', value: 65, color: 'bg-red-500' },
                      { label: 'Bipolar Disorder', value: 30, color: 'bg-orange-500' },
                      { label: 'Overthinking', value: 80, color: 'bg-yellow-500' },
                      { label: 'Procrastination', value: 45, color: 'bg-blue-500' }
                    ].map((item, index) => (
                      <div key={index} className="text-center">
                        <div className="mb-2">
                          <div className="w-full bg-slate-200 rounded-full h-3">
                            <div 
                              className={`h-3 rounded-full ${item.color}`}
                              style={{ width: `${item.value}%` }}
                            ></div>
                          </div>
                        </div>
                        <h4 className="font-medium text-slate-800 text-sm">{item.label}</h4>
                        <p className="text-xs text-slate-600">{item.value}%</p>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Mobile Survey Interface */}
      <Card className="p-8 bg-gradient-to-br from-green-50 to-blue-50">
        <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">
          Mobile Daily Survey Interface
        </h2>
        
        <div className="flex justify-center">
          <div className="w-80 bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">
            {/* Mobile Header */}
            <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white p-4">
              <div className="text-center">
                <h3 className="text-lg font-bold">Daily Mood Survey</h3>
                <p className="text-sm opacity-90">How are you feeling today?</p>
              </div>
            </div>
            
            {/* Survey Content */}
            <div className="p-6 space-y-6">
              {/* Mood Selection */}
              <div>
                <h4 className="font-semibold text-slate-800 mb-3">Select your mood:</h4>
                <div className="grid grid-cols-5 gap-3">
                  {['😢', '😔', '😐', '😊', '😄'].map((emoji, index) => (
                    <div key={index} className={`w-12 h-12 rounded-full border-2 flex items-center justify-center text-2xl cursor-pointer hover:border-blue-500 ${index === 3 ? 'border-blue-500 bg-blue-50' : 'border-slate-200'}`}>
                      {emoji}
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Stress Level Slider */}
              <div>
                <h4 className="font-semibold text-slate-800 mb-3">Stress Level (1-10):</h4>
                <div className="space-y-2">
                  <div className="w-full bg-slate-200 rounded-full h-3">
                    <div className="bg-gradient-to-r from-green-500 to-red-500 h-3 rounded-full" style={{ width: '60%' }}></div>
                  </div>
                  <div className="flex justify-between text-sm text-slate-600">
                    <span>Low</span>
                    <span className="font-semibold">6</span>
                    <span>High</span>
                  </div>
                </div>
              </div>
              
              {/* Focus Level Slider */}
              <div>
                <h4 className="font-semibold text-slate-800 mb-3">Focus Level (1-10):</h4>
                <div className="space-y-2">
                  <div className="w-full bg-slate-200 rounded-full h-3">
                    <div className="bg-gradient-to-r from-red-500 to-green-500 h-3 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                  <div className="flex justify-between text-sm text-slate-600">
                    <span>Distracted</span>
                    <span className="font-semibold">7.5</span>
                    <span>Focused</span>
                  </div>
                </div>
              </div>
              
              {/* Submit Button */}
              <Button className="w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600">
                Submit Survey
              </Button>
            </div>
          </div>
        </div>
      </Card>

      {/* AI Chatbot Interface */}
      <Card className="p-8 bg-gradient-to-br from-purple-50 to-blue-50">
        <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">
          AI Assistant Chat Interface
        </h2>
        
        <div className="bg-white rounded-lg shadow-lg border border-slate-200 h-96 flex flex-col">
          {/* Chat Header */}
          <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white p-4 rounded-t-lg">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <Brain className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-semibold">AI Wellness Assistant</h3>
                <p className="text-xs opacity-90">Always here to help</p>
              </div>
            </div>
          </div>
          
          {/* Chat Messages */}
          <div className="flex-1 p-4 space-y-4 overflow-y-auto">
            <div className="flex gap-3">
              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                <Brain className="w-4 h-4 text-purple-600" />
              </div>
              <div className="bg-purple-50 rounded-lg p-3 max-w-xs">
                <p className="text-sm">Hi! I notice you've been feeling stressed lately. Would you like to try some breathing exercises?</p>
              </div>
            </div>
            
            <div className="flex gap-3 justify-end">
              <div className="bg-blue-500 text-white rounded-lg p-3 max-w-xs">
                <p className="text-sm">Yes, that would be helpful</p>
              </div>
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <User className="w-4 h-4 text-blue-600" />
              </div>
            </div>
            
            <div className="flex gap-3">
              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                <Brain className="w-4 h-4 text-purple-600" />
              </div>
              <div className="bg-purple-50 rounded-lg p-3 max-w-xs">
                <p className="text-sm">Great! Let's start with a simple 4-7-8 breathing technique.</p>
              </div>
            </div>
          </div>
          
          {/* Quick Reply Buttons */}
          <div className="p-4 border-t bg-slate-50">
            <div className="flex flex-wrap gap-2 mb-3">
              <Button variant="outline" size="sm">
                <Zap className="w-3 h-3 mr-1" />
                Breathing Exercise
              </Button>
              <Button variant="outline" size="sm">
                <UserCheck className="w-3 h-3 mr-1" />
                Contact Counselor
              </Button>
              <Button variant="outline" size="sm">
                <Heart className="w-3 h-3 mr-1" />
                Self-Care Tips
              </Button>
            </div>
            
            {/* Message Input */}
            <div className="flex gap-2">
              <input 
                type="text" 
                placeholder="Type your message..." 
                className="flex-1 p-2 border border-slate-300 rounded-lg text-sm"
              />
              <Button size="sm">Send</Button>
            </div>
          </div>
        </div>
      </Card>

      {/* Admin Dashboard Mockup */}
      <Card className="p-8 bg-gradient-to-br from-orange-50 to-red-50">
        <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">
          Admin Dashboard Interface
        </h2>
        
        <div className="bg-white rounded-lg shadow-lg border border-slate-200">
          {/* Admin Header */}
          <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Settings className="w-6 h-6" />
                <h3 className="text-xl font-bold">Admin Dashboard</h3>
              </div>
              <div className="flex items-center gap-4">
                <Badge className="bg-white/20 text-white">Live</Badge>
                <Bell className="w-5 h-5" />
              </div>
            </div>
          </div>
          
          {/* Admin Content */}
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {/* Stats Cards */}
              {[
                { label: 'Total Students', value: '1,247', change: '+12%', color: 'text-blue-600' },
                { label: 'Active Today', value: '324', change: '+5%', color: 'text-green-600' },
                { label: 'Crisis Alerts', value: '3', change: '-25%', color: 'text-red-600' },
                { label: 'Avg. Wellness Score', value: '7.2', change: '+0.3', color: 'text-purple-600' }
              ].map((stat, index) => (
                <Card key={index} className="p-4">
                  <h4 className="text-sm text-slate-600 mb-1">{stat.label}</h4>
                  <div className="flex items-center justify-between">
                    <span className={`text-2xl font-bold ${stat.color}`}>{stat.value}</span>
                    <Badge variant="outline" className="text-xs">
                      {stat.change}
                    </Badge>
                  </div>
                </Card>
              ))}
            </div>
            
            {/* Recent Alerts */}
            <Card className="p-4">
              <h3 className="font-semibold text-slate-800 mb-4">Recent System Alerts</h3>
              <div className="space-y-3">
                {[
                  { type: 'Crisis', message: 'High-risk assessment detected for Student #1024', time: '5 min ago', severity: 'high' },
                  { type: 'System', message: 'Database backup completed successfully', time: '1 hour ago', severity: 'low' },
                  { type: 'Warning', message: 'Unusual pattern in mood data detected', time: '2 hours ago', severity: 'medium' }
                ].map((alert, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 rounded-lg border border-slate-200">
                    <div className={`w-3 h-3 rounded-full ${
                      alert.severity === 'high' ? 'bg-red-500' : 
                      alert.severity === 'medium' ? 'bg-yellow-500' : 'bg-green-500'
                    }`}></div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" size="sm">{alert.type}</Badge>
                        <span className="text-sm text-slate-600">{alert.time}</span>
                      </div>
                      <p className="text-sm text-slate-800 mt-1">{alert.message}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </Card>

      {/* Responsive Design Showcase */}
      <Card className="p-8 bg-gradient-to-br from-teal-50 to-cyan-50">
        <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">
          Responsive Design Showcase
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Desktop */}
          <div className="text-center">
            <h3 className="font-semibold text-teal-700 mb-3">Desktop (1200px+)</h3>
            <div className="bg-white rounded-lg shadow-md p-4 border">
              <div className="h-32 bg-gradient-to-r from-teal-100 to-cyan-100 rounded mb-2 flex items-center justify-center">
                <span className="text-xs text-teal-700">Full Dashboard Layout</span>
              </div>
              <div className="space-y-1">
                <div className="h-2 bg-slate-200 rounded"></div>
                <div className="h-2 bg-slate-200 rounded w-3/4"></div>
                <div className="h-2 bg-slate-200 rounded w-1/2"></div>
              </div>
            </div>
          </div>
          
          {/* Tablet */}
          <div className="text-center">
            <h3 className="font-semibold text-blue-700 mb-3">Tablet (768px-1199px)</h3>
            <div className="bg-white rounded-lg shadow-md p-3 border">
              <div className="h-28 bg-gradient-to-r from-blue-100 to-teal-100 rounded mb-2 flex items-center justify-center">
                <span className="text-xs text-blue-700">Adapted Layout</span>
              </div>
              <div className="space-y-1">
                <div className="h-2 bg-slate-200 rounded"></div>
                <div className="h-2 bg-slate-200 rounded w-2/3"></div>
              </div>
            </div>
          </div>
          
          {/* Mobile */}
          <div className="text-center">
            <h3 className="font-semibold text-purple-700 mb-3">Mobile (320px-767px)</h3>
            <div className="bg-white rounded-lg shadow-md p-2 border max-w-32 mx-auto">
              <div className="h-24 bg-gradient-to-r from-purple-100 to-blue-100 rounded mb-2 flex items-center justify-center">
                <span className="text-xs text-purple-700">Mobile UI</span>
              </div>
              <div className="space-y-1">
                <div className="h-1 bg-slate-200 rounded"></div>
                <div className="h-1 bg-slate-200 rounded w-3/4"></div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}