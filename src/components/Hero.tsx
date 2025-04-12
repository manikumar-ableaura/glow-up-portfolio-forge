
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-16"
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <p className="text-primary font-medium mb-2 animate-fade-in">Hello, I'm</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in" style={{ animationDelay: "200ms" }}>
            <span className="text-gradient">Your Name</span>
          </h1>
          <h2 className="text-3xl md:text-4xl font-semibold text-muted-foreground mb-6 animate-fade-in" style={{ animationDelay: "400ms" }}>
            Web Developer & Designer
          </h2>
          <p className="text-lg text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: "600ms" }}>
            I build exceptional digital experiences with modern 
            technologies. Focused on creating intuitive, responsive 
            designs that deliver results.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-12 animate-fade-in" style={{ animationDelay: "800ms" }}>
            <Button asChild className="bg-primary hover:bg-primary/80 text-white">
              <a href="#contact">Get in Touch</a>
            </Button>
            <Button variant="outline" asChild>
              <a href="#projects">View My Work</a>
            </Button>
          </div>
          
          <div className="flex space-x-4 animate-fade-in" style={{ animationDelay: "1000ms" }}>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
               className="text-muted-foreground hover:text-foreground transition-colors">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" 
               className="text-muted-foreground hover:text-foreground transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:your.email@example.com" 
               className="text-muted-foreground hover:text-foreground transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
      
      {/* Abstract elements */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-primary/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-60 h-60 bg-purple-500/10 rounded-full filter blur-3xl"></div>
      
      {/* Scroll down indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll Down</span>
        <ArrowDown size={20} className="text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;
