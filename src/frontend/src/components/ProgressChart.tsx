
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Mon', progress: 10 },
  { name: 'Tue', progress: 25 },
  { name: 'Wed', progress: 30 },
  { name: 'Thu', progress: 45 },
  { name: 'Fri', progress: 60 },
  { name: 'Sat', progress: 75 },
  { name: 'Sun', progress: 85 },
];

interface ProgressChartProps {
  title: string;
  subtitle?: string;
}

const ProgressChart: React.FC<ProgressChartProps> = ({ title, subtitle }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {subtitle && <p className="text-sm text-muted-foreground">{subtitle}</p>}
      </CardHeader>
      <CardContent>
        <div className="h-[200px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis 
                dataKey="name" 
                tick={{ fontSize: 12 }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                tick={{ fontSize: 12 }}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip />
              <Line 
                type="monotone" 
                dataKey="progress" 
                stroke="#8D0DE8" 
                strokeWidth={2} 
                dot={{ fill: '#8D0DE8', r: 4 }}
                activeDot={{ r: 6, fill: '#8D0DE8' }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProgressChart;