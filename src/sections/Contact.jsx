import React, { useState, useRef } from 'react';
import { Mail, Phone, MapPin, Send, AlertCircle, CheckCircle, Clock } from 'lucide-react';
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
    <section id="contact" className="py-24 bg-[#F8FAFC] text-slate-900 border-t border-slate-200">
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
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm">
              <h3 className="font-heading font-bold text-xl text-slate-900 mb-2">
                Contact Information
              </h3>
              <p className="text-sm text-slate-600 mb-8 leading-relaxed">
                Feel free to reach out directly via email, phone, or connect on LinkedIn and GitHub.
              </p>

              <div className="space-y-4">
                {/* Email Item */}
                <a
                  href={`mailto:${personalData.email}`}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-300 hover:bg-blue-50/40 transition-all duration-200 group"
                >
                  <div className="p-3 rounded-xl bg-blue-100 text-blue-700 shrink-0 group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block">
                      Direct Email
                    </span>
                    <span className="font-semibold text-slate-900 text-sm group-hover:text-blue-600 transition-colors break-all">
                      {personalData.email}
                    </span>
                  </div>
                </a>

                {/* Phone Item */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="p-3 rounded-xl bg-cyan-100 text-cyan-800 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block">
                      Phone Number
                    </span>
                    <span className="font-semibold text-slate-900 text-sm">
                      {personalData.phone}
                    </span>
                  </div>
                </div>

                {/* Location Item */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="p-3 rounded-xl bg-indigo-100 text-indigo-700 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block">
                      Location
                    </span>
                    <span className="font-semibold text-slate-900 text-sm">
                      {personalData.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="mt-8 pt-6 border-t border-slate-100">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-3">
                  Professional Profiles
                </span>
                <div className="flex items-center gap-3">
                  {personalData.linkedinUrl && (
                    <a
                      href={personalData.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-blue-700 text-xs font-semibold border border-slate-200 transition-colors"
                    >
                      <LinkedinIcon className="w-4 h-4 text-blue-600" />
                      <span>LinkedIn</span>
                    </a>
                  )}

                  {personalData.githubUrl && (
                    <a
                      href={personalData.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-900 text-xs font-semibold border border-slate-200 transition-colors"
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
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
                <h3 className="font-heading font-bold text-xl text-slate-900">
                  Send a Direct Message
                </h3>
                <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-slate-100 text-slate-500 border border-slate-200">
                  Quick Response
                </span>
              </div>

              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                
                {/* Name Field */}
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
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
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm transition-all"
                  />
                  <span id="name-desc" className="sr-only">Enter your full name</span>
                </div>

                {/* Email Field */}
                <div>
                  <div className="flex justify-between items-center mb-1.5">
                    <label htmlFor="contact-email" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider">
                      Your Email <span className="text-red-500">*</span>
                    </label>
                    <span id="email-format-hint" className="text-[11px] text-slate-400 font-mono">
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
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm transition-all"
                  />
                </div>

                {/* Subject Field */}
                <div>
                  <label htmlFor="contact-subject" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
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
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm transition-all"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="contact-message" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
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
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm transition-all resize-y"
                  />
                </div>

                {/* Submit Action */}
                <button
                  type="submit"
                  disabled={formStatus.submitting}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold text-sm shadow-md shadow-blue-500/20 transition-all duration-200 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
                >
                  {formStatus.submitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Preparing Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>

              {/* Status Notice */}
              {formStatus.notice && (
                <div className="mt-5 p-4 rounded-2xl bg-blue-50 border border-blue-200 text-xs text-blue-900 flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-semibold text-blue-950 mb-0.5">
                      {formStatus.notice.title}
                    </h5>
                    <p className="leading-relaxed text-blue-800">
                      {formStatus.notice.message}
                    </p>
                  </div>
                </div>
              )}

              {/* Pending Backend Service Note */}
              <div className="mt-5 pt-4 border-t border-slate-100 flex items-center gap-2 text-[11px] text-slate-400 font-mono">
                <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span>Backend endpoint configuration pending (graceful mailto fallback active).</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
