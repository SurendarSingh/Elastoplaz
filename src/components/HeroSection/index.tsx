import React from 'react';
import { HeroText } from './HeroText';
import { BackgroundBeams } from './BackgroundBeam';
import CountDown from './CountDown';

export function HeroSection() {
  return (
    <div className='relative flex min-h-screen w-full cursor-default flex-col items-center justify-center overflow-hidden bg-neutral-900 antialiased md:items-center md:justify-center'>
      <BackgroundBeams />
      <HeroText />
      <div className='mx-auto mb-10 max-w-4xl p-4'>
        <h1 className='relative z-10 bg-gradient-to-b from-neutral-200 to-neutral-600 bg-clip-text text-center font-sans text-lg font-bold text-transparent md:text-3xl lg:text-5xl'>
          National Level Technical Symposium
        </h1>
        <p className='relative z-10 mx-auto my-2 max-w-md text-center text-neutral-500 md:text-base lg:text-lg'>
          by Department of Rubber & Plastics Technology,
          <br />
          Anna Univeristy
        </p>
      </div>
      <CountDown />
    </div>
  );
}
