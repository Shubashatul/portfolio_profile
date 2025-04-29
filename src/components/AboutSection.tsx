import React from 'react';
import { Button } from "@/components/ui/button";
import { Download } from 'lucide-react';
import SectionHeading from './SectionHeading';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="bg-secondary/30 dark:bg-secondary/10">
      <div className="section-container">
        <SectionHeading 
          title="About Me" 
          subtitle="Learn more about my background and what drives me as a developer."
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-md"></div>
              <div className="relative bg-card rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" //not profile image back ground image  
                  alt="Shubash Atul Oroan" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Full Stack Developer & Problem Solver</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I'm Shubash Atul Oroan, a passionate Full Stack Developer specializing in the MERN stack. 
                With a strong foundation in both frontend and backend technologies, I focus on creating 
                robust, scalable applications that deliver exceptional user experiences.
              </p>
              <p>
                My journey in development started with a curiosity about how digital solutions can solve 
                real-world problems. This curiosity has evolved into a professional skill set that allows 
                me to transform ideas into fully functional applications.
              </p>
              <p>
                Beyond technical skills, I bring strong soft skills including team leadership, adaptability, 
                and problem-solving. I thrive in collaborative environments and enjoy the process of tackling 
                complex challenges through creative thinking and methodical approaches.
              </p>
            </div>
            <div className="pt-4"> {/*add resume here*/}
              <Button asChild className="rounded-full">
                <a href="/general_cv.pdf" download> 
                  <Download className="mr-2 h-4 w-4" /> Download CV
                </a> 
              </Button>
            </div> 
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
