import React from 'react';
// import { Spotlight } from './Spotlight';
import { HeroText } from './HeroText';
import { BackgroundBeams } from './BackgroundBeam';
import CountDown from './CountDown';

export function HeroSection() {
  return (
    <div className='relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-neutral-950 antialiased md:items-center md:justify-center'>
      <BackgroundBeams />
      {/* <Spotlight
        className='-top-40 left-0 md:-top-20 md:left-60'
        fill='white'
      /> */}
      <HeroText />
      <div className='mx-auto max-w-2xl p-4'>
        <h1 className='relative z-10 bg-gradient-to-b from-neutral-200 to-neutral-600 bg-clip-text text-center font-sans text-lg font-bold text-transparent md:text-4xl'>
          National Level Technical Symposium
        </h1>
        <p></p>
        <p className='relative z-10 mx-auto my-2 max-w-lg text-center text-sm text-neutral-500'>
          by Department of Rubber & Plastics Technology
        </p>
      </div>
      <CountDown />
    </div>
  );
}
