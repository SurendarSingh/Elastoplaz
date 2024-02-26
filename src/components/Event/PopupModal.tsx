import Image from 'next/image';
import React from 'react';

const PopupModal = ({ open, modalClose, eventData }: any) => {
  return (
    <div
      tabIndex={-1}
      aria-hidden='true'
      className={`${
        open ? 'flex' : 'hidden'
      } fixed inset-0 left-0 right-0 start-0 top-0 z-[80] size-full max-h-full w-full items-center justify-center overflow-y-auto overflow-x-hidden bg-gray-900/80 md:inset-0`}
      onClick={modalClose}
    >
      <div
        className='m-3 mt-7 h-[calc(100%-3.5rem)] opacity-100 transition-all duration-500 ease-out sm:mx-auto sm:w-full sm:max-w-lg'
        onClick={(e) => e.stopPropagation()}
      >
        <div className='pointer-events-auto flex max-h-full flex-col overflow-hidden rounded-xl border bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:shadow-slate-700/[.7]'>
          <div className='flex items-center justify-between border-b px-4 py-3 dark:border-gray-700'>
            <h3 className='font-bold text-gray-800 dark:text-white'>
              {eventData.title}
            </h3>
            <button
              type='button'
              className='flex size-7 items-center justify-center rounded-full border border-transparent text-sm font-semibold text-gray-800 hover:bg-gray-100 disabled:pointer-events-none disabled:opacity-50 dark:text-white dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
              onClick={modalClose}
            >
              <span className='sr-only'>Close</span>
              <svg
                className='size-4 flex-shrink-0'
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <path d='M18 6 6 18' />
                <path d='m6 6 12 12' />
              </svg>
            </button>
          </div>
          <div className='overflow-y-auto p-4'>
            <div className='space-y-4'>
              <Image
                src={eventData.image}
                alt={eventData.title}
                loader={({ src }) => src}
                unoptimized
                width={500}
                height={500}
              />
            </div>
          </div>
          <div className='flex items-center justify-center gap-x-12 border-t px-4 py-3 dark:border-gray-700'>
            <button
              type='button'
              onClick={modalClose}
              className='inline-flex items-center justify-center gap-x-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-800 shadow-sm hover:bg-gray-50 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:bg-slate-900 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
            >
              Other Events
            </button>
            <button
              type='button'
              className='inline-flex w-1/3 items-center justify-center gap-x-2 rounded-lg border border-transparent bg-purple-600 px-3 py-2 text-sm font-semibold text-white hover:bg-purple-800 disabled:pointer-events-none disabled:opacity-50 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupModal;
