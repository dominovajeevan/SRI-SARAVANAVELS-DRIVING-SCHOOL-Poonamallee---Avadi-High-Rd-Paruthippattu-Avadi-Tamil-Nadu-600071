import React from 'react';
import { MapPin, Phone, ExternalLink } from 'lucide-react';
import { MAPS_DIRECTIONS_URL, PHONE_NUMBER, TEL_LINK, BUSINESS_NAME_EN, BUSINESS_NAME_TA } from '../utils/businessStatus';

export const ContactCTA: React.FC = () => {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#F3EFE7] border-t border-[#E8DEC8] relative overflow-hidden">
      
      {/* Decorative Celestial Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#C9A86A]/15 blur-[120px] pointer-events-none rounded-full" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <div className="bg-white border-2 border-[#C9A86A]/60 rounded-3xl p-8 sm:p-14 shadow-celestial-card backdrop-blur-md">
          
          <span className="text-xs font-bold uppercase tracking-widest text-[#4B2E5E] bg-[#F3EFE7] px-3.5 py-1.5 rounded-full border border-[#C9A86A]/40 mb-4 inline-block">
            DIRECT BUSINESS CONTACT
          </span>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#4B2E5E] tracking-tight leading-tight mb-4">
            Get in <span className="gradient-text-gold">Touch</span>
          </h2>

          <p className="text-base sm:text-lg text-[#27232A]/80 max-w-2xl mx-auto mb-8 font-medium">
            Have questions about our driving training or services? Contact Sri Saravana Vels Driving School directly.
          </p>

          <div className="bg-[#FAF7F2] p-6 rounded-2xl border border-[#E8DEC8] mb-8 text-left max-w-xl mx-auto space-y-4">
            
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#4B2E5E] text-[#C9A86A] flex items-center justify-center shrink-0 shadow-sm">
                <Phone className="w-5 h-5 fill-[#C9A86A]" />
              </div>
              <div>
                <span className="text-xs font-bold text-[#665E6E] uppercase tracking-wider block">Direct Telephone Contact</span>
                <a
                  href={TEL_LINK}
                  className="text-2xl font-black text-[#4B2E5E] hover:text-[#C9A86A] tracking-wider transition-colors block mt-0.5"
                >
                  {PHONE_NUMBER}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 pt-3 border-t border-[#E8DEC8]">
              <div className="w-10 h-10 rounded-xl bg-[#4B2E5E] text-[#C9A86A] flex items-center justify-center shrink-0 shadow-sm">
                <MapPin className="w-5 h-5 fill-[#C9A86A]" />
              </div>
              <div>
                <span className="text-xs font-bold text-[#665E6E] uppercase tracking-wider block">Official Location</span>
                <span className="text-sm font-bold text-[#4B2E5E] block">{BUSINESS_NAME_EN} ({BUSINESS_NAME_TA})</span>
                <span className="text-xs text-[#27232A]/80 block mt-0.5">
                  Poonamallee - Avadi High Rd, Paruthippattu, Avadi, Tamil Nadu 600071
                </span>
                <span className="text-xs text-[#C9A86A] font-semibold block mt-0.5">Landmark: Near RTO Office</span>
              </div>
            </div>

          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            
            {/* Call Now Button */}
            <a
              href={TEL_LINK}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#4B2E5E] to-[#674080] hover:from-[#3A2349] hover:to-[#55346B] text-[#FAF7F2] font-bold text-base px-8 py-4 rounded-xl shadow-glow-purple transition-all active:scale-95"
            >
              <Phone className="w-5 h-5 text-[#C9A86A] fill-[#C9A86A]" />
              <span>Call Now ({PHONE_NUMBER})</span>
            </a>

            {/* Get Directions Button */}
            <a
              href={MAPS_DIRECTIONS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#C9A86A] hover:bg-[#B89657] text-[#27232A] font-bold text-base px-8 py-4 rounded-xl shadow-glow-gold transition-all"
            >
              <MapPin className="w-5 h-5 fill-[#27232A]" />
              <span>Get Directions</span>
              <ExternalLink className="w-4 h-4" />
            </a>

          </div>

          <p className="text-xs text-[#665E6E] mt-6">
            Poonamallee - Avadi High Rd, Paruthippattu, Avadi • Open Mon–Sat 9:00 AM – 8:00 PM
          </p>

        </div>

      </div>
    </section>
  );
};
