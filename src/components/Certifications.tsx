import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type Certification = {
  title: string;
  issuer: string;
  date: string;
  image: string;
};

const Certifications = () => {
  const certifications: Certification[] = [
    {
      title: "Cloud Computing",
      issuer: "NPTEL",
      date: "Jul-Oct 2024",
      image: "lovable-uploads/2b4c1933-1b86-461a-965d-555fad4894c8.png"
    },
    {
      title: "Data Analysis with Tableau",
      issuer: "Coursera",
      date: "Nov 2024",
      image: "lovable-uploads/719ef65f-d5db-49b8-830d-2f8ea6653e0a.png"
    },
    {
      title: "Application Development in JAVA",
      issuer: "Lovely Professional University",
      date: "Jul 2024",
      image: "lovable-uploads/6c905152-3844-4348-a867-7f1f609a3331.png"
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-portfolio-navy mb-2">Certifications</h2>
          <div className="w-16 h-1 bg-portfolio-orange mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-xl mx-auto">
            Professional certifications and courses I've completed to enhance my skills and knowledge.
          </p>
        </div>

        <Tabs defaultValue="gallery" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
            <TabsTrigger value="gallery">Gallery View</TabsTrigger>
            <TabsTrigger value="list">List View</TabsTrigger>
          </TabsList>
          
          <TabsContent value="gallery" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <div 
                  key={index} 
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${0.1 * index}s` }}
                >
                  <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full">
                    <div className="aspect-video overflow-hidden bg-portfolio-light-gray">
                      <img 
                        src={cert.image} 
                        alt={cert.title} 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-portfolio-navy">{cert.title}</h3>
                      <p className="text-sm text-gray-600">{cert.issuer} • {cert.date}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="list" className="mt-6">
            <div className="space-y-4 max-w-3xl mx-auto">
              {certifications.map((cert, index) => (
                <Card 
                  key={index} 
                  className="hover:shadow-md transition-shadow animate-fade-in-up"
                  style={{ animationDelay: `${0.1 * index}s` }}
                >
                  <CardContent className="p-4">
                    <div className="flex flex-col md:flex-row gap-4 items-center">
                      <div className="w-16 h-16 bg-portfolio-light-gray rounded-md overflow-hidden shrink-0">
                        <img 
                          src={cert.image} 
                          alt={cert.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold text-portfolio-navy">{cert.title}</h3>
                        <p className="text-sm text-gray-600">{cert.issuer} • {cert.date}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Certifications;
