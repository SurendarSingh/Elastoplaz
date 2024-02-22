import React from 'react';
import { BentoGrid, BentoGridItem } from './BentoGrid';

export function TechnicalEvents() {
  return (
    <BentoGrid className='mx-auto px-10 pb-2 lg:max-w-7xl'>
      {items.map((item: any, i: number) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          open={item.open}
          recommended={item.recommended}
          image={item.image}
          price={item.price}
        />
      ))}
    </BentoGrid>
  );
}
const items: any = [
  {
    title: 'Workshop',
    description: 'Give me some content',
    price: '200',
  },
  {
    title: 'Hackthon',
    description: 'Give me some content',
    price: '500',
  },
  {
    title: 'Paper Presentation',
    description: 'Give me some content',
    image: '/Events/paper-presentation.jpg',
    price: '750',
  },
  {
    title: 'Poster Presentation',
    description: 'Give me some content',
    image: '/Events/poster-presentation.jpg',
    price: '200',
  },
  {
    title: 'Idea Presentation',
    description: 'Give me some content',
    image: '/Events/idea-presentation.jpg',
    price: '200',
  },
  {
    title: 'Technical Debate',
    description: 'Give me some content',
    image: '/Events/tech-debate.jpg',
    price: '200',
  },
  {
    title: 'Technical Quiz',
    description: 'Give me some content',
    image: '/Events/tech-quiz.jpg',
    price: '200',
  },
  {
    title: 'Product decoding',
    description: 'Give me some content',
    image: '/Events/product-decoding.jpg',
    price: '100',
  },
  {
    title: 'Just a minute',
    description: 'Give me some content',
    image: '/Events/just-a-minute.jpg',
    price: '100',
  },
];
