import React, { useState } from 'react';
import { CaseStudy, FEATURED_PROJECT, PROJECTS } from '../data/portfolioData';

interface PortfolioShowcaseProps {
  onSelectProject: (project: CaseStudy) => void;
  onContactClick: () => void;
}

export const PortfolioShowcase: React.FC<PortfolioShowcaseProps> = ({
  onSelectProject,
  onContactClick,
}) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'social' | 'posters' | 'branding' | 'campaigns'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filterTabs = [
    { id: 'all', label: 'All Projects' },
    { id: 'social', label: 'Social Media' },
    { id: 'posters', label: 'Posters & Banners' },
    { id: 'branding', label: 'Branding' },
    { id: 'campaigns', label: 'Campaigns' },
  ];

  const filteredProjects = PROJECTS.filter((project) => {
    const matchesCategory = activeFilter === 'all' || project.category === activeFilter;
    const matchesSearch =
      searchQuery.trim() === '' ||
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.overview.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tools.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="w-full bg-[#fff0f2]/60 pt-16 lg:pt-24 pb-20 lg:pb-28 border-y border-[#ffd9e2]/50" id="work">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-10">
        {/* Section Header & Filters */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex flex-col gap-2 max-w-2xl">
            <span className="text-xs font-bold text-[#8a4b5c] tracking-widest uppercase">
              Portfolio Showcase
            </span>
            <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold text-[#350d1c] tracking-tight">
              Curated Projects &amp; Visual Stories
            </h2>
            <p className="text-base text-[#524346] leading-relaxed">
              A deliberate collection of social campaigns, visual identities, and promotional materials crafted with editorial warmth and strategic conversion intent.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-full bg-[#ffe8ed] shadow-inner border border-[#ffd9e2]">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id as any)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 ${
                  activeFilter === tab.id
                    ? 'bg-[#8a4b5c] text-white shadow-sm scale-102'
                    : 'text-[#524346] hover:bg-[#ffe1e7] hover:text-[#350d1c]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Search Bar & Project Count (Optional user convenience) */}
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-[#80515d]">
          <div className="flex items-center gap-2 bg-white px-3.5 py-1.5 rounded-full border border-[#ffd9e2] shadow-xs">
            <span className="material-symbols-outlined text-sm text-[#8a4b5c]">search</span>
            <input
              type="text"
              placeholder="Search by client, tool, or keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent outline-none text-[#350d1c] placeholder:text-[#847376] w-48 sm:w-64"
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery('')} className="text-xs hover:text-[#350d1c]">
                ✕
              </button>
            )}
          </div>
          <div className="font-medium">
            Showing <span className="font-bold text-[#8a4b5c]">{filteredProjects.length + (activeFilter === 'all' || activeFilter === 'campaigns' ? 1 : 0)}</span> curated projects
          </div>
        </div>

        {/* Large Featured Project Banner */}
        {(activeFilter === 'all' || activeFilter === 'campaigns') && searchQuery === '' && (
          <div className="w-full rounded-2xl bg-white overflow-hidden shadow-[0_16px_40px_rgba(217,139,160,0.12)] border border-[#ffd9e2] grid grid-cols-1 lg:grid-cols-12 transition-all hover:shadow-[0_24px_50px_rgba(217,139,160,0.22)]">
            {/* Showcase Artwork */}
            <div
              onClick={() => onSelectProject(FEATURED_PROJECT)}
              className="lg:col-span-7 relative min-h-[320px] lg:min-h-[460px] overflow-hidden group cursor-pointer"
            >
              <img
                alt={FEATURED_PROJECT.altText}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                src={FEATURED_PROJECT.image}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#4e2231]/60 via-transparent to-transparent lg:hidden"></div>
              <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-sm text-xs text-[#8a4b5c] font-bold shadow-md border border-[#ffd9e2]">
                ★ National Highlight 2025
              </div>
              <div className="absolute inset-0 bg-[#8a4b5c]/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="px-4 py-2 rounded-full bg-white/90 backdrop-blur-sm text-[#8a4b5c] text-xs font-bold shadow-md flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-sm">visibility</span>
                  <span>Explore Case Study</span>
                </span>
              </div>
            </div>

            {/* Case Study Meta & Summary */}
            <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between gap-6 bg-white">
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-[#ffd9e1] text-[11px] font-bold text-[#3a071b]">
                    {FEATURED_PROJECT.categoryLabel}
                  </span>
                  <span className="text-xs text-[#80515d] font-semibold">{FEATURED_PROJECT.year}</span>
                </div>

                <h3 className="font-headline text-2xl sm:text-3xl font-bold text-[#350d1c] leading-snug">
                  {FEATURED_PROJECT.title}
                </h3>

                <p className="text-sm text-[#524346] leading-relaxed">
                  {FEATURED_PROJECT.overview}
                </p>

                {/* Metadata List */}
                <div className="mt-3 space-y-2 text-xs border-t border-[#ffe8ed] pt-4">
                  <div className="flex items-center justify-between py-1 text-[#524346]">
                    <span className="text-[#80515d]">Role</span>
                    <span className="text-[#350d1c] font-semibold">{FEATURED_PROJECT.role}</span>
                  </div>
                  <div className="flex items-center justify-between py-1 text-[#524346]">
                    <span className="text-[#80515d]">Tools</span>
                    <span className="text-[#350d1c] font-semibold">{FEATURED_PROJECT.tools}</span>
                  </div>
                  <div className="flex items-center justify-between py-1 text-[#524346]">
                    <span className="text-[#80515d]">Impact</span>
                    <span className="text-[#8a4b5c] font-bold">{FEATURED_PROJECT.metrics}</span>
                  </div>
                </div>
              </div>

              <div>
                <button
                  onClick={() => onSelectProject(FEATURED_PROJECT)}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-full bg-[#f4a6b8] text-[#733949] text-xs font-bold tracking-wide hover:bg-[#8a4b5c] hover:text-white transition-all duration-300 shadow-[0_6px_20px_rgba(217,139,160,0.2)] active:scale-98"
                >
                  <span>Explore Detailed Case Study</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Grid of Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" id="projects-grid">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col rounded-2xl bg-white overflow-hidden shadow-[0_8px_30px_rgba(217,139,160,0.08)] hover:shadow-[0_18px_40px_rgba(217,139,160,0.22)] border border-[#ffd9e2] hover:-translate-y-1 transition-all duration-300"
            >
              {/* Thumbnail Container */}
              <div
                onClick={() => onSelectProject(project)}
                className="relative h-64 overflow-hidden cursor-pointer"
              >
                <img
                  alt={project.altText}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src={project.image}
                />
                <div className="absolute inset-0 bg-[#8a4b5c]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-xs">
                  <span className="px-4 py-2 rounded-full bg-white text-[#8a4b5c] text-xs font-bold shadow-md flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-sm">visibility</span>
                    <span>Quick View</span>
                  </span>
                </div>
                <div className="absolute top-3 right-3 px-2.5 py-0.5 rounded-full bg-white/90 backdrop-blur-xs text-[10px] font-bold text-[#80515d]">
                  {project.year}
                </div>
              </div>

              {/* Card Meta & Info */}
              <div className="p-5 flex flex-col justify-between flex-grow gap-4">
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="px-2.5 py-0.5 rounded-full bg-[#ffe8ed] text-[#80515d] text-[11px] font-bold">
                      {project.categoryLabel}
                    </span>
                  </div>
                  <h4 className="font-headline text-lg text-[#350d1c] font-bold group-hover:text-[#8a4b5c] transition-colors leading-snug">
                    {project.title}
                  </h4>
                  <p className="text-xs text-[#524346] mt-1.5 line-clamp-2 leading-relaxed">
                    {project.overview}
                  </p>
                </div>

                <div className="pt-2 border-t border-[#ffe8ed]/80 flex items-center justify-between">
                  <button
                    onClick={() => onSelectProject(project)}
                    className="inline-flex items-center gap-1 text-xs text-[#8a4b5c] font-bold hover:underline"
                  >
                    <span>View Case Study</span>
                    <span className="material-symbols-outlined text-xs group-hover:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </button>
                  <span className="text-[10px] text-[#80515d] font-medium">Kathmandu</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16 bg-white rounded-2xl border border-[#ffd9e2] p-8">
            <span className="material-symbols-outlined text-4xl text-[#8a4b5c] mb-2">search_off</span>
            <p className="font-headline text-xl font-bold text-[#350d1c]">No projects matched your criteria</p>
            <p className="text-xs text-[#524346] mt-1">Try resetting the filter or search keyword.</p>
            <button
              onClick={() => {
                setActiveFilter('all');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 rounded-full bg-[#8a4b5c] text-white text-xs font-semibold"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
