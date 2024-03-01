import React, { Suspense } from 'react';
import ContactForm from './ContactForm';

export const ContactUs = () => {
  return (
    <div className='relative grid items-center gap-16 overflow-hidden rounded-3xl border-white/[0.2] bg-gray-800/10 p-10 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] before:absolute before:left-0 before:h-full before:w-[300px] before:bg-blue-600 max-md:before:hidden max-sm:pt-0 md:mx-6 md:mb-6 md:grid-cols-2 md:border lg:mx-10 xl:mx-auto xl:max-w-7xl'>
      <div className='relative z-10 h-full max-md:order-1 max-md:min-h-[350px]'>
        <Suspense fallback={<div>Loading Map...</div>}>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.379879897941!2d80.13758177496784!3d12.947526487365625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525fac8c3cabe7%3A0x678423254efbae2c!2sDepartment%20of%20Rubber%20%26%20Plastics%20Technology%2C%20MIT!5e0!3m2!1sen!2sin!4v1708975492180!5m2!1sen!2sin'
            className='left-0 top-0 h-full w-full rounded-xl'
            loading='lazy'
          ></iframe>
        </Suspense>
      </div>
      <div>
        <h2 className='text-center text-3xl font-extrabold text-gray-50'>
          Get In Touch
        </h2>
        <p className='mt-3 text-center text-sm text-gray-400'>
          We are here to help and answer any question you might have. Contact
          for any queries, feedback or issues. We look forward to hearing from
          you.
        </p>
        <ContactForm />
        <ul className='mt-6 flex justify-center text-gray-200 max-lg:flex-col max-lg:items-center max-lg:space-y-2 lg:space-x-6'>
          <li className='flex items-center hover:text-blue-500'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='16px'
              height='16px'
              fill='currentColor'
              viewBox='0 0 479.058 479.058'
            >
              <path
                d='M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z'
                data-original='#000000'
              />
            </svg>
            <a className='ml-3 text-sm text-current'>
              <strong>spart2024.mit@gmail.com</strong>
            </a>
          </li>
          <li className='flex items-center text-current hover:text-blue-500'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='16px'
              height='16px'
              fill='currentColor'
              viewBox='0 0 482.6 482.6'
            >
              <path
                d='M98.339 320.8c47.6 56.9 104.9 101.7 170.3 133.4 24.9 11.8 58.2 25.8 95.3 28.2 2.3.1 4.5.2 6.8.2 24.9 0 44.9-8.6 61.2-26.3.1-.1.3-.3.4-.5 5.8-7 12.4-13.3 19.3-20 4.7-4.5 9.5-9.2 14.1-14 21.3-22.2 21.3-50.4-.2-71.9l-60.1-60.1c-10.2-10.6-22.4-16.2-35.2-16.2-12.8 0-25.1 5.6-35.6 16.1l-35.8 35.8c-3.3-1.9-6.7-3.6-9.9-5.2-4-2-7.7-3.9-11-6-32.6-20.7-62.2-47.7-90.5-82.4-14.3-18.1-23.9-33.3-30.6-48.8 9.4-8.5 18.2-17.4 26.7-26.1 3-3.1 6.1-6.2 9.2-9.3 10.8-10.8 16.6-23.3 16.6-36s-5.7-25.2-16.6-36l-29.8-29.8c-3.5-3.5-6.8-6.9-10.2-10.4-6.6-6.8-13.5-13.8-20.3-20.1-10.3-10.1-22.4-15.4-35.2-15.4-12.7 0-24.9 5.3-35.6 15.5l-37.4 37.4c-13.6 13.6-21.3 30.1-22.9 49.2-1.9 23.9 2.5 49.3 13.9 80 17.5 47.5 43.9 91.6 83.1 138.7zm-72.6-216.6c1.2-13.3 6.3-24.4 15.9-34l37.2-37.2c5.8-5.6 12.2-8.5 18.4-8.5 6.1 0 12.3 2.9 18 8.7 6.7 6.2 13 12.7 19.8 19.6 3.4 3.5 6.9 7 10.4 10.6l29.8 29.8c6.2 6.2 9.4 12.5 9.4 18.7s-3.2 12.5-9.4 18.7c-3.1 3.1-6.2 6.3-9.3 9.4-9.3 9.4-18 18.3-27.6 26.8l-.5.5c-8.3 8.3-7 16.2-5 22.2.1.3.2.5.3.8 7.7 18.5 18.4 36.1 35.1 57.1 30 37 61.6 65.7 96.4 87.8 4.3 2.8 8.9 5 13.2 7.2 4 2 7.7 3.9 11 6 .4.2.7.4 1.1.6 3.3 1.7 6.5 2.5 9.7 2.5 8 0 13.2-5.1 14.9-6.8l37.4-37.4c5.8-5.8 12.1-8.9 18.3-8.9 7.6 0 13.8 4.7 17.7 8.9l60.3 60.2c12 12 11.9 25-.3 37.7-4.2 4.5-8.6 8.8-13.3 13.3-7 6.8-14.3 13.8-20.9 21.7-11.5 12.4-25.2 18.2-42.9 18.2-1.7 0-3.5-.1-5.2-.2-32.8-2.1-63.3-14.9-86.2-25.8-62.2-30.1-116.8-72.8-162.1-127-37.3-44.9-62.4-86.7-79-131.5-10.3-27.5-14.2-49.6-12.6-69.7z'
                data-original='#000000'
              ></path>
            </svg>
            <a className='ml-3 text-sm text-current'>
              <strong>+91 63696 83288</strong>
            </a>
          </li>
        </ul>
        <span className='mt-2 flex items-center justify-center text-gray-200 hover:text-blue-500'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='16px'
            height='16px'
            fill='currentColor'
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
          <a className='ml-3 text-sm text-current'>
            <strong>RPT, MIT Campus, Chrompet</strong>
          </a>
        </span>
      </div>
    </div>
  );
};
