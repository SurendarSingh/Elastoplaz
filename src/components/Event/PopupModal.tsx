import React from 'react';

const PopupModal = ({ open, modalClose }: any) => {
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
              Modal title
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
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
              >
                <path d='M18 6 6 18' />
                <path d='m6 6 12 12' />
              </svg>
            </button>
          </div>
          <div className='overflow-y-auto p-4'>
            <div className='space-y-4'>
              <div>
                <h3 className='text-lg font-semibold text-gray-800 dark:text-white'>
                  Be bold
                </h3>
                <p className='mt-1 text-gray-800 dark:text-gray-400'>
                  Motivate teams to do their best work. Offer best practices to
                  get users going in the right direction. Be bold and offer just
                  enough help to get the work started, and then get out of the
                  way. Give accurate information so users can make educated
                  decisions. Know your users struggles and desired outcomes and
                  give just enough information to let them get where they need
                  to go.
                </p>
              </div>

              <div>
                <h3 className='text-lg font-semibold text-gray-800 dark:text-white'>
                  Be optimistic
                </h3>
                <p className='mt-1 text-gray-800 dark:text-gray-400'>
                  Focusing on the details gives people confidence in our
                  products. Weave a consistent story across our fabric and be
                  diligent about vocabulary across all messaging by being brand
                  conscious across products to create a seamless flow across all
                  the things. Let people know that they can jump in and start
                  working expecting to find a dependable experience across all
                  the things. Keep teams in the loop about what is happening by
                  informing them of relevant features, products and
                  opportunities for success. Be on the journey with them and
                  highlight the key points that will help them the most - right
                  now. Be in the moment by focusing attention on the important
                  bits first.
                </p>
              </div>

              <div>
                <h3 className='text-lg font-semibold text-gray-800 dark:text-white'>
                  Be practical, with a wink
                </h3>
                <p className='mt-1 text-gray-800 dark:text-gray-400'>
                  Keep our own story short and give teams just enough to get
                  moving. Get to the point and be direct. Be concise - we tell
                  the story of how we can help, but we do it directly and with
                  purpose. Be on the lookout for opportunities and be quick to
                  offer a helping hand. At the same time realize that nobody
                  likes a nosy neighbor. Give the user just enough to know that
                  something awesome is around the corner and then get out of the
                  way. Write clear, accurate, and concise text that makes
                  interfaces more usable and consistent - and builds trust. We
                  strive to write text that is understandable by anyone,
                  anywhere, regardless of their culture or language so that
                  everyone feels they are part of the team.
                </p>
              </div>
            </div>
          </div>
          <div className='flex items-center justify-end gap-x-2 border-t px-4 py-3 dark:border-gray-700'>
            <button
              type='button'
              className='inline-flex items-center gap-x-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-800 shadow-sm hover:bg-gray-50 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:bg-slate-900 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
            >
              Close
            </button>
            <button
              type='button'
              className='inline-flex items-center gap-x-2 rounded-lg border border-transparent bg-blue-600 px-3 py-2 text-sm font-semibold text-white hover:bg-blue-700 disabled:pointer-events-none disabled:opacity-50 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
            >
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupModal;
