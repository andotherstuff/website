
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PillarCard from '@/components/PillarCard';
import { Layout, Users, Zap, MessageSquare, Brain } from 'lucide-react';

const Pillars = () => {
  const pillars = [
    {
      title: "User Experience (UX) & Onboarding",
      description: "Building intuitive, accessible interfaces that make Nostr's powerful capabilities available to everyone.",
      color: "#8B5CF6", // nostr-purple
      icon: Layout,
      initiatives: [
        "Unified experience across web and mobile applications",
        "Streamlined key management and account creation",
        "Shared design patterns and component libraries",
        "Collaborative user research to identify and eliminate friction points",
        "Cross-client compatibility and interoperability standards",
        "Community events and hackathons",
        "Education and outreach initiatives"
      ]
    },
    {
      title: "Communities",
      description: "Build tools for decentralized communities on Nostr, expanding on the groundwork laid by Ditto.",
      color: "#0EA5E9", // nostr-blue
      icon: Users,
      initiatives: [
        "Creating public and private communities (or \"groups\") on Nostr",
        "Evaluating and improving NIPs for group implementation, including 72, 29, and 28",
        "Ensuring compatibility between multiple Nostr community implementations",
        "Building bridges between different group protocols and clients",
        "Encouraging content creators and existing communities to move to Nostr",
        "Providing tools to build audience and facilitate community growth",
        "Developing integration support for existing networks",
        "Supporting relay infrastructure for community scalability"
      ]
    },
    {
      title: "Commerce",
      description: "Creating sustainable economic foundations for the Nostr ecosystem with payment infrastructure, wallets, and monetization tools.",
      color: "#F97316", // nostr-orange
      icon: Zap,
      initiatives: [
        "Cashu development and adoption",
        "Nostr Wallet standards and onboarding",
        "Lightning and Ecash micropayments and zaps",
        "Monetization of Nostr services",
        "Development of mint infrastructure",
        "Adding Cashu payments to Nos, Ditto, and White Noise",
        "Development of client libraries for easy Nostr wallet integration",
        "Decentralized marketplaces",
        "Community-run mints for shared funds",
        "Blossom integration for publishing mint data",
        "MCP server for automated payment execution"
      ]
    },
    {
      title: "Private Communications",
      description: "Building secure, private messaging that preserves freedom of speech and association, coupled with value transfer.",
      color: "#22C55E", // nostr-green
      icon: MessageSquare,
      initiatives: [
        "Creating robust libraries and implementations of MLS for the Nostr ecosystem (NIP-104)",
        "White Noise: Developing a world-class messenger app with exceptional security and UX on all major platforms",
        "Creating developer resources and technical assistance for MLS implementation",
        "Educational campaigns about security and privacy comparisons with centralized messengers",
        "Group protocol advancement: Supporting both MLS-based groups (NIP-104) and relay-based groups (NIP-29)",
        "Add private messaging to Nos & Ditto",
        "Development of White Noise for macOS, iOS, android, Linux and Windows",
        "Developer advocacy and technical assistance to implement MLS in other apps"
      ]
    },
    {
      title: "AI",
      description: "Making Nostr the best protocol for open source AI development and the main source for global real-time information.",
      color: "#D946EF", // nostr-pink
      icon: Brain,
      initiatives: [
        "Standardized protocols for AI interactions",
        "Discovery of AI systems",
        "Most open dataset for AI training",
        "Building Nostr to be the canonical source of real-time information",
        "Privacy-preserving AI integrations",
        "Local on-device LLMs",
        "AI on relays",
        "Local AI's for feed curation and spam detection",
        "Development of MCP's for the apps we're building",
        "Making AI more accessible for the Nostr ecosystem",
        "Monetizing AI infrastructure with payments"
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="bg-gradient-to-b from-gray-50 to-white py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-4">Strategic Pillars</h1>
              <p className="text-lg text-gray-600">
                Our strategic initiative focuses on five key pillars, each addressing critical aspects of Nostr's evolution.
                Each pillar is designed to contribute to the transition from an experimental protocol to a widely adopted ecosystem.
              </p>
            </div>
          </div>
        </section>
        
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {pillars.map((pillar, index) => (
                <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <PillarCard {...pillar} />
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Our Collaborative Approach</h2>
              <p className="text-lg text-gray-600 mb-8">
                This collaborative approach ensures that advancements made through this funding benefit the entire Nostr ecosystem,
                accelerating adoption and enhancing the protocol's capabilities for all users and developers.
              </p>
              
              <div className="bg-white rounded-lg shadow-sm p-8 text-left">
                <h3 className="text-xl font-semibold mb-4">Cross-Platform Integration</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-nostr-purple font-bold mr-2">•</span>
                    <span>Facilitating Ditto & Nos collaboration on unified web/mobile experiences</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-nostr-blue font-bold mr-2">•</span>
                    <span>Supporting White Noise compatible private group chats in multiple clients</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-nostr-orange font-bold mr-2">•</span>
                    <span>Enabling Cashu wallet and NutZap integration across applications</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-nostr-green font-bold mr-2">•</span>
                    <span>Ensuring compatibility between different implementations of communities and groups</span>
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

export default Pillars;
