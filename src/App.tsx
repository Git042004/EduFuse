import React, { useState } from 'react';
import { Button } from './components/ui/button';
import { Card } from './components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './components/ui/tabs';
import { 
  Home, 
  ClipboardCheck, 
  FileQuestion, 
  MessageCircle, 
  BookOpen, 
  Calendar,
  UserCheck,
  Users,
  Menu,
  X,
  LogOut,
  User,
  Shield,
  BarChart3,
  AlertTriangle,
  Settings
} from 'lucide-react';
// Removed old logo import - using new branding without logo
import { AuthSystem } from './components/AuthSystem';
import { StudentDashboard } from './components/StudentDashboard';
import { MentorDashboard } from './components/MentorDashboard';
import { AdminDashboard } from './components/AdminDashboard';
import { Survey } from './components/Survey';
import { SelfTest } from './components/SelfTest';
import { Chatbot } from './components/Chatbot';
import { Resources } from './components/Resources';
import { MoodTracking } from './components/MoodTracking';
import { CounselorBooking } from './components/CounselorBooking';
import { PeerSupport } from './components/PeerSupport';
import { Toaster } from './components/ui/sonner';
import eduSenseLogo from 'figma:asset/6809145798ff206f387a5716492ad1c004b99911.png';

interface User {
  id: string;
  username: string;
  firstName: string;
  lastName: string;
  role: 'student' | 'admin';
  class?: string;
  year?: string;
  studentId?: string;
  email: string;
}

export default function App() {
  const [user, setUser] = useState<User | null>(null);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleAuthSuccess = (userData: User) => {
    setUser(userData);
    setActiveTab('dashboard');
  };

  const handleLogout = () => {
    setUser(null);
    setActiveTab('dashboard');
    setMobileMenuOpen(false);
  };

  // Show auth system if user is not logged in
  if (!user) {
    return <AuthSystem onAuthSuccess={handleAuthSuccess} />;
  }

  // Navigation items based on user role
  const getNavigation = () => {
    const baseNavigation = [
      { id: 'dashboard', label: 'Dashboard', icon: Home },
    ];

    if (user.role === 'student') {
      return [
        ...baseNavigation,
        { id: 'survey', label: 'Daily Survey', icon: ClipboardCheck },
        { id: 'selftest', label: 'Self-Test', icon: FileQuestion },
        { id: 'chatbot', label: 'AI Assistant', icon: MessageCircle },
        { id: 'resources', label: 'Resources', icon: BookOpen },
        { id: 'mood', label: 'Mood Tracking', icon: Calendar },
        { id: 'counselor', label: 'Book Counselor', icon: UserCheck },
        { id: 'forum', label: 'Peer Support', icon: Users },
      ];
    } else {
      // Admin navigation
      return [
        ...baseNavigation,
        { id: 'students', label: 'Students', icon: Users },
        { id: 'analytics', label: 'Analytics', icon: BarChart3 },
        { id: 'alerts', label: 'Alerts & Risks', icon: AlertTriangle },
        { id: 'settings', label: 'Settings', icon: Settings },
      ];
    }
  };

  const navigation = getNavigation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50/80 via-sage-50/60 to-stone-50/80">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-50/90 via-white/95 to-stone-50/90 border-b border-emerald-200/50 sticky top-0 z-50 shadow-lg backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between py-6">
            {/* Branding */}
            <div className="flex items-center gap-4">
              <img 
                src={eduSenseLogo} 
                alt="EduSense Logo"
                className="w-12 h-12 md:w-16 md:h-16 drop-shadow-lg"
              />
              <div className="flex flex-col gap-1">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-800 leading-tight">
                  EduSense
                </h1>
                <p className="text-sm md:text-base text-emerald-700 font-medium tracking-wide">
                  A Student Wellness Program
                </p>
              </div>
            </div>
            
            {/* User info and controls */}
            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-3 bg-white/70 backdrop-blur-sm border border-emerald-200/50 rounded-lg px-4 py-2">
                <User className="w-4 h-4 text-emerald-600" />
                <div className="text-sm">
                  <p className="font-medium text-slate-800">{user.firstName} {user.lastName}</p>
                  <p className="text-emerald-700 capitalize">{user.role} {user.class && user.year ? `• ${user.class} - ${user.year}` : user.class && `• ${user.class}`}</p>
                </div>
              </div>
              
              <Button
                variant="ghost"
                size="sm"
                onClick={handleLogout}
                className="hidden md:flex items-center gap-2 bg-white/70 hover:bg-white/90 backdrop-blur-sm border border-emerald-200/50 text-emerald-700 hover:text-emerald-800"
              >
                <LogOut className="w-4 h-4" />
                Logout
              </Button>
              
              {/* Mobile menu button */}
              <Button
                variant="ghost"
                size="lg"
                className="md:hidden bg-white/70 hover:bg-white/90 backdrop-blur-sm border border-emerald-200/50 shadow-md text-emerald-700"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex">
        {/* Sidebar Navigation */}
        <div className={`
          fixed md:static inset-y-0 left-0 z-40 w-64 bg-white/95 backdrop-blur-sm border-r border-emerald-100 
          transform transition-transform duration-300 ease-in-out
          ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        `}>
          <div className="p-6 space-y-2 mt-16 md:mt-0">
            {/* Mobile user info */}
            <div className="md:hidden mb-4 p-4 bg-emerald-50/50 rounded-lg">
              <div className="flex items-center gap-3 mb-3">
                <User className="w-5 h-5 text-emerald-600" />
                <div>
                  <p className="font-medium text-slate-800">{user.firstName} {user.lastName}</p>
                  <p className="text-sm text-emerald-700 capitalize">{user.role} {user.class && user.year ? `• ${user.class} - ${user.year}` : user.class && `• ${user.class}`}</p>
                </div>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={handleLogout}
                className="w-full flex items-center gap-2 border-emerald-200 text-emerald-700 hover:bg-emerald-50"
              >
                <LogOut className="w-4 h-4" />
                Logout
              </Button>
            </div>

            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <Button
                  key={item.id}
                  variant={activeTab === item.id ? 'default' : 'ghost'}
                  className={`
                    w-full justify-start gap-3 h-11
                    ${activeTab === item.id 
                      ? 'bg-gradient-to-r from-emerald-600 to-emerald-700 text-white shadow-sm' 
                      : 'text-slate-700 hover:bg-emerald-50'
                    }
                  `}
                  onClick={() => {
                    setActiveTab(item.id);
                    setMobileMenuOpen(false);
                  }}
                >
                  <Icon className="w-4 h-4" />
                  {item.label}
                </Button>
              );
            })}
          </div>
        </div>

        {/* Mobile overlay */}
        {mobileMenuOpen && (
          <div 
            className="fixed inset-0 bg-black/20 z-30 md:hidden" 
            onClick={() => setMobileMenuOpen(false)}
          />
        )}

        {/* Main Content */}
        <div className="flex-1 min-h-screen">
          <div className="p-4 md:p-8">
            {activeTab === 'dashboard' && (
              user.role === 'student' ? 
                <StudentDashboard user={user} /> : 
                <AdminDashboard user={user} activeView="dashboard" />
            )}
            {activeTab === 'survey' && user.role === 'student' && <Survey />}
            {activeTab === 'selftest' && user.role === 'student' && <SelfTest />}
            {activeTab === 'chatbot' && user.role === 'student' && <Chatbot />}
            {activeTab === 'resources' && user.role === 'student' && <Resources />}
            {activeTab === 'mood' && user.role === 'student' && <MoodTracking />}
            {activeTab === 'counselor' && user.role === 'student' && <CounselorBooking />}
            {activeTab === 'forum' && user.role === 'student' && <PeerSupport />}
            {activeTab === 'students' && user.role === 'admin' && <AdminDashboard user={user} activeView="students" />}
            {activeTab === 'analytics' && user.role === 'admin' && <AdminDashboard user={user} activeView="analytics" />}
            {activeTab === 'alerts' && user.role === 'admin' && <AdminDashboard user={user} activeView="alerts" />}
            {activeTab === 'settings' && user.role === 'admin' && (
              <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold text-slate-800 mb-6">System Settings</h1>
                <div className="grid gap-6">
                  <div className="bg-white rounded-lg p-6 shadow-sm border border-emerald-200">
                    <h2 className="text-xl font-semibold mb-4">Risk Thresholds</h2>
                    <p className="text-slate-600">Configure risk assessment parameters and alert thresholds.</p>
                  </div>
                  <div className="bg-white rounded-lg p-6 shadow-sm border border-emerald-200">
                    <h2 className="text-xl font-semibold mb-4">Notification Settings</h2>
                    <p className="text-slate-600">Manage SMS and email notification preferences.</p>
                  </div>
                  <div className="bg-white rounded-lg p-6 shadow-sm border border-emerald-200">
                    <h2 className="text-xl font-semibold mb-4">User Management</h2>
                    <p className="text-slate-600">Add or remove users and manage permissions.</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
}