import React from 'react';
import { MapPin, Phone, Clock, ShieldCheck, ExternalLink } from 'lucide-react';
import { MAPS_DIRECTIONS_URL, PHONE_NUMBER, TEL_LINK, BUSINESS_NAME_EN, BUSINESS_NAME_TA } from '../utils/businessStatus';

export const Footer: React.FC = () => {
  const quickLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Courses', href: '#courses' },
    { name: 'Why Choose Us', href: '#why-us' },
    { name: 'Customer Reviews', href: '#reviews' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact Us', href: '#contact' },
  ];

  return (
    <footer className="bg-[#3A1F4B] text-[#FAF7F2]/80 border-t-2 border-[#C9A86A]/50 pt-16 pb-24 lg:pb-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-[#C9A86A]/30">
          
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#hero" className="flex items-center gap-3 group">
              <img
                src="/imgs/logo.png"
                alt="SRI SARAVANAVELS DRIVING SCHOOL"
                className="h-10 sm:h-11 w-auto object-contain bg-white p-1 rounded-lg shadow-glow-gold"
              />
              <div>
                <span className="block text-base font-extrabold text-white uppercase">{BUSINESS_NAME_EN}</span>
                <span className="block text-xs text-[#E7D4A8] font-bold">{BUSINESS_NAME_TA}</span>
              </div>
            </a>

            <p className="text-xs sm:text-sm text-[#FAF7F2]/80 leading-relaxed">
              Professional Motor Training in Paruthippattu, Avadi, Chennai. Dedicated to safe, confident, and patient driving instruction since 2013.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-[#E7D4A8] font-semibold">
              <ShieldCheck className="w-4 h-4 text-[#C9A86A]" />
              <span>ESTABLISHED 2013</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider border-l-2 border-[#C9A86A] pl-2.5">
              Quick Navigation
            </h4>
            <ul className="grid grid-cols-2 gap-2 text-xs">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-[#E7D4A8] transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider border-l-2 border-[#C9A86A] pl-2.5">
              Contact & Location
            </h4>
            
            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C9A86A] shrink-0 mt-0.5" />
                <div>
                  <span className="block font-bold text-white mb-0.5">{BUSINESS_NAME_EN}</span>
                  <span className="block text-[#E7D4A8] font-medium mb-1">{BUSINESS_NAME_TA}</span>
                  <span>No 3, PH Road, Iyyankulam, Paruthipattu, Avadi, Chennai 71</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C9A86A] shrink-0" />
                <a href={TEL_LINK} className="text-white hover:text-[#E7D4A8] font-bold text-sm font-mono">
                  {PHONE_NUMBER}
                </a>
              </div>

              <a
                href={MAPS_DIRECTIONS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[#E7D4A8] font-semibold hover:underline pt-1"
              >
                <span>📍 Get Directions on Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider border-l-2 border-[#C9A86A] pl-2.5">
              Working Hours
            </h4>
            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#C9A86A] shrink-0" />
                <div>
                  <span className="block text-white font-semibold">Mon – Sat</span>
                  <span className="text-[#E7D4A8]">9:00 AM – 8:00 PM</span>
                </div>
              </div>
              <div className="pt-1">
                <span className="block text-white font-semibold">Sunday</span>
                <span className="text-rose-300 font-semibold">Closed</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FAF7F2]/60">
          <p>© 2026 {BUSINESS_NAME_EN}. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>Paruthippattu, Avadi, Chennai</span>
            <span>•</span>
            <a href="#services" className="hover:text-[#E7D4A8]">Motor Training Services</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
