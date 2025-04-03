
import React from 'react';
import { Link } from 'react-router-dom';
import { Github, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t border-gray-200">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link to="/" className="flex items-center space-x-2">
              <span className="font-mono text-lg font-semibold">and<span className="text-nostr-purple">Other</span>Stuff</span>
            </Link>
            <p className="text-sm text-gray-600 mt-2">
              Building a sustainable Nostr ecosystem
            </p>
          </div>
          
          <div className="flex flex-col space-y-1 mb-4 md:mb-0">
            <Link to="/pillars" className="text-sm text-gray-600 hover:text-nostr-purple">Strategic Pillars</Link>
            <Link to="/team" className="text-sm text-gray-600 hover:text-nostr-purple">Team</Link>
            <Link to="/structure" className="text-sm text-gray-600 hover:text-nostr-purple">Organization</Link>
          </div>
          
          <div className="flex space-x-4">
            <a href="https://github.com/andotherstuff-org" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
              <Github className="h-5 w-5" />
            </a>
            <a href="nostr:npub1andotherstfforg" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
              <MessageCircle className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-4 border-t border-gray-200 text-center text-sm text-gray-600">
          <p>© {new Date().getFullYear()} andotherstuff.org</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
