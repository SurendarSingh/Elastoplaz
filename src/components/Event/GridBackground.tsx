import React from 'react';

export function GridBackground() {
  return (
    <div className='relative flex h-[15rem] w-full items-center justify-center bg-slate-900 bg-grid-white/[0.2] md:h-[20rem]'>
      {/* Radial gradient for the container to give a faded look */}
      <div className='pointer-events-none absolute inset-0 flex items-center justify-center bg-slate-900 [mask-image:radial-gradient(ellipse_at_center,transparent_0%,black)]'></div>
      <p className='relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-8 text-4xl font-bold text-transparent sm:text-7xl'>
        Technical Events
      </p>
    </div>
  );
}

export function DotBackground() {
  return (
    <div className='relative flex h-[18rem] w-full items-center justify-center bg-slate-900 bg-dot-white/[0.2] md:h-[20rem]'>
      {/* Radial gradient for the container to give a faded look */}
      <div className='pointer-events-none absolute inset-0 flex items-center justify-center bg-slate-900 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]'></div>
      <p className='relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-8 text-center text-4xl font-bold text-transparent sm:text-7xl'>
        Non-Technical Events
      </p>
    </div>
  );
}
