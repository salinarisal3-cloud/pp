import React, { useState } from 'react';
import { COMPETENCIES } from '../data/portfolioData';

interface AboutProps {
  onContactClick: () => void;
}

export const About: React.FC<AboutProps> = ({ onContactClick }) => {
  const [showStoryModal, setShowStoryModal] = useState(false);

  return (
    <section className="w-full bg-[#fff0f2]/50 py-16 lg:py-24 border-y border-[#ffd9e2]/50" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Portrait Frame & Floating Badges */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-white shadow-[0_20px_50px_rgba(217,139,160,0.22)] border border-[#ffd9e2] p-2.5">
                <div className="w-full h-full rounded-2xl overflow-hidden relative group">
                  <img
                    alt="Portrait of Salina Risal"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSBlOQtGvcWw6ef5g_SBQwld-gCYRy8tGrN2DTjKBqnusvhuxhnk_zYKKIo9CsgD5dlRQEUlFUqP3nKNM9qI9a2ueBEOO0gmEh1kvLsmSBjbZ6SALli2FQELQKvCZx_zRUUU3t1o9pEHKXax5CnrcIbD44A8t1KeN23fAImUXbTGuzSceYKC-bTPP154xKyk11bTlrsQfQalBxQXGJ_j7xOHCSaINWxgOtsZyCwCCmy3-tGlyuNL_7"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#350d1c]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <span className="text-white text-xs font-semibold">Salina Risal • Kathmandu, Nepal</span>
                  </div>
                </div>
              </div>

              {/* Floating Pill Badge */}
              <div className="absolute -bottom-4 -right-2 sm:-right-4 px-5 py-2.5 rounded-full bg-white text-[#350d1c] font-semibold text-xs shadow-[0_10px_30px_rgba(217,139,160,0.25)] border border-[#ffd9e2] flex items-center gap-2">
                <span>Open for Collaborations</span>
                <span className="text-[#8a4b5c] text-sm animate-pulse">🌸</span>
              </div>

              {/* Decorative Accent */}
              <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-[#ffd9e1] border border-[#f4a6b8] flex items-center justify-center text-[#703346] shadow-sm">
                <span className="material-symbols-outlined text-sm">auto_awesome</span>
              </div>
            </div>
          </div>

          {/* Right Column: Story, Background & Skills */}
          <div className="lg:col-span-7 flex flex-col gap-6 mt-4 lg:mt-0">
            <div className="flex flex-col gap-1.5">
              <span className="text-xs font-bold text-[#8a4b5c] tracking-widest uppercase">
                Meet Salina
              </span>
              <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold text-[#350d1c] tracking-tight leading-tight">
                Designing with heart, building with code.
              </h2>
            </div>

            <p className="text-base sm:text-lg text-[#524346] leading-relaxed">
              I am a fast-learning creative residing in Kathmandu who thrives at the intersection of aesthetic design and purposeful technology. Currently pursuing my BSc (Hons) in Information Technology at Lord Buddha Education Foundation, I bring a unique dual lens to creative work: structured computational discipline coupled with an instinct for visual emotional connection.
            </p>

            <p className="text-sm sm:text-base text-[#524346] leading-relaxed">
              Whether redesigning national NGO communication collateral or building campaign identities from scratch, my mission is to deliver work that feels intuitive, clean, and genuinely memorable.
            </p>

            {/* Education Badge Card */}
            <div className="p-5 rounded-2xl bg-white shadow-[0_4px_20px_rgba(217,139,160,0.08)] border border-[#ffd9e2] flex items-start gap-4">
              <div className="p-3 rounded-xl bg-[#ffd9e1] text-[#703346] mt-0.5 shrink-0">
                <span className="material-symbols-outlined text-xl">school</span>
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-[10px] text-[#8a4b5c] uppercase font-bold tracking-wider">
                  Education
                </span>
                <h4 className="font-headline text-base sm:text-lg text-[#350d1c] font-bold">
                  BSc (Hons) Information Technology
                </h4>
                <p className="text-xs text-[#524346]">
                  Lord Buddha Education Foundation, Kathmandu • (2026 – Present)
                </p>
              </div>
            </div>

            {/* Skills Pill Badges */}
            <div className="flex flex-col gap-2.5">
              <span className="text-xs font-bold text-[#80515d] uppercase tracking-wider">
                Core Tools &amp; Competencies
              </span>
              <div className="flex flex-wrap gap-2">
                {COMPETENCIES.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3.5 py-1.5 rounded-full bg-white border border-[#ffd9e2] text-xs font-semibold text-[#524346] shadow-xs hover:border-[#8a4b5c] hover:text-[#8a4b5c] transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Quick facts */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-[#ffe8ed]">
              <div>
                <span className="text-xs font-semibold text-[#80515d]">Languages</span>
                <p className="font-headline text-base text-[#350d1c] font-bold">
                  English (Fluent) • Nepali (Native)
                </p>
              </div>
              <div>
                <span className="text-xs font-semibold text-[#80515d]">Base Location</span>
                <p className="font-headline text-base text-[#350d1c] font-bold">
                  Kathmandu, Bagmati, Nepal
                </p>
              </div>
            </div>

            {/* Action Row */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => setShowStoryModal(true)}
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-white border border-[#ffd9e2] hover:bg-[#ffe1e7] text-xs font-bold text-[#350d1c] transition-colors shadow-xs"
              >
                <span className="material-symbols-outlined text-sm text-[#8a4b5c]">auto_stories</span>
                <span>Read Full Creative Story</span>
              </button>

              <button
                onClick={onContactClick}
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#8a4b5c] text-white hover:bg-[#733949] text-xs font-bold transition-colors shadow-sm"
              >
                <span>Collaborate with Salina</span>
                <span className="material-symbols-outlined text-sm">north_east</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Full Creative Story Modal */}
      {showStoryModal && (
        <div
          className="fixed inset-0 z-50 bg-[#4e2231]/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in"
          onClick={() => setShowStoryModal(false)}
        >
          <div
            className="w-full max-w-2xl bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#ffd9e2] max-h-[90vh] overflow-y-auto flex flex-col gap-5"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-[#ffe8ed]">
              <div>
                <span className="text-[10px] text-[#8a4b5c] uppercase font-bold tracking-wider">
                  Biography &amp; Creative Lens
                </span>
                <h3 className="font-headline text-2xl font-bold text-[#350d1c]">
                  Salina Risal’s Design Philosophy
                </h3>
              </div>
              <button
                onClick={() => setShowStoryModal(false)}
                className="w-8 h-8 rounded-full bg-[#fff0f2] flex items-center justify-center text-[#524346] hover:bg-[#ffe1e7]"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4 text-sm text-[#524346] leading-relaxed">
              <p>
                Growing up in Kathmandu, I have always been captivated by the vibrant interplay of heritage craftsmanship and rapidly emerging digital subcultures. In Nepal’s vibrant creative community, storytelling is an essential way of living.
              </p>
              <p>
                My academic journey in Information Technology at Lord Buddha Education Foundation gave me computational thinking, structured data logic, and an understanding of human-computer interaction. Meanwhile, my passion for graphic design and digital marketing revealed how visual rhythm, typography, and color psychology move human hearts.
              </p>
              <p>
                Over the past three years, I have worked across student initiatives, independent cafes, youth conferences, and non-profits like Origami For Good. My focus is crafting bespoke visual identities, social media architectures, and event collaterals that don’t merely look beautiful—they elevate missions and convert viewers into community advocates.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#fff0f2] border border-[#ffd9e2] flex items-center justify-between">
              <div>
                <p className="text-xs font-bold text-[#350d1c]">Looking to discuss a new project?</p>
                <p className="text-[11px] text-[#80515d]">Currently accepting selected client collaborations for 2025/2026.</p>
              </div>
              <button
                onClick={() => {
                  setShowStoryModal(false);
                  onContactClick();
                }}
                className="px-4 py-2 rounded-full bg-[#8a4b5c] text-white text-xs font-bold"
              >
                Say Hello
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
