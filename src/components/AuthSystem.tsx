import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { UserCircle, Users, GraduationCap, Eye, EyeOff, AlertCircle, Shield } from 'lucide-react';
import { Alert, AlertDescription } from './ui/alert';
import eduSenseLogo from 'figma:asset/6809145798ff206f387a5716492ad1c004b99911.png';
import signUpBg from 'figma:asset/4f6466497850b76a0bf2a024f3c2e52d59249eb1.png';

interface AuthSystemProps {
  onAuthSuccess: (user: any) => void;
}

export function AuthSystem({ onAuthSuccess }: AuthSystemProps) {
  const [isLogin, setIsLogin] = useState(true);
  const [userType, setUserType] = useState<'student' | 'admin'>('student');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    class: '',
    year: '',
    studentId: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setError(''); // Clear error when user types
  };

  const handleAuth = async () => {
    setLoading(true);
    setError('');

    try {
      // Validate form
      if (!formData.username || !formData.password) {
        throw new Error('Username and password are required');
      }

      if (!isLogin) {
        if (!formData.firstName || !formData.lastName) {
          throw new Error('First name and last name are required');
        }
        if (formData.password !== formData.confirmPassword) {
          throw new Error('Passwords do not match');
        }
        if (userType === 'admin' && (!formData.class || !formData.year)) {
          throw new Error('Class and year selection is required for mentors');
        }
        if (userType === 'student' && !formData.studentId) {
          throw new Error('Student ID is required');
        }
      }

      // For demo purposes, we'll create a mock authentication
      // In a real app, this would call the backend API
      
      if (isLogin) {
        // Mock login - simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Create mock user object
        const user = {
          id: Math.random().toString(36).substring(7),
          username: formData.username,
          firstName: formData.firstName || formData.username.split('@')[0],
          lastName: formData.lastName || 'User',
          role: userType,
          class: formData.class,
          year: formData.year,
          studentId: formData.studentId,
          email: `${formData.username}@university.edu`
        };
        
        onAuthSuccess(user);
      } else {
        // Mock registration - simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        const user = {
          id: Math.random().toString(36).substring(7),
          username: formData.username,
          firstName: formData.firstName,
          lastName: formData.lastName,
          role: userType,
          class: formData.class,
          year: formData.year,
          studentId: formData.studentId,
          email: `${formData.username}@university.edu`
        };
        
        onAuthSuccess(user);
      }
    } catch (err: any) {
      setError(err.message || 'Authentication failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const classOptions = ['Section A', 'Section B', 'Section C'];
  const yearOptions = ['First Year', 'Second Year', 'Third Year', 'Fourth Year'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50/80 via-sage-50/60 to-stone-50/80">
      <div className="min-h-screen flex">
        {/* Left Side - Image */}
        <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
          <div className="w-full h-screen flex items-center justify-center bg-emerald-50 p-8">
            <div className="relative w-full max-w-md h-auto rounded-2xl overflow-hidden shadow-2xl bg-white">
              <img 
                src={signUpBg} 
                alt="Student Wellness Background"
                className="w-full h-auto object-contain"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/10 to-black/20" />
            </div>
          </div>
          
          {/* Logo overlay on image */}
          <div className="absolute top-8 left-8 z-10">
            <div className="flex items-center gap-3">
              <img 
                src={eduSenseLogo} 
                alt="EduSense Logo"
                className="w-10 h-10 drop-shadow-lg"
              />
              <div>
                <h1 className="text-2xl font-bold text-black drop-shadow-lg">
                  EduSense
                </h1>
                <p className="text-sm text-black/90 drop-shadow-md">
                  Turning risk to resilience
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="w-full lg:w-1/2 flex flex-col">
          {/* Mobile Logo (visible on small screens) */}
          <div className="lg:hidden p-6 bg-white border-b border-emerald-100">
            <div className="flex items-center gap-3">
              <img 
                src={eduSenseLogo} 
                alt="EduSense Logo"
                className="w-8 h-8"
              />
              <div>
                <h1 className="text-xl font-bold text-slate-800">
                  EduSense
                </h1>
                <p className="text-sm text-emerald-700">
                  Turning risk to resilience
                </p>
              </div>
            </div>
          </div>

          {/* Form Content */}
          <div className="flex-1 flex items-center justify-start p-6 lg:p-12 lg:pl-6">
            <div className="w-full max-w-md">
              {/* EduSense Branding Above Form */}
              <div className="text-center mb-8 lg:mb-6">
                <div className="flex items-center justify-center lg:justify-start gap-3 mb-3">
                  <img 
                    src={eduSenseLogo} 
                    alt="EduSense Logo"
                    className="w-8 h-8"
                  />
                  <div className="lg:text-left">
                    <h1 className="text-3xl lg:text-4xl font-bold text-slate-800 leading-tight">
                      EduSense
                    </h1>
                    <p className="text-base lg:text-lg text-emerald-700 font-medium">
                      Turning risk to resilience
                    </p>
                  </div>
                </div>
              </div>
              
              <Card className="border border-emerald-200/50 shadow-lg bg-white/95 backdrop-blur-sm">
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl text-slate-800">
                  {isLogin ? 'Welcome Back' : 'Join EduSense'}
                </CardTitle>
                <p className="text-slate-600">
                  {isLogin ? 'Sign in to your account' : 'Create your account to get started'}
                </p>
              </CardHeader>
          
              <CardContent className="space-y-6">
                {/* User Type Selection */}
                <div className="space-y-3">
                  <Label className="text-slate-700">I am a:</Label>
                  <Tabs value={userType} onValueChange={(value: any) => setUserType(value)} className="w-full">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="student" className="flex items-center gap-2">
                        <GraduationCap className="w-4 h-4" />
                        Student
                      </TabsTrigger>
                      <TabsTrigger value="admin" className="flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        Mentor
                      </TabsTrigger>
                    </TabsList>
                  </Tabs>
                </div>

                {/* Form Fields */}
                <div className="space-y-4">
                  {!isLogin && (
                    <div className="grid grid-cols-2 gap-3">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input
                          id="firstName"
                          value={formData.firstName}
                          onChange={(e) => handleInputChange('firstName', e.target.value)}
                          placeholder="John"
                          disabled={loading}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input
                          id="lastName"
                          value={formData.lastName}
                          onChange={(e) => handleInputChange('lastName', e.target.value)}
                          placeholder="Doe"
                          disabled={loading}
                        />
                      </div>
                    </div>
                  )}

                  <div className="space-y-2">
                    <Label htmlFor="username">Username</Label>
                    <div className="relative">
                      <UserCircle className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                      <Input
                        id="username"
                        value={formData.username}
                        onChange={(e) => handleInputChange('username', e.target.value)}
                        placeholder="Enter your username"
                        className="pl-10"
                        disabled={loading}
                      />
                    </div>
                  </div>

                  {!isLogin && userType === 'student' && (
                    <div className="space-y-2">
                      <Label htmlFor="studentId">Student ID</Label>
                      <Input
                        id="studentId"
                        value={formData.studentId}
                        onChange={(e) => handleInputChange('studentId', e.target.value)}
                        placeholder="2024001234"
                        disabled={loading}
                      />
                    </div>
                  )}

                  {(!isLogin && userType === 'admin') && (
                    <>
                      <div className="space-y-2">
                        <Label htmlFor="class">Class</Label>
                        <Select value={formData.class} onValueChange={(value) => handleInputChange('class', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your class" />
                          </SelectTrigger>
                          <SelectContent>
                            {classOptions.map((option) => (
                              <SelectItem key={option} value={option}>
                                {option}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="year">Year</Label>
                        <Select value={formData.year} onValueChange={(value) => handleInputChange('year', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your year" />
                          </SelectTrigger>
                          <SelectContent>
                            {yearOptions.map((option) => (
                              <SelectItem key={option} value={option}>
                                {option}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </>
                  )}

                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <div className="relative">
                      <Input
                        id="password"
                        type={showPassword ? 'text' : 'password'}
                        value={formData.password}
                        onChange={(e) => handleInputChange('password', e.target.value)}
                        placeholder="Enter your password"
                        disabled={loading}
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                        onClick={() => setShowPassword(!showPassword)}
                        disabled={loading}
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4 text-slate-400" />
                        ) : (
                          <Eye className="h-4 w-4 text-slate-400" />
                        )}
                      </Button>
                    </div>
                  </div>

                  {!isLogin && (
                    <div className="space-y-2">
                      <Label htmlFor="confirmPassword">Confirm Password</Label>
                      <Input
                        id="confirmPassword"
                        type="password"
                        value={formData.confirmPassword}
                        onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                        placeholder="Confirm your password"
                        disabled={loading}
                      />
                    </div>
                  )}
                </div>

                {/* Error Alert */}
                {error && (
                  <Alert className="border-red-200 bg-red-50">
                    <AlertCircle className="h-4 w-4 text-red-600" />
                    <AlertDescription className="text-red-700">
                      {error}
                    </AlertDescription>
                  </Alert>
                )}

                {/* Submit Button */}
                <Button
                  onClick={handleAuth}
                  className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 text-white hover:from-emerald-700 hover:to-emerald-800 h-11"
                  disabled={loading}
                >
                  {loading ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      {isLogin ? 'Signing In...' : 'Creating Account...'}
                    </div>
                  ) : (
                    isLogin ? 'Sign In' : 'Create Account'
                  )}
                </Button>

                {/* Toggle Auth Mode */}
                <div className="text-center">
                  <Button
                    variant="link"
                    onClick={() => {
                      setIsLogin(!isLogin);
                      setError('');
                      setFormData({
                        username: '',
                        password: '',
                        confirmPassword: '',
                        firstName: '',
                        lastName: '',
                        class: '',
                        year: '',
                        studentId: ''
                      });
                    }}
                    className="text-slate-600 hover:text-slate-800"
                    disabled={loading}
                  >
                    {isLogin 
                      ? "Don't have an account? Sign Up" 
                      : "Already have an account? Sign In"
                    }
                  </Button>
                </div>
              </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}