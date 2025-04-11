
import React, { useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Eye, TrendingUp, Users, Instagram, Twitter, Linkedin, Activity, Zap, BarChart } from 'lucide-react';

// Mock stats data
const stats = [
  {
    id: 1,
    title: "Average Reach Increase",
    value: "6.8x",
    description: "Growth in audience reach",
    icon: <TrendingUp className="h-12 w-12 text-autthia-dark-purple" />,
    color: "from-autthia-purple to-autthia-dark-purple"
  },
  {
    id: 2,
    title: "Average Views",
    value: "240K+",
    description: "Monthly content views",
    icon: <Eye className="h-12 w-12 text-autthia-blue" />,
    color: "from-autthia-blue to-sky-500"
  },
  {
    id: 3,
    title: "Engagement Rate",
    value: "12.4%",
    description: "Industry avg. is 3.2%",
    icon: <Activity className="h-12 w-12 text-autthia-pink" />,
    color: "from-autthia-pink to-pink-500"
  }
];

// Mock platform stats
const platformStats = [
  {
    platform: "Instagram",
    stats: [45, 62, 81, 95, 110, 135, 150, 180, 210, 240, 280, 320],
    icon: <Instagram className="h-6 w-6" />,
    color: "bg-gradient-to-r from-purple-500 to-pink-500"
  },
  {
    platform: "Twitter",
    stats: [20, 35, 45, 60, 75, 95, 120, 150, 170, 200, 230, 260],
    icon: <Twitter className="h-6 w-6" />,
    color: "bg-gradient-to-r from-blue-400 to-blue-600"
  },
  {
    platform: "LinkedIn",
    stats: [30, 45, 55, 70, 85, 105, 125, 145, 170, 200, 250, 280],
    icon: <Linkedin className="h-6 w-6" />,
    color: "bg-gradient-to-r from-blue-600 to-blue-800"
  }
];

// Mock follower growth
const followerGrowth = [
  { month: "Jan", followers: 1200 },
  { month: "Feb", followers: 1800 },
  { month: "Mar", followers: 2400 },
  { month: "Apr", followers: 3600 },
  { month: "May", followers: 5000 },
  { month: "Jun", followers: 8000 },
  { month: "Jul", followers: 12000 },
  { month: "Aug", followers: 18000 },
  { month: "Sep", followers: 24000 },
  { month: "Oct", followers: 35000 },
  { month: "Nov", followers: 47000 },
  { month: "Dec", followers: 62000 }
];

// Sample screenshot data
const screenshots = [
  {
    id: 1,
    title: "Instagram Growth",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7",
    stats: "324k views"
  },
  {
    id: 2,
    title: "Content Performance",
    image: "https://images.unsplash.com/photo-1611162616305-c69b3037c7bb",
    stats: "87% engagement"
  },
  {
    id: 3,
    title: "Audience Demographics",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    stats: "45 countries"
  }
];

const StatCard = ({ stat }) => (
  <Card className="border-none shadow-lg hover:shadow-xl transition-all bg-white">
    <CardContent className="p-6">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-4xl font-bold mb-2 bg-gradient-to-r text-transparent bg-clip-text {stat.color}">
            {stat.value}
          </h3>
          <p className="font-medium mb-1">{stat.title}</p>
          <p className="text-sm text-muted-foreground">{stat.description}</p>
        </div>
        <div className="p-3 rounded-2xl bg-gradient-to-br {stat.color} opacity-90">
          {stat.icon}
        </div>
      </div>
    </CardContent>
  </Card>
);

const StatsShowcase = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px"
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, observerOptions);
    
    const elements = document.querySelectorAll('.reveal-on-scroll');
    elements.forEach(el => observer.observe(el));
    
    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="stats" className="py-24 relative bg-gradient-to-b from-secondary via-white to-autthia-blue/10 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-autthia-purple/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-autthia-yellow/20 rounded-full blur-3xl"></div>
      
      {/* Grid pattern background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_75%)] pointer-events-none"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 reveal-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Real Results</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See the impact of authentic personal branding for founders.
            </p>
          </div>
          
          {/* Stats cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-16 reveal-on-scroll">
            {stats.map(stat => (
              <StatCard key={stat.id} stat={stat} />
            ))}
          </div>
          
          {/* Interactive graph showcase */}
          <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden mb-16 reveal-on-scroll">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-autthia-purple/5 to-autthia-blue/5"></div>
            
            {/* Header with tabs */}
            <div className="p-6 md:p-8 relative">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Audience Growth Over Time</h3>
                  <p className="text-muted-foreground">Watch how our founders' audiences grow exponentially</p>
                </div>
                
                <div className="flex space-x-2">
                  {platformStats.map(platform => (
                    <div key={platform.platform} className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm border border-gray-100">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${platform.color} text-white`}>
                        {platform.icon}
                      </div>
                      <span className="text-sm font-medium">{platform.platform}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Visual graph representation - we'll use a visual placeholder instead of actual charts */}
              <div className="relative h-64 w-full overflow-hidden rounded-xl">
                <div className="absolute bottom-0 left-0 w-full h-full flex items-end">
                  {followerGrowth.map((item, index) => {
                    const heightPercentage = (item.followers / 62000) * 100;
                    return (
                      <div key={index} className="flex-1 flex flex-col items-center justify-end group relative">
                        <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-autthia-dark-purple text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                          {item.followers.toLocaleString()} followers
                        </div>
                        <div 
                          className="w-full bg-gradient-to-t from-autthia-purple to-autthia-light-purple opacity-80 hover:opacity-100 transition-all rounded-t-md"
                          style={{ height: `${heightPercentage}%` }}
                        ></div>
                        <span className="text-xs mt-1">{item.month}</span>
                      </div>
                    );
                  })}
                </div>
                
                {/* Grid lines */}
                <div className="absolute inset-0 grid grid-rows-4 pointer-events-none">
                  {[0, 1, 2, 3].map((line) => (
                    <div key={line} className="border-t border-gray-200 flex items-center">
                      <span className="text-xs text-gray-400 absolute -left-6">
                        {Math.round((62000 / 4) * (4 - line) / 1000)}k
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Screenshots in a unique showcase */}
          <div className="reveal-on-scroll">
            <h3 className="text-2xl font-bold mb-8 text-center">Inside Our Founders' Dashboards</h3>
            
            <div className="relative h-[500px] mb-16">
              {/* Floating screenshots with 3D effect */}
              {screenshots.map((screenshot, index) => {
                // Calculate positions for screenshots
                const positions = [
                  'top-0 left-0 md:left-1/4 rotate-[-6deg]',
                  'top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-[2deg] z-20',
                  'bottom-0 right-0 md:right-1/4 rotate-[8deg]'
                ];
                
                return (
                  <div 
                    key={screenshot.id}
                    className={`absolute w-64 md:w-80 transition-all duration-500 hover:scale-105 hover:rotate-0 hover:z-30 ${positions[index]}`}
                  >
                    <div className="bg-white p-3 rounded-xl shadow-2xl transform perspective-1000">
                      <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                        <img 
                          src={screenshot.image} 
                          alt={screenshot.title} 
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-3">
                          <div>
                            <h4 className="text-white font-bold text-sm">{screenshot.title}</h4>
                            <div className="flex items-center gap-1 mt-1">
                              {index === 0 && <Eye className="h-3 w-3 text-white" />}
                              {index === 1 && <Zap className="h-3 w-3 text-white" />}
                              {index === 2 && <Users className="h-3 w-3 text-white" />}
                              <span className="text-white text-xs">{screenshot.stats}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-3 px-2">
                        <div className="flex items-center gap-2 mb-2">
                          <BarChart className="h-5 w-5 text-autthia-purple" />
                          <h5 className="font-medium text-sm">Performance Analytics</h5>
                        </div>
                        
                        <div className="space-y-2 mb-2">
                          {[1, 2, 3].map((bar) => (
                            <div key={bar} className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                              <div 
                                className="h-full bg-gradient-to-r from-autthia-purple to-autthia-light-purple rounded-full"
                                style={{ width: `${Math.random() * 50 + 50}%` }}
                              ></div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
              
              {/* Decorative elements */}
              <div className="absolute top-1/4 right-1/4 w-20 h-20 bg-autthia-yellow/30 rounded-full blur-xl"></div>
              <div className="absolute bottom-1/3 left-1/3 w-16 h-16 bg-autthia-blue/30 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsShowcase;
