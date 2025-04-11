
import React from 'react';
import { Award, BarChart2, TrendingUp, Newspaper } from "lucide-react";

const ClientLogos = () => {
  return (
    <div className="py-10 bg-gradient-to-r from-autthia-light-purple/20 to-autthia-blue/20">
      <div className="container mx-auto">
        <p className="text-center text-muted-foreground mb-6">Our clients have been featured in:</p>
        
        <div className="overflow-hidden relative">
          <div className="flex items-center gap-12 animate-marquee">
            {/* First set of logos */}
            <div className="flex items-center gap-3 min-w-max">
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-xl shadow-sm">
                <Award className="w-6 h-6 text-red-500" />
                <span className="font-bold">Shark Tank</span>
              </div>
              
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-xl shadow-sm">
                <TrendingUp className="w-6 h-6 text-green-600" />
                <span className="font-bold">Entrepreneur</span>
              </div>
              
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-xl shadow-sm">
                <BarChart2 className="w-6 h-6 text-blue-600" />
                <span className="font-bold">Forbes</span>
              </div>
              
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-xl shadow-sm">
                <Newspaper className="w-6 h-6 text-slate-800" />
                <span className="font-bold">Tech Crunch</span>
              </div>
            </div>
            
            {/* Duplicate set of logos for seamless animation */}
            <div className="flex items-center gap-3 min-w-max">
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-xl shadow-sm">
                <Award className="w-6 h-6 text-red-500" />
                <span className="font-bold">Shark Tank</span>
              </div>
              
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-xl shadow-sm">
                <TrendingUp className="w-6 h-6 text-green-600" />
                <span className="font-bold">Entrepreneur</span>
              </div>
              
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-xl shadow-sm">
                <BarChart2 className="w-6 h-6 text-blue-600" />
                <span className="font-bold">Forbes</span>
              </div>
              
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-xl shadow-sm">
                <Newspaper className="w-6 h-6 text-slate-800" />
                <span className="font-bold">Tech Crunch</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientLogos;
