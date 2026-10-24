import React, { useState, useEffect } from 'react';

export const Footer: React.FC = () => {
  const [nepalTime, setNepalTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      // Calculate Nepal Time (UTC+5:45)
      const now = new Date();
      const utcTime = now.getTime() + now.getTimezoneOffset() * 60000;
      const nepalOffset = 5.75 * 3600000; // 5 hours 45 mins
      const nepalDate = new Date(utcTime + nepalOffset);

      const hours = nepalDate.getHours().toString().padStart(2, '0');
      const minutes = nepalDate.getMinutes().toString().padStart(2, '0');
      const ampm = nepalDate.getHours() >= 12 ? 'PM' : 'AM';

      setNepalTime(`${hours}:${minutes} ${ampm} NPT`);
    };

    updateTime();
    const interval = setInterval(updateTime, 10000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#fff0f2] shadow-[0_-1px_12px_rgba(217,139,160,0.05)] border-t border-[#ffd9e2]/80 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
        {/* Brand Signoff */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <p className="font-headline text-2xl font-bold text-[#350d1c]">
            Designed with <span className="text-[#8a4b5c]">🌸</span> by Salina Risal
          </p>
          <p className="text-xs text-[#524346]">
            Editorial Graphic Design &amp; Digital Marketing Portfolio
          </p>
        </div>

        {/* Live Nepal Time Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#ffd9e2] shadow-xs text-xs">
          <span className="text-[#8a4b5c] font-bold">✦ Kathmandu, Nepal</span>
          <span className="w-1 h-1 rounded-full bg-[#8a4b5c]"></span>
          <span className="font-mono text-[#350d1c] font-semibold">{nepalTime || 'UTC+5:45'}</span>
        </div>

        {/* Social Links & Back to Top */}
        <div className="flex items-center gap-4 text-xs font-semibold">
          <a
            className="text-[#524346] hover:text-[#8a4b5c] transition-colors"
            href="https://instagram.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            Instagram
          </a>
          <span className="text-[#e7acba]">•</span>
          <a
            className="text-[#524346] hover:text-[#8a4b5c] transition-colors"
            href="https://linkedin.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            LinkedIn
          </a>
          <span className="text-[#e7acba]">•</span>
          <a
            className="text-[#524346] hover:text-[#8a4b5c] transition-colors"
            href="https://behance.net"
            rel="noopener noreferrer"
            target="_blank"
          >
            Behance
          </a>
          <span className="text-[#e7acba]">•</span>
          <button
            onClick={scrollToTop}
            className="p-1.5 rounded-full bg-white hover:bg-[#ffe1e7] text-[#8a4b5c] transition-colors"
            title="Back to top"
          >
            <span className="material-symbols-outlined text-sm">arrow_upward</span>
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 pt-6 border-t border-[#ffe8ed] text-center">
        <p className="text-xs text-[#80515d]">
          © 2025 Salina Risal. Crafted with poise, creative flair, and quiet luxury.
        </p>
      </div>
    </footer>
  );
};
