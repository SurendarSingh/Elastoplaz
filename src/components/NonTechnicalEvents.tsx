import React from 'react';
import { BentoGrid, BentoGridItem } from './BentoGrid';

export function NonTechnicalEvents() {
  return (
    <BentoGrid className='mx-auto px-10 pb-2 lg:max-w-7xl'>
      {items.map((item: any, i: number) => (
        <BentoGridItem
          key={i}
          title={item.title}
          // description={item.description}
          open={item.open}
          recommended={item.recommended}
          image={item.image}
          price={item.price}
        />
      ))}
    </BentoGrid>
  );
}

const items = [
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
