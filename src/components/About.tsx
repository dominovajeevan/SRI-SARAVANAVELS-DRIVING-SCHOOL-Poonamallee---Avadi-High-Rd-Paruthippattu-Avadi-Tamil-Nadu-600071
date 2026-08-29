import React from 'react';
import { ArrowRight, MapPin, CheckCircle, UserCheck, Sparkles } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-[#FAF7F2] bg-celestial-pattern relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image with Floating Badge */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Decorative Frame Glow */}
              <div className="absolute -inset-2 bg-gradient-to-r from-[#C9A86A]/30 to-[#72548C]/20 rounded-3xl blur-xl" />

              <div className="relative overflow-hidden rounded-2xl border-2 border-[#C9A86A]/60 shadow-xl bg-white">
                <img
                  src="/images/about.png"
                  alt="SRI SARAVANAVELS DRIVING SCHOOL Vehicle"
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-4 sm:bottom-6 sm:-right-6 bg-white border-2 border-[#C9A86A] p-4 sm:p-5 rounded-2xl shadow-glow-gold backdrop-blur-md animate-celestial">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#4B2E5E] text-[#C9A86A] font-black text-xl flex items-center justify-center shadow-sm">
                    15+
                  </div>
                  <div>
                    <span className="block text-sm font-bold text-[#4B2E5E] uppercase tracking-wider">Since 2011</span>
                    <span className="block text-xs text-[#665E6E]">Paruthippattu, Avadi</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Detailed Narrative */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F3EFE7] border border-[#C9A86A]/50 text-[#4B2E5E] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#C9A86A]" />
              <span>ABOUT SRI SARAVANAVELS</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#4B2E5E] tracking-tight leading-tight">
              A Trusted Driving School in{' '}
              <span className="gradient-text-gold">Paruthippattu</span>
            </h2>

            <p className="text-base sm:text-lg text-[#27232A]/85 leading-relaxed font-medium">
              <strong>SRI SARAVANAVELS DRIVING SCHOOL</strong> (ஶ்ரீ சரவணவேல்ஸ் டிரைவிங் ஸ்கூல்) in Paruthippattu, Chennai is a well-established motor training school providing professional driving instruction with personalized attention. Established in 2011, the school focuses on helping learners develop the knowledge, practical skills and confidence required to drive safely.
            </p>

            <p className="text-base text-[#665E6E] leading-relaxed">
              Whether you are a first-time learner or looking to refresh your driving skills, the training approach is designed to support learners at different experience levels while emphasizing practical driving and road safety.
            </p>

            {/* Key Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-2">
              <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-[#E8DEC8] shadow-sm">
                <CheckCircle className="w-5 h-5 text-[#C9A86A] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-sm font-bold text-[#4B2E5E]">Personalized Instruction</span>
                  <span className="block text-xs text-[#665E6E]">Paced according to learner comfort</span>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-[#E8DEC8] shadow-sm">
                <UserCheck className="w-5 h-5 text-[#C9A86A] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-sm font-bold text-[#4B2E5E]">Women Learner Support</span>
                  <span className="block text-xs text-[#665E6E]">Encouraging & patient guidance</span>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#services"
                className="inline-flex items-center gap-2 bg-[#4B2E5E] hover:bg-[#674080] text-[#FAF7F2] font-bold text-sm px-6 py-3.5 rounded-xl shadow-glow-purple transition-all"
              >
                <span>Explore Our Training</span>
                <ArrowRight className="w-4 h-4 text-[#C9A86A]" />
              </a>

              <div className="inline-flex items-center gap-2 text-xs text-[#4B2E5E] font-medium bg-[#F3EFE7] px-4 py-3 rounded-xl border border-[#E8DEC8]">
                <MapPin className="w-4 h-4 text-[#C9A86A]" />
                <span>Poonamallee - Avadi High Rd (Near RTO Office)</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
