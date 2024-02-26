import React from 'react';
import { WavyBackground } from './WavyBackground';
import { AnimatedTooltip } from './AnimatedToolTip';

const people = [
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
    image:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 10,
    name: 'Srinivasan',
    designation: 'Alumni Coordinator',
    image:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 11,
    name: 'Ahilandeswari',
    designation: 'Alumni Coordinator',
    image:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80',
  },
  {
    id: 12,
    name: 'Salaisiva',
    designation: 'Alumni Coordinator',
    image:
      'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80',
  },
  {
    id: 13,
    name: 'Sangeetha',
    designation: 'Alumni Coordinator',
    image:
      'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80',
  },
  {
    id: 14,
    name: 'Gnaneshwaran',
    designation: 'IRI Coordinator ',
    image:
      'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80',
  },
  {
    id: 15,
    name: 'Angeline',
    designation: 'IRI Coordinator ',
    image: '/Team/angeline.jpg',
  },
  {
    id: 16,
    name: 'Naresh',
    designation: 'Library Incharge',
    image:
      'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80',
  },
];

export function Team() {
  return (
    <WavyBackground
      backgroundFill='rgb(15 23 42)'
      className='mx-auto max-w-4xl py-40'
    >
      <p className='inter-var text-center text-3xl font-bold text-white md:text-4xl lg:text-7xl'>
        Meet our Cool Team
      </p>
      <div className='mb-2 mt-8 flex w-full flex-row items-center justify-center'>
        <AnimatedTooltip items={people} />
      </div>
      <p className='inter-var text-center text-lg font-semibold text-white md:text-lg'>
        SPARTAN &apos;24
      </p>
    </WavyBackground>
  );
}
