import React from 'react';

export default function SectionHeading({
  badge,
  title,
  subtitle,
  align = 'center',
  dark = false
}) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <div className={`max-w-3xl mb-12 sm:mb-16 ${alignClass}`}>
      {badge && (
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-3.5 border transition-all duration-300">
          <span
            className={`w-1.5 h-1.5 rounded-full ${
              dark ? 'bg-cyan-400 animate-pulse' : 'bg-blue-600'
            }`}
          />
          <span
            className={
              dark
                ? 'text-cyan-300 border-cyan-500/20 bg-cyan-950/40'
                : 'text-blue-700 border-blue-200 bg-blue-50'
            }
          >
            {badge}
          </span>
        </div>
      )}

      <h2
        className={`text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4 ${
          dark ? 'text-white' : 'text-slate-900'
        }`}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={`text-base sm:text-lg leading-relaxed ${
            dark ? 'text-slate-400' : 'text-slate-600'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
