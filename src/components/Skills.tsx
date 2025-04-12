
import React from "react";
import { Progress } from "@/components/ui/progress";

const Skills = () => {
  const technicalSkills = [
    { name: "HTML & CSS", level: 95 },
    { name: "JavaScript", level: 90 },
    { name: "React", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "TypeScript", level: 75 },
    { name: "UI/UX Design", level: 85 }
  ];

  const softSkills = [
    "Problem Solving",
    "Team Collaboration",
    "Communication",
    "Time Management",
    "Adaptability",
    "Creativity"
  ];

  return (
    <section id="skills" className="py-20 relative bg-gradient-to-b from-background to-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            My <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I've developed a diverse set of skills throughout my career.
            Here's a breakdown of my technical and soft skills.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div className="glass-card p-8 rounded-lg">
            <h3 className="text-xl font-semibold mb-6 text-center">Technical Skills</h3>
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-primary">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </div>
          </div>
          
          {/* Soft Skills */}
          <div className="glass-card p-8 rounded-lg">
            <h3 className="text-xl font-semibold mb-6 text-center">Soft Skills</h3>
            <div className="grid grid-cols-2 gap-4">
              {softSkills.map((skill, index) => (
                <div 
                  key={index}
                  className="p-4 border border-border rounded-lg text-center hover:border-primary hover:text-primary transition-colors"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Tools & Technologies */}
        <div className="mt-16">
          <h3 className="text-xl font-semibold mb-8 text-center">Tools & Technologies</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((_, index) => (
              <div 
                key={index}
                className="w-20 h-20 bg-card rounded-full flex items-center justify-center glass-card hover-effect"
              >
                <span className="text-lg text-gradient font-bold">Tool {index + 1}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Background elements */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-purple-500/5 rounded-full filter blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 right-10 w-60 h-60 bg-primary/5 rounded-full filter blur-3xl -z-10"></div>
    </section>
  );
};

export default Skills;
