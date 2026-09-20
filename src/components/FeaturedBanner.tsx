import React from 'react';
import { ArrowDown, Sparkles } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const FeaturedBanner: React.FC = () => {
  return (
    <section className="relative py-24 overflow-hidden my-6 bg-[#4B2E5E] text-[#FAF7F2]">
      
      {/* Celestial Background Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/imgs/BANNER.jpeg"
          alt="Automotive Visual Background"
          loading="lazy"
          className="w-full h-full object-cover object-center filter brightness-40 contrast-125 img-hover-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#4B2E5E]/95 via-[#4B2E5E]/85 to-[#72548C]/95" />
      </div>

      <ScrollReveal className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FAF7F2]/10 border border-[#C9A86A]/50 text-[#E7D4A8] text-xs font-bold uppercase tracking-wider mb-6 shadow-sm backdrop-blur-md">
          <Sparkles className="w-4 h-4 text-[#C9A86A]" />
          <span>SAFETY & CONFIDENCE FIRST</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight mb-6">
          Empowering <span className="text-[#E7D4A8]">Confident Drivers</span>
        </h2>

        <p className="text-base sm:text-xl text-[#FAF7F2]/90 max-w-3xl mx-auto leading-relaxed mb-8 font-medium">
          With a strong focus on practical motor training, personalized attention and road safety, SRI SARAVANAVELS DRIVING SCHOOL helps learners take their first confident step behind the wheel.
        </p>

        <a
          href="#courses"
          className="inline-flex items-center justify-center gap-2 bg-[#C9A86A] hover:bg-[#B89657] text-[#27232A] font-extrabold text-base px-8 py-4 rounded-xl shadow-glow-gold transition-all duration-300 active:scale-95"
        >
          <span>Explore Training</span>
          <ArrowDown className="w-5 h-5" />
        </a>

      </ScrollReveal>
    </section>
  );
};
