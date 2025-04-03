
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-24">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 max-w-3xl mx-auto leading-tight">
          Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-nostr-purple to-nostr-blue">Nostr's</span> Future Together
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8">
          Supporting the transition from an experimental protocol to a widely adopted, sustainable ecosystem through collaborative growth and funding.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-nostr-purple hover:bg-nostr-purple/90">
            <Link to="/pillars">
              Explore Our Pillars <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link to="/structure">
              Learn About Our Structure
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
