import React from 'react';
import { EXPERIENCES } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24" id="experience">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Timeline Header & Philosophy Card */}
        <div className="lg:col-span-4 flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <span className="text-xs font-bold text-[#8a4b5c] tracking-widest uppercase">
              Career Journey
            </span>
            <h2 className="font-headline text-3xl sm:text-4xl font-bold text-[#350d1c] tracking-tight">
              Experience &amp; Leadership
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[#524346] leading-relaxed">
            Hands-on involvement leading visual communication for youth organizations, digital agencies, and student initiatives across Kathmandu.
          </p>

          <div className="mt-4 p-6 rounded-2xl bg-[#fff0f2] border border-[#ffd9e2] flex flex-col gap-2.5 shadow-xs">
            <span className="text-[10px] text-[#8a4b5c] uppercase font-bold tracking-wider">
              Guiding Philosophy
            </span>
            <p className="font-headline text-base sm:text-lg text-[#350d1c] italic leading-relaxed">
              “Design is not just ornament; it is the bridge of empathy between an organization’s vision and its audience.”
            </p>
            <span className="text-xs text-[#80515d] font-semibold mt-1">— Salina Risal</span>
          </div>

          <div className="p-4 rounded-xl bg-white border border-[#ffd9e2] shadow-xs flex items-center gap-3 mt-2">
            <span className="material-symbols-outlined text-2xl text-[#8a4b5c]">workspace_premium</span>
            <div className="text-xs">
              <p className="font-bold text-[#350d1c]">Verified Leadership Record</p>
              <p className="text-[#80515d]">Youth mentorship &amp; community advocacy</p>
            </div>
          </div>
        </div>

        {/* Vertical Timeline Entries */}
        <div className="lg:col-span-8 relative pl-6 lg:pl-10 space-y-8">
          {/* Timeline vertical rail */}
          <div className="absolute left-2.5 top-3 bottom-3 w-0.5 bg-[#ffb1c3]"></div>

          {EXPERIENCES.map((item, index) => (
            <div key={index} className="relative pl-6 group">
              {/* Timeline Bullet */}
              <div
                className={`absolute -left-[19px] top-1.5 w-5 h-5 rounded-full ring-4 ring-[#ffe1e7] shadow-xs transition-transform group-hover:scale-125 ${
                  item.isCurrent ? 'bg-[#8a4b5c]' : 'bg-[#e7acba]'
                }`}
              ></div>

              {/* Experience Card */}
              <div className="p-6 rounded-2xl bg-white shadow-[0_8px_24px_rgba(217,139,160,0.08)] hover:shadow-[0_16px_32px_rgba(217,139,160,0.16)] border border-[#ffd9e2] flex flex-col gap-2.5 transition-all group-hover:-translate-y-0.5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-headline text-xl text-[#350d1c] font-bold">
                    {item.role}
                  </h3>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      item.isCurrent
                        ? 'bg-[#ffd9e1] text-[#703346] font-bold border border-[#f4a6b8]'
                        : 'bg-[#fff0f2] text-[#80515d]'
                    }`}
                  >
                    {item.period}
                  </span>
                </div>

                <p className="text-xs font-bold text-[#8a4b5c] tracking-wide">
                  {item.organization}
                </p>

                <p className="text-sm text-[#524346] leading-relaxed pt-1">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
