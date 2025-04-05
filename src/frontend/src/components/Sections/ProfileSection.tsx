
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Progress } from '../ui/progress';
import { Award, BookOpen, Calendar, Medal, Clock, CreditCard, MapPin, MessageSquare, User } from 'lucide-react';

const ProfileSection: React.FC = () => {
  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex flex-col items-center md:items-start gap-4">
              <Avatar className="h-24 w-24 border-4 border-white shadow-lg">
                <AvatarImage src="https://github.com/shadcn.png" alt="John Doe" />
                <AvatarFallback className="text-2xl">JD</AvatarFallback>
              </Avatar>
              
              <div className="text-center md:text-left">
                <h2 className="text-2xl font-bold">John Doe</h2>
                <p className="text-muted-foreground flex items-center gap-1">
                  <MapPin size={14} />
                  <span>New York, USA</span>
                </p>
              </div>
            </div>
            
            <div className="flex-1 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-lms-light/10 p-4 rounded-lg text-center">
                  <p className="text-sm text-muted-foreground mb-1">Enrolled Courses</p>
                  <p className="text-2xl font-bold">10</p>
                </div>
                <div className="bg-lms-light/10 p-4 rounded-lg text-center">
                  <p className="text-sm text-muted-foreground mb-1">Completed</p>
                  <p className="text-2xl font-bold">7</p>
                </div>
                <div className="bg-lms-light/10 p-4 rounded-lg text-center">
                  <p className="text-sm text-muted-foreground mb-1">Certificates</p>
                  <p className="text-2xl font-bold">5</p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                <div className="bg-lms-light/30 text-lms-deep text-xs py-1 px-3 rounded-full">Blockchain</div>
                <div className="bg-lms-light/30 text-lms-deep text-xs py-1 px-3 rounded-full">Smart Contracts</div>
                <div className="bg-lms-light/30 text-lms-deep text-xs py-1 px-3 rounded-full">ICP</div>
                <div className="bg-lms-light/30 text-lms-deep text-xs py-1 px-3 rounded-full">AI</div>
                <div className="bg-lms-light/30 text-lms-deep text-xs py-1 px-3 rounded-full">DeFi</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Achievements & Certifications</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-lms rounded-md h-12 w-12 flex items-center justify-center flex-shrink-0">
                  <Award className="text-white" />
                </div>
                <div>
                  <h3 className="font-semibold">Blockchain Developer Certification</h3>
                  <p className="text-sm text-muted-foreground">Issued: June 2023</p>
                  <p className="text-sm mt-1">Completed advanced blockchain development course with distinction</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-gradient-lms rounded-md h-12 w-12 flex items-center justify-center flex-shrink-0">
                  <Medal className="text-white" />
                </div>
                <div>
                  <h3 className="font-semibold">ICP Protocol Specialist</h3>
                  <p className="text-sm text-muted-foreground">Issued: August 2023</p>
                  <p className="text-sm mt-1">Certified specialist in Internet Computer Protocol applications</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-gradient-lms rounded-md h-12 w-12 flex items-center justify-center flex-shrink-0">
                  <Award className="text-white" />
                </div>
                <div>
                  <h3 className="font-semibold">AI Integration Expert</h3>
                  <p className="text-sm text-muted-foreground">Issued: October 2023</p>
                  <p className="text-sm mt-1">Recognition for excellence in AI and blockchain integration projects</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Learning Stats</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm">Hours Studied</span>
                <span className="text-sm font-medium">124 hrs</span>
              </div>
              <Progress value={75} className="h-2" />
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm">Courses Completed</span>
                <span className="text-sm font-medium">7/10</span>
              </div>
              <Progress value={70} className="h-2" />
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm">Assignments</span>
                <span className="text-sm font-medium">35/42</span>
              </div>
              <Progress value={83} className="h-2" />
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm">Discussion Participation</span>
                <span className="text-sm font-medium">90%</span>
              </div>
              <Progress value={90} className="h-2" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Deadlines</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              <li className="flex items-center justify-between pb-3 border-b">
                <div className="flex items-start gap-3">
                  <Calendar size={20} className="text-lms-deep mt-0.5" />
                  <div>
                    <p className="font-medium">Smart Contract Assignment</p>
                    <p className="text-sm text-muted-foreground">Blockchain Fundamentals</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium text-sm">3 days left</p>
                  <p className="text-xs text-muted-foreground">Oct 24, 2023</p>
                </div>
              </li>
              <li className="flex items-center justify-between pb-3 border-b">
                <div className="flex items-start gap-3">
                  <Calendar size={20} className="text-lms-deep mt-0.5" />
                  <div>
                    <p className="font-medium">Module Quiz</p>
                    <p className="text-sm text-muted-foreground">ICP Protocol Basics</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium text-sm">5 days left</p>
                  <p className="text-xs text-muted-foreground">Oct 26, 2023</p>
                </div>
              </li>
              <li className="flex items-center justify-between">
                <div className="flex items-start gap-3">
                  <Calendar size={20} className="text-lms-deep mt-0.5" />
                  <div>
                    <p className="font-medium">Final Project Submission</p>
                    <p className="text-sm text-muted-foreground">AI Integration</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium text-sm">2 weeks left</p>
                  <p className="text-xs text-muted-foreground">Nov 7, 2023</p>
                </div>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Contact Info</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <User size={20} className="text-lms-deep" />
                <div>
                  <p className="text-sm text-muted-foreground">Full Name</p>
                  <p className="font-medium">John Doe</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <MessageSquare size={20} className="text-lms-deep" />
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium">john.doe@example.com</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <BookOpen size={20} className="text-lms-deep" />
                <div>
                  <p className="text-sm text-muted-foreground">Student ID</p>
                  <p className="font-medium">STU123456789</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <CreditCard size={20} className="text-lms-deep" />
                <div>
                  <p className="text-sm text-muted-foreground">Subscription</p>
                  <p className="font-medium">Premium Plan (Annual)</p>
                </div>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProfileSection;