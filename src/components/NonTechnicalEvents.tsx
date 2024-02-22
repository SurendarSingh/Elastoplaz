import React from 'react';
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
} from '@tabler/icons-react';
import { BentoGrid, BentoGridItem } from './BentoGrid';

export function NonTechnicalEvents() {
  return (
    <BentoGrid className='mx-auto px-10 lg:max-w-7xl'>
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className={i === 3 || i === 6 ? 'md:col-span-2' : ''}
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
    title: 'Connections',
    description: 'Give me some content',
    header: <Skeleton />,
    icon: <IconClipboardCopy className='h-4 w-4 text-neutral-500' />,
  },
  {
    title: 'Photography',
    description: 'Give me some content',
    header: <Skeleton />,
    icon: <IconFileBroken className='h-4 w-4 text-neutral-500' />,
  },
  {
    title: 'Reels/Short film',
    description: 'Give me some content',
    header: <Skeleton />,
    icon: <IconSignature className='h-4 w-4 text-neutral-500' />,
  },
];
