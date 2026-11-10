import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, AlertCircle, Clock } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from '../components/BrandIcons';
import { personalData } from '../data/personal';
import SectionHeading from '../components/SectionHeading';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    submitting: false,
    submitted: false,
    notice: null
  });

  const [touched, setTouched] = useState({});

  const handleBlur = (field) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Verify validity natively
    const form = e.target;
    if (!form.checkValidity()) {
      return;
    }

    setFormStatus({ submitting: true, submitted: false, notice: null });

    // Simulate safe processing & transition to mailto fallback
    setTimeout(() => {
      // Create mailto fallback link with user details pre-populated
      const subject = encodeURIComponent(`[Portfolio Contact] ${formData.subject || 'Opportunity Discussion'}`);
      const body = encodeURIComponent(
        `Hi Venu Madhur,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n`
      );
      const mailtoLink = `mailto:${personalData.email}?subject=${subject}&body=${body}`;

      // Open email client
      window.open(mailtoLink, '_blank');

      setFormStatus({
        submitting: false,
        submitted: true,
        notice: {
          type: 'info',
          title: 'Direct Mail Client Initiated',
          message:
            'A direct message draft has been opened in your email client. Note: The serverless form backend (e.g. Formspree/Resend) is currently pending production credentials.'
        }
      });
    }, 800);
  };

  return (
    <section id="contact" className="py-24 bg-[#ffffff] text-[#0b0b0c] border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          badge="05. Get In Touch"
          title="Let's Build Something Together"
          subtitle="Have an opportunity, project idea, or just want to connect? Let's talk."
          align="center"
          dark={false}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start max-w-6xl mx-auto">
          
          {/* Left Column: Direct Contact Info & Professional Profiles */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#ffffff] rounded-3xl p-6 sm:p-8 border border-zinc-200 shadow-sm">
              <h3 className="font-heading font-bold text-xl text-[#0b0b0c] mb-2">
                Contact Information
              </h3>
              <p className="text-sm text-zinc-600 mb-8 leading-relaxed">
                Feel free to reach out directly via email, phone, or connect on LinkedIn and GitHub.
              </p>

              <div className="space-y-4">
                {/* Email Item */}
                <a
                  href={`mailto:${personalData.email}`}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-zinc-50 border border-zinc-200/80 hover:border-[#0b0b0c] transition-all duration-200 group"
                >
                  <div className="p-3 rounded-xl bg-[#0b0b0c] text-[#c6f432] shrink-0 group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 block">
                      Direct Email
                    </span>
                    <span className="font-bold text-[#0b0b0c] text-sm transition-colors break-all">
                      {personalData.email}
                    </span>
                  </div>
                </a>

                {/* Phone Item */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-zinc-50 border border-zinc-200/80">
                  <div className="p-3 rounded-xl bg-[#0b0b0c] text-white shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 block">
                      Phone Number
                    </span>
                    <span className="font-bold text-[#0b0b0c] text-sm">
                      {personalData.phone}
                    </span>
                  </div>
                </div>

                {/* Location Item */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-zinc-50 border border-zinc-200/80">
                  <div className="p-3 rounded-xl bg-[#0b0b0c] text-[#c6f432] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 block">
                      Location
                    </span>
                    <span className="font-bold text-[#0b0b0c] text-sm">
                      {personalData.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="mt-8 pt-6 border-t border-zinc-100">
                <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 block mb-3">
                  Professional Profiles
                </span>
                <div className="flex items-center gap-3">
                  {personalData.linkedinUrl && (
                    <a
                      href={personalData.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-100 hover:bg-[#0b0b0c] text-[#0b0b0c] hover:text-[#c6f432] text-xs font-bold border border-zinc-200 transition-all"
                    >
                      <LinkedinIcon className="w-4 h-4" />
                      <span>LinkedIn</span>
                    </a>
                  )}

                  {personalData.githubUrl && (
                    <a
                      href={personalData.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-100 hover:bg-[#0b0b0c] text-[#0b0b0c] hover:text-[#c6f432] text-xs font-bold border border-zinc-200 transition-all"
                    >
                      <GithubIcon className="w-4 h-4" />
                      <span>GitHub</span>
                    </a>
                  )}
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Accessible Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#ffffff] rounded-3xl p-6 sm:p-8 border border-zinc-200 shadow-sm">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-zinc-100">
                <h3 className="font-heading font-bold text-xl text-[#0b0b0c]">
                  Send a Direct Message
                </h3>
                <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-zinc-100 text-zinc-600 font-bold border border-zinc-200">
                  Quick Response
                </span>
              </div>

              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                
                {/* Name Field */}
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-bold text-zinc-800 uppercase tracking-wider mb-1.5">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    required
                    placeholder="Jane Doe"
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={() => handleBlur('name')}
                    aria-required="true"
                    aria-describedby="name-desc"
                    className="w-full px-4 py-3 rounded-xl border border-zinc-300 text-[#0b0b0c] placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#c6f432] focus:border-zinc-900 text-sm transition-all"
                  />
                  <span id="name-desc" className="sr-only">Enter your full name</span>
                </div>

                {/* Email Field */}
                <div>
                  <div className="flex justify-between items-center mb-1.5">
                    <label htmlFor="contact-email" className="block text-xs font-bold text-zinc-800 uppercase tracking-wider">
                      Your Email <span className="text-red-500">*</span>
                    </label>
                    <span id="email-format-hint" className="text-[11px] text-zinc-400 font-mono">
                      Format: you@example.com
                    </span>
                  </div>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    required
                    autoComplete="email"
                    placeholder="jane@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={() => handleBlur('email')}
                    aria-required="true"
                    aria-describedby="email-format-hint"
                    className="w-full px-4 py-3 rounded-xl border border-zinc-300 text-[#0b0b0c] placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#c6f432] focus:border-zinc-900 text-sm transition-all"
                  />
                </div>

                {/* Subject Field */}
                <div>
                  <label htmlFor="contact-subject" className="block text-xs font-bold text-zinc-800 uppercase tracking-wider mb-1.5">
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="contact-subject"
                    name="subject"
                    required
                    placeholder="Full Stack Opportunity / Collaboration"
                    value={formData.subject}
                    onChange={handleChange}
                    onBlur={() => handleBlur('subject')}
                    aria-required="true"
                    className="w-full px-4 py-3 rounded-xl border border-zinc-300 text-[#0b0b0c] placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#c6f432] focus:border-zinc-900 text-sm transition-all"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="contact-message" className="block text-xs font-bold text-zinc-800 uppercase tracking-wider mb-1.5">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={4}
                    placeholder="Hi Venu Madhur, I reviewed your portfolio and would like to discuss..."
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={() => handleBlur('message')}
                    aria-required="true"
                    className="w-full px-4 py-3 rounded-xl border border-zinc-300 text-[#0b0b0c] placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#c6f432] focus:border-zinc-900 text-sm transition-all resize-y"
                  />
                </div>

                {/* Submit Action (Bold Electric Lime Button) */}
                <button
                  type="submit"
                  disabled={formStatus.submitting}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#c6f432] hover:bg-[#b5e526] disabled:bg-zinc-300 text-[#0b0b0c] font-bold text-sm shadow-md hover:shadow-[0_0_20px_rgba(198,244,50,0.35)] transition-all duration-200 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#c6f432] cursor-pointer"
                >
                  {formStatus.submitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-[#0b0b0c]/40 border-t-[#0b0b0c] rounded-full animate-spin" />
                      <span>Preparing Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-[#0b0b0c]" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>

              {/* Status Notice */}
              {formStatus.notice && (
                <div className="mt-5 p-4 rounded-2xl bg-zinc-50 border border-zinc-200 text-xs text-zinc-800 flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-[#0b0b0c] shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-bold text-[#0b0b0c] mb-0.5">
                      {formStatus.notice.title}
                    </h5>
                    <p className="leading-relaxed text-zinc-600">
                      {formStatus.notice.message}
                    </p>
                  </div>
                </div>
              )}

              {/* Pending Backend Service Note */}
              <div className="mt-5 pt-4 border-t border-zinc-100 flex items-center gap-2 text-[11px] text-zinc-400 font-mono">
                <Clock className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                <span>Backend endpoint configuration pending (graceful mailto fallback active).</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
