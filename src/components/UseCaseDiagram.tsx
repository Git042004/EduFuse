import React from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';

export function UseCaseDiagram() {
  return (
    <div className="max-w-7xl mx-auto p-6 space-y-8">
      <h1 className="text-3xl font-bold text-center text-slate-800 mb-8">
        StressFree.co Use Case Diagram
      </h1>

      {/* Actor Definitions */}
      <Card className="p-6 bg-gradient-to-br from-blue-50 to-green-50">
        <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">
          System Actors
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md border-2 border-blue-200 text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl">👨‍🎓</span>
            </div>
            <h3 className="text-xl font-bold text-blue-700 mb-2">Student</h3>
            <p className="text-sm text-blue-600">Primary user seeking wellness support and mental health resources</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md border-2 border-green-200 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl">👩‍⚕️</span>
            </div>
            <h3 className="text-xl font-bold text-green-700 mb-2">Counselor</h3>
            <p className="text-sm text-green-600">Mental health professional providing support and appointments</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md border-2 border-purple-200 text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl">👨‍💼</span>
            </div>
            <h3 className="text-xl font-bold text-purple-700 mb-2">Admin</h3>
            <p className="text-sm text-purple-600">System administrator managing platform and monitoring user wellness</p>
          </div>
        </div>
      </Card>

      {/* Main Use Case Diagram */}
      <Card className="p-8 bg-gradient-to-br from-slate-50 to-blue-50">
        <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">
          Use Case Relationships
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Student Use Cases */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-blue-700 text-center mb-6">
              Student Use Cases
            </h3>
            
            <div className="space-y-3">
              <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-blue-500">
                <h4 className="font-semibold text-blue-800 mb-2">Authentication</h4>
                <ul className="text-sm space-y-1">
                  <li>• Register Account</li>
                  <li>• Login to System</li>
                  <li>• Reset Password</li>
                  <li>• Logout</li>
                </ul>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-green-500">
                <h4 className="font-semibold text-green-800 mb-2">Wellness Tracking</h4>
                <ul className="text-sm space-y-1">
                  <li>• Complete Daily Mood Survey</li>
                  <li>• Take PHQ-9 Assessment</li>
                  <li>• View Mood Calendar</li>
                  <li>• Track Wellness Progress</li>
                  <li>• Set Wellness Goals</li>
                </ul>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-purple-500">
                <h4 className="font-semibold text-purple-800 mb-2">Support Resources</h4>
                <ul className="text-sm space-y-1">
                  <li>• Chat with AI Assistant</li>
                  <li>• Browse Wellness Resources</li>
                  <li>• Access Crisis Support</li>
                  <li>• Download Self-Help Materials</li>
                </ul>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-orange-500">
                <h4 className="font-semibold text-orange-800 mb-2">Social Features</h4>
                <ul className="text-sm space-y-1">
                  <li>• Join Peer Support Forum</li>
                  <li>• Create Forum Posts</li>
                  <li>• Comment on Posts</li>
                  <li>• Share Experiences</li>
                </ul>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-red-500">
                <h4 className="font-semibold text-red-800 mb-2">Professional Help</h4>
                <ul className="text-sm space-y-1">
                  <li>• Book Counselor Appointment</li>
                  <li>• View Appointment History</li>
                  <li>• Cancel/Reschedule</li>
                  <li>• Rate Counselor Session</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Counselor Use Cases */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-green-700 text-center mb-6">
              Counselor Use Cases
            </h3>
            
            <div className="space-y-3">
              <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-green-500">
                <h4 className="font-semibold text-green-800 mb-2">Appointment Management</h4>
                <ul className="text-sm space-y-1">
                  <li>• View Appointment Schedule</li>
                  <li>• Accept/Decline Requests</li>
                  <li>• Set Availability</li>
                  <li>• Manage Time Slots</li>
                  <li>• Send Appointment Reminders</li>
                </ul>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-blue-500">
                <h4 className="font-semibold text-blue-800 mb-2">Student Support</h4>
                <ul className="text-sm space-y-1">
                  <li>• View Student Wellness Data</li>
                  <li>• Access Assessment History</li>
                  <li>• Provide Session Notes</li>
                  <li>• Create Follow-up Plans</li>
                  <li>• Flag Crisis Situations</li>
                </ul>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-purple-500">
                <h4 className="font-semibold text-purple-800 mb-2">Professional Tools</h4>
                <ul className="text-sm space-y-1">
                  <li>• Update Profile Information</li>
                  <li>• Manage Specializations</li>
                  <li>• Access Treatment Resources</li>
                  <li>• Generate Reports</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Admin Use Cases */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-purple-700 text-center mb-6">
              Admin Use Cases
            </h3>
            
            <div className="space-y-3">
              <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-purple-500">
                <h4 className="font-semibold text-purple-800 mb-2">User Management</h4>
                <ul className="text-sm space-y-1">
                  <li>• Manage User Accounts</li>
                  <li>• Assign User Roles</li>
                  <li>• Monitor User Activity</li>
                  <li>• Handle Support Tickets</li>
                  <li>• Manage Account Suspensions</li>
                </ul>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-red-500">
                <h4 className="font-semibold text-red-800 mb-2">System Analytics</h4>
                <ul className="text-sm space-y-1">
                  <li>• View Platform Analytics</li>
                  <li>• Generate Wellness Reports</li>
                  <li>• Monitor System Performance</li>
                  <li>• Track User Engagement</li>
                  <li>• Analyze Trend Data</li>
                </ul>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-blue-500">
                <h4 className="font-semibold text-blue-800 mb-2">Content Management</h4>
                <ul className="text-sm space-y-1">
                  <li>• Manage Resource Library</li>
                  <li>• Update System Content</li>
                  <li>• Moderate Forum Posts</li>
                  <li>• Configure AI Responses</li>
                  <li>• Manage Crisis Protocols</li>
                </ul>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-green-500">
                <h4 className="font-semibold text-green-800 mb-2">System Configuration</h4>
                <ul className="text-sm space-y-1">
                  <li>• Configure System Settings</li>
                  <li>• Manage Security Policies</li>
                  <li>• Setup Backup Procedures</li>
                  <li>• Monitor Data Privacy</li>
                  <li>• Update System Notifications</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Use Case Relationships */}
      <Card className="p-8 bg-gradient-to-br from-green-50 to-blue-50">
        <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">
          Key Use Case Relationships
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-bold text-blue-700 mb-4">Include Relationships</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Badge className="bg-blue-100 text-blue-800">Include</Badge>
                <span className="text-sm">All user actions → Authentication</span>
              </div>
              <div className="flex items-center gap-3">
                <Badge className="bg-blue-100 text-blue-800">Include</Badge>
                <span className="text-sm">Complete Survey → Save to Database</span>
              </div>
              <div className="flex items-center gap-3">
                <Badge className="bg-blue-100 text-blue-800">Include</Badge>
                <span className="text-sm">Book Appointment → Send Notification</span>
              </div>
              <div className="flex items-center gap-3">
                <Badge className="bg-blue-100 text-blue-800">Include</Badge>
                <span className="text-sm">Generate Report → Query Analytics Data</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-bold text-green-700 mb-4">Extend Relationships</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Badge className="bg-green-100 text-green-800">Extend</Badge>
                <span className="text-sm">Chat with AI → Crisis Intervention</span>
              </div>
              <div className="flex items-center gap-3">
                <Badge className="bg-green-100 text-green-800">Extend</Badge>
                <span className="text-sm">Take Assessment → Generate Alerts</span>
              </div>
              <div className="flex items-center gap-3">
                <Badge className="bg-green-100 text-green-800">Extend</Badge>
                <span className="text-sm">View Dashboard → Show Recommendations</span>
              </div>
              <div className="flex items-center gap-3">
                <Badge className="bg-green-100 text-green-800">Extend</Badge>
                <span className="text-sm">Forum Post → Peer Recommendations</span>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Critical Use Case Flow */}
      <Card className="p-8 bg-gradient-to-br from-red-50 to-orange-50">
        <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">
          Critical Use Case: Crisis Intervention Flow
        </h2>
        
        <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
          <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-red-500 text-center">
            <h4 className="font-semibold text-red-800 mb-2">1. Crisis Detection</h4>
            <p className="text-sm">AI or Assessment identifies high-risk responses</p>
          </div>
          
          <div className="text-2xl text-red-500">→</div>
          
          <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-orange-500 text-center">
            <h4 className="font-semibold text-orange-800 mb-2">2. Immediate Response</h4>
            <p className="text-sm">Display crisis resources and emergency contacts</p>
          </div>
          
          <div className="text-2xl text-orange-500">→</div>
          
          <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-yellow-500 text-center">
            <h4 className="font-semibold text-yellow-800 mb-2">3. Alert Generation</h4>
            <p className="text-sm">Notify counselors and admin of crisis situation</p>
          </div>
          
          <div className="text-2xl text-yellow-500">→</div>
          
          <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-green-500 text-center">
            <h4 className="font-semibold text-green-800 mb-2">4. Follow-up Care</h4>
            <p className="text-sm">Schedule immediate counselor contact and support</p>
          </div>
        </div>
      </Card>
    </div>
  );
}