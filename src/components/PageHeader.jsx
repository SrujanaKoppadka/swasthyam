import React from "react";

export default function PageHeader({ title, subtitle }: { title: string, subtitle?: string }) {
  return (
    <div className="relative bg-brand-navy pt-24 pb-16 overflow-hidden border-b border-white/5">
      <div className="absolute inset-0 z-0">
        <div className="geometric-accent opacity-50"></div>
        <div className="geometric-accent-left opacity-30"></div>
      </div>
      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/70 font-light">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
