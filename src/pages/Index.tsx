
import React from 'react';
import Navbar from '@/components/Navbar';
import StarryBackground from '@/components/StarryBackground';
import HeroSection from '@/components/HeroSection';
import FeatureSection from '@/components/FeatureSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import BetaAccessSection from '@/components/BetaAccessSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <StarryBackground />
      <Navbar />
      <main>
        <HeroSection />
        <FeatureSection />
        <HowItWorksSection />
        <BetaAccessSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
