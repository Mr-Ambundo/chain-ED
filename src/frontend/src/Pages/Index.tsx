
import React, { useState } from 'react';
import LMSLayout from '../components/LMSLayout';
import DashboardSection from '../components/Sections/DashboardSection';
import CoursesSection from '../components/Sections/CoursesSection';
import ProfileSection from '../components/Sections/ProfileSection';

const Index = () => {
  const [activeSection, setActiveSection] = useState('dashboard');

  const renderSection = () => {
    switch (activeSection) {
      case 'dashboard':
        return <DashboardSection />;
      case 'courses':
        return <CoursesSection />;
      case 'profile':
        return <ProfileSection />;
      // Additional sections can be added here
      default:
        return <DashboardSection />;
    }
  };

  return (
    <LMSLayout section={activeSection} setSection={setActiveSection}>
      {renderSection()}
    </LMSLayout>
  );
};

export default Index;