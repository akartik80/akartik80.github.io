
import React, { useEffect } from 'react';
import { Search, Lightbulb, FileText, Video, Edit, Upload } from 'lucide-react';

const processSteps = [
  {
    id: 1,
    title: "Research",
    description: "We dive deep into your industry and audience",
    icon: Search,
    color: "bg-autthia-yellow"
  },
  {
    id: 2,
    title: "Strategy",
    description: "Crafting your unique personal brand position",
    icon: Lightbulb,
    color: "bg-autthia-green"
  },
  {
    id: 3,
    title: "Scripting",
    description: "Creating authentic content that resonates",
    icon: FileText,
    color: "bg-autthia-blue"
  },
  {
    id: 4,
    title: "Filming",
    description: "Professional production that feels natural",
    icon: Video,
    color: "bg-autthia-purple"
  },
  {
    id: 5,
    title: "Editing",
    description: "Polishing your content to perfection",
    icon: Edit,
    color: "bg-autthia-pink"
  },
  {
    id: 6,
    title: "Publishing",
    description: "Strategic posting for maximum impact",
    icon: Upload,
    color: "bg-autthia-peach"
  }
];

const Process = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px"
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          // Add a delay for each child element to create a cascade effect
          if (entry.target.children) {
            Array.from(entry.target.children).forEach((child, index) => {
              setTimeout(() => {
                child.classList.add('revealed');
              }, index * 200);
            });
          }
        }
      });
    }, observerOptions);
    
    const elements = document.querySelectorAll('.process-container');
    elements.forEach(el => observer.observe(el));
    
    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="process" className="py-20 bg-gradient-to-b from-white to-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 reveal-on-scroll">
          <span className="gradient-text">Our Process</span>
        </h2>
        
        <div className="process-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {processSteps.map((step) => (
            <div key={step.id} className="process-item reveal-on-scroll opacity-0">
              <div className="process-circle">
                <step.icon className="h-6 w-6" />
              </div>
              <div className={`w-20 h-20 rounded-full ${step.color} absolute opacity-20 blur-xl`}></div>
              <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
              <p className="text-muted-foreground text-center">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
