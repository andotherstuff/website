
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Building, Heart, Calendar, ArrowRight } from 'lucide-react';

const Structure = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="bg-gradient-to-b from-gray-50 to-white py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-4">Organizational Structure</h1>
              <p className="text-lg text-gray-600">
                "and Other Stuff" is designed as a lean organization with the purpose of bringing the proposed
                pillars together to work on a common vision for the development of Nostr infrastructure and products.
              </p>
            </div>
          </div>
        </section>
        
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <Card className="mb-8">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <Building className="h-5 w-5 text-nostr-purple" />
                    <CardTitle>Implementation Pathway</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">
                    We are establishing "and Other Stuff" as a new 501(c)(3) (or equivalent) nonprofit organization 
                    dedicated to nurturing the Nostr ecosystem. Currently, we are fiscally sponsored via 
                    <a href="https://opencollective.com/europe" target="_blank" rel="noopener noreferrer" className="text-nostr-purple font-medium hover:underline"> Open Collective Europe</a>.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="mb-8">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <Heart className="h-5 w-5 text-nostr-blue" />
                    <CardTitle>Funding and Transparency</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">
                    andOtherStuff is funded with a generous grant of $10,000,000 USD from the StartSmall foundation to support the development of the five strategic pillars.
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">Accountability Measures</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start">
                        <ArrowRight className="h-4 w-4 text-nostr-blue mt-1 mr-2 flex-shrink-0" />
                        <span>Tiered governance structure with pillar leads forming the board that oversees major decisions</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-4 w-4 text-nostr-blue mt-1 mr-2 flex-shrink-0" />
                        <span>Transparent reporting of fund allocation and project progress</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-4 w-4 text-nostr-blue mt-1 mr-2 flex-shrink-0" />
                        <span>Regular community updates on achievements and challenges</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-4 w-4 text-nostr-blue mt-1 mr-2 flex-shrink-0" />
                        <span>Peer accountability among pillar leads</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-5 w-5 text-nostr-green" />
                    <CardTitle>Cadence and Metrics</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">
                    We're committed to regular checkpoints and measurable goals to ensure effective progress.
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">Regular Meetings</h3>
                    <p className="text-gray-600">
                      Weekly meetings with the leads group where all progress is discussed and metrics/goals shared.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg mt-4">
                    <h3 className="font-semibold mb-2">Community Onboarding Metrics</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start">
                        <ArrowRight className="h-4 w-4 text-nostr-green mt-1 mr-2 flex-shrink-0" />
                        <span>Track new community engagements</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-4 w-4 text-nostr-green mt-1 mr-2 flex-shrink-0" />
                        <span>Measure community participation and retention</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-4 w-4 text-nostr-green mt-1 mr-2 flex-shrink-0" />
                        <span>Monitor cross-community collaboration</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-4 w-4 text-nostr-green mt-1 mr-2 flex-shrink-0" />
                        <span>Evaluate community growth and sustainability</span>
                      </li>
                    </ul>
                  </div>
                  <p className="text-gray-600 mt-4">
                    Our focus is on ensuring communities become personally invested in Nostr,
                    with clear metrics to track our progress and impact.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Structure;
