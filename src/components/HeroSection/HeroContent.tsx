import React from 'react';
import CountDown from './CountDown';
import { BackgroundBeams } from './BackgroundBeam';

// const textGif = 'https://media.giphy.com/media/RPTEEalCYvKr1dXQbO/giphy.gif';
// const textGif = 'https://media.giphy.com/media/xT9DPFHl7YFmBjsVTq/giphy.gif';
// const textGif = 'https://media.giphy.com/media/lWD61veKc405UGLcCx/giphy.gif';
const textGif = './bg-elastoplaz.gif';

function HeroText() {
  return (
    <div className='flex w-full flex-col items-center justify-center overflow-hidden'>
      <h1
        style={{ backgroundImage: `url(${textGif})` }}
        className='relative z-20 bg-cover bg-clip-text text-center font-hackedKerx text-8xl uppercase tracking-widest text-transparent drop-shadow-xl md:text-8xl lg:text-9xl xl:text-[12rem]'
      >
        Elasto
        <br className='md:hidden' />
        plaz&apos;24
      </h1>

      <div className='relative h-2 w-[20rem] md:w-[40rem] lg:w-[80rem]'>
        {/* Gradients */}
        <div className='absolute left-1/2 top-1/2 h-[2px] w-3/4 -translate-x-1/2 -translate-y-1/2 transform bg-gradient-to-r from-transparent via-indigo-500 to-transparent blur-sm' />
        <div className='absolute left-1/2 top-1/2 h-px w-3/4 -translate-x-1/2 -translate-y-1/2 transform bg-gradient-to-r from-transparent via-indigo-500 to-transparent' />
        <div className='absolute left-1/2 top-1/2 h-[5px] w-1/4 -translate-x-1/2 -translate-y-1/2 transform bg-gradient-to-r from-transparent via-sky-500 to-transparent blur-sm' />
        <div className='absolute left-1/2 top-1/2 h-px w-1/4 -translate-x-1/2 -translate-y-1/2   transform bg-gradient-to-r from-transparent via-sky-500 to-transparent' />
      </div>
    </div>
  );
}

const HeroContent = () => {
  return (
    <>
      <div className='absolute -top-40 -z-50 h-[40rem] w-full antialiased'>
        <BackgroundBeams />
      </div>

      <div className='absolute -top-40 flex w-full items-center justify-center md:-top-32'>
        <CountDown />
      </div>
      <HeroText />
      <div className='mx-auto mb-10 flex max-w-4xl flex-col items-center justify-center p-4'>
        <h1 className='relative z-10 bg-gradient-to-b from-neutral-200 to-neutral-600 bg-clip-text text-center font-sans text-lg font-bold text-transparent md:text-3xl lg:text-5xl'>
          National Level Technical Symposium
        </h1>
        <p className='mx-auto my-2 mb-6 mt-4 max-w-lg text-center text-xs font-normal text-neutral-400 md:text-xl'>
          by Department of Rubber & Plastics Technology,
          <br />
          Anna Univeristy
        </p>
      </div>
      <div className='bg-red-transparent absolute -top-32 flex h-[890px] w-full items-center justify-center md:-top-10 '>
        <span className='z-30 mx-auto mt-8 inline-flex w-fit items-center justify-center gap-x-3 rounded-full border border-transparent bg-neutral-300 bg-gradient-to-tl from-blue-600 to-violet-600 px-2 py-1 text-center text-base font-medium text-white shadow-lg shadow-transparent hover:shadow-blue-700/50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-gray-800 md:mt-24 md:px-6 md:py-3 md:text-xl'>
          16 March 2024
        </span>
      </div>
    </>
  );
};

export default HeroContent;
