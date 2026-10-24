import React, { useState, useEffect } from 'react';

interface NavbarProps {
  onContactClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onContactClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['contact', 'experience', 'about', 'services', 'work'];
      const scrollPosition = window.scrollY + 140;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(section);
          return;
        }
      }
      setActiveSection('home');
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Work', href: '#work', id: 'work' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Services', href: '#services', id: 'services' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#fff8f8]/90 backdrop-blur-xl shadow-[0_4px_20px_rgba(217,139,160,0.12)] border-b border-[#ffe1e7]/60'
          : 'bg-[#fff8f8]/80 backdrop-blur-md'
      }`}
    >
      <div className="h-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* Zone 1: Brand Wordmark */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-2 group shrink-0"
        >
          <img
            alt="Salina Risal Wordmark Logo"
            className="h-8 w-auto object-contain"
            src="https://lh3.googleusercontent.com/aida/AEtjO1UaUzAze3nKZZYEOL1fluqQvdZ2o1yyA6gzaQxT2XqWGEmVg4cCES1ac2v_NudiJL8mll1CyKVpF16ylsKk2EFBH8Oo1jynuHdqj6YhvBsncjL2DUEF4XhqHElGHawLtZYCOSpehdrS6ADVCAr18ID_Lmk6LqoiCc90iz3jMR7l7pPGhNKmOg3h4RPPRo5R2Gev-rCFSL1MklXJ6Gw-BFaaV8VZjTzjfXULFwS66O2avkK967thzBeI7BQ"
          />
          <span className="font-headline text-2xl font-semibold text-[#350d1c] tracking-tight group-hover:text-[#8a4b5c] transition-colors">
            Salina Risal
          </span>
        </a>

        {/* Zone 2: Navigation Links (Desktop) */}
        <nav className="hidden lg:flex items-center gap-1 p-1.5 rounded-full bg-[#fff0f2] shadow-[0_4px_20px_-2px_rgba(217,139,160,0.08)] border border-[#ffd9e2]/50">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide whitespace-nowrap transition-all duration-300 ${
                  isActive
                    ? 'bg-[#8a4b5c] text-white shadow-sm'
                    : 'text-[#524346] hover:bg-[#ffe1e7] hover:text-[#350d1c]'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Actions & Status */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Availability Status Badge */}
          <div className="hidden md:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fff0f2] text-[#524346] text-xs font-medium border border-[#ffd9e2]/60 shadow-[0_2px_10px_rgba(217,139,160,0.06)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#8a4b5c] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#8a4b5c]"></span>
            </span>
            <span className="whitespace-nowrap">Available for freelance • Kathmandu</span>
          </div>

          {/* Primary CTA */}
          <button
            onClick={onContactClick}
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-[#f4a6b8] text-[#733949] text-xs font-bold tracking-wide hover:bg-[#8a4b5c] hover:text-white shadow-[0_8px_24px_-4px_rgba(217,139,160,0.28)] transition-all duration-300 whitespace-nowrap active:scale-95"
          >
            Get in Touch
          </button>

          {/* Salina Profile Avatar */}
          <div className="hidden sm:block">
            <img
              alt="Salina Risal Profile"
              className="w-8 h-8 rounded-full object-cover ring-2 ring-[#ffd9e2] shadow-[0_2px_8px_rgba(217,139,160,0.15)]"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6Fgw4L26BkIGzTpKcjZ4pMaJV35p5p8X2mMboaYBPmcgKbw4SZ80JB88LFnmg64HKydNR_zKT0fxqi7_tSZHbyX3Uzl9qgGuMyb_KwUWWHDUIXjaqS7rmrHOP4ZgwbhClEv5WZXmvicjW_OwpjAcY1FBmeiJ2WQFbAtmpY_Hd3_K43IfRw8DPMgtIxkTYRpz7EgsmnDMMMQahj6ntmpa2tK2U8iV7ZjSAh7x5omSqNv0fhZC2rJ-d"
            />
          </div>

          {/* Mobile Menu Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-full text-[#350d1c] hover:bg-[#ffe1e7] transition-colors focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            <span className="material-symbols-outlined text-2xl">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#fff8f8] border-b border-[#ffd9e2] shadow-xl px-6 py-6 transition-all duration-300 animate-in fade-in slide-in-from-top-2">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2 pb-3 border-b border-[#ffe1e7]">
              <img
                alt="Salina Risal"
                className="w-9 h-9 rounded-full object-cover ring-2 ring-[#ffd9e2]"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6Fgw4L26BkIGzTpKcjZ4pMaJV35p5p8X2mMboaYBPmcgKbw4SZ80JB88LFnmg64HKydNR_zKT0fxqi7_tSZHbyX3Uzl9qgGuMyb_KwUWWHDUIXjaqS7rmrHOP4ZgwbhClEv5WZXmvicjW_OwpjAcY1FBmeiJ2WQFbAtmpY_Hd3_K43IfRw8DPMgtIxkTYRpz7EgsmnDMMMQahj6ntmpa2tK2U8iV7ZjSAh7x5omSqNv0fhZC2rJ-d"
              />
              <div>
                <p className="font-semibold text-sm text-[#350d1c]">Salina Risal</p>
                <p className="text-xs text-[#8a4b5c]">Graphic Designer • Kathmandu</p>
              </div>
            </div>

            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`py-2 px-3 rounded-xl text-base font-medium flex items-center justify-between ${
                  activeSection === link.id
                    ? 'bg-[#ffe8ed] text-[#8a4b5c] font-semibold'
                    : 'text-[#350d1c] hover:bg-[#fff0f2]'
                }`}
              >
                <span>{link.label}</span>
                <span className="material-symbols-outlined text-sm opacity-60">arrow_forward_ios</span>
              </a>
            ))}

            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onContactClick();
                }}
                className="w-full py-3 rounded-full bg-[#8a4b5c] text-white font-semibold text-center text-sm shadow-md flex items-center justify-center gap-2"
              >
                <span>Start a Project</span>
                <span className="material-symbols-outlined text-sm">north_east</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
