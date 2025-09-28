import React, { useState } from 'react';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { 
  Building2,
  Users,
  Monitor,
  UserCheck
} from 'lucide-react';
import { SystemArchitecture } from './SystemArchitecture';
import { UseCaseDiagram } from './UseCaseDiagram';
import { MockupDiagram } from './MockupDiagram';
import { AuthSystem } from './AuthSystem';

export function DiagramViewer() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-slate-50">
      <div className="p-4 md:p-8">
        <Tabs defaultValue="architecture" className="w-full">
          <div className="sticky top-0 bg-white/90 backdrop-blur-sm border border-slate-200 rounded-lg p-4 mb-8 shadow-lg z-10">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 gap-2">
              <TabsTrigger value="architecture" className="flex items-center gap-2">
                <Building2 className="w-4 h-4" />
                <span className="hidden sm:inline">System Architecture</span>
                <span className="sm:hidden">Architecture</span>
              </TabsTrigger>
              <TabsTrigger value="usecase" className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span className="hidden sm:inline">Use Cases</span>
                <span className="sm:hidden">Use Cases</span>
              </TabsTrigger>
              <TabsTrigger value="mockups" className="flex items-center gap-2">
                <Monitor className="w-4 h-4" />
                <span className="hidden sm:inline">Interface Mockups</span>
                <span className="sm:hidden">Mockups</span>
              </TabsTrigger>
              <TabsTrigger value="auth" className="flex items-center gap-2">
                <UserCheck className="w-4 h-4" />
                <span className="hidden sm:inline">Authentication</span>
                <span className="sm:hidden">Auth</span>
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="architecture" className="mt-0">
            <SystemArchitecture />
          </TabsContent>

          <TabsContent value="usecase" className="mt-0">
            <UseCaseDiagram />
          </TabsContent>

          <TabsContent value="mockups" className="mt-0">
            <MockupDiagram />
          </TabsContent>

          <TabsContent value="auth" className="mt-0">
            <AuthSystem />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}