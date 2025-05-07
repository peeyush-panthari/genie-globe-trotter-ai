import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-genie-dark bg-opacity-80 backdrop-blur-md py-4">
      <div className="container flex items-center justify-between">
        <div className="flex items-center">
          <span className="text-genie-cream text-2xl font-light">Globe<span className="font-normal">Genie</span></span>
        </div>

        <div className="hidden md:flex space-x-6 items-center">
          <a href="#features" className="text-genie-cream hover:text-genie-purple-light transition-colors">Features</a>
          <a href="#beta">
            <Button className="bg-gradient-to-r from-genie-purple to-genie-blue hover:opacity-90 transition-opacity">
              Request Access
            </Button>
          </a>
        </div>

        <Button variant="ghost" className="md:hidden" aria-label="Menu">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;