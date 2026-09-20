import React, { useState, useEffect } from 'react';
import { X, CheckCircle, Send } from 'lucide-react';
import type { EnquiryFormData } from '../types';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({ isOpen, onClose, initialService }) => {
  const [formData, setFormData] = useState<EnquiryFormData>({
    fullName: '',
    phone: '',
    preferredTraining: initialService || 'Motor Training',
    experienceLevel: 'Beginner',
    preferredTime: 'Morning (9 AM - 12 PM)',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, preferredTraining: initialService }));
    }
  }, [initialService]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      
      <div className="relative w-full max-w-xl bg-brand-card border border-amber-500/40 rounded-3xl p-6 sm:p-8 shadow-glow-gold overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white border border-brand-border transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="text-center py-8 space-y-4 animate-scaleUp">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto shadow-glow-emerald">
              <CheckCircle className="w-10 h-10" />
            </div>
            
            <h3 className="text-2xl font-bold text-white">Enquiry Received!</h3>
            
            <p className="text-sm text-gray-300 max-w-md mx-auto leading-relaxed">
              Thank you, <strong className="text-amber-400">{formData.fullName}</strong>. Your enquiry for <strong className="text-white">{formData.preferredTraining}</strong> has been noted.
            </p>

            <div className="bg-[#080A10]/70 p-4 rounded-2xl border border-brand-border text-left space-y-2 text-xs text-gray-400">
              <div className="flex items-center justify-between text-gray-300">
                <span>Selected Training:</span>
                <span className="font-bold text-amber-400">{formData.preferredTraining}</span>
              </div>
              <div className="flex items-center justify-between text-gray-300">
                <span>Experience Level:</span>
                <span className="font-bold text-white">{formData.experienceLevel}</span>
              </div>
              <div className="flex items-center justify-between text-gray-300">
                <span>Preferred Contact Window:</span>
                <span className="font-bold text-white">{formData.preferredTime}</span>
              </div>
            </div>

            <p className="text-xs text-amber-400 font-medium">
              Note: SRI SARAVANAVELS DRIVING SCHOOL representatives will connect with you during business hours.
            </p>

            <button
              onClick={handleReset}
              className="mt-4 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-bold text-sm px-8 py-3 rounded-xl shadow-glow-gold"
            >
              Close Window
            </button>
          </div>
        ) : (
          <div>
            
            {/* Modal Header */}
            <div className="mb-6">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-400 block mb-1">
                SRI SARAVANAVELS DRIVING SCHOOL
              </span>
              <h3 className="text-2xl font-extrabold text-white">
                Course & Admission Enquiry
              </h3>
              <p className="text-xs text-gray-400 mt-1">
                Paruthippattu, Avadi Branch • Personalized Motor Training
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Full Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full bg-[#080A10] border border-brand-border focus:border-amber-500 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="10-digit mobile number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#080A10] border border-brand-border focus:border-amber-500 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Preferred Training Dropdown */}
              <div>
                <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
                  Preferred Training *
                </label>
                <select
                  value={formData.preferredTraining}
                  onChange={(e) => setFormData({ ...formData, preferredTraining: e.target.value })}
                  className="w-full bg-[#080A10] border border-brand-border focus:border-amber-500 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none transition-colors"
                >
                  <option value="Motor Training">Motor Training (Four Wheeler)</option>
                  <option value="Motor Training for Two Wheelers">Motor Training for Two Wheelers</option>
                  <option value="Driving License Consultation">Driving License Consultation</option>
                  <option value="Women Driver Training">Women Driver Training</option>
                  <option value="Other">Other Custom Enquiry</option>
                </select>
              </div>

              {/* Experience Level & Contact Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
                    Experience Level
                  </label>
                  <select
                    value={formData.experienceLevel}
                    onChange={(e) => setFormData({ ...formData, experienceLevel: e.target.value })}
                    className="w-full bg-[#080A10] border border-brand-border focus:border-amber-500 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none transition-colors"
                  >
                    <option value="Beginner">Beginner (Never Driven)</option>
                    <option value="Some Experience">Some Basic Experience</option>
                    <option value="Experienced / Refresher">Experienced / Refresher</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
                    Preferred Contact Time
                  </label>
                  <select
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="w-full bg-[#080A10] border border-brand-border focus:border-amber-500 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none transition-colors"
                  >
                    <option value="Morning (9 AM - 12 PM)">Morning (9 AM - 12 PM)</option>
                    <option value="Afternoon (12 PM - 4 PM)">Afternoon (12 PM - 4 PM)</option>
                    <option value="Evening (4 PM - 8 PM)">Evening (4 PM - 8 PM)</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
                  Message / Special Request (Optional)
                </label>
                <textarea
                  rows={3}
                  placeholder="Mention any specific requirements or questions..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-[#080A10] border border-brand-border focus:border-amber-500 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none transition-colors resize-none"
                />
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-bold text-sm py-3.5 rounded-xl shadow-glow-gold transition-all flex items-center justify-center gap-2 mt-2"
              >
                <Send className="w-4 h-4" />
                <span>Submit Enquiry</span>
              </button>

            </form>

          </div>
        )}

      </div>

    </div>
  );
};
