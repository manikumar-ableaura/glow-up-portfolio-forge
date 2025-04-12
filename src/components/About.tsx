
import React from "react";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              {/* Replace with your actual image */}
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20 hover-effect">
                <div className="w-full h-full bg-gradient-to-br from-secondary to-background flex items-center justify-center text-6xl font-bold text-primary">
                  YN
                </div>
              </div>
              <div className="absolute -bottom-5 -right-5 w-24 h-24 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                5+ Years
              </div>
            </div>
          </div>
          
          {/* Text Column */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">
              Web Developer & UI/UX Designer
            </h3>
            <p className="text-muted-foreground mb-6">
              I'm a passionate web developer with over 5 years of experience creating
              beautiful, functional websites and applications. I specialize in frontend
              development with React, but I'm also proficient in backend technologies.
            </p>
            <p className="text-muted-foreground mb-6">
              My approach combines clean code, attention to detail, and a focus on
              user experience. I believe that great design and solid engineering go
              hand in hand to create exceptional digital products.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div>
                <h4 className="font-semibold mb-1">Name:</h4>
                <p className="text-muted-foreground">Your Name</p>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Email:</h4>
                <p className="text-muted-foreground">your.email@example.com</p>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Location:</h4>
                <p className="text-muted-foreground">Your City, Country</p>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Availability:</h4>
                <p className="text-muted-foreground">Freelance / Full-time</p>
              </div>
            </div>
            
            <Button asChild className="bg-primary hover:bg-primary/80 text-white">
              <a href="#" download>
                <FileText className="mr-2 h-4 w-4" />
                Download CV
              </a>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Background element */}
      <div className="absolute top-1/3 left-0 w-72 h-72 bg-primary/5 rounded-full filter blur-3xl -z-10"></div>
    </section>
  );
};

export default About;
