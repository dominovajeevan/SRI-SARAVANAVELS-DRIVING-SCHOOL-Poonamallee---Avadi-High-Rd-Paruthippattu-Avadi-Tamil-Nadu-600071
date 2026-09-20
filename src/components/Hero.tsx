import React from 'react';
import { ArrowDown, MapPin, Phone, ShieldCheck, ChevronDown, Sparkles } from 'lucide-react';
import { MAPS_DIRECTIONS_URL, PHONE_NUMBER, TEL_LINK } from '../utils/businessStatus';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-[85vh] lg:min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center justify-center overflow-hidden bg-[#4B2E5E]">
      
      {/* Full-Width Cinematic Driving Banner Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/imgs/BANNER.jpeg"
          alt="Home Page Hero Banner"
          loading="eager"
          className="w-full h-full object-cover object-center scale-105 filter brightness-90 contrast-110"
        />
        {/* Sophisticated Deep Purple Overlay Gradient for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#3A1F4B]/95 via-[#4B2E5E]/85 to-[#4B2E5E]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#4B2E5E] via-transparent to-[#3A1F4B]/60" />
        
        {/* Subtle Celestial Ring & Star Dust Glow Over Banner */}
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#C9A86A]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#72548C]/30 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Hero Content directly overlaid over the full-width banner */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          
          {/* Small Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FAF7F2]/10 backdrop-blur-md border border-[#C9A86A]/60 text-[#E7D4A8] text-xs font-bold uppercase tracking-wider mb-6 shadow-glow-gold">
            <Sparkles className="w-4 h-4 text-[#C9A86A]" />
            <span>ESTABLISHED 2013 • PARUTHIPPATTU, AVADI</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] mb-6 drop-shadow-sm">
            Learn to Drive.{' '}
            <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-[#E7D4A8] via-[#C9A86A] to-[#B89657]">
              Drive with Confidence.
            </span>
          </h1>

          {/* Supporting text */}
          <p className="text-base sm:text-lg lg:text-xl text-[#FAF7F2]/90 leading-relaxed mb-8 font-medium max-w-2xl drop-shadow-sm">
            Professional motor training with personalized attention, practical guidance and a strong focus on safe and confident driving. Located at No 3, PH Road, Iyyankulam, Paruthipattu, Avadi, Chennai 71.
          </p>

          {/* Primary Actions: Explore Us, Get Directions, and Phone Button (7299367999 with 1 Phone Icon) */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-10">
            
            {/* 1. Explore Us */}
            <a
              href="#services"
              className="group relative overflow-hidden bg-gradient-to-r from-[#C9A86A] to-[#B89657] hover:from-[#B89657] hover:to-[#A78546] text-[#27232A] font-extrabold text-base px-7 py-4 rounded-xl shadow-glow-gold transition-all duration-300 transform active:scale-95 flex items-center justify-center gap-2.5"
            >
              <span>Explore Us</span>
              <ArrowDown className="w-5 h-5 text-[#27232A] group-hover:translate-y-0.5 transition-transform" />
            </a>

            {/* 2. Get Directions */}
            <a
              href={MAPS_DIRECTIONS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 bg-[#FAF7F2]/10 backdrop-blur-md hover:bg-[#FAF7F2]/20 text-white border-2 border-[#C9A86A]/80 font-bold text-base px-7 py-4 rounded-xl transition-all duration-200"
            >
              <MapPin className="w-5 h-5 text-[#C9A86A] fill-[#C9A86A]" />
              <span>Get Directions</span>
            </a>

            {/* 3. Phone Call Button (7299367999 - ONLY 1 SINGLE PHONE ICON) */}
            <a
              href={TEL_LINK}
              className="inline-flex items-center justify-center gap-2.5 bg-[#4B2E5E]/90 hover:bg-[#4B2E5E] text-[#FAF7F2] font-bold text-base px-6 py-4 rounded-xl border border-[#C9A86A]/60 shadow-glow-purple transition-all duration-200"
            >
              <Phone className="w-5 h-5 text-[#C9A86A] fill-[#C9A86A]" />
              <span>{PHONE_NUMBER}</span>
            </a>

          </div>

          {/* Trust Callout */}
          <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-[#FAF7F2]/80 border-t border-[#C9A86A]/30 pt-6">
            <div className="flex items-center gap-1.5 text-[#E7D4A8] font-semibold">
              <ShieldCheck className="w-4 h-4 text-[#C9A86A]" />
              <span>Patient & Certified Instructors</span>
            </div>
            <span className="text-[#C9A86A]/50">•</span>
            <span>Male & Women Driver Training</span>
            <span className="text-[#C9A86A]/50">•</span>
            <span>Paruthippattu Landmark</span>
          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#stats"
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-[#FAF7F2]/70 hover:text-white transition-colors cursor-pointer group"
      >
        <span className="text-[10px] uppercase tracking-widest font-semibold">Scroll to Explore</span>
        <ChevronDown className="w-5 h-5 animate-bounce text-[#C9A86A]" />
      </a>

    </section>
  );
};
