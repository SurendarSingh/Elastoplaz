import React from 'react';
import { WavyBackground } from './WavyBackground';
import { AnimatedTooltip } from './AnimatedToolTip';

const people = [
  {
    id: 0,
    name: 'Dr. K.Ravi Chandran',
    designation: 'SPART President',
    image: '/Team/DrRavichandran.jpeg',
  },
  {
    id: 1,
    name: 'Selva Nithilan',
    designation: 'Chairperson',
    image: '/Team/selva.jpg',
  },
  {
    id: 2,
    name: 'Santhosh Sakthi',
    designation: 'Vice-Chairperson',
    image: '/Team/sakthi.jpg',
  },
  {
    id: 3,
    name: 'Vishnu Gopal',
    designation: 'Treasurer',
    image: '/Team/vishnu.jpg',
  },
  {
    id: 4,
    name: 'Dhanamukhi',
    designation: 'Treasurer',
    image: '/Team/dhana.jpg',
  },
  {
    id: 5,
    name: 'Sivanesh',
    designation: 'Program Secretary',
    image: '/Team/sivanesh.jpg',
  },
  {
    id: 6,
    name: 'Gladis Christina Jaya',
    designation: 'Program Secretary',
    image: '/Team/gladish.jpg',
  },
  {
    id: 7,
    name: 'Divyadharshini',
    designation: 'Event Coordinator',
    image: '/Team/divya.jpg',
  },
  {
    id: 8,
    name: 'Sahaana',
    designation: 'Placement Represantative',
    image: '/Team/sahanna.jpg',
  },
  {
    id: 9,
    name: 'Goutham',
    designation: 'Spart Represantative',
    image: '/Team/goutham.jpeg',
  },
  {
    id: 10,
    name: 'Srinivasan',
    designation: 'Alumni Coordinator',
    image: '/Team/srini.jpeg',
  },
  {
    id: 11,
    name: 'Ahilandeswari',
    designation: 'Alumni Coordinator',
    image: '/Team/ahila.jpg',
  },
  {
    id: 12,
    name: 'Salaisiva',
    designation: 'Alumni Coordinator',
    image: '/Team/salai.jpeg',
  },
  {
    id: 13,
    name: 'Sangeetha',
    designation: 'Alumni Coordinator',
    image: '/Team/sangeetha.jpeg',
  },
  {
    id: 14,
    name: 'Gnaneshwaran',
    designation: 'IRI Coordinator',
    image: '/Team/gnanesh.jpeg',
  },
  {
    id: 15,
    name: 'Angeline',
    designation: 'IPI Coordinator',
    image: '/Team/angeline.jpg',
  },
  {
    id: 16,
    name: 'Krithika',
    designation: 'Senior librarian',
    image: '/Team/krithika.NEF',
  },
  {
    id: 17,
    name: 'Naresh',
    designation: 'Library Incharge',
    image: '/Team/naresh.jpeg',
  },
];

export function Team() {
  const midIndex = Math.ceil(people.length / 2);
  const firstHalf = people.slice(0, midIndex);
  const secondHalf = people.slice(midIndex);

  return (
    <WavyBackground
      backgroundFill='rgb(15 23 42)'
      className='mx-auto max-w-4xl py-40'
    >
      <p className='inter-var text-center text-3xl font-bold text-white md:text-4xl lg:text-7xl'>
        Meet our Cool Team
      </p>
      <div className='mb-2 mt-8 flex w-full flex-col items-center justify-center gap-4 md:flex-row'>
        <div className='flex max-sm:ml-4 max-sm:mr-8'>
          <AnimatedTooltip items={firstHalf} />
        </div>
        <div className='flex max-sm:ml-4 max-sm:mr-8'>
          <AnimatedTooltip items={secondHalf} />
        </div>
      </div>
      <p className='inter-var mt-4 text-center text-lg font-semibold text-white md:text-lg'>
        SPARTAN &apos;24
      </p>
    </WavyBackground>
  );
}
