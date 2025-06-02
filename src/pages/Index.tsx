
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Zap, MessageSquare, Layout, Brain } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Strategic Pillars</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our initiative focuses on five key pillars, each addressing critical aspects of Nostr's evolution.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-t-4 border-nostr-purple hover:shadow-md transition-all">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <Layout className="h-5 w-5 text-nostr-purple" />
                    <CardTitle className="text-lg">User Experience & Onboarding</CardTitle>
                  </div>
                  <CardDescription>Making Nostr accessible to everyday users</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    Building intuitive, accessible interfaces that make Nostr's powerful capabilities available to everyone.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-t-4 border-nostr-blue hover:shadow-md transition-all">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <Users className="h-5 w-5 text-nostr-blue" />
                    <CardTitle className="text-lg">Communities</CardTitle>
                  </div>
                  <CardDescription>Building tools for public and private groups</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    Creating tools for decentralized public and private Nostr communities that work across the network.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-t-4 border-nostr-orange hover:shadow-md transition-all">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <Zap className="h-5 w-5 text-nostr-orange" />
                    <CardTitle className="text-lg">Commerce</CardTitle>
                  </div>
                  <CardDescription>Creating sustainable economic foundations</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    Building payment infrastructure, wallets, marketplace capabilities, and monetization tools.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-t-4 border-nostr-green hover:shadow-md transition-all">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <MessageSquare className="h-5 w-5 text-nostr-green" />
                    <CardTitle className="text-lg">Private Communications</CardTitle>
                  </div>
                  <CardDescription>Developing secure, private messaging</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    Building secure, private messaging that preserves freedom of speech and association with built-in payments.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-t-4 border-nostr-pink hover:shadow-md transition-all">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <Brain className="h-5 w-5 text-nostr-pink" />
                    <CardTitle className="text-lg">AI</CardTitle>
                  </div>
                  <CardDescription>Making Nostr the best for AI development</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    Making Nostr the best social protocol for open source AI development and integration.
                  </p>
                </CardContent>
              </Card>
              
              <div className="flex items-center justify-center">
                <Button asChild className="bg-gray-100 hover:bg-gray-200 text-gray-800">
                  <Link to="/pillars">
                    Learn more about our strategic pillars
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-4">Our Approach</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                "and Other Stuff" is designed as a lean organization with the purpose of bringing the proposed pillars together 
                to work on a common vision for the development of Nostr infrastructure and products.
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <div className="bg-white rounded-lg shadow-sm p-8">
                <h3 className="text-xl font-semibold mb-4">Cross-Platform Collaboration</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-nostr-purple font-bold mr-2">•</span>
                    <span>Open Standards Development through collaborative workshops and technical discussions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-nostr-blue font-bold mr-2">•</span>
                    <span>Shared Resources like design systems, research findings, and technical libraries</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-nostr-orange font-bold mr-2">•</span>
                    <span>Cross-Client Integration to ensure compatibility between different implementations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-nostr-green font-bold mr-2">•</span>
                    <span>Community Development through regular open meetings, workshops, and hackathons</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-nostr-pink font-bold mr-2">•</span>
                    <span>Technical Infrastructure support for the entire ecosystem</span>
                  </li>
                </ul>
                
                <div className="mt-8 text-center">
                  <Button asChild>
                    <Link to="/structure">
                      Learn about our organizational structure
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-gradient-to-br from-nostr-purple/10 to-nostr-blue/10">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-gray-900">Introducing Chorus</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The future of decentralized communities is here. Join, create, and participate in 
                censorship-resistant groups powered by the Nostr protocol.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div className="order-2 lg:order-1">
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold text-gray-900">
                    Decentralized Groups, Reimagined
                  </h3>
                  <div className="space-y-4 text-gray-600">
                    <p>
                      Chorus brings the power of decentralized communities to Nostr, enabling 
                      true freedom of association without central control or censorship.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-nostr-purple font-bold mr-2">•</span>
                        <span>Create and join groups with complete autonomy</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-nostr-blue font-bold mr-2">•</span>
                        <span>Censorship-resistant communication</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-nostr-orange font-bold mr-2">•</span>
                        <span>Built on open Nostr protocol standards (NIP-72)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-nostr-green font-bold mr-2">•</span>
                        <span>Progressive Web App for seamless mobile experience</span>
                      </li>
                    </ul>
                  </div>
                  <div className="pt-4">
                    <Button 
                      asChild 
                      size="lg" 
                      className="bg-gradient-to-r from-nostr-purple to-nostr-blue hover:from-nostr-purple/90 hover:to-nostr-blue/90 text-white"
                    >
                      <a 
                        href="https://chorus.community" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center"
                      >
                        Explore Chorus
                        <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="order-1 lg:order-2">
                <div className="relative">
                  <div className="aspect-video rounded-lg overflow-hidden shadow-2xl">
                    <iframe
                      src="https://www.youtube.com/embed/B8fc1XJSB68"
                      title="Chorus Launch Video"
                      className="w-full h-full"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
