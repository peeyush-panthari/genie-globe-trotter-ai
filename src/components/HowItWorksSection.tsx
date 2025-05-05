
import React from 'react';

const HowItWorksSection = () => {
  const steps = [
    {
      number: "01",
      title: "Tell us about yourself",
      description: "GlobeGenie asks you questions to understand your travel preferences, interests, and budget."
    },
    {
      number: "02",
      title: "Choose your style",
      description: "Select from popular pre-defined itineraries or customize your own by selecting preferred destinations."
    },
    {
      number: "03",
      title: "Review your plan",
      description: "Get a personalized itinerary with accommodation, transportation, and activity recommendations."
    },
    {
      number: "04",
      title: "Book with ease",
      description: "GlobeGenie helps you book everything from flights and hotels to event tickets and tours."
    },
    {
      number: "05",
      title: "Travel with confidence",
      description: "Receive real-time support and updates during your trip for a stress-free experience."
    }
  ];

  return (
    <section id="how-it-works" className="py-24 relative">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-medium text-center text-genie-cream mb-3">How GlobeGenie Works</h2>
        <p className="text-lg text-center text-genie-cream/80 mb-16 max-w-2xl mx-auto">
          Your journey to a perfect trip is just a few simple steps away
        </p>
        
        <div className="space-y-16 md:space-y-24">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-16`}
            >
              <div className="w-full md:w-1/2">
                <div className={`relative w-full aspect-video rounded-lg overflow-hidden bg-gradient-to-br ${index % 2 === 0 ? 'from-genie-purple to-genie-blue' : 'from-genie-blue to-genie-purple'} opacity-80 flex items-center justify-center`}>
                  {/* Placeholder for images - would use actual images in production */}
                  <span className="text-6xl font-light text-white/70">{step.number}</span>
                  {/* Add some decorative elements */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-3/4 h-3/4 border border-white/20 rounded-lg" />
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 space-y-4">
                <div className="flex items-center gap-4">
                  <span className="text-4xl font-light text-genie-purple-light">{step.number}</span>
                  <h3 className="text-2xl font-medium text-genie-cream">{step.title}</h3>
                </div>
                <p className="text-lg text-genie-cream/80">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Background gradient */}
      <div className="absolute top-1/3 right-0 w-1/3 h-1/3 bg-genie-purple opacity-5 blur-3xl rounded-full" />
      <div className="absolute bottom-1/3 left-0 w-1/3 h-1/3 bg-genie-blue opacity-5 blur-3xl rounded-full" />
    </section>
  );
};

export default HowItWorksSection;
