import React from 'react';
import { MapPin, Navigation, ExternalLink } from 'lucide-react';
import { MAPS_DIRECTIONS_URL, MAPS_EMBED_URL, BUSINESS_NAME_EN, BUSINESS_NAME_TA } from '../utils/businessStatus';
import { ScrollReveal } from './ScrollReveal';

export const LocationMap: React.FC = () => {
  return (
    <section id="contact-map" className="py-20 lg:py-28 bg-[#F3EFE7] border-t border-[#E8DEC8] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#4B2E5E] bg-[#FAF7F2] px-3.5 py-1 rounded-full border border-[#C9A86A]/40 shadow-sm">
              CONVENIENT PARUTHIPPATTU LOCATION
            </span>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#4B2E5E] tracking-tight">
              Find Us in <span className="gradient-text-gold">Paruthippattu</span>
            </h2>

            <div className="pt-1">
              <h3 className="text-2xl sm:text-3xl font-black text-[#4B2E5E] tracking-tight">
                {BUSINESS_NAME_EN}
              </h3>
              <span className="block text-xl sm:text-2xl font-bold text-[#72548C] font-sans mt-1">
                {BUSINESS_NAME_TA}
              </span>
            </div>

            <p className="text-[#27232A]/85 text-base sm:text-lg max-w-2xl mx-auto font-medium">
              No 3, PH Road, Iyyankulam, Paruthipattu, Avadi, Chennai 71
            </p>
            
            <span className="inline-flex items-center gap-1.5 text-xs text-[#4B2E5E] font-bold bg-[#FAF7F2] border border-[#C9A86A]/50 px-3.5 py-1.5 rounded-md shadow-sm">
              <MapPin className="w-3.5 h-3.5 text-[#C9A86A]" />
              No 3, PH Road, Iyyankulam, Paruthipattu
            </span>
          </div>
        </ScrollReveal>

        {/* Map Container */}
        <ScrollReveal delay={100}>
          <div className="relative rounded-3xl overflow-hidden border-2 border-[#C9A86A]/60 shadow-celestial-card bg-white">
          
          {/* Top Banner overlay */}
          <div className="absolute top-4 left-4 right-4 z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-[#FAF7F2]/95 backdrop-blur-md p-4 rounded-2xl border border-[#C9A86A]/50 shadow-lg">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#4B2E5E] flex items-center justify-center text-[#C9A86A] shrink-0 shadow-sm">
                <Navigation className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-sm font-bold text-[#4B2E5E]">{BUSINESS_NAME_EN}</span>
                <span className="block text-xs text-[#72548C] font-semibold">{BUSINESS_NAME_TA}</span>
              </div>
            </div>

            <a
              href={MAPS_DIRECTIONS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#C9A86A] hover:bg-[#B89657] text-[#27232A] font-bold text-xs uppercase tracking-wider px-5 py-3 rounded-xl shadow-glow-gold transition-all"
            >
              <MapPin className="w-4 h-4 fill-[#27232A]" />
              <span>📍 Get Directions</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Interactive Google Map Iframe Container */}
          <a
            href={MAPS_DIRECTIONS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full h-[450px] relative group cursor-pointer"
          >
            <iframe
              title="SRI SARAVANAVELS DRIVING SCHOOL Location Map"
              src={MAPS_EMBED_URL}
              width="100%"
              height="100%"
              style={{ border: 0, pointerEvents: 'none' }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
            {/* Click overlay prompt */}
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors flex items-center justify-center pointer-events-none">
              <div className="bg-[#4B2E5E] text-[#FAF7F2] font-bold text-sm px-6 py-3 rounded-xl shadow-glow-purple border border-[#C9A86A]/50 opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#C9A86A]" />
                <span>Click Map to Open Directions</span>
              </div>
            </div>
          </a>

          {/* Bottom Bar overlay */}
          <div className="bg-[#FAF7F2] p-4 border-t border-[#E8DEC8] flex flex-wrap items-center justify-between gap-4 text-xs text-[#665E6E]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>No 3, PH Road, Iyyankulam, Paruthipattu, Avadi, Chennai 71 • Parking Available</span>
            </div>
            <a
              href={MAPS_DIRECTIONS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#4B2E5E] hover:text-[#C9A86A] font-bold flex items-center gap-1"
            >
              Open in Google Maps Application <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
