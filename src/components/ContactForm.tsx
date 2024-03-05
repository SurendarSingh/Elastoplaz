'use client';

import React from 'react';
import toast, { Toaster } from 'react-hot-toast';

const ContactForm = () => {
  const [formSubmitting, setFormSubmitting] = React.useState(false);

  const onSubmit = async (event: any) => {
    event.preventDefault();
    setFormSubmitting(true);

    const formData = new FormData(event.target);

    formData.append('access_key', '817fa5c7-7547-4ddd-bec8-d64e93dfedb6');

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      toast.success('We have received your message!');
      event.target.reset();
    } else {
      toast.error(data.message || 'Failed to send message. Please try again.');
    }

    setFormSubmitting(false);
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <div className='mt-8 grid gap-8 sm:grid-cols-2'>
          <div className='relative flex items-center'>
            <input
              type='text'
              placeholder='Name'
              name='Name'
              required
              className='w-full border-b-2 bg-transparent px-2 py-3 text-sm text-white outline-none focus:border-blue-600'
            />
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='#bbb'
              stroke='#bbb'
              className='absolute right-2 h-[18px] w-[18px]'
              viewBox='0 0 24 24'
            >
              <circle cx='10' cy='7' r='6' data-original='#000000'></circle>
              <path
                d='M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z'
                data-original='#000000'
              ></path>
            </svg>
          </div>

          <div className='relative flex items-center'>
            <input
              type='number'
              placeholder='Phone No.'
              name='Phone'
              className='w-full border-b-2 bg-transparent px-2 py-3 text-sm text-white outline-none focus:border-blue-600'
            />
            <svg
              fill='#bbb'
              className='absolute right-2 h-[18px] w-[18px]'
              viewBox='0 0 64 64'
            >
              <path
                d='m52.148 42.678-6.479-4.527a5 5 0 0 0-6.963 1.238l-1.504 2.156c-2.52-1.69-5.333-4.05-8.014-6.732-2.68-2.68-5.04-5.493-6.73-8.013l2.154-1.504a4.96 4.96 0 0 0 2.064-3.225 4.98 4.98 0 0 0-.826-3.739l-4.525-6.478C20.378 10.5 18.85 9.69 17.24 9.69a4.69 4.69 0 0 0-1.628.291 8.97 8.97 0 0 0-1.685.828l-.895.63a6.782 6.782 0 0 0-.63.563c-1.092 1.09-1.866 2.472-2.303 4.104-1.865 6.99 2.754 17.561 11.495 26.301 7.34 7.34 16.157 11.9 23.011 11.9 1.175 0 2.281-.136 3.29-.406 1.633-.436 3.014-1.21 4.105-2.302.199-.199.388-.407.591-.67l.63-.899a9.007 9.007 0 0 0 .798-1.64c.763-2.06-.007-4.41-1.871-5.713z'
                data-original='#000000'
              ></path>
            </svg>
          </div>

          <div className='relative flex items-center sm:col-span-2'>
            <input
              type='email'
              placeholder='Email'
              name='Email'
              required
              className='w-full border-b-2 bg-transparent px-2 py-3 text-sm text-white outline-none focus:border-blue-600'
            />
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='#bbb'
              stroke='#bbb'
              className='absolute right-2 h-[18px] w-[18px]'
              viewBox='0 0 682.667 682.667'
            >
              <defs>
                <clipPath id='a' clipPathUnits='userSpaceOnUse'>
                  <path d='M0 512h512V0H0Z' data-original='#000000'></path>
                </clipPath>
              </defs>
              <g
                clipPath='url(#a)'
                transform='matrix(1.33 0 0 -1.33 0 682.667)'
              >
                <path
                  fill='none'
                  strokeMiterlimit='10'
                  strokeWidth='40'
                  d='M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z'
                  data-original='#000000'
                ></path>
                <path
                  d='M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z'
                  data-original='#000000'
                ></path>
              </g>
            </svg>
          </div>

          <div className='relative flex items-center sm:col-span-2'>
            <textarea
              placeholder='Write Message'
              name='Message'
              required
              rows={3}
              className='w-full border-b-2 bg-transparent px-2 pt-3 text-sm text-white outline-none focus:border-blue-600'
            ></textarea>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='#bbb'
              stroke='#bbb'
              className='absolute right-2 h-[18px] w-[18px]'
              viewBox='0 0 682.667 682.667'
            >
              <defs>
                <clipPath id='a' clipPathUnits='userSpaceOnUse'>
                  <path d='M0 512h512V0H0Z' data-original='#000000'></path>
                </clipPath>
              </defs>
              <g
                clipPath='url(#a)'
                transform='matrix(1.33 0 0 -1.33 0 682.667)'
              >
                <path
                  fill='none'
                  strokeMiterlimit='10'
                  strokeWidth='40'
                  d='M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z'
                  data-original='#000000'
                ></path>
                <path
                  d='M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z'
                  data-original='#000000'
                ></path>
              </g>
            </svg>
          </div>
        </div>
        <button
          type='submit'
          className='mt-8 flex w-full items-center justify-center rounded bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-700 focus:border-blue-600'
        >
          {formSubmitting ? (
            <>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 200 200'
                className='mr-2 h-6 w-6'
              >
                <radialGradient
                  id='a7'
                  cx='.66'
                  fx='.66'
                  cy='.3125'
                  fy='.3125'
                  gradientTransform='scale(1.5)'
                >
                  <stop offset='0' stop-color='#FFFFFF'></stop>
                  <stop
                    offset='.3'
                    stop-color='#FFFFFF'
                    stop-opacity='.9'
                  ></stop>
                  <stop
                    offset='.6'
                    stop-color='#FFFFFF'
                    stop-opacity='.6'
                  ></stop>
                  <stop
                    offset='.8'
                    stop-color='#FFFFFF'
                    stop-opacity='.3'
                  ></stop>
                  <stop offset='1' stop-color='#FFFFFF' stop-opacity='0'></stop>
                </radialGradient>
                <circle
                  transform-origin='center'
                  fill='none'
                  stroke='url(#a7)'
                  stroke-width='15'
                  stroke-linecap='round'
                  stroke-dasharray='200 1000'
                  stroke-dashoffset='0'
                  cx='100'
                  cy='100'
                  r='70'
                >
                  <animateTransform
                    type='rotate'
                    attributeName='transform'
                    calcMode='spline'
                    dur='2'
                    values='360;0'
                    keyTimes='0;1'
                    keySplines='0 0 1 1'
                    repeatCount='indefinite'
                  ></animateTransform>
                </circle>
                <circle
                  transform-origin='center'
                  fill='none'
                  opacity='.2'
                  stroke='#FFFFFF'
                  stroke-width='15'
                  stroke-linecap='round'
                  cx='100'
                  cy='100'
                  r='70'
                ></circle>
              </svg>
              Sending Message
            </>
          ) : (
            <>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16px'
                height='16px'
                fill='#fff'
                className='mr-2'
                viewBox='0 0 548.244 548.244'
              >
                <path
                  fillRule='evenodd'
                  d='M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z'
                  clipRule='evenodd'
                  data-original='#000000'
                />
              </svg>
              Send Message
            </>
          )}
        </button>
      </form>
      <Toaster />
    </>
  );
};

export default ContactForm;
