
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
  };

  return (
    <section id="contact" className="py-20 bg-portfolio-light-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-portfolio-navy mb-2 transition-colors duration-300 hover:text-portfolio-orange">Get In Touch</h2>
          <div className="w-16 h-1 bg-portfolio-orange mx-auto mb-4 transition-all duration-300 hover:w-24"></div>
          <p className="text-gray-600 max-w-xl mx-auto">
            Interested in working together? Feel free to reach out via the form below or through my social links.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 max-w-5xl mx-auto">
          <Card className="md:w-1/3 animate-fade-in-up transition-all duration-300 hover:shadow-lg" style={{ animationDelay: '0.1s' }}>
            <CardContent className="p-6">
              <h3 className="font-bold text-portfolio-navy text-xl mb-6 transition-colors duration-300 hover:text-portfolio-orange">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-portfolio-light-blue p-2 rounded-full text-portfolio-navy transition-all duration-300 hover:bg-portfolio-orange hover:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="transition-all duration-300 hover:translate-x-1">
                    <p className="text-sm text-gray-600">Email</p>
                    <p className="font-medium">viveksha0912@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-portfolio-light-blue p-2 rounded-full text-portfolio-navy transition-all duration-300 hover:bg-portfolio-orange hover:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="transition-all duration-300 hover:translate-x-1">
                    <p className="text-sm text-gray-600">Phone</p>
                    <p className="font-medium">+91 6398322529</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-portfolio-light-blue p-2 rounded-full text-portfolio-navy transition-all duration-300 hover:bg-portfolio-orange hover:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="transition-all duration-300 hover:translate-x-1">
                    <p className="text-sm text-gray-600">Location</p>
                    <p className="font-medium">Hapur, Uttar Pradesh, India</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="font-medium text-portfolio-navy mb-3">Connect with me</h4>
                <div className="flex space-x-4">
                  <a href="https://github.com/Svivek0" target="_blank" rel="noopener noreferrer" className="bg-portfolio-navy text-white p-2 rounded-full hover:bg-portfolio-orange transition-all duration-300 hover:scale-110">
                    <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <a href="https://linkedin.com/in/vivek-sharma06/" target="_blank" rel="noopener noreferrer" className="bg-portfolio-navy text-white p-2 rounded-full hover:bg-portfolio-orange transition-all duration-300 hover:scale-110">
                    <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <a href="mailto:viveksha0912@gmail.com" className="bg-portfolio-navy text-white p-2 rounded-full hover:bg-portfolio-orange transition-all duration-300 hover:scale-110">
                    <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="md:w-2/3 animate-fade-in-up transition-all duration-300 hover:shadow-lg" style={{ animationDelay: '0.3s' }}>
            <CardContent className="p-6">
              <h3 className="font-bold text-portfolio-navy text-xl mb-6 transition-colors duration-300 hover:text-portfolio-orange">Send Me a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="text-sm font-medium text-gray-600 mb-1 block">Name</label>
                    <Input id="name" placeholder="Your name" className="transition-all duration-300 focus:ring-portfolio-orange" />
                  </div>
                  <div>
                    <label htmlFor="email" className="text-sm font-medium text-gray-600 mb-1 block">Email</label>
                    <Input id="email" type="email" placeholder="Your email" className="transition-all duration-300 focus:ring-portfolio-orange" />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="text-sm font-medium text-gray-600 mb-1 block">Subject</label>
                  <Input id="subject" placeholder="Subject" className="transition-all duration-300 focus:ring-portfolio-orange" />
                </div>
                
                <div>
                  <label htmlFor="message" className="text-sm font-medium text-gray-600 mb-1 block">Message</label>
                  <Textarea id="message" placeholder="Your message" className="h-32 transition-all duration-300 focus:ring-portfolio-orange" />
                </div>
                
                <Button type="submit" className="bg-portfolio-navy hover:bg-portfolio-orange text-white py-6 px-8 w-full md:w-auto transition-all duration-300 hover:scale-105">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
