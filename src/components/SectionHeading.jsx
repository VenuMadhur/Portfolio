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
        <div
          className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-3.5 border transition-all duration-300 ${
            dark
              ? 'border-zinc-800 bg-zinc-900/90 text-[#c6f432]'
              : 'border-zinc-200 bg-zinc-100 text-[#0b0b0c]'
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#c6f432] animate-pulse" />
          <span>{badge}</span>
        </div>
      )}

      <h2
        className={`text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4 ${
          dark ? 'text-white' : 'text-[#0b0b0c]'
        }`}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={`text-base sm:text-lg leading-relaxed ${
            dark ? 'text-zinc-400' : 'text-zinc-600'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
