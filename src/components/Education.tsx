
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

type Education = {
  degree: string;
  institution: string;
  period: string;
  score: string;
};

const Education = () => {
  const educationHistory: Education[] = [
    {
      degree: "Bachelor of Technology - Computer Science & Engineering",
      institution: "Lovely Professional University",
      period: "Since Aug, 2022",
      score: "CGPA: 7.2"
    },
    {
      degree: "Intermediate",
      institution: "J P S Academy, Hapur",
      period: "Apr'21 - Mar'22",
      score: "Percentage: 72%"
    },
    {
      degree: "Matriculation",
      institution: "B.K Academy, Hapur",
      period: "Apr'19 - Mar'20",
      score: "Percentage: 69%"
    }
  ];

  return (
    <section id="education" className="py-20 bg-portfolio-light-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-portfolio-navy mb-2">Education</h2>
          <div className="w-16 h-1 bg-portfolio-orange mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-xl mx-auto">
            My academic journey and educational qualifications.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-portfolio-navy"></div>
            
            {/* Education Items */}
            {educationHistory.map((item, index) => (
              <div 
                key={index} 
                className={`mb-8 relative animate-fade-in-up ${
                  index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'
                }`}
                style={{ animationDelay: `${0.2 * index}s` }}
              >
                <div className={`flex ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                  <Card className={`w-full md:w-[calc(100%-2rem)] hover:shadow-lg transition-shadow ${
                    index % 2 === 0 ? 'md:ml-auto' : ''
                  }`}>
                    <CardContent className="p-6">
                      <h3 className="font-bold text-portfolio-navy text-xl mb-1">{item.degree}</h3>
                      <p className="text-portfolio-orange font-medium mb-2">{item.institution}</p>
                      <div className="flex flex-wrap justify-between text-gray-600 text-sm">
                        <span>{item.period}</span>
                        <span>{item.score}</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                {/* Timeline Dot */}
                <div className="absolute top-4 left-4 md:left-1/2 w-4 h-4 rounded-full bg-portfolio-orange border-4 border-white transform -translate-x-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
