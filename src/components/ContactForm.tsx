import React from 'react';

const ContactForm = () => {
  return (
    <form>
      <div className='mt-8 space-y-4'>
        <div className='grid gap-6 md:grid-cols-2'>
          <input
            type='text'
            placeholder='Name'
            className='w-full border-b-2 bg-white px-2 py-3 text-sm outline-none focus:border-[#333]'
          />

          <input
            type='email'
            placeholder='Email or Phone Number'
            className='w-full border-b-2 bg-white px-2 py-3 text-sm outline-none focus:border-[#333]'
          />
        </div>

        <textarea
          placeholder='Write Message'
          rows={5}
          className='w-full border-b-2 bg-white px-2 pt-3 text-sm text-black outline-none focus:border-[#333]'
        ></textarea>
      </div>
      <button
        type='button'
        className='mt-8 flex w-full items-center justify-center rounded bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-700'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='16px'
          height='16px'
          fill='#fff'
          className='mr-2'
          viewBox='0 0 548.244 548.244'
        >
          <path
            fill-rule='evenodd'
            d='M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z'
            clip-rule='evenodd'
            data-original='#000000'
          />
        </svg>
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
