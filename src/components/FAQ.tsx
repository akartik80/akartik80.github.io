import React from 'react';
import { HelpCircle } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

// FAQ data - in a real implementation, you might fetch this from an API
const faqItems = [{
  id: 1,
  question: "What makes your video content different?",
  answer: "Our videos are specifically crafted for founders and startups, focusing on authenticity rather than over-produced content. We capture the real journey, challenges, and successes that resonate with your target audience."
}, {
  id: 2,
  question: "How long does the production process take?",
  answer: "Typically, our production timeline ranges from 2-4 weeks depending on the scope of your project. We work efficiently to capture timely content while ensuring quality storytelling."
}, {
  id: 3,
  question: "Do you offer ongoing content packages?",
  answer: "Yes! Many of our clients benefit from our monthly content packages where we create consistent video content to maintain engagement with their audience. These packages can be customized based on your specific needs and goals."
}, {
  id: 4,
  question: "Can you help with distribution strategy?",
  answer: "Absolutely. Beyond creating compelling content, we provide guidance on platform-specific optimization, posting schedules, and engagement strategies to maximize the reach and impact of your videos."
}, {
  id: 5,
  question: "What type of equipment do you use?",
  answer: "We use professional-grade cameras and audio equipment to ensure high-quality production. For vertical videos specifically, we employ specialized rigs and stabilizers designed for mobile-first content."
}, {
  id: 6,
  question: "Do you handle editing and post-production?",
  answer: "Yes, our service includes full editing and post-production. From color grading to sound design, we handle all aspects of finalizing your videos to ensure they're ready for immediate publication."
}];
const FAQ = () => {
  return <section id="faq" className="py-24 bg-gradient-to-b from-autthia-blue/5 via-white to-autthia-blue/5 overflow-hidden">
      <div className="container mx-auto px-4 relative">
        {/* Decorative elements */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-autthia-purple rounded-full blur-3xl opacity-20"></div>
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-autthia-blue rounded-full blur-3xl opacity-20"></div>
        
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 reveal-on-scroll">
          <span className="bg-gradient-to-r from-[#678bd4] via-[#678bd4]/80 to-[#678bd4]/60 bg-clip-text text-transparent font-semibold text-5xl">Frequently Asked Questions</span>
        </h2>
        
        <div className="flex items-center justify-center mb-12 reveal-on-scroll">
          <HelpCircle className="w-6 h-6 text-autthia-purple mr-2" />
          <p className="text-center text-muted-foreground max-w-2xl mx-auto">
            Get answers to common questions about our services and process
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto reveal-on-scroll">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqItems.map(item => <AccordionItem key={item.id} value={`item-${item.id}`} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-border/50 overflow-hidden">
                <AccordionTrigger className="px-6 py-4 text-left font-medium text-lg hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-0 text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>)}
          </Accordion>
        </div>
      </div>
    </section>;
};
export default FAQ;