
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const FeatureSection = () => {
  const features = [
    {
      icon: "map",
      title: "Personalized Itineraries",
      description: "GlobeGenie creates custom travel plans based on your preferences, interests, and budget."
    },
    {
      icon: "hotel",
      title: "Booking Assistance",
      description: "Book hotels, flights, and event tickets seamlessly through our AI travel assistant."
    },
    {
      icon: "users",
      title: "Group Collaboration",
      description: "Plan trips together with friends and family in real-time with shared itineraries."
    },
    {
      icon: "headphones",
      title: "Travel Support",
      description: "Get 24/7 assistance during your journey with real-time updates and recommendations."
    },
    {
      icon: "list-checks",
      title: "Custom or Pre-defined",
      description: "Choose from popular itineraries or create your own by selecting preferred destinations."
    },
    {
      icon: "sparkles",
      title: "AI-Powered",
      description: "Advanced AI that learns your preferences to make your travel experience better over time."
    }
  ];

  return (
    <section id="features" className="py-24 relative">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-medium text-center text-genie-cream mb-3">Discover the Magic</h2>
        <p className="text-lg text-center text-genie-cream/80 mb-16 max-w-2xl mx-auto">
          Experience travel like never before with GlobeGenie's innovative features designed to make every trip unforgettable.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-genie-dark border border-genie-purple/20 hover:border-genie-purple/50 transition-colors duration-300">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-genie-purple to-genie-blue flex items-center justify-center mb-4">
                  <FeatureIcon name={feature.icon} />
                </div>
                <CardTitle className="text-genie-cream">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-genie-cream/80 text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      
      {/* Background gradient */}
      <div className="absolute top-1/4 left-0 w-1/2 h-1/2 bg-genie-purple opacity-5 blur-3xl rounded-full" />
      <div className="absolute bottom-1/4 right-0 w-1/2 h-1/2 bg-genie-blue opacity-5 blur-3xl rounded-full" />
    </section>
  );
};

const FeatureIcon = ({ name }: { name: string }) => {
  // Using Lucide React icons
  switch (name) {
    case 'map':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M8 7H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3" /><path d="M8 7V3.5a2.5 2.5 0 0 1 5 0V7" /><path d="M11 7h2" /></svg>
      );
    case 'hotel':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M19 10V5a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-5" /><path d="M13 5v3" /><path d="M9 5v6" /><path d="M9 15v1" /><path d="M4 17h17" /></svg>
      );
    case 'users':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
      );
    case 'headphones':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3" /></svg>
      );
    case 'list-checks':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M10 6h11" /><path d="M10 12h11" /><path d="M10 18h11" /><path d="M3 6h2" /><path d="M3 12h2" /><path d="M3 18h2" /></svg>
      );
    case 'sparkles':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" /><path d="M5 3v4" /><path d="M19 17v4" /><path d="M3 5h4" /><path d="M17 19h4" /></svg>
      );
    default:
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" /></svg>
      );
  }
};

export default FeatureSection;
