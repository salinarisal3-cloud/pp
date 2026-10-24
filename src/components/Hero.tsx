import React from 'react';

interface HeroProps {
  onViewWork: () => void;
  onContactClick: () => void;
  onOpenFeaturedCaseStudy: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onViewWork,
  onContactClick,
  onOpenFeaturedCaseStudy,
}) => {
  return (
    <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 md:pt-12 pb-16 lg:pb-24 overflow-hidden">
      {/* Ambient Rose Glow Accents */}
      <div className="pointer-events-none absolute -top-40 -right-40 w-96 h-96 bg-[#f4a6b8]/20 rounded-full blur-3xl"></div>
      <div className="pointer-events-none absolute top-1/3 -left-40 w-80 h-80 bg-[#fdaabf]/25 rounded-full blur-3xl"></div>
      <div className="pointer-events-none absolute bottom-1/4 right-0 w-96 h-96 bg-[#ffe1e7]/40 rounded-full blur-3xl"></div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Typography & Intent */}
        <div className="lg:col-span-7 flex flex-col items-start gap-5 z-10">
          {/* Location & Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#fff0f2] text-[#80515d] text-xs font-semibold shadow-[0_2px_12px_rgba(217,139,160,0.12)] border border-[#ffd9e2]/80">
            <span className="text-[#8a4b5c] font-bold">✦</span>
            <span>Graphic Designer &amp; Digital Marketer</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#8a4b5c]/40"></span>
            <span>Kathmandu, Nepal</span>
          </div>

          {/* Monogram & Hero Headline */}
          <div className="flex flex-col gap-1 mt-1">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-[#ffd9e1] text-[#3a071b] font-headline text-lg font-bold italic shadow-xs">
                SR✦
              </span>
              <span className="text-xs uppercase tracking-widest text-[#80515d] font-bold">
                Portfolio &amp; Creative Archive
              </span>
            </div>

            <h1 className="font-headline text-4xl sm:text-5xl lg:text-6xl font-bold text-[#350d1c] tracking-tight leading-tight mt-2">
              Salina Risal
            </h1>

            <p className="font-headline text-2xl sm:text-3xl text-[#8a4b5c] italic font-normal -mt-1">
              Graphic Designer &amp; Digital Marketer
            </p>
          </div>

          {/* Narrative Tagline */}
          <p className="text-base sm:text-lg text-[#524346] max-w-xl leading-relaxed">
            I create bespoke visuals, brand narratives, and digital campaigns that make modern businesses feel seen, remembered, and admired.
          </p>

          {/* CTA Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={onViewWork}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#8a4b5c] text-white text-xs font-bold tracking-wide shadow-[0_12px_32px_-4px_rgba(217,139,160,0.35)] hover:bg-[#733949] transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>View Selected Work</span>
              <span className="material-symbols-outlined text-sm">arrow_downward</span>
            </button>

            <button
              onClick={onContactClick}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#fff0f2] text-[#350d1c] text-xs font-bold tracking-wide shadow-[0_4px_16px_rgba(217,139,160,0.12)] border border-[#ffd9e2] hover:bg-[#ffe1e7] transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Let’s Talk</span>
              <span className="material-symbols-outlined text-sm">north_east</span>
            </button>
          </div>

          {/* Quick Proof Metrics Bar */}
          <div className="w-full max-w-xl mt-4 pt-2 grid grid-cols-3 gap-4 bg-[#fff0f2]/80 backdrop-blur-sm p-4 rounded-2xl border border-[#ffd9e2]/80 shadow-[0_4px_24px_rgba(217,139,160,0.08)]">
            <div className="flex flex-col">
              <span className="font-headline text-2xl font-bold text-[#350d1c] tabular-nums">
                3+ Yrs
              </span>
              <span className="text-xs text-[#80515d] font-medium">Designing Brands</span>
            </div>
            <div className="flex flex-col border-l border-[#ffd9e2] pl-4">
              <span className="font-headline text-2xl font-bold text-[#350d1c] tabular-nums">
                50+
              </span>
              <span className="text-xs text-[#80515d] font-medium">Campaign Assets</span>
            </div>
            <div className="flex flex-col border-l border-[#ffd9e2] pl-4">
              <span className="font-headline text-2xl font-bold text-[#8a4b5c] tabular-nums">
                240%
              </span>
              <span className="text-xs text-[#80515d] font-medium">Peak Growth Boost</span>
            </div>
          </div>
        </div>

        {/* Right Column: Tactile Visual Collage */}
        <div className="lg:col-span-5 relative mt-8 lg:mt-0 flex items-center justify-center">
          <div className="relative w-full max-w-md h-[460px] flex items-center justify-center">
            {/* Back Card (Tilted Left) */}
            <div className="absolute w-60 sm:w-64 h-80 rounded-2xl overflow-hidden bg-white shadow-[0_16px_36px_rgba(217,139,160,0.18)] border border-[#ffd9e2] -rotate-6 -translate-x-8 sm:-translate-x-12 -translate-y-6 transform hover:rotate-0 transition-transform duration-500 cursor-pointer">
              <img
                alt="Minimalist soft pink editorial magazine layout"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZ8Zmk7zQ0Rp5BYdJNRosO9tAQN4JB90_3zGLbP4mQGXYuE3Vl3v7nvKNKD_jA6MTVZdPx5rpyAgAsgDRoBt0T3j6tIZbj4Q6A_suO0MHTIZaTE8OV2ldFoKTljqH1PcphQ_vCfHg0FWkX9laPnw4GhWUji3wfbt1hStFVu4uwy6BXN9CyRVq4iAvIh7PEYwfXsS3pgX4BKlX46_LdIKOAk3SkyuFe5vn3tgzp4mcNyIiimFVRKGI"
              />
              <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-[#80515d] text-[11px] font-bold shadow-xs">
                Brand Identity ✦
              </div>
            </div>

            {/* Front Card (Tilted Right) - Clickable to open featured case study */}
            <div
              onClick={onOpenFeaturedCaseStudy}
              className="group absolute w-68 sm:w-72 h-96 rounded-2xl overflow-hidden bg-white shadow-[0_24px_48px_rgba(217,139,160,0.25)] border border-[#ffd9e2] rotate-4 translate-x-6 sm:translate-x-8 translate-y-4 transform hover:rotate-0 hover:scale-102 transition-all duration-500 cursor-pointer"
            >
              <img
                alt="High-contrast editorial social media campaign preview"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWPEFOxpGfQ8hy5v7eSuONfDC0u5ZxGzDE-ep87VXhAk46ymUwGqGMyEN1WGpXrNHAe-JVF1KJhzZteTKTH2jyTNiD0ZX8FCW5L90J9-OKc5f4SXF_MTgujAqXENHCieiHwRtDJLun9dF2sHkFZZMBCX9Y1qTzzII29fXFGcrhGbrA5YaCU0RMeSinYmAADsVMDKhZ7eMILqHXydYfriZv8s38lODy8fx60k0fmpbvtPCXM5tx8RQ7"
              />
              <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-white/95 backdrop-blur-md shadow-md border border-[#ffd9e2]/80">
                <span className="text-[10px] text-[#8a4b5c] uppercase font-bold tracking-wider">
                  Featured Campaign
                </span>
                <p className="font-headline text-base text-[#350d1c] font-bold truncate">
                  Origami For Good 2025
                </p>
                <div className="flex items-center justify-between mt-1 text-[11px] text-[#8a4b5c] font-semibold">
                  <span>Explore Case Study</span>
                  <span className="material-symbols-outlined text-xs group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </div>
              </div>
            </div>

            {/* Decorative Floating Sparkle Pill */}
            <div
              className="absolute -top-4 right-2 px-4 py-2 rounded-full bg-[#ffd9e1] text-[#3a071b] border border-[#f4a6b8]/60 shadow-[0_6px_20px_rgba(217,139,160,0.25)] flex items-center gap-1.5 text-xs font-semibold animate-bounce"
              style={{ animationDuration: '4s' }}
            >
              <span className="material-symbols-outlined text-sm text-[#8a4b5c]">auto_awesome</span>
              <span>Crafted with Poise</span>
            </div>

            {/* Floating Little Badge */}
            <div className="absolute -bottom-4 -left-2 px-4 py-2 rounded-full bg-white text-[#350d1c] border border-[#ffd9e2] shadow-[0_8px_24px_rgba(217,139,160,0.16)] flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#8a4b5c] animate-ping"></span>
              <span className="text-xs font-semibold">Kathmandu Studio</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
