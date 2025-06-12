import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Globe, Send, Bot, User } from "lucide-react";

interface Message {
  id: string;
  type: 'bot' | 'user';
  content: string;
  timestamp: Date;
}

interface TravelChatbotProps {
  onItineraryGenerated: (itinerary: any) => void;
  onBack: () => void;
}

const TravelChatbot = ({ onItineraryGenerated, onBack }: TravelChatbotProps) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [userResponses, setUserResponses] = useState<Record<string, string>>({});
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const chatFlow = [
    {
      key: 'greeting',
      message: "Hi there! 👋 I'm your AI travel assistant. I'm here to help you plan the perfect trip! Let's start with the basics - where would you like to go?"
    },
    {
      key: 'destination',
      message: "Great choice! How many days are you planning to stay?"
    },
    {
      key: 'duration',
      message: "Perfect! When are you planning to travel? (e.g., March 2024, Summer 2024, or a specific date)"
    },
    {
      key: 'travelDate',
      message: "Wonderful! Who will be joining you on this adventure? Are you traveling solo, with a partner, friends, or family?"
    },
    {
      key: 'groupType',
      message: "That sounds fun! What's your age range? This helps me suggest age-appropriate activities."
    },
    {
      key: 'age',
      message: "Got it! What's the main purpose of this trip? (e.g., leisure, adventure, cultural exploration, relaxation, business, romantic getaway)"
    },
    {
      key: 'purpose',
      message: "Excellent! Now tell me about your interests. What kind of activities excite you? (e.g., museums, hiking, food tours, nightlife, shopping, beaches, architecture, local culture)"
    },
    {
      key: 'interests',
      message: "Almost there! What's your budget range per person per day? (e.g., budget-friendly $50-100, mid-range $100-200, luxury $200+, or no budget constraints)"
    },
    {
      key: 'budget',
      message: "Last question! Any special requests or requirements? (e.g., dietary restrictions, accessibility needs, must-see places, places to avoid, preferred pace of travel)"
    },
    {
      key: 'additionalPreferences',
      message: "Perfect! I have all the information I need. Let me create your personalized itinerary! ✨"
    }
  ];

  useEffect(() => {
    // Start the conversation
    addBotMessage(chatFlow[0].message);
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const addBotMessage = (content: string) => {
    setIsTyping(true);
    setTimeout(() => {
      const newMessage: Message = {
        id: Date.now().toString(),
        type: 'bot',
        content,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, newMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000); // Random delay between 1-2 seconds
  };

  const addUserMessage = (content: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const sendMessageToChatGPT = async (userResponses) => {
    const messages = [
      { role: "system", content: "You are a helpful travel assistant. Generate a personalized travel itinerary based on the user's answers." },
      ...Object.entries(userResponses).map(([key, value]) => ({
        role: "user",
        content: `${key}: ${value}`
      }))
    ];

    const response = await fetch('http://localhost:5000/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messages }),
    });
    const data = await response.json();
    return data.choices?.[0]?.message?.content || "Sorry, I couldn't generate an itinerary.";
  };

  const generateItinerary = async () => {
    addBotMessage("Generating your itinerary...");

    try {
      const itineraryText = await sendMessageToChatGPT(userResponses);
      onItineraryGenerated({ text: itineraryText });
    } catch (error) {
      addBotMessage("Sorry, there was an error generating your itinerary.");
    }
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage = inputValue.trim();
    addUserMessage(userMessage);
    
    // Store the user's response
    const currentQuestion = chatFlow[currentStep];
    setUserResponses(prev => ({
      ...prev,
      [currentQuestion.key]: userMessage
    }));

    setInputValue("");
    
    // Move to next step
    const nextStep = currentStep + 1;
    if (nextStep < chatFlow.length) {
      setCurrentStep(nextStep);
      addBotMessage(chatFlow[nextStep].message);
    } else {
      generateItinerary();
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-indigo-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Button
            variant="ghost"
            onClick={onBack}
            className="text-gray-600 hover:text-gray-900"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
          
          <div className="flex items-center space-x-2">
            <div className="p-2 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-lg">
              <Globe className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
              GlobeGenie
            </h1>
          </div>
          
          <div></div> {/* Spacer for center alignment */}
        </div>

        {/* Chat Container */}
        <Card className="h-[600px] flex flex-col border-0 shadow-xl bg-white/80 backdrop-blur overflow-hidden">
          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`flex items-start space-x-3 max-w-[80%] ${message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    message.type === 'bot' 
                      ? 'bg-gradient-to-r from-violet-600 to-indigo-600' 
                      : 'bg-gray-600'
                  }`}>
                    {message.type === 'bot' ? (
                      <Bot className="w-4 h-4 text-white" />
                    ) : (
                      <User className="w-4 h-4 text-white" />
                    )}
                  </div>
                  <div className={`rounded-2xl px-4 py-3 ${
                    message.type === 'bot'
                      ? 'bg-gray-100 text-gray-900'
                      : 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white'
                  }`}>
                    <p className="text-sm leading-relaxed">{message.content}</p>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="flex items-start space-x-3 max-w-[80%]">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center bg-gradient-to-r from-violet-600 to-indigo-600">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                  <div className="bg-gray-100 rounded-2xl px-4 py-3">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Message Input */}
          <div className="border-t bg-white p-4">
            <div className="flex space-x-3">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 h-12 text-base"
                disabled={isTyping || currentStep >= chatFlow.length}
              />
              <Button
                onClick={handleSendMessage}
                disabled={!inputValue.trim() || isTyping || currentStep >= chatFlow.length}
                size="lg"
                className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white px-6"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default TravelChatbot;
