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
          // Cards entering view with dramatic, playful motion
          if (ratio > 0.1) {
            leftCard.style.transform = `translate(${-300 * (1 - ratio)}px, ${-250 * (1 - ratio)}px) scale(${0.6 + 0.4 * ratio}) rotate(${-20 * (1 - ratio)}deg)`;
            leftCard.style.opacity = `${ratio}`;
            centerCard.style.transform = `translateY(${150 * (1 - ratio)}px) scale(${0.6 + 0.4 * ratio}) rotate(${5 * (1 - ratio)}deg)`;
            centerCard.style.opacity = `${ratio}`;
            rightCard.style.transform = `translate(${300 * (1 - ratio)}px, ${250 * (1 - ratio)}px) scale(${0.6 + 0.4 * ratio}) rotate(${20 * (1 - ratio)}deg)`;
            rightCard.style.opacity = `${ratio}`;
          }

          // Fully in view with subtle floating animation
          if (ratio > 0.8) {
            leftCard.style.transform = 'translate(0, 0) scale(1) rotate(0deg)';
            centerCard.style.transform = 'translateY(0) scale(1) rotate(0deg)';
            rightCard.style.transform = 'translate(0, 0) scale(1) rotate(0deg)';
          }
        } else {
          // Cards exiting view - dramatic toss away effect
          leftCard.style.transform = 'translate(-400px, -350px) scale(0.4) rotate(-30deg)';
          leftCard.style.opacity = '0';
          centerCard.style.transform = 'translateY(250px) scale(0.4) rotate(-10deg)';
          centerCard.style.opacity = '0';
          rightCard.style.transform = 'translate(400px, 350px) scale(0.4) rotate(30deg)';
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
    bgColor: "#c1caf3"
  }, {
    id: 2,
    number: "2",
    heading: "Two Hours. That's All You Give Us.",
    subheading: "Founders don't have time — that's why it only takes 2 hours. (Less than an episode of 'Friends'.)",
    bgColor: "#9eb5ee"
  }, {
    id: 3,
    number: "3",
    heading: "We Do Everything Else",
    subheading: "Research. Strategy. Scripts. Edits. Publishing. And everything in between. We'll make sure your personal brand shows up everywhere.",
    bgColor: "#88acf1"
  }];
  return <section ref={sectionRef} id="strategy" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-[#678bd4] via-[#678bd4]/80 to-[#678bd4]/60 bg-clip-text text-transparent">How It Works</span>
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Card 1 - Left */}
          <div ref={leftCardRef} className="how-it-works-card group" style={{
          transform: 'translate(-300px, -250px) scale(0.6) rotate(-20deg)',
          opacity: '0',
          transition: 'all 1s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
        }}>
            <div className="cloud-card p-8 h-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 relative overflow-hidden" style={{
            backgroundColor: cards[0].bgColor
          }}>
              <div className="absolute top-4 left-4 w-12 h-12 rounded-full bg-white/80 flex items-center justify-center text-2xl font-bold text-blue-600 shadow-lg">
                {cards[0].number}
              </div>
              <div className="mt-16">
                <h3 className="mb-4 font-extrabold text-autthia-yellow text-4xl">{cards[0].heading}</h3>
                <p className="text-gray-700 leading-relaxed">{cards[0].subheading}</p>
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-white/20 rounded-full blur-2xl"></div>
            </div>
          </div>

          {/* Card 2 - Center */}
          <div ref={centerCardRef} className="how-it-works-card group" style={{
          transform: 'translateY(150px) scale(0.6) rotate(5deg)',
          opacity: '0',
          transition: 'all 1s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
        }}>
            <div className="cloud-card p-8 h-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 relative overflow-hidden" style={{
            backgroundColor: cards[1].bgColor
          }}>
              <div className="absolute top-4 left-4 w-12 h-12 rounded-full bg-white/80 flex items-center justify-center text-2xl font-bold text-blue-600 shadow-lg">
                {cards[1].number}
              </div>
              <div className="mt-16">
                <h3 className="mb-4 text-4xl font-extrabold text-indigo-500">{cards[1].heading}</h3>
                <p className="text-gray-700 leading-relaxed">{cards[1].subheading}</p>
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-white/20 rounded-full blur-2xl"></div>
            </div>
          </div>

          {/* Card 3 - Right */}
          <div ref={rightCardRef} className="how-it-works-card group" style={{
          transform: 'translate(300px, 250px) scale(0.6) rotate(20deg)',
          opacity: '0',
          transition: 'all 1s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
        }}>
            <div className="cloud-card p-8 h-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 relative overflow-hidden" style={{
            backgroundColor: cards[2].bgColor
          }}>
              <div className="absolute top-4 left-4 w-12 h-12 rounded-full bg-white/80 flex items-center justify-center text-2xl font-bold text-blue-600 shadow-lg">
                {cards[2].number}
              </div>
              <div className="mt-16">
                <h3 className="mb-4 font-extrabold text-4xl text-indigo-500">{cards[2].heading}</h3>
                <p className="text-gray-700 leading-relaxed">{cards[2].subheading}</p>
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-white/20 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Strategy;