import React, { useState } from 'react';
import { SERVICES, ServiceItem } from '../data/portfolioData';

interface ServicesProps {
  onSelectService: (serviceKey: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const [activeServiceDetails, setActiveServiceDetails] = useState<ServiceItem | null>(null);

  const getIconBackground = (index: number) => {
    switch (index) {
      case 0:
        return 'bg-[#ffd9e1] text-[#703346]';
      case 1:
        return 'bg-[#ffd9e0] text-[#38091a]';
      case 2:
        return 'bg-[#ffd9e1] text-[#32101b]';
      default:
        return 'bg-[#ffe1e7] text-[#703346]';
    }
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24" id="services">
      <div className="flex flex-col gap-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto flex flex-col items-center gap-2">
          <span className="text-xs font-bold text-[#8a4b5c] tracking-widest uppercase">
            Expertise &amp; Offerings
          </span>
          <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold text-[#350d1c] tracking-tight">
            Designed with Strategy, Built with Grace
          </h2>
          <p className="text-base text-[#524346] leading-relaxed">
            Elevating creative ventures from initial moodboards to fully functioning cross-platform digital campaigns.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => (
            <div
              key={service.id}
              className="p-6 sm:p-7 rounded-2xl bg-white shadow-[0_8px_30px_rgba(217,139,160,0.08)] hover:shadow-[0_16px_36px_rgba(217,139,160,0.18)] border border-[#ffd9e2] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between gap-6 group"
            >
              <div className="flex flex-col gap-4">
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-105 ${getIconBackground(
                    index
                  )}`}
                >
                  <span className="material-symbols-outlined text-2xl">{service.icon}</span>
                </div>

                <h3 className="font-headline text-xl text-[#350d1c] font-bold group-hover:text-[#8a4b5c] transition-colors">
                  {service.title}
                </h3>

                <p className="text-sm text-[#524346] leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#ffe8ed] flex flex-col gap-3">
                <div className="flex items-center gap-1.5 text-xs text-[#8a4b5c] font-bold">
                  <span>✦ {service.tagline}</span>
                </div>

                <div className="flex items-center justify-between pt-1">
                  <button
                    onClick={() => setActiveServiceDetails(service)}
                    className="text-xs text-[#80515d] hover:text-[#350d1c] font-semibold underline underline-offset-2"
                  >
                    View Deliverables
                  </button>

                  <button
                    onClick={() => onSelectService(service.selectValue)}
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#fff0f2] hover:bg-[#8a4b5c] text-[#8a4b5c] hover:text-white text-xs font-bold transition-all"
                  >
                    <span>Request</span>
                    <span className="material-symbols-outlined text-xs">arrow_forward</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Deliverables Detail Modal */}
      {activeServiceDetails && (
        <div
          className="fixed inset-0 z-50 bg-[#4e2231]/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in"
          onClick={() => setActiveServiceDetails(null)}
        >
          <div
            className="w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#ffd9e2] flex flex-col gap-5"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-[#ffe8ed]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#ffd9e1] flex items-center justify-center text-[#703346]">
                  <span className="material-symbols-outlined text-xl">{activeServiceDetails.icon}</span>
                </div>
                <div>
                  <h4 className="font-headline text-lg font-bold text-[#350d1c]">
                    {activeServiceDetails.title}
                  </h4>
                  <p className="text-xs text-[#8a4b5c] font-medium">{activeServiceDetails.tagline}</p>
                </div>
              </div>
              <button
                onClick={() => setActiveServiceDetails(null)}
                className="w-8 h-8 rounded-full bg-[#fff0f2] flex items-center justify-center text-[#524346] hover:bg-[#ffe1e7]"
              >
                ✕
              </button>
            </div>

            <p className="text-sm text-[#524346] leading-relaxed">
              {activeServiceDetails.description}
            </p>

            <div className="flex flex-col gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#80515d]">
                Standard Project Deliverables:
              </span>
              <div className="space-y-2">
                {activeServiceDetails.deliverables.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 p-3 rounded-xl bg-[#fff0f2] text-xs text-[#350d1c]"
                  >
                    <span className="material-symbols-outlined text-sm text-[#8a4b5c] mt-0.5">
                      check_circle
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2 flex items-center justify-between">
              <span className="text-xs text-[#80515d]">Custom turnaround: 3–7 business days</span>
              <button
                onClick={() => {
                  const val = activeServiceDetails.selectValue;
                  setActiveServiceDetails(null);
                  onSelectService(val);
                }}
                className="px-5 py-2.5 rounded-full bg-[#8a4b5c] text-white text-xs font-bold shadow-md hover:bg-[#733949] transition-all"
              >
                Start Inquiring
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
