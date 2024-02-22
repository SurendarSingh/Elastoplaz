import React from 'react';
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from '@tabler/icons-react';
import { BentoGrid, BentoGridItem } from './BentoGrid';

export function TechnicalEvents() {
  return (
    <BentoGrid className='mx-auto px-10 pb-2 lg:max-w-7xl'>
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = () => (
  <div className='flex h-full min-h-[6rem] w-full flex-1 rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-800'></div>
);
const items = [
  {
    title: 'Workshop',
    description: 'Give me some content',
    header: <Skeleton />,
    icon: <IconClipboardCopy className='h-4 w-4 text-neutral-500' />,
  },
  {
    title: 'Hackthon',
    description: 'Give me some content',
    header: <Skeleton />,
    icon: <IconFileBroken className='h-4 w-4 text-neutral-500' />,
  },
  {
    title: 'Paper Presentation',
    description: 'Give me some content',
    header: <Skeleton />,
    icon: <IconSignature className='h-4 w-4 text-neutral-500' />,
  },
  {
    title: 'Poster Presentation',
    description: 'Give me some content',
    header: <Skeleton />,
    icon: <IconTableColumn className='h-4 w-4 text-neutral-500' />,
  },
  {
    title: 'Idea Presentation',
    description: 'Give me some content',
    header: <Skeleton />,
    icon: <IconArrowWaveRightUp className='h-4 w-4 text-neutral-500' />,
  },
  {
    title: 'Technical Debate',
    description: 'Give me some content',
    header: <Skeleton />,
    icon: <IconBoxAlignTopLeft className='h-4 w-4 text-neutral-500' />,
  },
  {
    title: 'Technical Quiz',
    description: 'Give me some content',
    header: <Skeleton />,
    icon: <IconBoxAlignRightFilled className='h-4 w-4 text-neutral-500' />,
  },
  {
    title: 'Product decoding',
    description: 'Give me some content',
    header: <Skeleton />,
    icon: <IconClipboardCopy className='h-4 w-4 text-neutral-500' />,
  },
  {
    title: 'Just a minute',
    description: 'Give me some content',
    header: <Skeleton />,
    icon: <IconFileBroken className='h-4 w-4 text-neutral-500' />,
  },
];
