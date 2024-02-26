import Image from 'next/image';
import React, { Suspense } from 'react';

const ImageSkeleton = () => {
  return (
    <div className='flex h-96 w-full animate-pulse items-center justify-center rounded bg-gray-300 dark:bg-gray-700'>
      <svg
        className='h-10 w-10 text-gray-200 dark:text-gray-600'
        aria-hidden='true'
        xmlns='http://www.w3.org/2000/svg'
        fill='currentColor'
        viewBox='0 0 20 18'
      >
        <path d='M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z' />
      </svg>
    </div>
  );
};

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
        className='m-3 mt-7 h-[calc(100%-3.5rem)] opacity-100 transition-all duration-500 ease-out sm:mx-12 sm:w-full md:max-w-5xl'
        onClick={(e) => e.stopPropagation()}
      >
        <div className='pointer-events-auto flex max-h-full flex-col overflow-hidden rounded-xl border bg-gray-50 text-[#333] shadow-sm'>
          <div className='flex items-center justify-between border-b px-4 py-3 dark:border-gray-700'>
            <h2 className='text-xl font-extrabold uppercase'>
              {eventData.title}
            </h2>
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

          <div className='overflow-y-auto p-4 shadow-lg'>
            <div className='space-y-4'>
              <div className='mx-auto flex flex-col rounded-lg font-[sans-serif] md:flex-row'>
                <Suspense fallback={<ImageSkeleton />}>
                  <Image
                    src={eventData.image}
                    alt={eventData.title}
                    unoptimized
                    priority
                    width={600}
                    height={300}
                    className='w-full rounded-lg md:w-1/2'
                  />
                </Suspense>
                <div className='h-full w-full p-4'>
                  <div className='mx-auto grid max-w-lg gap-4'>
                    <div className='flex w-full rounded-md bg-white p-4 shadow-md'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='currentColor'
                        className='mr-6 h-12 w-12 shrink-0 rounded-md bg-gray-100 p-3'
                        viewBox='0 0 504.69 504.69'
                      >
                        <path
                          d='M252.343 262.673c-49.32 0-89.447-40.127-89.447-89.447s40.127-89.447 89.447-89.447 89.447 40.127 89.447 89.447-40.121 89.447-89.447 89.447zm0-158.235c-37.926 0-68.787 30.861-68.787 68.787s30.861 68.787 68.787 68.787 68.787-30.861 68.787-68.787-30.855-68.787-68.787-68.787z'
                          data-original='#000000'
                        />
                        <path
                          d='M391.787 405.309c-5.645 0-10.253-4.54-10.325-10.201-.883-70.306-58.819-127.503-129.15-127.503-49.264 0-93.543 27.405-115.561 71.52-8.724 17.473-13.269 36.31-13.517 55.988-.072 5.702-4.757 10.273-10.459 10.201s-10.273-4.757-10.201-10.459c.289-22.814 5.568-44.667 15.691-64.955 25.541-51.164 76.907-82.95 134.047-82.95 81.581 0 148.788 66.349 149.81 147.905.072 5.702-4.494 10.392-10.201 10.459-.046-.005-.087-.005-.134-.005z'
                          data-original='#000000'
                        />
                        <path
                          d='M252.343 463.751c-116.569 0-211.408-94.834-211.408-211.408 0-116.569 94.839-211.408 211.408-211.408 116.574 0 211.408 94.839 211.408 211.408 0 116.574-94.834 211.408-211.408 211.408zm0-402.156c-105.18 0-190.748 85.568-190.748 190.748s85.568 190.748 190.748 190.748 190.748-85.568 190.748-190.748S357.523 61.595 252.343 61.595zM71.827 90.07 14.356 32.599c-4.034-4.034-4.034-10.573 0-14.607 4.029-4.034 10.573-4.034 14.607 0l57.466 57.471c4.034 4.034 3.951 10.49 0 14.607-3.792 3.951-11.039 3.698-14.602 0z'
                          data-original='#000000'
                        />
                        <path
                          d='M14.717 92.254a10.332 10.332 0 0 1-10.299-9.653L.023 15.751a10.317 10.317 0 0 1 2.929-7.908 10.2 10.2 0 0 1 7.851-3.089L77.56 7.796c5.697.258 10.108 5.093 9.85 10.79s-5.041 10.154-10.79 9.85l-55.224-2.521 3.641 55.327c.377 5.692-3.936 10.614-9.628 10.986a7.745 7.745 0 0 1-.692.026zm403.541-2.184c-4.256-3.796-4.034-10.573 0-14.607l58.116-58.116c4.034-4.034 10.573-4.034 14.607 0s4.034 10.573 0 14.607L432.864 90.07c-4.085 3.951-9.338 4.7-14.606 0z'
                          data-original='#000000'
                        />
                        <path
                          d='M489.974 92.254a9.85 9.85 0 0 1-.687-.021c-5.697-.372-10.01-5.294-9.633-10.986l3.641-55.327-55.224 2.515c-5.511.238-10.526-4.147-10.79-9.85-.258-5.702 4.153-10.531 9.85-10.79l66.757-3.042c2.934-.134 5.79.992 7.851 3.089s3.12 4.974 2.929 7.908l-4.401 66.85c-.361 5.465-4.896 9.654-10.293 9.654zM11.711 489.339c-3.791-4.266-4.034-10.573 0-14.607l60.115-60.11c4.029-4.034 10.578-4.034 14.607 0 4.034 4.034 4.034 10.573 0 14.607l-60.115 60.11c-3.827 3.884-11.156 3.884-14.607 0z'
                          data-original='#000000'
                        />
                        <path
                          d='M10.327 499.947a10.33 10.33 0 0 1-7.376-3.104 10.312 10.312 0 0 1-2.929-7.902l4.401-66.85c.372-5.697 5.191-10.036 10.986-9.633 5.692.377 10.005 5.294 9.628 10.986l-3.641 55.332 55.224-2.515c5.645-.191 10.531 4.153 10.79 9.85.258 5.697-4.153 10.526-9.85 10.79l-66.763 3.037c-.155.004-.31.009-.47.009zm465.639-13.01-57.708-57.708c-4.034-4.034-4.034-10.573 0-14.607s10.573-4.034 14.607 0l57.708 57.708c4.034 4.034 3.962 10.5 0 14.607-3.817 3.951-10.062 3.951-14.607 0z'
                          data-original='#000000'
                        />
                        <path
                          d='M494.359 499.947c-.155 0-.315-.005-.47-.01l-66.757-3.042c-5.702-.263-10.108-5.088-9.85-10.79.263-5.702 5.113-9.984 10.79-9.85l55.219 2.515-3.641-55.332c-.372-5.692 3.941-10.609 9.633-10.986 5.625-.398 10.609 3.946 10.986 9.633l4.401 66.85a10.33 10.33 0 0 1-2.929 7.902 10.323 10.323 0 0 1-7.382 3.11z'
                          data-original='#000000'
                        />
                      </svg>
                      <div>
                        <h3 className='mb-2 text-xl font-semibold'>
                          Solo Registration
                        </h3>
                        <p className='text-sm text-gray-500'>
                          Fee: ₹{eventData.price}
                        </p>
                      </div>
                    </div>
                    <div className='flex rounded-md bg-white p-4 shadow-md'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='currentColor'
                        className='mr-6 h-12 w-12 shrink-0 rounded-md bg-gray-100 p-3'
                        viewBox='0 0 24 24'
                      >
                        <g fillRule='evenodd' clipRule='evenodd'>
                          <path
                            d='M17.03 8.97a.75.75 0 0 1 0 1.06l-4.2 4.2a.75.75 0 0 1-1.154-.114l-1.093-1.639L8.03 15.03a.75.75 0 0 1-1.06-1.06l3.2-3.2a.75.75 0 0 1 1.154.114l1.093 1.639L15.97 8.97a.75.75 0 0 1 1.06 0z'
                            data-original='#000000'
                          />
                          <path
                            d='M13.75 9.5a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-1.25H14.5a.75.75 0 0 1-.75-.75z'
                            data-original='#000000'
                          />
                          <path
                            d='M3.095 3.095C4.429 1.76 6.426 1.25 9 1.25h6c2.574 0 4.57.51 5.905 1.845C22.24 4.429 22.75 6.426 22.75 9v6c0 2.574-.51 4.57-1.845 5.905C19.571 22.24 17.574 22.75 15 22.75H9c-2.574 0-4.57-.51-5.905-1.845C1.76 19.571 1.25 17.574 1.25 15V9c0-2.574.51-4.57 1.845-5.905zm1.06 1.06C3.24 5.071 2.75 6.574 2.75 9v6c0 2.426.49 3.93 1.405 4.845.916.915 2.419 1.405 4.845 1.405h6c2.426 0 3.93-.49 4.845-1.405.915-.916 1.405-2.419 1.405-4.845V9c0-2.426-.49-3.93-1.405-4.845C18.929 3.24 17.426 2.75 15 2.75H9c-2.426 0-3.93.49-4.845 1.405z'
                            data-original='#000000'
                          />
                        </g>
                      </svg>
                      <div>
                        <h3 className='mb-2 text-xl font-semibold'>
                          Price Pool
                        </h3>
                        {eventData.prize ? (
                          <ul className='text-sm text-gray-500'>
                            {eventData.prize.map(
                              (prize: string, index: number) => (
                                <li key={index}>{prize}</li>
                              )
                            )}
                          </ul>
                        ) : (
                          <p className='text-sm text-gray-500'>Not Available</p>
                        )}
                      </div>
                    </div>
                    <div className='flex rounded-md bg-white p-4 shadow-md'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='currentColor'
                        className='mr-6 h-12 w-12 shrink-0 rounded-md bg-gray-100 p-3'
                        viewBox='0 0 512.001 512.001'
                      >
                        <path
                          d='M271.029 0c-33.091 0-61 27.909-61 61s27.909 61 61 61 60-27.909 60-61-26.909-61-60-61zm66.592 122c-16.485 18.279-40.096 30-66.592 30-26.496 0-51.107-11.721-67.592-30-14.392 15.959-23.408 36.866-23.408 60v15c0 8.291 6.709 15 15 15h151c8.291 0 15-6.709 15-15v-15c0-23.134-9.016-44.041-23.408-60zM144.946 460.404 68.505 307.149c-7.381-14.799-25.345-20.834-40.162-13.493l-19.979 9.897c-7.439 3.689-10.466 12.73-6.753 20.156l90 180c3.701 7.423 12.704 10.377 20.083 6.738l19.722-9.771c14.875-7.368 20.938-25.417 13.53-40.272zM499.73 247.7c-12.301-9-29.401-7.2-39.6 3.9l-82 100.8c-5.7 6-16.5 9.6-22.2 9.6h-69.901c-8.401 0-15-6.599-15-15s6.599-15 15-15h60c16.5 0 30-13.5 30-30s-13.5-30-30-30h-78.6c-7.476 0-11.204-4.741-17.1-9.901-23.209-20.885-57.949-30.947-93.119-22.795-19.528 4.526-32.697 12.415-46.053 22.993l-.445-.361-21.696 19.094L174.28 452h171.749c28.2 0 55.201-13.5 72.001-36l87.999-126c9.9-13.201 7.2-32.399-6.299-42.3z'
                          data-original='#000000'
                        />
                      </svg>
                      <div>
                        <h3 className='mb-2 text-xl font-semibold'>
                          Organizer
                        </h3>
                        {eventData.organizer ? (
                          eventData.organizer.map(
                            (organizer: string, index: number) => (
                              <p key={index} className='text-sm text-gray-500'>
                                {organizer}
                              </p>
                            )
                          )
                        ) : (
                          <p className='text-sm text-gray-500'>Not Available</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
