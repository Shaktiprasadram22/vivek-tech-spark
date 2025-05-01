
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

type Achievement = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const Achievements = () => {
  const achievements: Achievement[] = [
    {
      title: "150+ LeetCode Problems",
      description: "Solved over 150 LeetCode problems including Easy, Medium, and Hard challenges.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48 2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48 2.83-2.83" />
        </svg>
      )
    },
    {
      title: "NCC 'B' Certificate",
      description: "Demonstrating leadership and discipline through National Cadet Corps training.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      )
    },
    {
      title: "Volunteered in ICCS 2023",
      description: "Contributed to an international tech conference as a volunteer.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      )
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-portfolio-navy mb-2">Achievements</h2>
          <div className="w-16 h-1 bg-portfolio-orange mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-xl mx-auto">
            Highlights of my accomplishments and recognition in different areas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {achievements.map((achievement, index) => (
            <Card 
              key={index} 
              className="text-center hover:shadow-lg transition-shadow animate-fade-in-up"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <CardContent className="p-6">
                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-portfolio-light-blue text-portfolio-navy">
                  {achievement.icon}
                </div>
                <h3 className="font-bold text-portfolio-navy text-xl mb-2">{achievement.title}</h3>
                <p className="text-gray-600">{achievement.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
