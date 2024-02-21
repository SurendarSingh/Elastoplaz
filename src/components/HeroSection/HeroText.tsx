'use client';

// const textGif = 'https://media.giphy.com/media/RPTEEalCYvKr1dXQbO/giphy.gif';
const textGif = 'https://media.giphy.com/media/xT9DPFHl7YFmBjsVTq/giphy.gif';
// const textGif = 'https://media.giphy.com/media/lWD61veKc405UGLcCx/giphy.gif';

export function HeroText() {
  return (
    <div className='flex w-full flex-col items-center justify-center overflow-hidden'>
      <h1
        style={{ backgroundImage: `url(${textGif})` }}
        className='relative z-20 bg-cover bg-clip-text text-center font-hackedKerx text-5xl uppercase tracking-widest text-transparent drop-shadow-xl md:text-8xl lg:text-9xl xl:text-[12rem]'
      >
        Elastoplaz&apos;24
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
