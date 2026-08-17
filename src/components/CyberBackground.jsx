import React from 'react';

export const CyberBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Dark gradient base */}
      <div className="absolute inset-0 bg-[#07090e]" />

      {/* Cyber Grid Lines */}
      <div 
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #06b6d4 1px, transparent 1px),
            linear-gradient(to bottom, #06b6d4 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px'
        }}
      />

      {/* Ambient Radial Glows */}
      <div className="absolute -top-40 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      <div className="absolute top-1/3 -right-20 w-[30rem] h-[30rem] bg-blue-600/10 rounded-full blur-[100px]" />
      <div className="absolute -bottom-20 left-1/3 w-[32rem] h-[32rem] bg-indigo-600/10 rounded-full blur-[120px]" />

      {/* Subtle vignette */}
      <div className="absolute inset-0 bg-radial-vignette opacity-80" />
    </div>
  );
};
