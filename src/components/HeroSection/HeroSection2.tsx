import CountDown from './CountDown';

function HeroText() {
  return (
    <div className='flex w-full flex-col items-center justify-center overflow-hidden'>
      <h1 className='mt-12 animate-gradient bg-[linear-gradient(to_right,theme(colors.indigo.400),theme(colors.indigo.100),theme(colors.sky.400),theme(colors.fuchsia.400),theme(colors.sky.400),theme(colors.indigo.100),theme(colors.indigo.400))] bg-[length:200%_auto] bg-clip-text text-center font-hackedKerx text-8xl uppercase tracking-widest text-transparent drop-shadow-xl md:text-8xl lg:text-9xl xl:text-[12rem]'>
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

const HeroSection2 = () => {
  return (
    <section className='relative h-screen max-h-[50rem] bg-gradient-to-b from-gray-800/10 via-transparent to-transparent'>
      <div className='relative z-10'>
        <div className='absolute inset-x-0 top-1/2 -z-10 flex -translate-y-1/2 justify-center overflow-hidden [mask-image:radial-gradient(50%_45%_at_50%_55%,white,transparent)]'>
          <svg
            className='h-[60rem] w-[100rem] flex-none stroke-blue-600 opacity-20'
            aria-hidden='true'
          >
            <defs>
              <pattern
                id='e9033f3e-f665-41a6-84ef-756f6778e6fe'
                width='200'
                height='200'
                x='50%'
                y='50%'
                patternUnits='userSpaceOnUse'
                patternTransform='translate(-100 0)'
              >
                <path d='M.5 200V.5H200' fill='none'></path>
              </pattern>
            </defs>
            <svg x='50%' y='50%' className='overflow-visible fill-slate-900'>
              <path
                d='M-300 0h201v201h-201Z M300 200h201v201h-201Z'
                strokeWidth='0'
              ></path>
            </svg>
            <rect
              width='100%'
              height='100%'
              strokeWidth='0'
              fill='url(#e9033f3e-f665-41a6-84ef-756f6778e6fe)'
            ></rect>
          </svg>
        </div>
      </div>
      <div className='relative z-20 mx-auto flex w-full flex-col items-center justify-center space-y-5 px-4 py-12 text-center md:px-8'>
        <CountDown />

        <HeroText />

        <div className='mx-auto mb-10 flex max-w-4xl flex-col items-center justify-center p-4'>
          <h1 className='relative z-10 bg-gradient-to-b from-neutral-200 to-neutral-600 bg-clip-text text-center font-sans text-lg font-bold text-transparent md:text-3xl lg:text-5xl'>
            National Level Technical Symposium
          </h1>
          <p className='mx-auto my-2 mt-4 max-w-lg text-center text-xs font-normal text-neutral-400 md:text-xl'>
            by Department of Rubber & Plastics Technology,
            <br />
            Anna Univeristy
          </p>
        </div>
        <span className='z-30 mx-auto inline-flex w-fit items-center justify-center gap-x-3 rounded-full border border-transparent bg-neutral-300 bg-gradient-to-tl from-blue-600 to-violet-600 px-2 py-1 text-center text-base font-medium text-white shadow-lg shadow-transparent hover:shadow-blue-700/50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-gray-800 md:px-6 md:py-3 md:text-xl'>
          16 March 2024
        </span>
      </div>
      <div
        className='absolute inset-0 m-auto h-[357px] max-w-xs blur-[118px] sm:max-w-md md:max-w-lg'
        style={{
          background:
            'linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)',
        }}
      ></div>
    </section>
  );
};

export default HeroSection2;
