// ABOUTME: Card component for displaying individual projects in the projects grid
// ABOUTME: Shows project name, pillar badge, description, icon, and CTA button
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { LucideIcon, ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface ProjectCardProps {
  name: string;
  description: string;
  pillarName: string;
  pillarColor: string;
  icon: LucideIcon;
  url: string;
  imageUrl?: string;
}

const ProjectCard = ({ name, description, pillarName, pillarColor, icon: Icon, url, imageUrl }: ProjectCardProps) => {
  return (
    <Card className="h-full overflow-hidden border-t-4 transition-all hover:shadow-lg flex flex-col" style={{ borderTopColor: pillarColor }}>
      <CardHeader className="pb-3">
        <Badge
          className="w-fit mb-2 text-xs"
          style={{ backgroundColor: `${pillarColor}20`, color: pillarColor, borderColor: pillarColor }}
          variant="outline"
        >
          {pillarName}
        </Badge>
        <div className="flex items-center space-x-2">
          <Icon className="h-5 w-5" style={{ color: pillarColor }} />
          <CardTitle className="text-xl">{name}</CardTitle>
        </div>
        <CardDescription className="mt-2 text-sm leading-relaxed">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col justify-end">
        <Button
          asChild
          className="w-full mt-2"
          style={{ backgroundColor: pillarColor }}
        >
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center"
          >
            Visit {name}
            <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
