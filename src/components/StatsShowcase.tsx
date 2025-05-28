import React, { useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Eye, TrendingUp, Users, Instagram, Twitter, Linkedin, Activity, Zap, BarChart } from 'lucide-react';

// Mock stats data
const stats = [{
  id: 1,
  title: "Average Reach Increase",
  value: "6.8x",
  description: "Growth in audience reach",
  icon: <TrendingUp className="h-12 w-12 text-autthia-dark-purple" />,
  color: "from-autthia-purple to-autthia-dark-purple"
}, {
  id: 2,
  title: "Average Views",
  value: "240K+",
  description: "Monthly content views",
  icon: <Eye className="h-12 w-12 text-autthia-blue" />,
  color: "from-autthia-blue to-sky-500"
}, {
  id: 3,
  title: "Engagement Rate",
  value: "12.4%",
  description: "Industry avg. is 3.2%",
  icon: <Activity className="h-12 w-12 text-autthia-pink" />,
  color: "from-autthia-pink to-pink-500"
}];

// Mock platform stats
const platformStats = [{
  platform: "Instagram",
  stats: [45, 62, 81, 95, 110, 135, 150, 180, 210, 240, 280, 320],
  icon: <Instagram className="h-6 w-6" />,
  color: "bg-gradient-to-r from-purple-500 to-pink-500"
}, {
  platform: "Twitter",
  stats: [20, 35, 45, 60, 75, 95, 120, 150, 170, 200, 230, 260],
  icon: <Twitter className="h-6 w-6" />,
  color: "bg-gradient-to-r from-blue-400 to-blue-600"
}, {
  platform: "LinkedIn",
  stats: [30, 45, 55, 70, 85, 105, 125, 145, 170, 200, 250, 280],
  icon: <Linkedin className="h-6 w-6" />,
  color: "bg-gradient-to-r from-blue-600 to-blue-800"
}];

// Mock follower growth
const followerGrowth = [{
  month: "Jan",
  followers: 1200
}, {
  month: "Feb",
  followers: 1800
}, {
  month: "Mar",
  followers: 2400
}, {
  month: "Apr",
  followers: 3600
}, {
  month: "May",
  followers: 5000
}, {
  month: "Jun",
  followers: 8000
}, {
  month: "Jul",
  followers: 12000
}, {
  month: "Aug",
  followers: 18000
}, {
  month: "Sep",
  followers: 24000
}, {
  month: "Oct",
  followers: 35000
}, {
  month: "Nov",
  followers: 47000
}, {
  month: "Dec",
  followers: 62000
}];

// Sample screenshot data
const screenshots = [{
  id: 1,
  title: "Instagram Growth",
  image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7",
  stats: "324k views"
}, {
  id: 2,
  title: "Content Performance",
  image: "https://images.unsplash.com/photo-1611162616305-c69b3037c7bb",
  stats: "87% engagement"
}, {
  id: 3,
  title: "Audience Demographics",
  image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
  stats: "45 countries"
}];
const StatCard = ({
  stat
}) => <Card className="border-none shadow-lg hover:shadow-xl transition-all bg-white">
    
  </Card>;
const StatsShowcase = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px"
    };
    const observer = new IntersectionObserver(entries => {
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
  return;
};
export default StatsShowcase;