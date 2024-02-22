import React from 'react';
import Image from 'next/image';

const content = [
  {
    title: 'Who are we?',
    description:
      'The Society of Plastics and Rubber Technologists is the student body of the Department of Rubber and Plastics Technology. We are dedicated towards the development of the personal and technical skills of every student from the Department. The association creates various platforms to achieve its goal by organising guest lectures, conferences, industrial visits, smart sessions and many more fruitful activities. The annual symposium is our signature event where we create opportunities for the polymer community from across the country to come together and discuss various advancements, issues and future trends.',
    image:
      'https://media.istockphoto.com/id/1346125184/photo/group-of-successful-multiethnic-business-team.jpg?s=612x612&w=0&k=20&c=5FHgRQZSZed536rHji6w8o5Hco9JVMRe8bpgTa69hE8=',
  },
  {
    title: 'What we do?',
    description:
      'We take pride in organising a national-level intercollegiate technical symposium, "Elastoplaz", which provides the right stage for Rubber and Plastics Technologists in India. Elastoplaz 2018 will be a vibrant concoction of various technical events. We are unfurling new events this year to commemorate this 30th edition. The events are scheduled for two days. There will be some non-technical events for additional entertainment.',

    image:
      'https://www.shutterstock.com/shutterstock/photos/1090916522/display_1500/stock-photo-the-business-people-standing-on-the-white-wall-background-1090916522.jpg',
  },
];

export function InfoSection() {
  return (
    <section className='mx-auto max-w-7xl'>
      {content.map((item, index) => (
        <div
          key={index}
          className='container mx-auto flex flex-col items-center px-5 py-8 md:flex-row md:py-16'
        >
          <div className='flex w-5/6 flex-col items-center text-center md:w-1/2 md:items-start md:px-16 md:text-left lg:flex-grow lg:px-24'>
            <h1 className='title-font mb-4 text-2xl font-bold text-slate-100 sm:text-3xl'>
              {item.title}
            </h1>
            <p className='mb-8 text-justify text-sm leading-relaxed text-slate-300 md:text-base'>
              {item.description}
            </p>
          </div>
          <div className='relative mb-10 h-80 w-5/6 rounded-md md:mb-0 md:w-1/2 lg:w-full lg:max-w-lg'>
            <Image
              src={item.image}
              layout='fill'
              objectFit='cover'
              objectPosition='center'
              alt='Image'
            />
          </div>
        </div>
      ))}
    </section>
  );
}
