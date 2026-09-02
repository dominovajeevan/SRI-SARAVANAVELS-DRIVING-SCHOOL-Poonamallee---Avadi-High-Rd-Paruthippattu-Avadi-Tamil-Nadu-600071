import React, { useEffect, useState, useRef, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export interface LightboxImage {
  src: string;
  alt: string;
  title: string;
  caption?: string;
}

interface LightboxModalProps {
  isOpen: boolean;
  currentIndex: number;
  images: LightboxImage[];
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  isOpen,
  currentIndex,
  images,
  onClose,
  onNavigate
}) => {
  const [isClosing, setIsClosing] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // Preload all gallery images when modal mounts or images change
  useEffect(() => {
    images.forEach((img) => {
      const i = new Image();
      i.src = img.src;
    });
  }, [images]);

  // Handle closing with smooth animation
  const handleClose = useCallback(() => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      onClose();
    }, 250);
  }, [onClose]);

  // Navigation handlers
  const handlePrev = useCallback(() => {
    const newIdx = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    onNavigate(newIdx);
  }, [currentIndex, images.length, onNavigate]);

  const handleNext = useCallback(() => {
    const newIdx = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    onNavigate(newIdx);
  }, [currentIndex, images.length, onNavigate]);

  // Keyboard Navigation & Scroll Lock
  useEffect(() => {
    if (!isOpen) return;

    // Prevent body scroll without layout shift
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, handleClose, handlePrev, handleNext]);

  // Touch Swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = null;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 40; // minimum pixels for swipe threshold

    if (distance > minSwipeDistance) {
      handleNext();
    } else if (distance < -minSwipeDistance) {
      handlePrev();
    }
  };

  if (!isOpen && !isClosing) return null;

  const currentImg = images[currentIndex];
  if (!currentImg) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/92 backdrop-blur-md transition-opacity duration-300 ${
        isClosing ? 'opacity-0' : 'animate-lightboxBackdrop'
      }`}
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
      aria-label="Image Lightbox Gallery"
    >
      {/* Lightbox Container (Stops propagation so clicking inside doesn't close) */}
      <div
        className={`relative w-full max-w-5xl h-full max-h-[90vh] flex flex-col items-center justify-between transition-all duration-300 ${
          isClosing ? 'scale-95 opacity-0' : 'animate-lightboxScale'
        }`}
        onClick={(e) => e.stopPropagation()}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Top Control Bar */}
        <div className="w-full flex items-center justify-between text-white/90 py-3 px-4 sm:px-6 bg-gradient-to-b from-black/70 to-transparent rounded-t-2xl z-10">
          
          {/* Counter & Title */}
          <div className="flex items-center gap-3">
            <span className="text-xs sm:text-sm font-mono font-bold bg-[#C9A86A] text-[#27232A] px-3 py-1 rounded-full shadow-sm">
              {currentIndex + 1} / {images.length}
            </span>
            <span className="text-xs sm:text-sm font-semibold truncate max-w-[200px] sm:max-w-xs text-gray-200 hidden sm:inline">
              {currentImg.title}
            </span>
          </div>

          {/* Close Button (Large touch target) */}
          <button
            onClick={handleClose}
            className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all duration-200 active:scale-95 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#C9A86A]"
            aria-label="Close Lightbox Viewer (Escape)"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Main Display Image Area */}
        <div className="relative flex-1 w-full flex items-center justify-center overflow-hidden my-2">
          
          <img
            key={currentIndex}
            src={currentImg.src}
            alt={currentImg.alt}
            className="max-w-full max-h-[72vh] object-contain rounded-xl shadow-2xl transition-all duration-300 transform"
            style={{
              animation: 'fadeIn 0.3s ease-in-out'
            }}
          />

          {/* Previous Arrow Button */}
          <button
            onClick={handlePrev}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 hover:bg-[#4B2E5E] text-white border border-[#C9A86A]/50 shadow-lg backdrop-blur-sm transition-all duration-200 active:scale-90 focus:outline-none focus:ring-2 focus:ring-[#C9A86A]"
            aria-label="Previous Image (Left Arrow)"
          >
            <ChevronLeft className="w-7 h-7 stroke-[2.5]" />
          </button>

          {/* Next Arrow Button */}
          <button
            onClick={handleNext}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 hover:bg-[#4B2E5E] text-white border border-[#C9A86A]/50 shadow-lg backdrop-blur-sm transition-all duration-200 active:scale-90 focus:outline-none focus:ring-2 focus:ring-[#C9A86A]"
            aria-label="Next Image (Right Arrow)"
          >
            <ChevronRight className="w-7 h-7 stroke-[2.5]" />
          </button>
        </div>

        {/* Bottom Thumbnail Strip & Caption */}
        <div className="w-full flex flex-col items-center gap-3 bg-gradient-to-t from-black/80 to-transparent py-3 px-4 rounded-b-2xl z-10">
          
          {currentImg.caption && (
            <p className="text-xs sm:text-sm text-gray-300 text-center max-w-xl font-medium line-clamp-2 px-2">
              {currentImg.caption}
            </p>
          )}

          {/* Thumbnails */}
          <div className="flex items-center gap-2.5 overflow-x-auto max-w-full pb-1 pt-1 scrollbar-none">
            {images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => onNavigate(idx)}
                className={`relative w-12 h-12 sm:w-16 sm:h-16 rounded-lg overflow-hidden border-2 transition-all duration-200 shrink-0 ${
                  currentIndex === idx
                    ? 'border-[#C9A86A] scale-105 shadow-glow-gold'
                    : 'border-white/30 opacity-60 hover:opacity-100'
                }`}
                aria-label={`View Image ${idx + 1}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>

          <span className="text-[10px] text-gray-400 sm:hidden">
            Swipe left/right to navigate • Tap anywhere outside to close
          </span>
        </div>

      </div>
    </div>
  );
};
