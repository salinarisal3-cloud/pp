import React, { useState, useEffect } from 'react';

interface ContactProps {
  selectedService?: string;
  onServiceReset?: () => void;
}

export const Contact: React.FC<ContactProps> = ({ selectedService, onServiceReset }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState('social-media');
  const [message, setMessage] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [timeline, setTimeline] = useState('Within 2 weeks');

  useEffect(() => {
    if (selectedService) {
      setService(selectedService);
    }
  }, [selectedService]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('salinarisal3@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate polite asynchronous delivery
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setName('');
      setEmail('');
      setMessage('');
      if (onServiceReset) onServiceReset();
    }, 1200);
  };

  return (
    <section className="w-full bg-[#fff0f2]/70 py-16 lg:py-24 border-t border-[#ffd9e2]/60" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Contact Context Column */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-8">
            <div className="flex flex-col gap-3">
              <span className="text-xs font-bold text-[#8a4b5c] tracking-widest uppercase">
                Start a Conversation
              </span>
              <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold text-[#350d1c] tracking-tight leading-tight">
                Let’s Create Something Beautiful Together.
              </h2>
              <p className="text-base text-[#524346] leading-relaxed">
                Have an upcoming branding project, need eye-catching social templates, or want to discuss full-scale marketing visuals? Drop a line anytime.
              </p>
            </div>

            {/* Interactive Direct Mail Box */}
            <div className="p-6 rounded-2xl bg-white shadow-[0_8px_30px_rgba(217,139,160,0.1)] border border-[#ffd9e2] flex flex-col gap-3.5">
              <span className="text-xs font-bold text-[#80515d] uppercase tracking-wider">
                Direct Email
              </span>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 bg-[#fff0f2] p-3 rounded-xl border border-[#ffd9e2]">
                <span className="font-mono text-sm sm:text-base text-[#350d1c] select-all font-semibold break-all">
                  salinarisal3@gmail.com
                </span>

                <div className="flex items-center gap-1.5 shrink-0">
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="px-3 py-1.5 rounded-full bg-[#ffe1e7] text-[#703346] text-xs font-semibold hover:bg-[#8a4b5c] hover:text-white transition-colors flex items-center gap-1"
                    title="Copy to clipboard"
                  >
                    <span className="material-symbols-outlined text-xs">
                      {copiedEmail ? 'check' : 'content_copy'}
                    </span>
                    <span>{copiedEmail ? 'Copied!' : 'Copy'}</span>
                  </button>

                  <a
                    href="mailto:salinarisal3@gmail.com"
                    className="px-3 py-1.5 rounded-full bg-white text-[#8a4b5c] border border-[#ffd9e2] text-xs font-semibold hover:bg-[#8a4b5c] hover:text-white transition-colors flex items-center gap-1"
                  >
                    <span className="material-symbols-outlined text-xs">mail</span>
                    <span>Mail</span>
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs text-[#80515d]">
                <span className="material-symbols-outlined text-sm text-[#8a4b5c]">schedule</span>
                <span>Typically replies within 24 hours • GMT+5:45 (Kathmandu)</span>
              </div>
            </div>

            {/* Social Direct Links */}
            <div className="flex flex-col gap-3">
              <span className="text-xs font-bold text-[#80515d] uppercase tracking-wider">
                Connect Online
              </span>
              <div className="flex flex-wrap items-center gap-2.5">
                <a
                  className="px-4 py-2 rounded-full bg-white text-[#350d1c] text-xs font-semibold shadow-xs border border-[#ffd9e2] hover:bg-[#8a4b5c] hover:text-white transition-all flex items-center gap-2"
                  href="https://instagram.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span>Instagram</span>
                  <span className="text-[11px] opacity-75">@salinarisal.design</span>
                </a>

                <a
                  className="px-4 py-2 rounded-full bg-white text-[#350d1c] text-xs font-semibold shadow-xs border border-[#ffd9e2] hover:bg-[#8a4b5c] hover:text-white transition-all flex items-center gap-2"
                  href="https://linkedin.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span>LinkedIn</span>
                  <span className="text-[11px] opacity-75">/salina-risal</span>
                </a>

                <a
                  className="px-4 py-2 rounded-full bg-white text-[#350d1c] text-xs font-semibold shadow-xs border border-[#ffd9e2] hover:bg-[#8a4b5c] hover:text-white transition-all flex items-center gap-2"
                  href="https://behance.net"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span>Behance</span>
                  <span className="text-[11px] opacity-75">/salinarisal</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form Card */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-white shadow-[0_16px_40px_rgba(217,139,160,0.15)] border border-[#ffd9e2] flex flex-col gap-5">
              <div className="flex items-center justify-between pb-3 border-b border-[#ffe8ed]">
                <h3 className="font-headline text-2xl font-bold text-[#350d1c]">
                  Send a Message
                </h3>
                <span className="text-[#8a4b5c] font-bold text-lg">✦</span>
              </div>

              {isSubmitted ? (
                <div className="p-8 rounded-2xl bg-[#fff0f2] border border-[#ffd9e2] flex flex-col items-center text-center gap-3 animate-in fade-in">
                  <div className="w-16 h-16 rounded-full bg-[#ffd9e1] flex items-center justify-center text-2xl text-[#8a4b5c]">
                    🌸
                  </div>
                  <h4 className="font-headline text-2xl font-bold text-[#350d1c]">
                    Thank you! Your message was received.
                  </h4>
                  <p className="text-sm text-[#524346] max-w-md">
                    Salina will review your project details and get back to you within 24 hours via email.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-4 px-6 py-2.5 rounded-full bg-[#8a4b5c] text-white text-xs font-bold tracking-wide"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  {/* Name Input */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-[#350d1c]" htmlFor="full-name">
                      Your Name
                    </label>
                    <input
                      className="w-full px-4 py-3 rounded-xl bg-[#fff0f2] text-[#350d1c] placeholder:text-[#847376] text-sm border border-[#ffd9e2] focus:bg-white focus:border-[#8a4b5c] focus:shadow-[0_0_0_3px_rgba(244,166,184,0.35)] transition-all outline-none"
                      id="full-name"
                      placeholder="e.g. Alisha Shrestha"
                      required
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>

                  {/* Email Input */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-[#350d1c]" htmlFor="email-address">
                      Email Address
                    </label>
                    <input
                      className="w-full px-4 py-3 rounded-xl bg-[#fff0f2] text-[#350d1c] placeholder:text-[#847376] text-sm border border-[#ffd9e2] focus:bg-white focus:border-[#8a4b5c] focus:shadow-[0_0_0_3px_rgba(244,166,184,0.35)] transition-all outline-none"
                      id="email-address"
                      placeholder="name@company.com"
                      required
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  {/* Project Type Dropdown */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-[#350d1c]" htmlFor="project-type">
                      What can I design for you?
                    </label>
                    <select
                      className="w-full px-4 py-3 rounded-xl bg-[#fff0f2] text-[#350d1c] text-sm border border-[#ffd9e2] focus:bg-white focus:border-[#8a4b5c] focus:shadow-[0_0_0_3px_rgba(244,166,184,0.35)] transition-all outline-none"
                      id="project-type"
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                    >
                      <option value="social-media">Social Media Design &amp; Feed Kit</option>
                      <option value="branding">Brand Identity &amp; Visual Guide</option>
                      <option value="posters">Event Posters &amp; Banner Collateral</option>
                      <option value="campaign">Full Digital Marketing Campaign</option>
                      <option value="other">Other Creative Collaboration</option>
                    </select>
                  </div>

                  {/* Target Timeline Selector */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-[#350d1c]">Desired Timeframe</label>
                    <div className="flex flex-wrap gap-2">
                      {['Urgent (< 1 week)', 'Within 2 weeks', '1 Month', 'Flexible'].map((t) => (
                        <button
                          key={t}
                          type="button"
                          onClick={() => setTimeline(t)}
                          className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
                            timeline === t
                              ? 'bg-[#8a4b5c] text-white shadow-xs'
                              : 'bg-[#fff0f2] text-[#524346] hover:bg-[#ffe1e7]'
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message Area */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-[#350d1c]" htmlFor="message-text">
                      Project Details &amp; Vision
                    </label>
                    <textarea
                      className="w-full px-4 py-3 rounded-xl bg-[#fff0f2] text-[#350d1c] placeholder:text-[#847376] text-sm border border-[#ffd9e2] focus:bg-white focus:border-[#8a4b5c] focus:shadow-[0_0_0_3px_rgba(244,166,184,0.35)] transition-all outline-none resize-none"
                      id="message-text"
                      placeholder="Tell me a bit about your brand, goals, and desired deliverable scope..."
                      required
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    className="w-full py-4 px-8 rounded-full bg-[#8a4b5c] text-white text-xs font-bold tracking-wide shadow-[0_12px_28px_rgba(217,139,160,0.3)] hover:bg-[#733949] transition-all flex items-center justify-center gap-2 mt-2 disabled:opacity-75 active:scale-98"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="material-symbols-outlined text-sm animate-spin">refresh</span>
                        <span>Sending Message 🌸...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message ✦</span>
                        <span className="material-symbols-outlined text-sm">send</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
