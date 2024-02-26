import { BackgroundBeams } from './BackgroundBeam';
import CountDown from './CountDown';

export function HeroSection() {
  return (
    <div className='h-screen bg-slate-900 antialiased'>
      <BackgroundBeams />
      <div className='bg-gradient-to-b from-violet-600/[.15] via-transparent'>
        <div className='mx-auto max-w-[85rem] space-y-8 px-4 py-24 sm:px-6 lg:px-8'>
          <div className='flex justify-center'>
            <a className='group inline-block rounded-full border border-white/[.05] bg-white/[.05] p-1 ps-4 shadow-md hover:bg-white/[.1]'>
              <p className='me-2 inline-block text-sm text-white'>
                <CountDown />
              </p>
              <span className='inline-flex items-center justify-center gap-x-2 rounded-full bg-white/[.075] px-2.5 py-1.5 text-sm font-semibold text-white group-hover:bg-white/[.1]'>
                <svg
                  className='size-4 flex-shrink-0'
                  width='16'
                  height='16'
                  viewBox='0 0 16 16'
                  fill='none'
                >
                  <path
                    d='M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                  />
                </svg>
              </span>
            </a>
          </div>
          <div className='mx-auto text-center'>
            <h1
              className='block bg-cover bg-clip-text text-center font-hackedKerx text-8xl uppercase tracking-widest text-transparent drop-shadow-xl md:text-8xl lg:text-9xl xl:text-[12rem]'
              style={{ backgroundImage: `url(./bg-elastoplaz.gif)` }}
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

          <div className='mx-auto mb-10 flex max-w-4xl flex-col items-center justify-center text-center'>
            <h1 className='bg-gradient-to-b from-neutral-200 to-neutral-600 bg-clip-text text-center text-lg font-bold text-transparent md:text-3xl lg:text-5xl'>
              National Level Technical Symposium
            </h1>
            <p className='mx-auto my-2 mb-6 mt-4 max-w-lg text-center text-xs font-normal text-neutral-400 md:text-xl'>
              by Department of Rubber & Plastics Technology,
              <br />
              Anna Univeristy
            </p>
          </div>

          <div className='text-center'>
            <span className='inline-flex items-center justify-center gap-x-3 rounded-full border border-transparent bg-gradient-to-tl from-blue-600 to-violet-600 px-6 py-3 text-center text-base font-medium text-white shadow-lg shadow-transparent hover:shadow-blue-700/50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-800'>
              16 March 2024
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
