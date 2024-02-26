'use client';

import React, { useState } from 'react';
import {
  DotBackground,
  GridBackground,
} from '@/components/Event/GridBackground';
import { BentoGrid, BentoGridItem } from './BentoGrid';
import PopupModal from './PopupModal';

const TechnicalEvents: any = [
  {
    title: 'Workshop',
    description: 'Give me some content',
    price: '200',
    open: true,
    recommended: true,
  },
  {
    title: 'Hackthon',
    description: 'Give me some content',
    price: '500',
    open: true,
    recommended: true,
  },
  {
    title: 'Paper Presentation',
    description: 'Give me some content',
    image: '/Events/paper-presentation.jpg',
    price: '750',
    open: true,
    recommended: true,
  },
  {
    title: 'Poster Presentation',
    description: 'Give me some content',
    image: '/Events/poster-presentation.jpg',
    price: '200',
    open: true,
  },
  {
    title: 'Idea Presentation',
    description: 'Give me some content',
    image: '/Events/idea-presentation.jpg',
    price: '200',
    open: true,
  },
  {
    title: 'Technical Debate',
    description: 'Give me some content',
    image: '/Events/tech-debate.jpg',
    price: '200',
    open: true,
    recommended: true,
  },
  {
    title: 'Technical Quiz',
    description: 'Give me some content',
    image: '/Events/tech-quiz.jpg',
    price: '200',
    open: true,
    recommended: true,
  },
  {
    title: 'Product decoding',
    description: 'Give me some content',
    image: '/Events/product-decoding.jpg',
    price: '100',
    open: true,
  },
  {
    title: 'Just a minute',
    description: 'Give me some content',
    image: '/Events/just-a-minute.jpg',
    price: '100',
    open: true,
  },
];

const NonTechnicalEvents = [
  {
    title: 'Connections',
    description: 'Give me some content',
    image: '/Events/connexion.jpg',
    open: true,
    recommended: true,
  },
  {
    title: 'Photography',
    description: 'Give me some content',
    open: true,
  },
  {
    title: 'Reels/Short film',
    description: 'Give me some content',
    open: true,
  },
];

const Event = () => {
  const [eventPopup, setEventPopup] = useState(false);
  const modalClose = () => {
    setEventPopup(false);
    document.body.style.overflow = 'unset';
  };
  const modalOpen = () => {
    setEventPopup(true);
    if (typeof window != 'undefined' && window.document) {
      document.body.style.overflow = 'hidden';
    }
  };

  return (
    <>
      <PopupModal open={eventPopup} modalClose={modalClose} />
      <GridBackground />
      <BentoGrid className='mx-auto px-10 pb-2 lg:max-w-7xl'>
        {TechnicalEvents.map((item: any, i: number) => (
          <BentoGridItem
            key={i}
            title={item.title}
            // description={item.description}
            open={item.open}
            recommended={item.recommended}
            image={item.image}
            price={item.price}
            modalOpen={modalOpen}
          />
        ))}
      </BentoGrid>
      <DotBackground />
      <BentoGrid className='mx-auto px-10 pb-2 lg:max-w-7xl'>
        {NonTechnicalEvents.map((item: any, i: number) => (
          <BentoGridItem
            key={i}
            title={item.title}
            // description={item.description}
            open={item.open}
            recommended={item.recommended}
            image={item.image}
            price={item.price}
            modalOpen={modalOpen}
          />
        ))}
      </BentoGrid>
    </>
  );
};

export default Event;
