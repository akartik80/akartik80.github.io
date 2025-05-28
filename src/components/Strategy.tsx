import React, { useEffect, useRef } from 'react';
const Strategy = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const leftCardRef = useRef<HTMLDivElement>(null);
  const centerCardRef = useRef<HTMLDivElement>(null);
  const rightCardRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const section = sectionRef.current;
    const leftCard = leftCardRef.current;
    const centerCard = centerCardRef.current;
    const rightCard = rightCardRef.current;
    if (!section || !leftCard || !centerCard || !rightCard) return;
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const ratio = entry.intersectionRatio;
        if (entry.isIntersecting) {
          // Cards entering view
          if (ratio > 0.1) {
            leftCard.style.transform = `translate(${-200 * (1 - ratio)}px, ${-200 * (1 - ratio)}px) scale(${0.8 + 0.2 * ratio})`;
            leftCard.style.opacity = `${ratio}`;
            centerCard.style.transform = `translateY(${100 * (1 - ratio)}px) scale(${0.8 + 0.2 * ratio})`;
            centerCard.style.opacity = `${ratio}`;
            rightCard.style.transform = `translate(${200 * (1 - ratio)}px, ${200 * (1 - ratio)}px) scale(${0.8 + 0.2 * ratio})`;
            rightCard.style.opacity = `${ratio}`;
          }

          // Fully in view
          if (ratio > 0.8) {
            leftCard.style.transform = 'translate(0, 0) scale(1)';
            centerCard.style.transform = 'translateY(0) scale(1)';
            rightCard.style.transform = 'translate(0, 0) scale(1)';
          }
        } else {
          // Cards exiting view - toss away effect
          leftCard.style.transform = 'translate(-300px, -300px) scale(0.6) rotate(-15deg)';
          leftCard.style.opacity = '0';
          centerCard.style.transform = 'translateY(200px) scale(0.6)';
          centerCard.style.opacity = '0';
          rightCard.style.transform = 'translate(300px, 300px) scale(0.6) rotate(15deg)';
          rightCard.style.opacity = '0';
        }
      });
    }, {
      threshold: Array.from({
        length: 101
      }, (_, i) => i / 100),
      rootMargin: "-10% 0px -10% 0px"
    });
    observer.observe(section);
    return () => observer.unobserve(section);
  }, []);
  const cards = [{
    id: 1,
    number: "1",
    heading: "Book a Free Strategy Call",
    subheading: "One quick call to map your brand voice, vision, and content game plan.",
    bgColor: "bg-gradient-to-br from-blue-100 to-blue-200",
    borderColor: "border-blue-300"
  }, {
    id: 2,
    number: "2",
    heading: "Two Hours. That's All You Give Us.",
    subheading: "Founders don't have time — that's why this takes only 2 hours. (Less than an episode of Friends.) We guide you through it – all in one no-stress shoot.",
    bgColor: "bg-gradient-to-br from-yellow-100 to-yellow-200",
    borderColor: "border-yellow-300"
  }, {
    id: 3,
    number: "3",
    heading: "We Do Everything Else",
    subheading: "Research. Strategy. Scripts. Edits. Publishing. And everything in between. We'll make sure your personal brand shows up everywhere.",
    bgColor: "bg-gradient-to-br from-red-100 to-red-200",
    borderColor: "border-red-300"
  }];
  return <section ref={sectionRef} id="strategy" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-[#678bd4] via-[#678bd4]/80 to-[#678bd4]/60 bg-clip-text text-transparent">How It Works</span>
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Card 1 - Left */}
          <div ref={leftCardRef} className="how-it-works-card group" style={{
          transform: 'translate(-200px, -200px) scale(0.8)',
          opacity: '0',
          transition: 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        }}>
            <div className={`${cards[0].bgColor} ${cards[0].borderColor} border-2 rounded-3xl p-8 h-full backdrop-blur-sm shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 relative overflow-hidden`}>
              <div className="absolute top-4 left-4 w-12 h-12 rounded-full bg-white/70 flex items-center justify-center text-2xl font-bold text-blue-600 shadow-lg">
                {cards[0].number}
              </div>
              <div className="mt-16">
                <h3 className="text-xl font-bold mb-4 text-gray-800">{cards[0].heading}</h3>
                <p className="text-gray-600 leading-relaxed">{cards[0].subheading}</p>
              </div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-white/20 rounded-full blur-xl"></div>
            </div>
          </div>

          {/* Card 2 - Center */}
          <div ref={centerCardRef} className="how-it-works-card group" style={{
          transform: 'translateY(100px) scale(0.8)',
          opacity: '0',
          transition: 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        }}>
            <div className={`${cards[1].bgColor} ${cards[1].borderColor} border-2 rounded-3xl p-8 h-full backdrop-blur-sm shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 relative overflow-hidden`}>
              <div className="absolute top-4 left-4 w-12 h-12 rounded-full bg-white/70 flex items-center justify-center text-2xl font-bold text-yellow-600 shadow-lg">
                {cards[1].number}
              </div>
              <div className="mt-16">
                <h3 className="text-xl font-bold mb-4 text-gray-800">{cards[1].heading}</h3>
                <p className="text-gray-600 leading-relaxed">{cards[1].subheading}</p>
              </div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-white/20 rounded-full blur-xl"></div>
            </div>
          </div>

          {/* Card 3 - Right */}
          <div ref={rightCardRef} className="how-it-works-card group" style={{
          transform: 'translate(200px, 200px) scale(0.8)',
          opacity: '0',
          transition: 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        }}>
            <div className={`${cards[2].bgColor} ${cards[2].borderColor} border-2 rounded-3xl p-8 h-full backdrop-blur-sm shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 relative overflow-hidden`}>
              <div className="absolute top-4 left-4 w-12 h-12 rounded-full bg-white/70 flex items-center justify-center text-2xl font-bold text-red-600 shadow-lg">
                {cards[2].number}
              </div>
              <div className="mt-16">
                <h3 className="text-xl font-bold mb-4 text-gray-800">{cards[2].heading}</h3>
                <p className="text-gray-600 leading-relaxed">{cards[2].subheading}</p>
              </div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-white/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Strategy;