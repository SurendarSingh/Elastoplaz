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
              <div className='mx-auto flex flex-col gap-4 rounded-lg font-[sans-serif] md:flex-row'>
                <div className='h-full w-full md:w-1/2'>
                  <Suspense fallback={<ImageSkeleton />}>
                    <Image
                      src={eventData.image}
                      alt={eventData.title}
                      unoptimized
                      priority
                      width={600}
                      height={300}
                      className='h-full w-full rounded-lg'
                    />
                  </Suspense>

                  {eventData.additionalImage &&
                    eventData.additionalImage.map(
                      (image: string, index: number) => (
                        <Suspense key={index} fallback={<ImageSkeleton />}>
                          <Image
                            src={image}
                            alt={eventData.title}
                            unoptimized
                            priority
                            width={600}
                            height={300}
                            className='h-full w-full rounded-lg'
                          />
                        </Suspense>
                      )
                    )}
                </div>
                <div className='h-full w-full md:w-1/2'>
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
                          {eventData.type}
                        </h3>
                        <p className='text-lg text-gray-700'>
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
                          <ul className='text-lg text-gray-700'>
                            {eventData.prize.map(
                              (prize: string, index: number) => (
                                <li key={index}>{prize}</li>
                              )
                            )}
                          </ul>
                        ) : (
                          <p className='text-sm text-gray-700'>Not Available</p>
                        )}
                      </div>
                    </div>
                    <div className='flex w-full rounded-md bg-white p-4 shadow-md'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='currentColor'
                        className='mr-6 h-12 w-12 shrink-0 rounded-md bg-gray-100 p-3'
                        viewBox='0 0 395.71 395.71'
                      >
                        <g>
                          <path
                            d='M197.849,0C122.131,0,60.531,61.609,60.531,137.329c0,72.887,124.591,243.177,129.896,250.388l4.951,6.738
		c0.579,0.792,1.501,1.255,2.471,1.255c0.985,0,1.901-0.463,2.486-1.255l4.948-6.738c5.308-7.211,129.896-177.501,129.896-250.388
		C335.179,61.609,273.569,0,197.849,0z M197.849,88.138c27.13,0,49.191,22.062,49.191,49.191c0,27.115-22.062,49.191-49.191,49.191
		c-27.114,0-49.191-22.076-49.191-49.191C148.658,110.2,170.734,88.138,197.849,88.138z'
                          />
                        </g>
                      </svg>
                      <div>
                        <h3 className='mb-2 text-lg font-semibold'>
                          {eventData.time}
                        </h3>
                        <p className='text-lg text-gray-700'>
                          {eventData.location}
                        </p>
                      </div>
                    </div>
                    <div className='flex w-full rounded-md bg-white p-4 shadow-md'>
                      <svg
                        viewBox='0 0 1024 1024'
                        version='1.1'
                        xmlns='http://www.w3.org/2000/svg'
                        className='mr-6 h-12 w-12 shrink-0 rounded-md bg-gray-100 p-3'
                      >
                        <path d='M627.904 782.848l221.76-221.76 63.36 63.36-221.76 221.76zM537.6 940.8l121.6-64-64-57.6zM992 518.4l-32-32c-6.4-6.4-25.6-6.4-32 0l-44.8 44.8 64 64 44.8-44.8c6.4-12.8 6.4-25.6 0-32zM556.8 691.2c-51.2-32-38.4-108.8-38.4-108.8 57.6-64 76.8-121.6 76.8-121.6 32-19.2 57.6-51.2 57.6-83.2-6.4-38.4-32-32-32-32s25.6-96 6.4-179.2C614.4 76.8 531.2 32 435.2 32 326.4 32 288 12.8 288 12.8c-6.4 25.6 0 44.8 0 64-25.6 19.2-51.2 51.2-57.6 89.6-19.2 76.8 6.4 179.2 6.4 179.2s-25.6-6.4-25.6 32c-6.4 32 19.2 64 51.2 83.2 0 0 25.6 57.6 76.8 121.6 0 0 12.8 76.8-38.4 108.8-64 38.4-172.8 32-236.8 76.8s-64 96-64 115.2c6.4 19.2 12.8 19.2 25.6 19.2h371.2L595.2 704c-12.8 0-25.6-6.4-38.4-12.8z' />
                      </svg>
                      <div>
                        <h3 className='mb-2 text-lg font-semibold'>
                          Onsite Registration
                        </h3>
                        <p className='text-lg text-gray-700'>
                          {eventData.onsite ? 'Available' : 'Not Available'}
                        </p>
                      </div>
                    </div>
                    <div className='flex w-full rounded-md bg-white p-4 shadow-md'>
                      <svg
                        fill='#000000'
                        height='800px'
                        width='800px'
                        version='1.1'
                        id='Capa_1'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 60 60'
                        className='mr-6 h-12 w-12 shrink-0 rounded-md bg-gray-100 p-3'
                      >
                        <g>
                          <path
                            d='M18.35,20.805c0.195,0.195,0.451,0.293,0.707,0.293c0.256,0,0.512-0.098,0.707-0.293c0.391-0.391,0.391-1.023,0-1.414
		c-1.015-1.016-1.015-2.668,0-3.684c0.87-0.87,1.35-2.026,1.35-3.256s-0.479-2.386-1.35-3.256c-0.391-0.391-1.023-0.391-1.414,0
		s-0.391,1.023,0,1.414c0.492,0.492,0.764,1.146,0.764,1.842s-0.271,1.35-0.764,1.842C16.555,16.088,16.555,19.01,18.35,20.805z'
                          />
                          <path
                            d='M40.35,20.805c0.195,0.195,0.451,0.293,0.707,0.293c0.256,0,0.512-0.098,0.707-0.293c0.391-0.391,0.391-1.023,0-1.414
		c-1.015-1.016-1.015-2.668,0-3.684c0.87-0.87,1.35-2.026,1.35-3.256s-0.479-2.386-1.35-3.256c-0.391-0.391-1.023-0.391-1.414,0
		s-0.391,1.023,0,1.414c0.492,0.492,0.764,1.146,0.764,1.842s-0.271,1.35-0.764,1.842C38.555,16.088,38.555,19.01,40.35,20.805z'
                          />
                          <path
                            d='M29.35,14.805c0.195,0.195,0.451,0.293,0.707,0.293c0.256,0,0.512-0.098,0.707-0.293c0.391-0.391,0.391-1.023,0-1.414
		c-1.015-1.016-1.015-2.668,0-3.684c0.87-0.87,1.35-2.026,1.35-3.256s-0.479-2.386-1.35-3.256c-0.391-0.391-1.023-0.391-1.414,0
		s-0.391,1.023,0,1.414c0.492,0.492,0.764,1.146,0.764,1.842s-0.271,1.35-0.764,1.842C27.555,10.088,27.555,13.01,29.35,14.805z'
                          />
                          <path
                            d='M55.624,43.721C53.812,33.08,45.517,24.625,34.957,22.577c0.017-0.16,0.043-0.321,0.043-0.48c0-2.757-2.243-5-5-5
		s-5,2.243-5,5c0,0.159,0.025,0.32,0.043,0.48C14.483,24.625,6.188,33.08,4.376,43.721C2.286,44.904,0,46.645,0,48.598
		c0,5.085,15.512,8.5,30,8.5s30-3.415,30-8.5C60,46.645,57.714,44.904,55.624,43.721z M27.006,22.27
		C27.002,22.212,27,22.154,27,22.098c0-1.654,1.346-3,3-3s3,1.346,3,3c0,0.057-0.002,0.114-0.006,0.172
		c-0.047-0.005-0.094-0.007-0.14-0.012c-0.344-0.038-0.69-0.065-1.038-0.089c-0.128-0.009-0.255-0.022-0.383-0.029
		c-0.474-0.026-0.951-0.041-1.432-0.041s-0.958,0.015-1.432,0.041c-0.128,0.007-0.255,0.02-0.383,0.029
		c-0.348,0.024-0.694,0.052-1.038,0.089C27.1,22.263,27.053,22.264,27.006,22.27z M25.126,26.635
		c1.582-0.356,3.217-0.537,4.86-0.537c0.004,0,0.009,0,0.014,0c0.552,0,1,0.448,1,1.001c0,0.552-0.448,0.999-1,0.999h0
		c-0.004,0-0.009,0-0.013,0c-1.496,0-2.982,0.164-4.421,0.488c-0.074,0.017-0.148,0.024-0.221,0.024c-0.457,0-0.87-0.315-0.975-0.78
		C24.249,27.291,24.587,26.756,25.126,26.635z M19.15,28.997c0.476-0.281,1.088-0.124,1.37,0.351
		c0.282,0.476,0.125,1.089-0.351,1.37c-4.713,2.792-8.147,7.861-9.186,13.56c-0.088,0.482-0.509,0.82-0.983,0.82
		c-0.06,0-0.12-0.005-0.18-0.017c-0.543-0.099-0.904-0.619-0.805-1.163C10.158,37.658,13.947,32.08,19.15,28.997z M30,55.098
		c-17.096,0-28-4.269-28-6.5c0-0.383,0.474-1.227,2.064-2.328c-0.004,0.057-0.002,0.113-0.006,0.17C4.024,46.988,4,47.54,4,48.098
		v0.788l0.767,0.185c8.254,1.981,16.744,2.985,25.233,2.985s16.979-1.004,25.233-2.985L56,48.886v-0.788
		c0-0.558-0.024-1.109-0.058-1.658c-0.004-0.057-0.002-0.113-0.006-0.17C57.526,47.371,58,48.215,58,48.598
		C58,50.829,47.096,55.098,30,55.098z'
                          />
                        </g>
                      </svg>
                      <div>
                        <h3 className='mb-2 text-lg font-semibold'>
                          Lunch is Provided
                        </h3>
                        <p className='text-lg text-gray-700'>
                          All participants will be provided with lunch
                        </p>
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
                          Organizers
                        </h3>
                        {eventData.organizer ? (
                          eventData.organizer.map(
                            (organizer: string, index: number) => (
                              <p key={index} className='text-lg text-gray-700'>
                                {organizer}
                              </p>
                            )
                          )
                        ) : (
                          <p className='text-sm text-gray-700'>Not Available</p>
                        )}
                      </div>
                    </div>
                    <div className='flex flex-col rounded-md bg-white p-4 shadow-md'>
                      <div className='flex items-center'>
                        <svg
                          width='800px'
                          height='800px'
                          viewBox='0 0 24 24'
                          version='1.1'
                          xmlns='http://www.w3.org/2000/svg'
                          className='mr-6 h-12 w-12 shrink-0 rounded-md bg-gray-100 p-3'
                        >
                          <title>ic_fluent_text_description_24_filled</title>
                          <desc>Created with Sketch.</desc>
                          <g
                            id='🔍-System-Icons'
                            stroke='none'
                            strokeWidth='1'
                            fill='none'
                            fillRule='evenodd'
                          >
                            <g
                              id='ic_fluent_text_description_24_filled'
                              fill='#212121'
                              fillRule='nonzero'
                            >
                              <path
                                d='M3,17 L15,17 C15.5522847,17 16,17.4477153 16,18 C16,18.5128358 15.6139598,18.9355072 15.1166211,18.9932723 L15,19 L3,19 C2.44771525,19 2,18.5522847 2,18 C2,17.4871642 2.38604019,17.0644928 2.88337887,17.0067277 L3,17 L15,17 L3,17 Z M3,13 L21,13 C21.5522847,13 22,13.4477153 22,14 C22,14.5128358 21.6139598,14.9355072 21.1166211,14.9932723 L21,15 L3,15 C2.44771525,15 2,14.5522847 2,14 C2,13.4871642 2.38604019,13.0644928 2.88337887,13.0067277 L3,13 L21,13 L3,13 Z M3,9 L21,9 C21.5522847,9 22,9.44771525 22,10 C22,10.5128358 21.6139598,10.9355072 21.1166211,10.9932723 L21,11 L3,11 C2.44771525,11 2,10.5522847 2,10 C2,9.48716416 2.38604019,9.06449284 2.88337887,9.00672773 L3,9 L21,9 L3,9 Z M3,5 L21,5 C21.5522847,5 22,5.44771525 22,6 C22,6.51283584 21.6139598,6.93550716 21.1166211,6.99327227 L21,7 L3,7 C2.44771525,7 2,6.55228475 2,6 C2,5.48716416 2.38604019,5.06449284 2.88337887,5.00672773 L3,5 L21,5 L3,5 Z'
                                id='🎨-Color'
                              ></path>
                            </g>
                          </g>
                        </svg>
                        <h3 className='mb-2 text-xl font-semibold'>
                          Description
                        </h3>
                      </div>
                      <div>
                        {eventData.description ? (
                          eventData.description.map(
                            (desc: string, idx: number) => (
                              <p
                                key={idx}
                                className='my-3 text-lg font-medium leading-7 text-gray-700'
                              >
                                {desc}
                              </p>
                            )
                          )
                        ) : (
                          <p className='my-3 text-lg font-medium leading-7 text-gray-700'>
                            All the best for the event!
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='flex items-center justify-center gap-x-4 border-t px-4 py-3 dark:border-gray-700'>
            <button
              type='button'
              onClick={modalClose}
              className='inline-flex w-1/2 items-center justify-center gap-x-2 rounded-lg border border-gray-200 bg-white px-5 py-3 text-sm font-medium text-gray-800 shadow-sm hover:bg-gray-50 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:bg-slate-900 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
            >
              Other Events
            </button>
            <button
              type='button'
              onClick={() => {
                if (eventData.link) window.open(eventData.link, '_blank');
              }}
              className='inline-flex w-1/2 items-center justify-center gap-x-2 rounded-lg border border-transparent bg-blue-700 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-800 disabled:pointer-events-none disabled:opacity-50 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
            >
              Register
              <svg
                className='ms-2 h-3.5 w-3.5 rtl:rotate-180'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 14 10'
              >
                <path
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M1 5h12m0 0L9 1m4 4L9 9'
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupModal;
