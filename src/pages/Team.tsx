
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TeamMember from '@/components/TeamMember';

const Team = () => {
  const team = [
    {
      name: "Rabble",
      role: "Lead",
      pillar: "UX & Onboarding",
      color: "#8B5CF6", // nostr-purple
    },
    {
      name: "Alex",
      role: "Lead",
      pillar: "Communities",
      color: "#0EA5E9", // nostr-blue
    },
    {
      name: "JeffG",
      role: "Lead",
      pillar: "Private Communication",
      color: "#22C55E", // nostr-green
    },
    {
      name: "Calle",
      role: "Lead",
      pillar: "Commerce",
      color: "#F97316", // nostr-orange
    },
    {
      name: "",
      role: "Lead",
      pillar: "AI",
      color: "#D946EF", // nostr-pink
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="bg-gradient-to-b from-gray-50 to-white py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-4">Core Team</h1>
              <p className="text-lg text-gray-600">
                Our initiative brings together key contributors from the Nostr ecosystem,
                each leading a strategic pillar to drive the protocol's evolution.
              </p>
            </div>
          </div>
        </section>
        
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {team.map((member, index) => (
                <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <TeamMember {...member} />
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center">Our Commitment</h2>
              <div className="bg-white rounded-lg shadow-sm p-8">
                <p className="text-gray-600 mb-4">
                  Our team is committed to a collaborative approach that benefits the entire Nostr ecosystem. We believe in:
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-nostr-purple font-bold mr-2">•</span>
                    <span>Transparency in decision-making and fund allocation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-nostr-blue font-bold mr-2">•</span>
                    <span>Regular open meetings and progress updates</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-nostr-orange font-bold mr-2">•</span>
                    <span>Sharing research, design patterns, and technical documentation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-nostr-green font-bold mr-2">•</span>
                    <span>Building tools and resources that benefit all Nostr developers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-nostr-pink font-bold mr-2">•</span>
                    <span>Fostering an inclusive, collaborative development community</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Team;
