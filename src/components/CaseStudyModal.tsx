import React, { useEffect, useState } from 'react';
import { CaseStudy, FEATURED_PROJECT, PROJECTS } from '../data/portfolioData';

interface CaseStudyModalProps {
  project: CaseStudy | null;
  onClose: () => void;
  onSelectProject: (project: CaseStudy) => void;
  onInquire: (serviceType: string) => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  project,
  onClose,
  onSelectProject,
  onInquire,
}) => {
  const [copiedColor, setCopiedColor] = useState<string | null>(null);

  // Combine all projects for prev/next navigation
  const allProjects = [FEATURED_PROJECT, ...PROJECTS];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const currentIndex = allProjects.findIndex((p) => p.id === project.id);
  const prevProject = currentIndex > 0 ? allProjects[currentIndex - 1] : allProjects[allProjects.length - 1];
  const nextProject = currentIndex < allProjects.length - 1 ? allProjects[currentIndex + 1] : allProjects[0];

  const handleCopyColor = (color: string) => {
    navigator.clipboard.writeText(color);
    setCopiedColor(color);
    setTimeout(() => setCopiedColor(null), 2000);
  };

  const handleInquireClick = () => {
    let serviceValue = 'other';
    if (project.category === 'social') serviceValue = 'social-media';
    else if (project.category === 'branding') serviceValue = 'branding';
    else if (project.category === 'posters') serviceValue = 'posters';
    else if (project.category === 'campaigns') serviceValue = 'campaign';

    onClose();
    onInquire(serviceValue);
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#4e2231]/60 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 lg:p-8 overflow-y-auto animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl max-h-[92vh] bg-white rounded-3xl shadow-[0_24px_60px_rgba(217,139,160,0.3)] border border-[#ffd9e2] overflow-y-auto flex flex-col p-6 sm:p-8 lg:p-10 my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar: Navigation & Close */}
        <div className="flex items-center justify-between pb-4 border-b border-[#ffe8ed]">
          <div className="flex items-center gap-2">
            <button
              onClick={() => onSelectProject(prevProject)}
              className="p-2 rounded-full bg-[#fff0f2] hover:bg-[#ffe1e7] text-[#524346] transition-colors flex items-center justify-center text-xs"
              title={`Previous: ${prevProject.title}`}
            >
              <span className="material-symbols-outlined text-base">chevron_left</span>
            </button>
            <span className="text-xs text-[#80515d] font-semibold">
              Project {currentIndex + 1} of {allProjects.length}
            </span>
            <button
              onClick={() => onSelectProject(nextProject)}
              className="p-2 rounded-full bg-[#fff0f2] hover:bg-[#ffe1e7] text-[#524346] transition-colors flex items-center justify-center text-xs"
              title={`Next: ${nextProject.title}`}
            >
              <span className="material-symbols-outlined text-base">chevron_right</span>
            </button>
          </div>

          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-[#fff0f2] hover:bg-[#ffe1e7] text-[#350d1c] flex items-center justify-center transition-colors focus:outline-none"
            aria-label="Close dialog"
          >
            <span className="material-symbols-outlined text-xl">close</span>
          </button>
        </div>

        {/* Modal Header */}
        <div className="flex flex-col gap-3 pt-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3.5 py-1 rounded-full bg-[#ffd9e1] text-[#3a071b] text-xs font-bold">
              {project.categoryLabel}
            </span>
            <span className="text-xs text-[#80515d] font-semibold">✦ {project.year}</span>
            <span className="text-xs text-[#80515d] font-medium">• Kathmandu, Nepal</span>
          </div>

          <h2 className="font-headline text-3xl sm:text-4xl font-bold text-[#350d1c] leading-tight">
            {project.title}
          </h2>

          <div className="flex flex-wrap gap-4 text-xs font-semibold text-[#8a4b5c] pt-1">
            <span className="bg-[#fff0f2] px-3 py-1 rounded-full border border-[#ffd9e2]">
              <strong className="text-[#350d1c]">Role:</strong> {project.role}
            </span>
            <span className="bg-[#fff0f2] px-3 py-1 rounded-full border border-[#ffd9e2]">
              <strong className="text-[#350d1c]">Tools:</strong> {project.tools}
            </span>
          </div>

          <p className="text-base text-[#524346] mt-2 leading-relaxed">
            {project.overview}
          </p>
        </div>

        {/* Hero Artwork Frame */}
        <div className="w-full my-6 rounded-2xl overflow-hidden bg-[#fff0f2] border border-[#ffd9e2] shadow-sm max-h-[420px]">
          <img
            src={project.image}
            alt={project.altText}
            className="w-full h-full object-cover object-center max-h-[420px]"
          />
        </div>

        {/* Challenge & Solution Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-2">
          <div className="p-5 rounded-2xl bg-[#fff0f2] border border-[#ffd9e2] flex flex-col gap-2">
            <div className="flex items-center gap-2 text-xs font-bold text-[#ba1a1a] uppercase tracking-wider">
              <span className="material-symbols-outlined text-base">report_problem</span>
              <span>The Creative Challenge</span>
            </div>
            <p className="text-sm text-[#524346] leading-relaxed">
              {project.challenge}
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#fff0f2] border border-[#ffd9e2] flex flex-col gap-2">
            <div className="flex items-center gap-2 text-xs font-bold text-[#8a4b5c] uppercase tracking-wider">
              <span className="material-symbols-outlined text-base">lightbulb</span>
              <span>The Strategic Solution</span>
            </div>
            <p className="text-sm text-[#524346] leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Documented Impact & Results Badge */}
        <div className="p-5 rounded-2xl bg-[#ffe1e7]/70 border border-[#f4a6b8]/70 flex flex-col gap-1.5 my-3">
          <div className="flex items-center gap-2 text-xs font-bold text-[#703346] uppercase tracking-wider">
            <span className="material-symbols-outlined text-base">analytics</span>
            <span>Documented Impact &amp; Results</span>
          </div>
          <p className="font-headline text-lg sm:text-xl text-[#350d1c] font-bold">
            {project.metrics}
          </p>
        </div>

        {/* Deliverables Checklist */}
        <div className="my-3">
          <h4 className="text-xs font-bold uppercase tracking-wider text-[#80515d] mb-3">
            Key Deliverables &amp; Asset Scope
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {project.deliverables.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-[#ffd9e2] shadow-xs text-xs text-[#350d1c]"
              >
                <span className="material-symbols-outlined text-sm text-[#8a4b5c] shrink-0 mt-0.5">
                  check_circle
                </span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Color Palette Swatches */}
        <div className="my-4 p-4 rounded-2xl bg-[#fff0f2] border border-[#ffd9e2] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#80515d]">
              Color Harmony Palette
            </span>
            <p className="text-[11px] text-[#524346]">Click any swatch to copy HEX value</p>
          </div>
          <div className="flex items-center gap-2">
            {project.palette.map((hex, i) => (
              <button
                key={i}
                onClick={() => handleCopyColor(hex)}
                className="group relative flex items-center justify-center w-10 h-10 rounded-full border-2 border-white shadow-xs transition-transform hover:scale-110 focus:outline-none"
                style={{ backgroundColor: hex }}
                title={`Copy ${hex}`}
              >
                {copiedColor === hex && (
                  <span className="absolute -top-7 px-2 py-0.5 rounded bg-[#350d1c] text-white text-[10px] font-bold">
                    Copied!
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Client Quote / Testimonial if present */}
        {project.clientQuote && (
          <div className="my-3 p-5 rounded-2xl bg-white border border-[#ffd9e2] shadow-xs flex flex-col gap-2">
            <span className="text-2xl text-[#8a4b5c] font-headline italic">“</span>
            <p className="font-headline text-base text-[#350d1c] italic leading-relaxed -mt-3">
              {project.clientQuote.text}
            </p>
            <div className="pt-2 border-t border-[#ffe8ed] flex items-center justify-between text-xs">
              <span className="font-bold text-[#350d1c]">{project.clientQuote.author}</span>
              <span className="text-[#80515d]">{project.clientQuote.role}</span>
            </div>
          </div>
        )}

        {/* Bottom CTA Bar */}
        <div className="pt-6 mt-4 border-t border-[#ffe8ed] flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <button
              onClick={() => onSelectProject(prevProject)}
              className="px-4 py-2 rounded-full border border-[#ffd9e2] text-xs font-semibold text-[#524346] hover:bg-[#fff0f2] transition-colors"
            >
              ← Previous
            </button>
            <button
              onClick={() => onSelectProject(nextProject)}
              className="px-4 py-2 rounded-full border border-[#ffd9e2] text-xs font-semibold text-[#524346] hover:bg-[#fff0f2] transition-colors"
            >
              Next Project →
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-full border border-[#ffd9e2] text-xs font-semibold text-[#524346] hover:bg-[#fff0f2] transition-colors"
            >
              Close
            </button>
            <button
              onClick={handleInquireClick}
              className="px-6 py-2.5 rounded-full bg-[#8a4b5c] text-white text-xs font-bold tracking-wide shadow-md hover:bg-[#733949] transition-all flex items-center gap-1.5"
            >
              <span>Inquire for Similar Project</span>
              <span className="material-symbols-outlined text-sm">north_east</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
