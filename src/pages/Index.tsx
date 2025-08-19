
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Globe, Sparkles, Users, Calendar, Map, ArrowRight, Star, LogOut } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/hooks/use-toast";
import TravelChatbot from "@/components/TravelChatbot";
import ItineraryDisplay from "@/components/ItineraryDisplay";

const Index = () => {
  const [showChatbot, setShowChatbot] = useState(false);
  const [currentItinerary, setCurrentItinerary] = useState(null);
  
  const { user, loading, signOut } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    // Don't redirect while loading to prevent flash
    if (loading) return;
    
    // Only redirect if user is not authenticated and trying to access protected features
    // For now, we'll allow browsing but require auth for planning
  }, [loading, user]);

  const handleSignOut = async () => {
    await signOut();
    toast({
      title: "Signed out",
      description: "You've been successfully signed out.",
    });
  };

  const features = [
    {
      icon: Sparkles,
      title: "AI-Powered Planning",
      description: "Smart itineraries crafted by our AI based on your preferences and travel style"
    },
    {
      icon: Users,
      title: "Collaborative Planning", 
      description: "Plan together with friends and family in real-time with shared editing"
    },
    {
      icon: Calendar,
      title: "Day-by-Day Itineraries",
      description: "Detailed schedules with optimal timing and smart route planning"
    },
    {
      icon: Map,
      title: "Smart Recommendations",
      description: "Discover hidden gems and must-see attractions tailored to your interests"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      location: "Tokyo Trip",
      text: "GlobeGenie planned the perfect 7-day Tokyo itinerary. Every recommendation was spot-on!",
      rating: 5
    },
    {
      name: "Mike Johnson",
      location: "European Adventure",
      text: "The collaborative features made planning our group trip so much easier.",
      rating: 5
    },
    {
      name: "Emma Davis",
      location: "Bali Getaway",
      text: "Saved me hours of research. The AI knew exactly what I was looking for.",
      rating: 5
    }
  ];

  const handleStartPlanning = () => {
    if (!user) {
      navigate('/auth');
      return;
    }
    setShowChatbot(true);
  };

  const handleItineraryGenerated = (itinerary) => {
    setCurrentItinerary(itinerary);
    setShowChatbot(false);
  };

  if (currentItinerary) {
    return <ItineraryDisplay itinerary={currentItinerary} onBackToHome={() => setCurrentItinerary(null)} />;
  }

  if (showChatbot) {
    return <TravelChatbot onItineraryGenerated={handleItineraryGenerated} onBack={() => setShowChatbot(false)} />;
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-lg">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                GlobeGenie
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">Features</a>
              <a href="#how-it-works" className="text-gray-600 hover:text-gray-900 transition-colors">How it Works</a>
              <a href="#testimonials" className="text-gray-600 hover:text-gray-900 transition-colors">Reviews</a>
              {user ? (
                <div className="flex items-center space-x-4">
                  <span className="text-sm text-gray-600">
                    Welcome, {user.user_metadata?.display_name || user.email}
                  </span>
                  <Button variant="outline" size="sm" onClick={handleSignOut}>
                    <LogOut className="w-4 h-4 mr-2" />
                    Sign Out
                  </Button>
                </div>
              ) : (
                <Button variant="outline" size="sm" onClick={() => navigate('/auth')}>
                  Sign In
                </Button>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-violet-50 via-white to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-violet-100 rounded-full text-violet-700 text-sm font-medium mb-8">
              <Sparkles className="w-4 h-4 mr-2" />
              AI-Powered Travel Planning
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Your Perfect Trip
              <span className="block bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                Starts Here
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Let our AI travel assistant create personalized itineraries that match your style. 
              Plan collaboratively, discover hidden gems, and make every journey unforgettable.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button 
                onClick={handleStartPlanning}
                size="lg" 
                className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Start Planning for Free
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="px-8 py-4 text-lg rounded-full border-2 hover:bg-gray-50"
              >
                Watch Demo
              </Button>
            </div>

            <div className="flex items-center justify-center space-x-8 text-sm text-gray-500">
              <div className="flex items-center">
                <div className="flex -space-x-2 mr-3">
                  <div className="w-8 h-8 bg-violet-500 rounded-full border-2 border-white"></div>
                  <div className="w-8 h-8 bg-indigo-500 rounded-full border-2 border-white"></div>
                  <div className="w-8 h-8 bg-purple-500 rounded-full border-2 border-white"></div>
                </div>
                <span>10,000+ travelers trust us</span>
              </div>
              <div className="flex items-center">
                <Star className="w-4 h-4 text-yellow-400 mr-1" />
                <span>4.9/5 rating</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get your perfect itinerary in three simple steps
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-violet-100 to-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-violet-600">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Tell Us Your Preferences</h3>
              <p className="text-gray-600">Share your destination, travel dates, interests, and budget. Our AI listens to create something uniquely yours.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-violet-100 to-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-violet-600">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">AI Creates Your Itinerary</h3>
              <p className="text-gray-600">Our smart algorithm crafts a day-by-day plan with optimal timing, routes, and personalized recommendations.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-violet-100 to-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-violet-600">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Collaborate & Finalize</h3>
              <p className="text-gray-600">Invite friends, make edits together, and fine-tune every detail until your trip is perfect.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything You Need for Perfect Trips
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Powerful features designed to make travel planning effortless and enjoyable
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-all duration-300 border-0 bg-white group hover:scale-105">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-gradient-to-r from-violet-100 to-indigo-100 rounded-xl group-hover:from-violet-200 group-hover:to-indigo-200 transition-colors">
                    <feature.icon className="w-8 h-8 text-violet-600" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Loved by Travelers Worldwide
            </h2>
            <p className="text-lg text-gray-600">
              See what our community says about their GlobeGenie experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 border-0 bg-gray-50 hover:shadow-md transition-shadow">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.location}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-violet-600 to-indigo-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready for Your Next Adventure?
          </h2>
          <p className="text-xl text-violet-100 mb-8">
            Join thousands of travelers who've discovered their perfect trips with GlobeGenie
          </p>
          <Button 
            onClick={handleStartPlanning}
            size="lg" 
            variant="secondary"
            className="bg-white text-violet-600 hover:bg-gray-50 px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Start Planning Now - It's Free
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="p-2 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-lg">
                  <Globe className="w-5 h-5 text-white" />
                </div>
                <span className="text-lg font-bold">GlobeGenie</span>
              </div>
              <p className="text-gray-400">
                Your AI travel assistant for perfect adventures around the world.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <div className="space-y-2 text-gray-400">
                <div>AI Planning</div>
                <div>Collaboration</div>
                <div>Mobile App</div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <div className="space-y-2 text-gray-400">
                <div>About Us</div>
                <div>Careers</div>
                <div>Contact</div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <div className="space-y-2 text-gray-400">
                <div>Help Center</div>
                <div>Privacy Policy</div>
                <div>Terms of Service</div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 GlobeGenie. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
