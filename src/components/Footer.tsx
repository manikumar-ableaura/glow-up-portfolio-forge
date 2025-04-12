
import React from "react";
import { ArrowUp, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-10 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <span className="text-gradient font-bold text-xl">Portfolio</span>
            <p className="text-muted-foreground mt-2">
              Creating digital experiences that matter.
            </p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-muted-foreground">
              © {currentYear} Your Name. All rights reserved.
            </p>
            <p className="text-muted-foreground text-sm mt-1 flex items-center justify-center md:justify-end">
              Made with <Heart className="h-4 w-4 text-primary mx-1" /> using React & Tailwind
            </p>
          </div>
        </div>
      </div>
      
      {/* Scroll to top button */}
      <a 
        href="#home" 
        className="fixed right-6 bottom-6 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center shadow-lg hover:bg-primary/80 transition-colors"
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </a>
    </footer>
  );
};

export default Footer;
