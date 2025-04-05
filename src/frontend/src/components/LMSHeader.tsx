import React, { useState } from 'react';
import { Bell, Menu, Search } from 'lucide-react';
import { Button } from './ui/button';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { useIsMobile } from '../hooks/use-mobile';
import { useAuth} from '../hooks/useAuth'; 


interface LMSHeaderProps {
  isCollapsed: boolean;
  onToggleSidebar: () => void;
  title: string;
}

export const LMSHeader: React.FC<LMSHeaderProps> = ({ 
  isCollapsed, 
  onToggleSidebar,
  title
}) => {
  const isMobile = useIsMobile();

  // State for handling the notification dropdown
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isAvatarMenuOpen, setIsAvatarMenuOpen] = useState(false);

  // Sample notifications
  const [notifications] = useState([
    { id: 1, message: 'New message from Admin', read: false },
    { id: 2, message: 'Your course "Blockchain Fundamentals" has been updated', read: true },
    { id: 3, message: 'You have a new comment on your assignment', read: false }
  ]);

  const toggleAvatarMenu = () => {
    setIsAvatarMenuOpen(!isAvatarMenuOpen);
  };

  // Function to handle hiding the notification dropdown
  const closeNotifications = () => {
    setIsNotificationOpen(false);
  };

  const toggleNotifications = () => {
    setIsNotificationOpen(!isNotificationOpen);
  };
   const {logout } = useAuth();

  return (
    <header className="h-16 border-b bg-white flex items-center justify-between px-4 md:px-6">
      <div className="flex items-center">
        {isMobile && (
          <Button
            variant="ghost"
            size="icon"
            className="mr-2"
            onClick={onToggleSidebar}
          >
            <Menu size={20} />
          </Button>
        )}
        <h1 className="font-heading text-xl font-semibold">{title}</h1>
      </div>
      
      <div className="md:flex items-center hidden">
        <div className="relative mr-4">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
          <input 
            type="search" 
            placeholder="Search..." 
            className="pl-8 pr-4 py-2 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-lms-medium focus:border-transparent w-64"
          />
        </div>
      </div>

      <div className="flex items-center space-x-4 relative">
        {/* Notification Icon with Similar Styles to Avatar */}
        <Button
          variant="ghost"
          size="icon"
          className="relative cursor-pointer rounded-full hover:bg-gray-100 p-2 transition-all duration-200"
          onClick={toggleNotifications}
        >
          <Bell size={20} />
          <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
        </Button>

        {/* Notification Dropdown */}
        {isNotificationOpen && (
          <div className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-lg p-2 border border-gray-200 z-10">
            <ul>
              {notifications.map((notification) => (
                <li
                  key={notification.id}
                  className={`px-4 py-2 text-sm ${notification.read ? 'text-gray-500' : 'font-semibold'}`}
                >
                  {notification.message}
                </li>
              ))}
            </ul>
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-red-500 mt-2 w-full" 
              onClick={closeNotifications}
            >
              Cancel Notifications
            </Button>
          </div>
        )}

        {/* Avatar & Profile Menu */}
        <div className="relative">
          <Avatar className="h-8 w-8 cursor-pointer" onClick={toggleAvatarMenu}>
            <AvatarImage src="https://github.com/shadcn.png" alt="User" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>

          {isAvatarMenuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg border border-gray-200 z-10">
              <ul className="text-sm">
                <li className="px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer" onClick={() => alert('Edit Profile')}>
                  Edit Profile
                </li>
                <li
          className="px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
          onClick={logout} // Call the logout function when clicked
          >
          Logout
        </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default LMSHeader;
