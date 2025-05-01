
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

type Project = {
  title: string;
  description: string;
  tech: string[];
  image?: string;
};

const Projects = () => {
  const projects: Project[] = [
    {
      title: "IPL Auction Dashboard",
      description: "Gained insights into IPL auction trends and strategies by building interactive dashboards with real-time data analysis.",
      tech: ["Tableau", "R Programming", "Data Analysis"]
    },
    {
      title: "World Clock Application",
      description: "Developed a world clock app that synchronizes global times in real-time, built with Java Date & Time API.",
      tech: ["Core Java", "JavaFX", "Date & Time API"]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-portfolio-light-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-portfolio-navy mb-2">Featured Projects</h2>
          <div className="w-16 h-1 bg-portfolio-orange mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-xl mx-auto">
            Explore my latest work showcasing my technical skills and problem-solving abilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="overflow-hidden hover:shadow-xl transition-shadow animate-fade-in-up"
              style={{ animationDelay: `${0.2 * index}s` }}
            >
              <div className="h-48 bg-gradient-to-r from-portfolio-navy to-portfolio-orange flex items-center justify-center text-white">
                <h3 className="text-xl font-bold">{project.title}</h3>
              </div>
              <CardContent className="p-6">
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((item, techIndex) => (
                    <span 
                      key={techIndex}
                      className="bg-portfolio-light-blue text-portfolio-navy text-xs px-3 py-1 rounded-full font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <div className="flex justify-end">
                  <Button className="bg-portfolio-navy hover:bg-portfolio-orange text-white transition-colors">
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
