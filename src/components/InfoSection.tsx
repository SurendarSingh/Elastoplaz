import React from 'react';
import Image from 'next/image';

const content = [
  {
    title: 'Who are we?',
    description:
      'The Society of Plastics and Rubber Technologists is the student body of the Department of Rubber and Plastics Technology. We are dedicated towards the development of the personal and technical skills of every student from the Department. The association creates various platforms to achieve its goal by organising guest lectures, conferences, industrial visits, smart sessions and many more fruitful activities. The annual symposium is our signature event where we create opportunities for the polymer community from across the country to come together and discuss various advancements, issues and future trends.',
    image: '/assert/info-section-1.jpeg',
  },
  {
    title: 'What we do?',
    description:
      'We take pride in organising a national-level intercollegiate technical symposium, "Elastoplaz", which provides the right stage for Rubber and Plastics Technologists in India. Elastoplaz 2024 will be a vibrant concoction of various technical events. We are unfurling new events this year to commemorate this 30th edition. The events are scheduled for two days. There will be some non-technical events for additional entertainment.',

    image: '/assert/info-section-3.jpg',
  },
];

export function InfoSection() {
  return (
    <section className='mx-auto max-w-7xl'>
      {content.map((item, index) => (
        <div
          key={index}
          className='container mx-auto flex flex-col items-center justify-center py-8 max-sm:px-5 md:flex-row md:py-16'
        >
          <div
            className={`${index % 2 == 0 && 'md:order-1'} flex w-5/6 flex-col items-center text-center md:w-1/2 md:items-start md:px-16 md:text-left lg:flex-grow lg:px-24`}
          >
            <h1 className='title-font mb-4 text-2xl font-bold text-slate-100 sm:text-3xl'>
              {item.title}
            </h1>
            <p className='mb-8 text-justify text-sm leading-relaxed text-slate-300 md:text-base'>
              {item.description}
            </p>
          </div>
          <div className='group/card relative h-60 w-5/6 overflow-hidden rounded-lg bg-transparent max-md:mb-10 md:h-96 md:w-2/5'>
            <Image
              src={item.image}
              fill
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
              style={{ objectFit: 'cover', objectPosition: 'center' }}
              alt='Image'
            />
          </div>
        </div>
      ))}
    </section>
  );
}
