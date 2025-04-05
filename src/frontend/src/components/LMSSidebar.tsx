
import React, { useState } from 'react';
import { cn } from './lib/utils';
import { useIsMobile } from '../hooks/use-mobile';
import { Book, Calendar, ChevronLeft, ChevronRight, LayoutDashboard, MessageSquare, Settings, User } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Progress } from './ui/progress';
import { useNavigate } from 'react-router-dom';

interface SidebarLinkProps {
  icon: React.ReactNode;
  label: string;
  isActive?: boolean;
  onClick?: () => void;
}

const SidebarLink: React.FC<SidebarLinkProps> = ({ icon, label, isActive, onClick }) => (
  <button
    className={cn(
      "lms-sidebar-link w-full text-left flex items-center gap-2 px-4 py-2 rounded-md",
      isActive ? "bg-gray-200 text-black" : "text-gray-700 hover:bg-gray-100"
    )}
    onClick={onClick}
  >
    {icon}
    <span className="text-sm">{label}</span>
  </button>
);


interface SidebarProps {
  isCollapsed: boolean;
  setIsCollapsed: (value: boolean) => void;
  activeSection: string;
  setActiveSection: (value: string) => void;
}

export const LMSSidebar: React.FC<SidebarProps> = ({ 
  isCollapsed, 
  setIsCollapsed, 
  activeSection, 
  setActiveSection 
}) => {
  const isMobile = useIsMobile();
  
  const handleToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <aside
      className={cn(
        "h-screen fixed left-0 top-0 z-40 flex flex-col bg-white border-r border-gray-200 transition-all duration-300",
        isCollapsed ? "w-16" : "w-64",
        isMobile && isCollapsed && "-translate-x-full"
      )}
    >
      {/* Logo and toggle */}
      <div className="flex items-center justify-between h-16 px-4 border-b">
        <div className="flex items-center space-x-2">
          {!isCollapsed && (
            <span className="font-sans tracking-tighter font-bold text-xl bg-clip-text text-transparent pr-2" style={{ 
              backgroundImage: 'linear-gradient(to right, #8C0CE8, #140A9D)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent'
            }}>
              chain-ED
            </span>
          )}
          {isCollapsed && (
            <div style={{color: 'linear-gradient(to right, #8C0CE8, #140A9D)'}} className="h-8 w-8 rounded-md bg-gradient-to-r from-lms-medium to-lms-deep flex items-center justify-center text-purple-700 text-sm font-bold">
              c-ED
            </div>
          )}
        </div>
        <button
          onClick={handleToggle}
          className="h-8 w-8 rounded-md hover:bg-gray-100 flex items-center justify-center text-gray-500"
        >
          {isCollapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
        </button>
      </div>

      {/* User profile */}
      <div className={cn(
        "flex items-center p-4 border-b",
        isCollapsed ? "flex-col" : "space-x-3"
      )}>
        <Avatar className="h-10 w-10">
          <AvatarImage src="https://github.com/shadcn.png" alt="User" />
          <AvatarFallback>BM</AvatarFallback>
        </Avatar>
        
        {!isCollapsed && (
          <div className="flex flex-col">
            <span className="font-medium text-sm">Bryan Mwaura</span>
            <span className="text-xs text-gray-500">Student</span>
          </div>
        )}
      </div>

      {/* Progress overview */}
      {!isCollapsed && (
        <div className="p-4 border-b">
          <h3 className="text-xs font-medium text-gray-500 mb-2">COURSE PROGRESS</h3>
          <div className="space-y-3">
            <div className="space-y-1">
              <div className="flex justify-between text-xs">
                <span>Blockchain Basics</span>
                <span className="font-medium">75%</span>
              </div>
              <div className="lms-progress-bar border h-2 rounded-full">

              <div
      className="lms-progress-bar-fill h-full rounded-full"
      style={{ width: '75%', background: 'linear-gradient(to right, #8C0CE8, #140A9D)' }}
    ></div>              </div>
            </div>
            
            <div className="space-y-1">
              <div className="flex justify-between text-xs">
                <span>Smart Contracts</span>
                <span className="font-medium">45%</span>
              </div>

              <div className="lms-progress-bar border h-2 rounded-full">
              <div
      className="lms-progress-bar-fill h-full rounded-full"
      style={{ width: '45%', background: 'linear-gradient(to right, #8C0CE8, #140A9D)' }}
    ></div>              </div>
            </div>
            
            <div className="space-y-1">
              <div className="flex justify-between text-xs">
                <span>AI Integration</span>
                <span className="font-medium">20%</span>
              </div>
              <div className="lms-progress-bar border h-2 rounded-full">
              <div
      className="lms-progress-bar-fill h-full rounded-full"
      style={{ width: '20%', background: 'linear-gradient(to right, #8C0CE8, #140A9D)' }}
    ></div>              </div>
            </div>
          </div>
        </div>
      )}

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto py-4 px-3">
      <nav className="flex flex-col gap-1">
          <SidebarLink 
            icon={<LayoutDashboard size={20} />}
            label="Dashboard" 
            isActive={activeSection === 'dashboard'} 
            onClick={() => setActiveSection('dashboard')}
          />
          <SidebarLink 
            icon={<Book size={20} />} 
            label="Courses" 
            isActive={activeSection === 'courses'} 
            onClick={() => setActiveSection('courses')}
          />
          <SidebarLink 
            icon={<Calendar size={20} />} 
            label="Calendar" 
            isActive={activeSection === 'calendar'} 
            onClick={() => setActiveSection('calendar')}
          />
          <SidebarLink 
            icon={<MessageSquare size={20} />} 
            label="Messages" 
            isActive={activeSection === 'messages'} 
            onClick={() => setActiveSection('messages')}
          />
          <SidebarLink 
            icon={<User size={20} />} 
            label="Profile" 
            isActive={activeSection === 'profile'} 
            onClick={() => setActiveSection('profile')}
          />
        </nav>
      </div>

      {/* Footer */}
      <div className="border-t p-4">
        <SidebarLink 
          icon={<Settings size={20} />} 
          label="Settings" 
          isActive={activeSection === 'settings'} 
          onClick={() => setActiveSection('settings')}
        />
      </div>
    </aside>
  );
};

export default LMSSidebar;