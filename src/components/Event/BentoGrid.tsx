import { cn } from '@/utils/cn';
import Image from 'next/image';

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        'mx-auto grid max-w-7xl auto-rows-[18rem] grid-cols-1 gap-4 md:auto-rows-[24rem] md:grid-cols-3 ',
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  // description,
  open = false,
  recommended = false,
  price,
  image,
  modalOpen,
  link,
  hashtag,
}: {
  className?: string;
  title: string;
  // description?: string | React.ReactNode;
  open?: boolean;
  image: string;
  recommended?: boolean;
  price?: string;
  modalOpen: any;
  link: string;
  hashtag: string[];
}) => {
  return (
    <div className='relative'>
      {/* <!-- Tag Discount --> */}
      {open && (
        <>
          <div className='absolute -left-1 top-0 z-30 mt-3 rounded-lg bg-green-500 px-2 text-xs font-medium text-gray-100 md:block md:text-sm'>
            Open
          </div>
          <div className='absolute -left-1 top-0 z-20 mt-5 h-2 bg-green-500 px-2 md:h-3'></div>
          <div className='absolute -left-1 top-0 z-0 mt-6 h-2 rounded-3xl bg-green-600 pl-5 md:h-3'></div>
        </>
      )}
      <div
        className={cn(
          'group/bento shadow-input z-10 row-span-1 flex h-full flex-col justify-between space-y-4 rounded-xl border border-white/[0.2] bg-gray-500/10 p-4 shadow-none drop-shadow-xl transition duration-200 hover:shadow-lg hover:shadow-green-800',
          className
        )}
      >
        <div className='relative h-full min-h-[6rem] transition duration-200 group-hover/bento:translate-x-2'>
          <div className='relative flex h-full w-full overflow-hidden rounded-xl'>
            <Image
              src={image}
              fill
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
              style={{ objectFit: 'cover', objectPosition: 'center' }}
              alt={title}
              onClick={modalOpen}
            />
          </div>

          {recommended && (
            <div className='absolute bottom-0 right-0 mb-2 mr-2 rounded-lg bg-yellow-500 px-2 text-xs font-medium text-gray-100'>
              Recommended
            </div>
          )}
        </div>
        <div className='mb-2 mt-2 flex justify-between transition duration-200 group-hover/bento:translate-x-2'>
          <span className='text-lg font-bold text-neutral-200'>{title}</span>
          <span className='flex items-center rounded-full bg-white px-3 py-2 text-sm font-bold leading-none text-purple-500'>
            ₹ {price}
          </span>
        </div>

        {/* <div className='text-xs font-normal text-neutral-300 transition duration-200 group-hover/bento:translate-x-2'>
          {description}
        </div> */}

        <div className='transition duration-200 group-hover/bento:translate-x-2'>
          {hashtag.map((tag, i) => (
            <span
              key={i}
              className='mb-2 mr-2 inline-block rounded-full bg-slate-100 px-3 py-0.5 text-sm font-semibold text-gray-700'
            >
              {tag}
            </span>
          ))}
        </div>

        <div className='flex justify-between'>
          <button
            className='group relative inline-block cursor-pointer rounded-full bg-slate-800 p-px text-xs font-semibold leading-6 text-white no-underline shadow-2xl shadow-zinc-900 transition duration-200 group-hover/bento:translate-x-2'
            onClick={() => {
              if (link) window.open(link, '_blank');
            }}
          >
            <span className='absolute inset-0 overflow-hidden rounded-full'>
              <span className='absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100'></span>
            </span>
            <div className='relative z-10 flex items-center space-x-2 rounded-full bg-zinc-950/10 px-4 py-2 ring-1 ring-white/10 '>
              <span className='text-sm'>{`Register Now`}</span>
            </div>
            <span className='absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40'></span>
          </button>
          <button
            className='flex select-none items-center justify-center gap-2 rounded-lg px-4 py-2 font-sans text-xs font-bold uppercase text-slate-300 transition-all duration-200 hover:bg-gray-100/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none group-hover/bento:translate-x-2'
            type='button'
            onClick={modalOpen}
          >
            Read More
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='2'
              stroke='currentColor'
              className='h-4 w-4'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3'
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
