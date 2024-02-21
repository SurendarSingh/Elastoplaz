'use client';

import React, { useRef } from 'react';
import { useMotionValueEvent, useScroll } from 'framer-motion';
import { motion } from 'framer-motion';
import Image from 'next/image';

export const StickyScroll = ({
  content,
}: {
  content: {
    title: string;
    description: string;
    image: string;
  }[];
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ['start start', 'end start'],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    cardsBreakpoints.forEach((breakpoint, index) => {
      if (latest > breakpoint - 0.2 && latest <= breakpoint) {
        setActiveCard(() => index);
      }
    });
  });

  const backgroundColors = [
    'var(--black)',
    'var(--neutral-900)',
    'var(--slate-900)',
  ];
  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className='no-scrollbar relative flex h-[30rem] justify-center space-x-10 overflow-y-auto p-10'
      ref={ref}
    >
      <div className='div relative flex items-start px-4'>
        <div className='max-w-6xl'>
          {content.map((item, index) => (
            <div key={item.title + index} className='my-20'>
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className='text-2xl font-bold text-slate-100'
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className='text-kg mt-10 max-w-xl text-justify text-slate-300'
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className='h-40' />
        </div>
      </div>
      <motion.div className='sticky top-10 hidden h-auto w-1/3 items-center justify-center overflow-hidden rounded-md bg-white lg:flex'>
        <Image
          src={content[activeCard].image}
          layout='fill'
          objectFit='cover'
          objectPosition='center'
          alt='Image'
        />
      </motion.div>
    </motion.div>
  );
};
