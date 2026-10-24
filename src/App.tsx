import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PortfolioShowcase } from './components/PortfolioShowcase';
import { Services } from './components/Services';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CaseStudyModal } from './components/CaseStudyModal';
import { CaseStudy, FEATURED_PROJECT } from './data/portfolioData';

export default function App() {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);
  const [preselectedService, setPreselectedService] = useState<string>('social-media');

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (serviceKey: string) => {
    setPreselectedService(serviceKey);
    scrollToSection('contact');
  };

  return (
    <div className="min-h-screen bg-[#fff8f8] text-[#350d1c] font-body selection:bg-[#ffd9e1] selection:text-[#3a071b] flex flex-col relative overflow-x-hidden">
      {/* Fixed Navigation Bar */}
      <Navbar onContactClick={() => scrollToSection('contact')} />

      {/* Main Content Area */}
      <main className="w-full pt-20 flex-grow">
        {/* 1. Hero Section */}
        <Hero
          onViewWork={() => scrollToSection('work')}
          onContactClick={() => scrollToSection('contact')}
          onOpenFeaturedCaseStudy={() => setSelectedCaseStudy(FEATURED_PROJECT)}
        />

        {/* 2. Portfolio Showcase & Gallery */}
        <PortfolioShowcase
          onSelectProject={(project) => setSelectedCaseStudy(project)}
          onContactClick={() => scrollToSection('contact')}
        />

        {/* 3. Services & Offerings */}
        <Services onSelectService={handleSelectService} />

        {/* 4. About Salina */}
        <About onContactClick={() => scrollToSection('contact')} />

        {/* 5. Career Experience & Milestones */}
        <Experience />

        {/* 6. Contact Section */}
        <Contact
          selectedService={preselectedService}
          onServiceReset={() => setPreselectedService('social-media')}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Case Study Detail Modal */}
      <CaseStudyModal
        project={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
        onSelectProject={(proj) => setSelectedCaseStudy(proj)}
        onInquire={(serviceType) => handleSelectService(serviceType)}
      />
    </div>
  );
}
