
import React from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A fully responsive e-commerce platform with product filtering, cart functionality, and payment integration.",
      image: "/placeholder.svg",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "#",
      repoUrl: "#"
    },
    {
      title: "Task Management App",
      description: "A drag-and-drop task management application with real-time updates and team collaboration features.",
      image: "/placeholder.svg",
      tags: ["React", "Firebase", "Tailwind CSS", "DnD Kit"],
      liveUrl: "#",
      repoUrl: "#"
    },
    {
      title: "Portfolio Website",
      description: "A modern portfolio website with smooth animations and a responsive design to showcase creative work.",
      image: "/placeholder.svg",
      tags: ["React", "Three.js", "GSAP", "Tailwind CSS"],
      liveUrl: "#",
      repoUrl: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            My <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects. Each project represents a unique
            challenge and solution I've worked on.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="glass-card overflow-hidden hover-effect">
              <div className="h-48 bg-secondary flex items-center justify-center">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <Badge key={idx} variant="secondary" className="bg-secondary/50">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex space-x-4 mt-auto">
                  <Button asChild size="sm" variant="outline">
                    <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  <Button asChild size="sm">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10">
            <a href="#" target="_blank" rel="noopener noreferrer">
              View All Projects
            </a>
          </Button>
        </div>
      </div>
      
      {/* Background elements */}
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl -z-10"></div>
    </section>
  );
};

export default Projects;
