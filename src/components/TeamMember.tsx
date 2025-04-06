
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface TeamMemberProps {
  name: string;
  role: string;
  pillar: string;
  color: string;
  image?: string;
  profileUrl?: string;
}

const TeamMember = ({ name, role, pillar, color, image, profileUrl }: TeamMemberProps) => {
  const initials = name.split(' ').map(n => n[0]).join('');
  
  const CardComponent = profileUrl ? 
    (props: React.PropsWithChildren) => <a href={profileUrl} target="_blank" rel="noopener noreferrer" className="block hover:no-underline">{props.children}</a> : 
    React.Fragment;
  
  return (
    <CardComponent>
      <Card className="overflow-hidden border-t-4 transition-all hover:shadow-md" style={{ borderTopColor: color }}>
        <CardHeader className="pb-0 pt-6 flex items-center justify-center">
          <Avatar className="h-24 w-24">
            {image && <AvatarImage src={image} alt={name} />}
            <AvatarFallback className="text-xl" style={{ backgroundColor: color }}>{initials}</AvatarFallback>
          </Avatar>
        </CardHeader>
        <CardContent className="text-center pt-4">
          <h3 className="font-semibold text-lg">{name}</h3>
          <p className="text-sm text-gray-500">{role}</p>
        </CardContent>
        <CardFooter className="bg-gray-50 py-3 text-center flex justify-center">
          <span className="text-sm font-medium" style={{ color }}>
            {pillar}
          </span>
        </CardFooter>
      </Card>
    </CardComponent>
  );
};

export default TeamMember;
