import React, { useEffect, useState, useRef, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, Play } from 'lucide-react';

export interface LightboxItem {
  src: string;
  poster?: string;
  alt: string;
  title: string;
  caption?: string;
  type?: 'image' | 'video';
}

// Alias for backwards compatibility
export type LightboxImage = LightboxItem;

interface LightboxModalProps {
  isOpen: boolean;
  currentIndex: number;
  images: LightboxItem[];
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

  // Preload image assets
  useEffect(() => {
    images.forEach((item) => {
      if (item.type !== 'video') {
        const i = new Image();
        i.src = item.src;
      } else if (item.poster) {
        const i = new Image();
        i.src = item.poster;
      }
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

  const currentItem = images[currentIndex];
  if (!currentItem) return null;

  const isVideo = currentItem.type === 'video';

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/92 backdrop-blur-md transition-opacity duration-300 ${
        isClosing ? 'opacity-0' : 'animate-lightboxBackdrop'
      }`}
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
      aria-label="Media Lightbox Showcase"
    >
      {/* Lightbox Container */}
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
              {currentItem.title}
            </span>
          </div>

          {/* Close Button */}
          <button
            onClick={handleClose}
            className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all duration-200 active:scale-95 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#C9A86A]"
            aria-label="Close Lightbox Viewer (Escape)"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Main Display Area (Image or Video) */}
        <div className="relative flex-1 w-full flex items-center justify-center overflow-hidden my-2">
          {isVideo ? (
            <video
              key={currentIndex}
              src={currentItem.src}
              poster={currentItem.poster}
              controls
              autoPlay
              playsInline
              className="max-w-full max-h-[72vh] rounded-xl shadow-2xl object-contain bg-black"
            />
          ) : (
            <img
              key={currentIndex}
              src={currentItem.src}
              alt={currentItem.alt}
              className="max-w-full max-h-[72vh] object-contain rounded-xl shadow-2xl transition-all duration-300 transform"
              style={{
                animation: 'fadeIn 0.3s ease-in-out'
              }}
            />
          )}

          {/* Previous Arrow Button */}
          <button
            onClick={handlePrev}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 hover:bg-[#4B2E5E] text-white border border-[#C9A86A]/50 shadow-lg backdrop-blur-sm transition-all duration-200 active:scale-90 focus:outline-none focus:ring-2 focus:ring-[#C9A86A] z-10"
            aria-label="Previous Item (Left Arrow)"
          >
            <ChevronLeft className="w-7 h-7 stroke-[2.5]" />
          </button>

          {/* Next Arrow Button */}
          <button
            onClick={handleNext}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 hover:bg-[#4B2E5E] text-white border border-[#C9A86A]/50 shadow-lg backdrop-blur-sm transition-all duration-200 active:scale-90 focus:outline-none focus:ring-2 focus:ring-[#C9A86A] z-10"
            aria-label="Next Item (Right Arrow)"
          >
            <ChevronRight className="w-7 h-7 stroke-[2.5]" />
          </button>
        </div>

        {/* Bottom Thumbnail Strip & Caption */}
        <div className="w-full flex flex-col items-center gap-3 bg-gradient-to-t from-black/80 to-transparent py-3 px-4 rounded-b-2xl z-10">
          
          {currentItem.caption && (
            <p className="text-xs sm:text-sm text-gray-300 text-center max-w-xl font-medium line-clamp-2 px-2">
              {currentItem.caption}
            </p>
          )}

          {/* Thumbnails */}
          <div className="flex items-center gap-2.5 overflow-x-auto max-w-full pb-1 pt-1 scrollbar-none">
            {images.map((item, idx) => {
              const isThumbVideo = item.type === 'video';
              const thumbSrc = isThumbVideo ? (item.poster || item.src) : item.src;
              return (
                <button
                  key={idx}
                  onClick={() => onNavigate(idx)}
                  className={`relative w-12 h-12 sm:w-16 sm:h-16 rounded-lg overflow-hidden border-2 transition-all duration-200 shrink-0 ${
                    currentIndex === idx
                      ? 'border-[#C9A86A] scale-105 shadow-glow-gold'
                      : 'border-white/30 opacity-60 hover:opacity-100'
                  }`}
                  aria-label={`View Item ${idx + 1}`}
                >
                  {isThumbVideo && !item.poster ? (
                    <video src={item.src} className="w-full h-full object-cover" muted />
                  ) : (
                    <img
                      src={thumbSrc}
                      alt={item.alt}
                      className="w-full h-full object-cover"
                    />
                  )}
                  {isThumbVideo && (
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <Play className="w-4 h-4 text-[#C9A86A] fill-[#C9A86A]" />
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          <span className="text-[10px] text-gray-400 sm:hidden">
            Swipe left/right to navigate • Tap outside to close
          </span>
        </div>

      </div>
    </div>
  );
};
