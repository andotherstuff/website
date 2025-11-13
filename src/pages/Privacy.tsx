import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Privacy() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <div className="mb-8">
        <Link to="/">
          <Button variant="ghost" className="mb-4">← Back to Home</Button>
        </Link>
      </div>
      
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        
        <p className="text-lg mb-6">Last updated: January 2025</p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Our Commitment</h2>
        <p>
          At Chorus.community, we're committed to creating a social platform that respects your privacy by design. 
          We minimize data collection, empower you to control your experience, and ensure you own your identity.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">How Chorus Works</h2>
        <p>
          Chorus is built on the Nostr protocol, a decentralized social networking protocol. This means:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Your posts are distributed across multiple relays (servers)</li>
          <li>There's no single entity that controls all your data</li>
          <li>You can take your identity with you to any Nostr-compatible service</li>
          <li>Your content is cryptographically signed, ensuring authenticity</li>
        </ul>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">What We Collect</h2>
        <p>We collect minimal information necessary to provide our services:</p>
        <ul className="list-disc pl-6 mb-4">
          <li><strong>Account Information:</strong> Display name, public Nostr identifier (npub)</li>
          <li><strong>Public Posts:</strong> Content you publish, along with timestamps and metadata</li>
          <li><strong>Analytics:</strong> Anonymized app usage data to improve our services</li>
          <li><strong>Error Reports:</strong> Technical information to fix bugs and issues</li>
        </ul>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">What We Don't Collect</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>Your private keys (we never have access to these)</li>
          <li>Personal identifying information beyond what you choose to share</li>
          <li>Browsing history or tracking cookies</li>
          <li>Location data</li>
        </ul>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">How We Use Your Information</h2>
        <p>We use the information we collect to:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Display your posts and profile on Chorus</li>
          <li>Connect you with other users in the Nostr network</li>
          <li>Improve our services and fix technical issues</li>
          <li>Ensure the security and integrity of our platform</li>
        </ul>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Your Control & Rights</h2>
        <p>You have complete control over your data:</p>
        <ul className="list-disc pl-6 mb-4">
          <li><strong>Edit:</strong> Update your profile information at any time</li>
          <li><strong>Delete:</strong> Remove individual posts or your entire account</li>
          <li><strong>Export:</strong> Take your identity and content to another Nostr service</li>
          <li><strong>Privacy:</strong> Control who sees your content through relay selection</li>
        </ul>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Data Storage & Security</h2>
        <p>
          Due to the decentralized nature of Nostr, your public posts may be stored on multiple relays. 
          While we can delete content from our servers, we cannot guarantee deletion from all relays in the network.
        </p>
        <p>
          We implement industry-standard security measures to protect the limited data we do store, 
          but the best security is not collecting data in the first place.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Third-Party Services</h2>
        <p>
          We may use third-party services for:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Hosting and infrastructure</li>
          <li>Analytics (anonymized)</li>
          <li>Error tracking and monitoring</li>
        </ul>
        <p>
          These services are carefully selected and must meet our privacy standards.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Age Restrictions</h2>
        <p>
          Chorus.community is not intended for users under 16 years of age. 
          We do not knowingly collect information from children under 16.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Changes to This Policy</h2>
        <p>
          We may update this privacy policy from time to time. 
          We'll notify you of any significant changes through our platform.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Our Philosophy</h2>
        <p className="italic">
          "Our goal is to collect as little information about you as we practically can, 
          and build sustainable services that respect your privacy and autonomy."
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
        <p>
          If you have any questions about this privacy policy or our practices, please contact us at:
          <br />
          <a href="mailto:privacy@chorus.community" className="text-purple-600 hover:text-purple-700">
            privacy@chorus.community
          </a>
        </p>
      </div>
    </div>
  );
}