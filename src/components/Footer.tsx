
import React from 'react';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-genie-purple/20 relative z-10">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <div className="flex items-center">
              <span className="text-genie-cream text-2xl font-light">Globe<span className="font-normal">Genie</span></span>
            </div>
            <p className="text-genie-cream/70 mt-2">Explore the world with ease</p>
          </div>
          
          <div className="flex flex-wrap gap-x-8 gap-y-4 justify-center">
            <a href="#features" className="text-genie-cream/70 hover:text-genie-purple-light transition-colors">Features</a>
            <a href="#how-it-works" className="text-genie-cream/70 hover:text-genie-purple-light transition-colors">How it works</a>
            <a href="#beta" className="text-genie-cream/70 hover:text-genie-purple-light transition-colors">Beta Access</a>
            <a href="#" className="text-genie-cream/70 hover:text-genie-purple-light transition-colors">Terms</a>
            <a href="#" className="text-genie-cream/70 hover:text-genie-purple-light transition-colors">Privacy</a>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-genie-purple/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-genie-cream/50 text-sm">
            &copy; {new Date().getFullYear()} GlobeGenie. All rights reserved.
          </p>
          
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-genie-cream/50 hover:text-genie-purple-light transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="#" className="text-genie-cream/50 hover:text-genie-purple-light transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
            <a href="#" className="text-genie-cream/50 hover:text-genie-purple-light transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
