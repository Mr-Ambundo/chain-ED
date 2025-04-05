
import React, { useState } from 'react';
import { cn } from './lib/utils';
import LMSSidebar from './LMSSidebar';
import LMSHeader from './LMSHeader';
import { useIsMobile } from '../hooks/use-mobile';

interface LMSLayoutProps {
  children: React.ReactNode;
  section: string;
  setSection: (section: string) => void;
}

const LMSLayout: React.FC<LMSLayoutProps> = ({ 
  children, 
  section,
  setSection
}) => {
  const isMobile = useIsMobile();
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(isMobile);

  const getSectionTitle = () => {
    switch (section) {
      case 'dashboard':
        return 'Dashboard';
      case 'courses':
        return 'Courses';
      case 'calendar':
        return 'Calendar';
      case 'messages':
        return 'Messages';
      case 'profile':
        return 'Profile';
      case 'settings':
        return 'Settings';
      default:
        return 'Dashboard';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <LMSSidebar 
        isCollapsed={isSidebarCollapsed}
        setIsCollapsed={setIsSidebarCollapsed}
        activeSection={section}
        setActiveSection={setSection}
      />
      
      <div 
        className={cn(
          "transition-all duration-300 min-h-screen",
          isSidebarCollapsed ? "ml-16" : "ml-64",
          isMobile && isSidebarCollapsed && "ml-0"
        )}
      >
        <LMSHeader 
          isCollapsed={isSidebarCollapsed} 
          onToggleSidebar={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
          title={getSectionTitle()}
        />
        
        <main className="p-4 md:p-6 max-w-7xl mx-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default LMSLayout;