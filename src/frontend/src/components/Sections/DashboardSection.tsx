
import React from 'react';
import DashboardStatsCard from '../DashboardStatsCard';
import { Book, Calendar, Check, Clock } from 'lucide-react';
import ProgressChart from '../ProgressChart';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import CourseGrid from '../CourseGrid';

const DashboardSection: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <DashboardStatsCard
          title="Courses in Progress"
          value="3"
          subtitle="1 due this week"
          icon={<Book size={18} />}
        />
        <DashboardStatsCard
          title="Completed Courses"
          value="7"
          subtitle="+2 from last month"
          icon={<Check size={18} />}
        />
        <DashboardStatsCard
          title="Study Hours"
          value="24.5"
          subtitle="This month"
          icon={<Clock size={18} />}
        />
        <DashboardStatsCard
          title="Upcoming Sessions"
          value="3"
          subtitle="Next: Tomorrow, 10:00 AM"
          icon={<Calendar size={18} />}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ProgressChart 
          title="Weekly Progress" 
          subtitle="Study hours completed"
        />
        
        <Card>
          <CardHeader>
            <CardTitle>Learning Milestones</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              <li className="flex items-start gap-2">
                <div className="h-6 w-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check size={14} />
                </div>
                <div>
                  <p className="font-medium">Blockchain Basics - Module 1</p>
                  <p className="text-sm text-gray-500">Completed on Sep 15, 2023</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <div className="h-6 w-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check size={14} />
                </div>
                <div>
                  <p className="font-medium">Smart Contracts - Introduction</p>
                  <p className="text-sm text-gray-500">Completed on Oct 3, 2023</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <div className="h-6 w-6 rounded-full bg-lms-light text-lms-deep flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Clock size={14} />
                </div>
                <div>
                  <p className="font-medium">ICP Integration - Basics</p>
                  <p className="text-sm text-gray-500">In progress - Due Oct 24, 2023</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <div className="h-6 w-6 rounded-full bg-gray-100 text-gray-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Clock size={14} />
                </div>
                <div>
                  <p className="font-medium">AI & Blockchain - Introduction</p>
                  <p className="text-sm text-gray-500">Not started - Available Nov 5, 2023</p>
                </div>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <div>
        <h2 className="font-heading font-semibold text-lg mb-4">Continue Learning</h2>
        <CourseGrid />
      </div>
    </div>
  );
};

export default DashboardSection;