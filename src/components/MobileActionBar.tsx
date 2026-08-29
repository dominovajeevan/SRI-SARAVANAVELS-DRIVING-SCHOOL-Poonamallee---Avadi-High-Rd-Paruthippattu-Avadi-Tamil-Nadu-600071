import React from 'react';
import { Home, Car, Phone, MapPin } from 'lucide-react';
import { MAPS_DIRECTIONS_URL, TEL_LINK } from '../utils/businessStatus';

export const MobileActionBar: React.FC = () => {
  return (
    <aside aria-label="Mobile quick actions" className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#FAF7F2]/95 backdrop-blur-md border-t border-[#E8DEC8] px-3 py-2.5 shadow-2xl">
      <div className="grid grid-cols-4 gap-1.5 max-w-md mx-auto">
        
        {/* Home Button */}
        <a
          href="#hero"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-white border border-[#E8DEC8] text-[#27232A] active:scale-95 transition-transform"
        >
          <Home className="w-4 h-4 text-[#4B2E5E] mb-0.5" />
          <span className="text-[10px] font-bold">Home</span>
        </a>

        {/* Training Button */}
        <a
          href="#courses"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-white border border-[#E8DEC8] text-[#27232A] active:scale-95 transition-transform"
        >
          <Car className="w-4 h-4 text-[#4B2E5E] mb-0.5" />
          <span className="text-[10px] font-bold">Training</span>
        </a>

        {/* Call Button */}
        <a
          href={TEL_LINK}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-[#4B2E5E] text-white font-bold active:scale-95 shadow-glow-purple transition-transform"
        >
          <Phone className="w-4 h-4 text-[#C9A86A] fill-[#C9A86A] mb-0.5" />
          <span className="text-[10px] font-extrabold">Call</span>
        </a>

        {/* Directions Button */}
        <a
          href={MAPS_DIRECTIONS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-[#C9A86A] text-[#27232A] font-bold active:scale-95 shadow-glow-gold transition-transform"
        >
          <MapPin className="w-4 h-4 fill-[#27232A] mb-0.5" />
          <span className="text-[10px] font-bold">Directions</span>
        </a>

      </div>
    </aside>
  );
};
