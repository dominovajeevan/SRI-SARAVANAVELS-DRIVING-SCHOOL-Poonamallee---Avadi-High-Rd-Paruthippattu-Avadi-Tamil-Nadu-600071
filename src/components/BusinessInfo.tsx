import React, { useState, useEffect } from 'react';
import { MapPin, Calendar, Star, Car, Users, Clock, CreditCard, Building2, Phone } from 'lucide-react';
import { getBusinessStatus, type BusinessStatus, PHONE_NUMBER, TEL_LINK, BUSINESS_NAME_EN, BUSINESS_NAME_TA } from '../utils/businessStatus';

export const BusinessInfo: React.FC = () => {
  const [status, setStatus] = useState<BusinessStatus>(getBusinessStatus());

  useEffect(() => {
    const timer = setInterval(() => setStatus(getBusinessStatus()), 60000);
    return () => clearInterval(timer);
  }, []);

  const schedule = [
    { day: "Monday", hours: "9:00 AM – 8:00 PM" },
    { day: "Tuesday", hours: "9:00 AM – 8:00 PM" },
    { day: "Wednesday", hours: "9:00 AM – 8:00 PM" },
    { day: "Thursday", hours: "9:00 AM – 8:00 PM" },
    { day: "Friday", hours: "9:00 AM – 8:00 PM" },
    { day: "Saturday", hours: "9:00 AM – 8:00 PM" },
    { day: "Sunday", hours: "Closed" },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#FAF7F2] bg-celestial-pattern relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#4B2E5E] bg-[#F3EFE7] px-3 py-1 rounded-full border border-[#C9A86A]/40 shadow-sm">
            VERIFIED ACADEMY DATA
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#4B2E5E] tracking-tight">
            Business Information & <span className="gradient-text-gold">Hours</span>
          </h2>
          <p className="text-[#665E6E] text-base sm:text-lg">
            Essential operational details for SRI SARAVANAVELS DRIVING SCHOOL.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Business Details Card */}
          <div className="lg:col-span-6 bg-white border border-[#E8DEC8] hover:border-[#C9A86A] rounded-2xl p-6 sm:p-8 shadow-celestial-card flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6 pb-6 border-b border-[#E8DEC8]">
                <div className="w-12 h-12 rounded-xl bg-[#4B2E5E] border border-[#C9A86A]/50 flex items-center justify-center text-[#C9A86A] shadow-sm">
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#4B2E5E]">{BUSINESS_NAME_EN}</h3>
                  <span className="text-sm font-semibold text-[#72548C] block">{BUSINESS_NAME_TA}</span>
                  <span className="text-xs text-[#C9A86A] font-bold">Paruthippattu, Avadi Branch</span>
                </div>
              </div>

              <div className="space-y-4">
                
                <div className="flex items-start gap-3.5">
                  <MapPin className="w-5 h-5 text-[#C9A86A] shrink-0 mt-1" />
                  <div>
                    <span className="text-xs font-bold text-[#665E6E] uppercase tracking-wider block">Address</span>
                    <span className="text-sm text-[#27232A] leading-snug block font-medium">
                      Poonamallee - Avadi High Rd, Paruthippattu, Avadi, Tamil Nadu 600071
                    </span>
                    <span className="text-xs text-[#4B2E5E] font-semibold block mt-0.5">Landmark: Near RTO Office</span>
                  </div>
                </div>

                <div className="flex items-center gap-3.5">
                  <Phone className="w-5 h-5 text-[#C9A86A] shrink-0" />
                  <div>
                    <span className="text-xs font-bold text-[#665E6E] uppercase tracking-wider block">Phone Contact</span>
                    <a href={TEL_LINK} className="text-base font-black text-[#4B2E5E] hover:text-[#C9A86A]">
                      📞 {PHONE_NUMBER}
                    </a>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="flex items-center gap-3 bg-[#FAF7F2] p-3 rounded-xl border border-[#E8DEC8]">
                    <Calendar className="w-4 h-4 text-[#C9A86A]" />
                    <div>
                      <span className="text-[10px] text-[#665E6E] block font-semibold">Established</span>
                      <span className="text-sm font-bold text-[#4B2E5E]">2011</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 bg-[#FAF7F2] p-3 rounded-xl border border-[#E8DEC8]">
                    <Star className="w-4 h-4 text-[#C9A86A] fill-[#C9A86A]" />
                    <div>
                      <span className="text-[10px] text-[#665E6E] block font-semibold">Rating</span>
                      <span className="text-sm font-bold text-[#4B2E5E]">4.4 / 5 (48)</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 bg-[#FAF7F2] p-3 rounded-xl border border-[#E8DEC8]">
                    <Car className="w-4 h-4 text-[#C9A86A]" />
                    <div>
                      <span className="text-[10px] text-[#665E6E] block font-semibold">Specialization</span>
                      <span className="text-xs font-bold text-[#4B2E5E]">Motor Training</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 bg-[#FAF7F2] p-3 rounded-xl border border-[#E8DEC8]">
                    <Users className="w-4 h-4 text-[#C9A86A]" />
                    <div>
                      <span className="text-[10px] text-[#665E6E] block font-semibold">Demographic</span>
                      <span className="text-xs font-bold text-[#4B2E5E]">Male & Women</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex items-start gap-3 bg-[#F3EFE7] p-3.5 rounded-xl border border-[#C9A86A]/40">
                  <CreditCard className="w-5 h-5 text-[#C9A86A] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold text-[#4B2E5E] uppercase tracking-wider block">Accepted Payment Modes</span>
                    <span className="text-xs text-[#27232A] font-semibold block mt-0.5">Cash, Cheque, Demand Draft</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Opening Hours Schedule Card */}
          <div className="lg:col-span-6 bg-white border border-[#E8DEC8] hover:border-[#C9A86A] rounded-2xl p-6 sm:p-8 shadow-celestial-card flex flex-col justify-between">
            <div>
              
              {/* Header with Live Ticker */}
              <div className="flex items-center justify-between mb-6 pb-6 border-b border-[#E8DEC8]">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#4B2E5E] border border-[#C9A86A]/50 flex items-center justify-center text-[#C9A86A] shadow-sm">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#4B2E5E]">Opening Hours</h3>
                    <span className="text-xs text-[#665E6E]">Weekly Training Schedule</span>
                  </div>
                </div>

                <div className="text-right">
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${
                    status.isOpen 
                      ? 'bg-emerald-500/15 text-emerald-700 border border-emerald-500/40' 
                      : 'bg-rose-500/15 text-rose-700 border border-rose-500/40'
                  }`}>
                    <span className={`w-2 h-2 rounded-full ${status.isOpen ? 'bg-emerald-600 animate-ping' : 'bg-rose-600'}`} />
                    {status.isOpen ? 'OPEN NOW' : 'CLOSED NOW'}
                  </span>
                  <span className="block text-[11px] text-[#4B2E5E] mt-1 font-bold">
                    {status.nextChangeText}
                  </span>
                </div>
              </div>

              {/* Schedule List */}
              <div className="space-y-2.5">
                {schedule.map((item, idx) => {
                  const isToday = new Date().getDay() === (idx === 6 ? 0 : idx + 1);
                  return (
                    <div
                      key={idx}
                      className={`flex items-center justify-between p-3 rounded-xl transition-colors ${
                        isToday 
                          ? 'bg-[#4B2E5E] text-[#FAF7F2] font-bold shadow-sm' 
                          : 'bg-[#FAF7F2] border border-[#E8DEC8] text-[#27232A]'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        {isToday && <span className="w-1.5 h-1.5 rounded-full bg-[#C9A86A]" />}
                        <span className="text-sm">{item.day}</span>
                        {isToday && <span className="text-[10px] uppercase font-bold text-[#27232A] bg-[#C9A86A] px-2 py-0.5 rounded">Today</span>}
                      </div>
                      <span className={`text-sm ${item.hours === 'Closed' ? 'text-rose-400 font-semibold' : isToday ? 'text-[#E7D4A8]' : 'text-[#4B2E5E] font-semibold'}`}>
                        {item.hours}
                      </span>
                    </div>
                  );
                })}
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
