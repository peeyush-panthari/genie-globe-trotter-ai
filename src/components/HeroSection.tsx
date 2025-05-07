import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center pt-20 pb-16 overflow-hidden">
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

          <div className="max-w-3xl mx-auto text-center mb-10 opacity-90">
            <p className="text-lg md:text-xl text-genie-cream mb-6">
              your personal travel assistant
            </p>
          </div>

          {/* Embedded YouTube Video */}
          <div className="w-full max-w-3xl mb-10 aspect-video">
            <iframe 
              className="w-full h-full rounded-lg"
              src="https://my-digital-assets123456.s3.eu-north-1.amazonaws.com/Intro+Video.mov" type="video/mp4"
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>

          {/* Floating orb */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-32 h-32 rounded-full bg-gradient-to-b from-genie-purple to-genie-blue opacity-30 blur-2xl animate-float" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
