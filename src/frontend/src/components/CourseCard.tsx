
import React from 'react';
import { Clock, Star } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader } from './ui/card';
import { Button } from './ui/button';
import { Progress } from './ui/progress';

interface CourseCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string[];
  rating: number;
  duration: string;
  progress?: number;
  startDate?: string;
  endDate?: string;
  price?: number;
  onClick?: () => void;
}

const CourseCard: React.FC<CourseCardProps> = ({
  title,
  description,
  image,
  category,
  rating,
  duration,
  progress,
  startDate,
  endDate,
  price,
  onClick
}) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col font-sans tracking-tight">
      <div className="relative h-40 bg-gray-100 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
        />
        {progress !== undefined && (
          <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/60 to-transparent">
            <div className="flex justify-between text-white text-xs mb-1">
              <span>Progress</span>
              <span>{progress}%</span>
            </div>
            <div className="h-1.5 bg-white/30 rounded-full">
              <div 
                className="h-full bg-white rounded-full" 
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        )}
      </div>

      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div className="space-y-1">
            <h3 className="font-heading font-semibold line-clamp-1">{title}</h3>
            <div className="flex items-center gap-1 text-sm text-gray-500">
              <Clock size={14} />
              <span>{duration}</span>
            </div>
          </div>
          <div className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded-md">
            <Star size={14} className="fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium">{rating.toFixed(1)}</span>
          </div>
        </div>
      </CardHeader>

      <CardContent className="flex-grow">
        <p className="text-sm text-gray-600 line-clamp-2 mb-2">{description}</p>
        <div className="flex gap-2 flex-wrap">
          {category.map((cat, i) => (
            <span 
              key={i}
              className="bg-lms-light/30 text-lms-deep text-xs py-1 px-2 rounded-md"
            >
              {cat}
            </span>
          ))}
        </div>

        {(startDate && endDate) && (
          <div className="mt-3 text-xs text-gray-500">
            <span className="block">Start: {startDate}</span>
            <span className="block">End: {endDate}</span>
          </div>
        )}
        
        {price !== undefined && (
          <div className="mt-3">
            <span className="font-semibold">${price}</span>
          </div>
        )}
      </CardContent>

      <CardFooter>
        <Button 
          onClick={onClick}
          style={{ backgroundColor: '#8D0DE8', color: '#FFFFFF' }}
          className=" font-sans tracking-tighter hover:bg-[#7905c9] px-6 py-2 text-lg "
        >
          {progress !== undefined ? 'Continue Learning' : 'Start Course'}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;