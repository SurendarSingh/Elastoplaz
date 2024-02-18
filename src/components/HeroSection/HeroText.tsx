'use client';

import React from 'react';

// const textGif = 'https://media.giphy.com/media/RPTEEalCYvKr1dXQbO/giphy.gif';
// const textGif = 'https://media.giphy.com/media/xT9DPFHl7YFmBjsVTq/giphy.gif';
const textGif = 'https://media.giphy.com/media/3oEdv7g4tB5LjZmTK0/giphy.gif';
// const textGif = 'https://media.giphy.com/media/lWD61veKc405UGLcCx/giphy.gif';

export function HeroText() {
  return (
    <div className='flex w-full flex-col items-center justify-center overflow-hidden'>
      <h1
        style={{ backgroundImage: `url(${textGif})` }}
        className='text-3x relative z-20 bg-clip-text text-center font-hackedKerx uppercase tracking-widest text-transparent md:text-7xl lg:text-9xl'
      >
        Elastoplaz&apos;24
      </h1>
      {/* <HeroText /> */}
      <div className='relative h-2 w-[80rem]'>
        {/* Gradients */}
        <div className='absolute inset-x-20 top-0 h-[2px] w-3/4 bg-gradient-to-r from-transparent via-indigo-500 to-transparent blur-sm' />
        <div className='absolute inset-x-20 top-0 h-px w-3/4 bg-gradient-to-r from-transparent via-indigo-500 to-transparent' />
        <div className='absolute inset-x-60 top-0 h-[5px] w-1/4 bg-gradient-to-r from-transparent via-sky-500 to-transparent blur-sm' />
        <div className='absolute inset-x-60 top-0 h-px w-1/4 bg-gradient-to-r from-transparent via-sky-500 to-transparent' />

        {/* Core component */}
        {/* <SparklesCore
          background='transparent'
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className='h-full w-full'
          particleColor='#FFFFFF'
        /> */}

        {/* Radial Gradient to prevent sharp edges */}
        {/* <div className='absolute inset-0 h-full w-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]'></div> */}
      </div>
    </div>
  );
}
