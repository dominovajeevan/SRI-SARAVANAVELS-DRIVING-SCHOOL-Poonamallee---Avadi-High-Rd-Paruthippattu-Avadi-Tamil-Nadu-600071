import React from 'react';
import { X, Phone, MapPin, CalendarCheck } from 'lucide-react';
import { MAPS_DIRECTIONS_URL } from '../utils/businessStatus';

interface PhonePlaceholderModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenEnquiry: () => void;
}

export const PhonePlaceholderModal: React.FC<PhonePlaceholderModalProps> = ({
  isOpen,
  onClose,
  onOpenEnquiry
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      
      <div className="relative w-full max-w-md bg-brand-card border border-amber-500/40 rounded-3xl p-6 sm:p-8 shadow-glow-gold text-center">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white border border-brand-border transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="w-14 h-14 rounded-2xl bg-amber-500/20 text-amber-400 border border-amber-500/40 flex items-center justify-center mx-auto mb-4">
          <Phone className="w-7 h-7" />
        </div>

        <h3 className="text-xl font-bold text-white mb-2">
          Direct Phone Contact
        </h3>

        <div className="bg-[#080A10] p-4 rounded-xl border border-brand-border my-4">
          <span className="text-xs font-semibold uppercase text-gray-400 block mb-1">Official Hotline</span>
          <span className="text-xl font-black text-amber-400 tracking-widest font-mono">[PHONE NUMBER]</span>
          <span className="text-[11px] text-gray-500 block mt-1">Please insert the official business number</span>
        </div>

        <p className="text-xs text-gray-300 leading-relaxed mb-6">
          Sri Saravana Vels Driving School in Paruthippattu, Avadi is open Monday to Saturday from 9:00 AM to 8:00 PM. You can also submit an online enquiry or get directions directly.
        </p>

        <div className="space-y-3">
          <button
            onClick={() => {
              onClose();
              onOpenEnquiry();
            }}
            className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-black font-bold text-sm py-3 rounded-xl shadow-glow-gold flex items-center justify-center gap-2"
          >
            <CalendarCheck className="w-4 h-4" />
            <span>Submit Online Enquiry Instead</span>
          </button>

          <a
            href={MAPS_DIRECTIONS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 bg-brand-card hover:bg-brand-cardHover border border-brand-border text-xs font-bold text-gray-200 py-3 rounded-xl"
          >
            <MapPin className="w-4 h-4 text-amber-400" />
            <span>Visit Paruthippattu Branch</span>
          </a>
        </div>

      </div>

    </div>
  );
};
