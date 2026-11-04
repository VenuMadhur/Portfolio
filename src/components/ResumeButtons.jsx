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
        {/* View Resume Button */}
        {personalData.viewResumeUrl ? (
          <a
            href={personalData.viewResumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm transition-all duration-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
              isHero
                ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-blue-500/25 hover:shadow-blue-500/35 hover:-translate-y-0.5'
                : 'bg-blue-600 hover:bg-blue-700 text-white shadow-blue-600/20'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>View Resume</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-80" />
          </a>
        ) : (
          <button
            type="button"
            onClick={handleViewResume}
            className={`inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm transition-all duration-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 cursor-pointer ${
              isHero
                ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-blue-500/25 hover:shadow-blue-500/35 hover:-translate-y-0.5'
                : 'bg-blue-600 hover:bg-blue-700 text-white shadow-blue-600/20'
            }`}
            title="View online resume"
          >
            <FileText className="w-4 h-4" />
            <span>View Resume</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-80" />
          </button>
        )}

        {/* Download Resume Button */}
        <a
          href={personalData.downloadResumePath}
          download="Cholletti-Venu-Madhur-Resume.pdf"
          className={`inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm transition-all duration-200 border focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
            isHero
              ? 'border-slate-700 hover:border-slate-500 text-slate-200 hover:text-white bg-slate-900/60 hover:bg-slate-800/80 hover:-translate-y-0.5'
              : 'border-slate-300 hover:border-slate-400 text-slate-700 hover:text-slate-900 bg-white hover:bg-slate-50'
          }`}
          title="Download resume PDF"
        >
          <Download className="w-4 h-4 text-cyan-400" />
          <span>Download PDF</span>
        </a>
      </div>

      {/* Notice Dialog when Google Drive Link is not yet supplied */}
      {showDriveNotice && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="drive-notice-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs"
        >
          <div className="bg-slate-900 border border-slate-800 text-white p-6 rounded-2xl max-w-md w-full shadow-2xl relative animate-in fade-in zoom-in-95 duration-150">
            <button
              onClick={() => setShowDriveNotice(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Close notification"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-start gap-3.5 mb-4">
              <div className="p-2.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 shrink-0">
                <AlertCircle className="w-5 h-5" />
              </div>
              <div>
                <h3 id="drive-notice-title" className="text-lg font-semibold text-white">
                  Google Drive Link Configuration
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">Editable in src/data/personal.js</p>
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed mb-5">
              The Google Drive PDF preview link is currently set as an editable placeholder.
              In the meantime, you can directly download the local resume asset using the button below.
            </p>

            <div className="flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setShowDriveNotice(false)}
                className="px-4 py-2 text-sm text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
              >
                Dismiss
              </button>
              <a
                href={personalData.downloadResumePath}
                download="Cholletti-Venu-Madhur-Resume.pdf"
                onClick={() => setShowDriveNotice(false)}
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium rounded-lg transition-colors"
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
