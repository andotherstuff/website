
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';

interface PillarCardProps {
  title: string;
  description: string;
  color: string;
  icon: LucideIcon;
  initiatives: string[];
}

const PillarCard = ({ title, description, color, icon: Icon, initiatives }: PillarCardProps) => {
  return (
    <Card className="h-full overflow-hidden border-t-4 transition-all hover:shadow-md" style={{ borderTopColor: color }}>
      <CardHeader className="pb-2">
        <div className="flex items-center space-x-2">
          <Icon className="h-6 w-6" style={{ color }} />
          <CardTitle>{title}</CardTitle>
        </div>
        <CardDescription className="mt-2">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <h4 className="text-sm font-semibold mb-2">Key initiatives:</h4>
        <ul className="space-y-1 text-sm text-gray-600 list-disc pl-5">
          {initiatives.map((initiative, index) => (
            <li key={index}>{initiative}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default PillarCard;
