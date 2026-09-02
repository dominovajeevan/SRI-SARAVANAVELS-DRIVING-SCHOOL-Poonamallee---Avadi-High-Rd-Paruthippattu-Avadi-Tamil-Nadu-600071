import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MapPin } from 'lucide-react';
import { MAPS_DIRECTIONS_URL, PHONE_NUMBER, TEL_LINK } from '../utils/businessStatus';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Courses', href: '#courses' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#E8DEC8] py-3 shadow-card' 
        : 'bg-gradient-to-b from-[#FAF7F2]/95 via-[#FAF7F2]/80 to-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo & Name */}
          <div className="flex items-center gap-3 group">
            <a href="#hero" className="flex items-center gap-3">
              <img
                src="/imgs/logo.png"
                alt="SRI SARAVANAVELS DRIVING SCHOOL"
                className="h-10 sm:h-11 w-auto object-contain group-hover:scale-105 transition-transform duration-300 rounded-lg"
              />
              <div>
                <span className="block text-base sm:text-lg font-black tracking-tight text-[#4B2E5E] group-hover:text-[#72548C] transition-colors uppercase">
                  SRI SARAVANAVELS
                </span>
                <span className="block text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#C9A86A]">
                  DRIVING SCHOOL • PARUTHIPPATTU
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2 bg-[#F3EFE7]/80 border border-[#E8DEC8] px-4 py-1.5 rounded-full backdrop-blur-sm shadow-sm">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs xl:text-sm font-semibold text-[#27232A] hover:text-[#4B2E5E] px-3 py-1.5 rounded-full hover:bg-[#C9A86A]/15 transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right side Get Directions Button */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={MAPS_DIRECTIONS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-[#C9A86A] hover:bg-[#B89657] text-[#27232A] font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-xl shadow-glow-gold transition-all"
            >
              <MapPin className="w-3.5 h-3.5 fill-[#27232A]" />
              <span>Get Directions</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={TEL_LINK}
              className="bg-[#4B2E5E] text-[#FAF7F2] text-xs font-bold px-3 py-2 rounded-lg shadow-sm flex items-center gap-1"
            >
              <Phone className="w-3.5 h-3.5 text-[#C9A86A]" />
              Call
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg bg-[#F3EFE7] border border-[#E8DEC8] text-[#4B2E5E] hover:text-[#72548C]"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF7F2] border-b border-[#E8DEC8] px-4 pt-3 pb-6 space-y-3 mt-2 shadow-2xl animate-fadeIn">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-[#27232A] hover:text-[#4B2E5E] hover:bg-[#F3EFE7] px-4 py-2.5 rounded-lg font-semibold text-sm transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-[#E8DEC8] space-y-2">
            <a
              href={TEL_LINK}
              className="w-full bg-[#4B2E5E] text-[#FAF7F2] font-bold py-3 rounded-xl shadow-glow-purple flex items-center justify-center gap-2 text-sm"
            >
              <Phone className="w-4 h-4 text-[#C9A86A]" />
              <span>Call Now: {PHONE_NUMBER}</span>
            </a>

            <a
              href={MAPS_DIRECTIONS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#C9A86A] text-[#27232A] font-bold py-3 rounded-xl shadow-glow-gold flex items-center justify-center gap-2 text-sm"
            >
              <MapPin className="w-4 h-4" />
              <span>Get Directions</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
