import React, { useState } from 'react';
import { FileText, Download, ExternalLink, AlertCircle, X } from 'lucide-react';
import { personalData } from '../data/personal';

export default function ResumeButtons({ variant = 'hero' }) {
  const [showDriveNotice, setShowDriveNotice] = useState(false);

  const handleViewResume = (e) => {
    if (!personalData.viewResumeUrl || personalData.viewResumeUrl.trim() === '') {
      e.preventDefault();
      setShowDriveNotice(true);
    }
  };

  const isHero = variant === 'hero';

  return (
    <>
      <div className="flex flex-wrap items-center gap-3">
        {/* View Resume Button (Lime Green Primary) */}
        {personalData.viewResumeUrl ? (
          <a
            href={personalData.viewResumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm bg-[#c6f432] hover:bg-[#b5e526] text-[#0b0b0c] transition-all duration-200 shadow-sm hover:shadow-[0_0_20px_rgba(198,244,50,0.35)] hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#c6f432]"
          >
            <FileText className="w-4 h-4 text-[#0b0b0c]" />
            <span>View Resume</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-80" />
          </a>
        ) : (
          <button
            type="button"
            onClick={handleViewResume}
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm bg-[#c6f432] hover:bg-[#b5e526] text-[#0b0b0c] transition-all duration-200 shadow-sm hover:shadow-[0_0_20px_rgba(198,244,50,0.35)] hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#c6f432] cursor-pointer"
            title="View online resume"
          >
            <FileText className="w-4 h-4 text-[#0b0b0c]" />
            <span>View Resume</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-80" />
          </button>
        )}

        {/* Download Resume Button */}
        <a
          href={personalData.downloadResumePath}
          download="Cholletti-Venu-Madhur-Resume.pdf"
          className={`inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm transition-all duration-200 border focus:outline-none focus:ring-2 focus:ring-[#c6f432] ${
            isHero
              ? 'border-zinc-800 hover:border-zinc-600 text-zinc-200 hover:text-white bg-zinc-900/80 hover:bg-zinc-800/90 hover:-translate-y-0.5'
              : 'border-zinc-300 hover:border-zinc-400 text-zinc-800 hover:text-[#0b0b0c] bg-white hover:bg-zinc-50'
          }`}
          title="Download resume PDF"
        >
          <Download className="w-4 h-4 text-[#c6f432]" />
          <span>Download PDF</span>
        </a>
      </div>

      {/* Notice Dialog when Google Drive Link is not yet supplied */}
      {showDriveNotice && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="drive-notice-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs"
        >
          <div className="bg-[#0b0b0c] border border-zinc-800 text-white p-6 sm:p-7 rounded-2xl max-w-md w-full shadow-2xl relative animate-in fade-in zoom-in-95 duration-150">
            <button
              onClick={() => setShowDriveNotice(false)}
              className="absolute top-4 right-4 text-zinc-400 hover:text-white p-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c6f432]"
              aria-label="Close notification"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-start gap-3.5 mb-4">
              <div className="p-2.5 rounded-xl bg-zinc-900 border border-[#c6f432]/30 text-[#c6f432] shrink-0">
                <AlertCircle className="w-5 h-5 text-[#c6f432]" />
              </div>
              <div>
                <h3 id="drive-notice-title" className="font-heading text-lg font-bold text-white">
                  Google Drive Link Configuration
                </h3>
                <p className="text-xs text-zinc-400 mt-0.5">Editable in src/data/personal.js</p>
              </div>
            </div>

            <p className="text-sm text-zinc-300 leading-relaxed mb-6">
              The Google Drive PDF preview link is currently set as an editable placeholder.
              In the meantime, you can directly download the local resume asset using the button below.
            </p>

            <div className="flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setShowDriveNotice(false)}
                className="px-4 py-2 text-sm text-zinc-300 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors cursor-pointer"
              >
                Dismiss
              </button>
              <a
                href={personalData.downloadResumePath}
                download="Cholletti-Venu-Madhur-Resume.pdf"
                onClick={() => setShowDriveNotice(false)}
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#c6f432] hover:bg-[#b5e526] text-[#0b0b0c] text-sm font-bold rounded-lg transition-colors shadow-sm"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
