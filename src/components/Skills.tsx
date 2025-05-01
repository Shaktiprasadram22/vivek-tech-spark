
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

type SkillCategory = {
  name: string;
  skills: { name: string; level: number }[];
};

const Skills = () => {
  const skillCategories: SkillCategory[] = [
    {
      name: "Languages",
      skills: [
        { name: "C", level: 80 },
        { name: "C++", level: 85 },
        { name: "Java", level: 75 },
        { name: "JavaScript", level: 70 },
        { name: "HTML", level: 90 },
        { name: "R", level: 65 }
      ]
    },
    {
      name: "Frameworks",
      skills: [
        { name: "CSS", level: 80 },
        { name: "React", level: 70 }
      ]
    },
    {
      name: "Tools/Platforms",
      skills: [
        { name: "MySQL", level: 75 },
        { name: "Tableau", level: 80 },
        { name: "Altair AI-Studio", level: 60 },
        { name: "Oracle DB", level: 70 },
        { name: "Informatica", level: 65 }
      ]
    },
    {
      name: "Soft Skills",
      skills: [
        { name: "Problem-solving", level: 90 },
        { name: "Teamwork", level: 85 },
        { name: "Project Management", level: 75 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-portfolio-navy mb-2">My Skills</h2>
          <div className="w-16 h-1 bg-portfolio-orange mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-xl mx-auto">
            A comprehensive set of technical and soft skills I've developed through education, projects, and hands-on experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="animate-fade-in-up" style={{ animationDelay: `${0.1 * index}s` }}>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-portfolio-navy mb-4">{category.name}</h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                        <span className="text-sm font-medium text-portfolio-orange">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-portfolio-orange h-2 rounded-full" 
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
