import React from 'react';
import { Star, ExternalLink, MessageSquare, Sparkles } from 'lucide-react';
import { MAPS_DIRECTIONS_URL } from '../utils/businessStatus';
import { ScrollReveal } from './ScrollReveal';

export const Reviews: React.FC = () => {
  return (
    <section id="reviews" className="py-20 lg:py-28 bg-[#F3EFE7] border-t border-[#E8DEC8] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Rating Score Header */}
        <ScrollReveal>
          <div className="bg-[#4B2E5E] text-[#FAF7F2] border-2 border-[#C9A86A] rounded-3xl p-8 sm:p-12 mb-12 shadow-glow-purple relative overflow-hidden">
            
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#C9A86A]/15 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              
              <div className="lg:col-span-6 space-y-3">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF7F2]/10 border border-[#C9A86A]/50 text-[#E7D4A8] text-xs font-semibold uppercase">
                  <Sparkles className="w-3.5 h-3.5 text-[#C9A86A]" />
                  <span>VERIFIED RATING SCORE</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  Trusted by Learners Across <span className="text-[#E7D4A8]">Avadi</span>
                </h2>
                <p className="text-[#FAF7F2]/80 text-sm sm:text-base">
                  Consistent motor training quality and student satisfaction in Paruthippattu, Chennai.
                </p>
              </div>

              <div className="lg:col-span-6 flex flex-col sm:flex-row items-start sm:items-center justify-start lg:justify-end gap-6 bg-[#3A1F4B]/80 p-6 rounded-2xl border border-[#C9A86A]/40">
                <div className="flex items-center gap-3">
                  <span className="text-5xl font-black text-[#C9A86A] tracking-tight">4.4</span>
                  <div>
                    <div className="flex items-center text-[#C9A86A] gap-1 mb-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-[#C9A86A] text-[#C9A86A]" />
                      ))}
                    </div>
                    <span className="text-xs text-white font-semibold block">Overall Rating Score</span>
                    <span className="text-xs text-[#E7D4A8] block">Based on 48 customer ratings</span>
                  </div>
                </div>

                <a
                  href={MAPS_DIRECTIONS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#C9A86A] hover:bg-[#B89657] text-[#27232A] font-bold text-xs uppercase tracking-wider px-5 py-3 rounded-xl shadow-glow-gold transition-all"
                >
                  <span>View Reviews</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

            </div>
          </div>
        </ScrollReveal>

        {/* 3 Review Placeholder Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((cardIdx) => (
            <ScrollReveal key={cardIdx} delay={cardIdx * 100} className="flex">
              <div
                className="bg-white border border-[#E8DEC8] hover:border-[#C9A86A] rounded-2xl p-6 flex flex-col justify-between shadow-celestial-card w-full"
              >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-[#C9A86A] gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#C9A86A] text-[#C9A86A]" />
                    ))}
                  </div>
                  <span className="text-[10px] text-[#4B2E5E] font-bold uppercase bg-[#F3EFE7] px-2 py-0.5 rounded border border-[#C9A86A]/40">
                    Verified Feedback
                  </span>
                </div>

                <div className="flex items-start gap-3 mb-4">
                  <div className="w-9 h-9 rounded-full bg-[#4B2E5E] flex items-center justify-center text-[#C9A86A] font-bold text-xs shrink-0 shadow-sm">
                    <MessageSquare className="w-4 h-4 text-[#C9A86A]" />
                  </div>
                  <div>
                    <span className="block text-sm font-bold text-[#4B2E5E]">Customer Feedback #{cardIdx}</span>
                    <span className="block text-[11px] text-[#665E6E]">SRI SARAVANAVELS Learner</span>
                  </div>
                </div>

                <p className="text-xs text-[#27232A]/80 italic leading-relaxed bg-[#FAF7F2] p-3.5 rounded-xl border border-[#E8DEC8]">
                  "See what learners have to say about their experience on our official Google Business profile."
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#E8DEC8] flex justify-between items-center text-[11px] text-[#665E6E]">
                <span>Paruthippattu Branch</span>
                <a
                  href={MAPS_DIRECTIONS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#4B2E5E] hover:text-[#C9A86A] hover:underline flex items-center gap-1 font-bold"
                >
                  Read on Google <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
};
