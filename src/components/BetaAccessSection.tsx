import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import emailjs from 'emailjs-com';

const BetaAccessSection = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [reason, setReason] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const templateParams = {
      from_name: name,
      from_email: email,
      phone,
      message: reason,
    };

    emailjs
      .send(
        'service_8m5tkt3',
        'template_rmqqhgb',
        templateParams,
        'D-jqEktgXdzqNYBB7'
      )
      .then(() => {
        setIsLoading(false);
        toast({
          title: "Request submitted!",
          description: "Thanks for your interest in GlobeGenie. We'll be in touch soon.",
          variant: "default",
        });
        setEmail('');
        setName('');
        setPhone('');
        setReason('');
      })
      .catch(() => {
        setIsLoading(false);
        toast({
          title: "Submission failed",
          description: "There was an issue sending your request. Please try again later.",
          variant: "destructive",
        });
      });
  };

  return (
    <section id="beta" className="py-24 relative">
      <div className="container">
        <div className="max-w-3xl mx-auto bg-gradient-to-b from-genie-dark to-black/80 p-1 rounded-xl">
          <div className="bg-black/60 backdrop-blur-sm rounded-lg p-8 md:p-12 border border-genie-purple/20">
            <h2 className="text-3xl md:text-4xl font-medium text-center text-genie-cream mb-3">
              Join Our Closed Beta
            </h2>
            <p className="text-lg text-center text-genie-cream/80 mb-8 max-w-2xl mx-auto">
              GlobeGenie is currently available by invitation only. Request access to be one of the first to experience the future of travel planning.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-genie-cream/80 mb-1">
                  Full Name
                </label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  required
                  className="bg-black border-genie-purple/30 focus:border-genie-purple text-genie-cream"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-genie-cream/80 mb-1">
                  Email Address
                </label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  required
                  className="bg-black border-genie-purple/30 focus:border-genie-purple text-genie-cream"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-genie-cream/80 mb-1">
                  Phone Number
                </label>
                <Input
                  id="phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="e.g., +1 234 567 8901"
                  className="bg-black border-genie-purple/30 focus:border-genie-purple text-genie-cream"
                />
              </div>

              <div>
                <label htmlFor="reason" className="block text-sm font-medium text-genie-cream/80 mb-1">
                  Why are you interested in GlobeGenie?
                </label>
                <Textarea
                  id="reason"
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  placeholder="Tell us why you're excited about GlobeGenie and how you'd use it..."
                  required
                  className="bg-black border-genie-purple/30 focus:border-genie-purple text-genie-cream min-h-[120px]"
                />
              </div>

              <div className="pt-2">
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-genie-purple to-genie-blue hover:opacity-90 transition-opacity py-6 text-lg"
                  disabled={isLoading}
                >
                  {isLoading ? 'Submitting...' : 'Request Beta Access'}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Background effect */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-genie-purple opacity-10 blur-3xl rounded-full" />
    </section>
  );
};

export default BetaAccessSection;
