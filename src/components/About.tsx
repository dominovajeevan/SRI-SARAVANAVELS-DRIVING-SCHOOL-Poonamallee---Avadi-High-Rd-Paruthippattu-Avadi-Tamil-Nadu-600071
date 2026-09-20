import React from 'react';
import { ArrowRight, MapPin, CheckCircle, UserCheck, Sparkles, ShieldCheck, Award, ThumbsUp } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-[#FAF7F2] bg-celestial-pattern relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Premium Brand Highlights & Academy Overview Card */}
          <div className="lg:col-span-6 relative">
            <ScrollReveal delay={100}>
              <div className="relative mx-auto max-w-lg lg:max-w-none">
                
                {/* Frame Glow Effect */}
                <div className="absolute -inset-2 bg-gradient-to-r from-[#C9A86A]/30 to-[#72548C]/25 rounded-3xl blur-xl pointer-events-none" />

                {/* Brand Overview Card */}
                <div className="relative bg-[#4B2E5E] text-[#FAF7F2] border-2 border-[#C9A86A]/70 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden">
                  
                  {/* Decorative Subtle Celestial Ring */}
                  <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#C9A86A]/20 rounded-full blur-2xl pointer-events-none" />

                  <div className="relative z-10 space-y-6">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF7F2]/10 border border-[#C9A86A]/60 text-[#E7D4A8] text-xs font-bold uppercase tracking-wider">
                      <Sparkles className="w-4 h-4 text-[#C9A86A]" />
                      <span>EXCELLENCE IN DRIVING INSTRUCTION</span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                      Empowering Safe & Independent Drivers
                    </h3>

                    <p className="text-sm sm:text-base text-[#FAF7F2]/90 leading-relaxed font-medium">
                      At SRI SARAVANAVELS DRIVING SCHOOL, we prioritize student safety, vehicle mastery, and real-world road confidence through structured practical lessons.
                    </p>

                    {/* Features Grid inside Card */}
                    <div className="grid grid-cols-2 gap-4 pt-2 border-t border-[#C9A86A]/30">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-[#E7D4A8] font-bold text-sm">
                          <Award className="w-4 h-4 text-[#C9A86A]" />
                          <span>10+ Years</span>
                        </div>
                        <span className="text-xs text-gray-300 block">Established 2013</span>
                      </div>

                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-[#E7D4A8] font-bold text-sm">
                          <ShieldCheck className="w-4 h-4 text-[#C9A86A]" />
                          <span>Dual-Control</span>
                        </div>
                        <span className="text-xs text-gray-300 block">Safety Equipped</span>
                      </div>

                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-[#E7D4A8] font-bold text-sm">
                          <UserCheck className="w-4 h-4 text-[#C9A86A]" />
                          <span>Certified</span>
                        </div>
                        <span className="text-xs text-gray-300 block">Patient Instructors</span>
                      </div>

                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-[#E7D4A8] font-bold text-sm">
                          <ThumbsUp className="w-4 h-4 text-[#C9A86A]" />
                          <span>Confidential</span>
                        </div>
                        <span className="text-xs text-gray-300 block">Women Driver Focus</span>
                      </div>
                    </div>

                  </div>

                </div>

                {/* Floating Experience Badge */}
                <div className="absolute -bottom-5 -right-3 sm:bottom-4 sm:-right-4 bg-white border-2 border-[#C9A86A] p-3 sm:p-4 rounded-2xl shadow-glow-gold backdrop-blur-md animate-celestial z-20 pointer-events-none">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-xl bg-[#4B2E5E] text-[#C9A86A] font-black text-lg flex items-center justify-center shadow-sm">
                      10+
                    </div>
                    <div>
                      <span className="block text-xs font-bold text-[#4B2E5E] uppercase tracking-wider">Since 2013</span>
                      <span className="block text-[10px] text-[#665E6E]">Paruthippattu, Avadi</span>
                    </div>
                  </div>
                </div>

              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Detailed Narrative */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F3EFE7] border border-[#C9A86A]/50 text-[#4B2E5E] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#C9A86A]" />
              <span>ABOUT SRI SARAVANAVELS DRIVING SCHOOL</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#4B2E5E] tracking-tight leading-tight">
              A Trusted Driving School in{' '}
              <span className="gradient-text-gold">Paruthippattu</span>
            </h2>

            <p className="text-base sm:text-lg text-[#27232A]/85 leading-relaxed font-medium">
              <strong>SRI SARAVANAVELS DRIVING SCHOOL</strong> (ஶ்ரீ சரவணவேல்ஸ் டிரைவிங் ஸ்கூல்) in Paruthippattu, Chennai is a well-established motor training school providing professional driving instruction with personalized attention. Established in 2013, the school focuses on helping learners develop the knowledge, practical skills and confidence required to drive safely.
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
                <span>No 3, PH Road, Iyyankulam, Paruthipattu, Avadi, Chennai 71</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
