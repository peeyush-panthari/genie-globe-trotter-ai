
import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden">
      {/* Blue-purple gradient lines */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 opacity-70">
        {Array.from({ length: 20 }).map((_, i) => (
          <div 
            key={i} 
            className="w-full h-px bg-gradient-to-r from-transparent via-genie-purple to-transparent"
            style={{ 
              transform: `translateY(${i * 20 - 200}px)`,
              opacity: i < 5 || i > 15 ? 0.3 : 0.7
            }}  
          />
        ))}
      </div>
      
      {/* Content */}
      <div className="container relative z-10">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-genie-cream mb-4 tracking-tight">
            Globe<span className="font-normal">Genie</span>
          </h1>
          <p className="text-xl md:text-2xl text-genie-cream opacity-90 mb-8 tracking-wide">
            Explore the world with ease
          </p>
          
          <div className="max-w-3xl mx-auto text-center mb-10 opacity-90">
            <p className="text-lg md:text-xl text-genie-cream mb-6">
              Your personal AI travel assistant that takes care of everything from planning the perfect itinerary to booking accommodations and providing real-time support.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-gradient-to-r from-genie-purple to-genie-blue text-white px-8 py-6 rounded-md hover:opacity-90 transition-opacity">
              Request Beta Access
            </Button>
            <Button size="lg" variant="outline" className="text-genie-cream border-genie-purple hover:bg-genie-purple/10 px-8 py-6">
              Learn More
            </Button>
          </div>
          
          {/* Floating orb */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-32 h-32 rounded-full bg-gradient-to-b from-genie-purple to-genie-blue opacity-30 blur-2xl animate-float" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
