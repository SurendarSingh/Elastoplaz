'use client';

import React, { useState } from 'react';
import {
  DotBackground,
  GridBackground,
} from '@/components/Event/GridBackground';
import { BentoGrid, BentoGridItem } from './BentoGrid';
import PopupModal from './PopupModal';

const TechnicalEvents = [
  {
    title: 'Workshop',
    image: '/ep-logo.png',
    price: '300',
    open: true,
    recommended: true,
    prize: ['Industry Learning Experience'],
    type: 'Solo Registration',
    location: 'RPT Dept., MIT',
    time: 'Disclosed',
    organizer: ['Selva Nithilan (8939001281)', 'Subashini (6379157899)'],
    link: 'https://forms.gle/xinL6XcB8kqiiLR29',
  },
  {
    title: 'Hackathon',
    image: '/Events/hackathon-1.jpg',
    price: '500',
    open: true,
    recommended: true,
    prize: ['Winner: ₹7,000', 'Runner: ₹3,000'],
    type: 'Team Registration (Max. 3)',
    location: 'GJ Park, MIT',
    time: '15th March',
    organizer: [
      'Ahilandeswari (6374964674)',
      'Gladis Christina Jaya (8925263529)',
    ],
    link: 'https://forms.gle/A9kyL7eCq8e8DYYK6',
  },
  {
    title: 'Paper Presentation',
    image: '/Events/paper-presentation.jpg',
    price: '750',
    open: true,
    recommended: true,
    prize: ['Winner: ₹10,000', 'Runner: ₹5,000'],
    type: 'Team Registration (Max. 3)',
    location: 'Rajam Hall, MIT',
    time: 'Paper Submission by 15th March',
    organizer: ['Sree Marthini (7395882087)', 'Logeswari (6374901837)'],
    link: 'https://forms.gle/EptgZ5yh8NFA6Ejb6',
  },
  {
    title: 'Poster Presentation',
    image: '/Events/poster-presentation.jpg',
    price: '250',
    open: true,
    recommended: false,
    prize: ['Winner: ₹3,000', 'Runner: ₹1,500'],
    type: 'Team Registration (Max. 3)',
    location: 'RPT Dept., MIT',
    time: '16th March',
    organizer: ['Salai Siva (9080508420)', 'Suriya Pandian (6374918991)'],
    link: 'https://forms.gle/rsiA3CbaYo6fQAR56',
  },
  {
    title: 'Idea Presentation',
    image: '/Events/idea-presentation.jpg',
    price: '250',
    open: true,
    recommended: false,
    prize: ['Winner: ₹3,000', 'Runner: ₹1,500'],
    type: 'Team Registration (Max. 3)',
    location: 'RPT Dept - 101, MIT',
    time: '1:30PM - 16th March',
    organizer: ['Gnaneshwaran (6379456512)', 'Anzio Ebin (9444372907)'],
    link: 'https://forms.gle/1p25QhUzYkXsdtcS7',
  },
  {
    title: 'Technical Debate',
    image: '/Events/tech-debate.jpg',
    price: '250',
    open: true,
    recommended: true,
    prize: ['Winner: ₹3,000', 'Runner: ₹1,500'],
    type: 'Solo Registration',
    location: 'Conference Hall, RPT Dept., MIT',
    time: '16th March',
    organizer: ['Vishnu Gopal (9677554529)', 'Angeline (7395946079)'],
    link: 'https://docs.google.com/forms/d/121Vg0ESFW_wjbdQ2rmKogG433e_Mvc6IYi6EiIjYr-w/viewform?edit_requested=true',
  },
  {
    title: 'Technical Quiz',
    image: '/Events/tech-quiz.jpg',
    price: '150',
    open: true,
    recommended: true,
    prize: ['Winner: ₹1,500', 'Runner: ₹750'],
    type: 'Solo Registration',
    location: 'RPT Dept - 001, MIT',
    time: '2:30 to 3:00PM - 16th March',
    organizer: ['Gokul (6379100861)', 'Sivanesh (6369683288)'],
    link: 'https://docs.google.com/forms/d/1BSMNqqJ2oJtfeibVlgwIe6XKCHSllpU8gGP9nAqHiok/edit?usp=drivesdk',
  },
  {
    title: 'Product decoding',
    image: '/Events/product-decoding.jpg',
    price: '150',
    open: true,
    recommended: false,
    prize: ['Winner: ₹1,500', 'Runner: ₹750'],
    type: 'Team Registration (Max. 2)',
    location: 'Polymer Chemistry Lab, RPT Dept., MIT',
    time: '3:00 to 3:30PM - 16th March',
    organizer: ['Divyadharshini (7305413582)', 'Naresh (6380213936)'],
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSe9cPXXeUCWBXXwNQh9Q8qPRCzhdRwnYUdNA1Ebp7jyiq2WRg/viewform?vc=0&c=0&w=1&flr=0',
  },
  {
    title: 'Just a minute',
    image: '/Events/just-a-minute.jpeg',
    price: '150',
    open: true,
    recommended: false,
    prize: ['Winner: ₹1,500', 'Runner: ₹750'],
    type: 'Solo Registration',
    location: 'RPT Dept - 301, MIT',
    time: '16th March',
    organizer: ['Sangeetha (6383952970)', 'Santhosh Sakthi (7299450950)'],
  },
];

const NonTechnicalEvents = [
  {
    title: 'Connexions',
    image: '/Events/connexion.jpg',
    price: 'Free',
    open: true,
    recommended: true,
    prize: ['Winner: ₹500'],
    type: 'Solo Registration',
    location: 'Online',
    time: '10th March',
    organizer: ['Gowthami (9080480192)', 'Sharini (9080539055)'],
    link: 'https://forms.gle/psbB63JZxVx7Ysbw8',
  },
  {
    title: 'Photography',
    image: '/ep-logo.png',
    price: 'Free',
    open: true,
    recommended: true,
    prize: ['Winner: ₹500'],
    type: 'Solo Registration',
    location: 'Online',
    time: 'Disclosed',
    organizer: ['Disclosed'],
  },
  {
    title: 'Reels/Short film',
    image: '/ep-logo.png',
    price: 'Free',
    open: true,
    recommended: true,
    prize: ['Winner: ₹500'],
    type: 'Solo Registration',
    location: 'Online',
    time: 'Disclosed',
    organizer: ['Disclosed'],
  },
];

const Event = () => {
  const [eventPopup, setEventPopup] = useState(false);
  const [eventData, setEventData] = useState<any>(TechnicalEvents[0]);

  const modalClose = () => {
    setEventPopup(false);
    document.body.style.overflow = 'unset';
  };

  const modalOpen = (idx: number, type: string) => {
    setEventPopup(true);
    setEventData(
      type === 'technical' ? TechnicalEvents[idx] : NonTechnicalEvents[idx]
    );
    if (typeof window != 'undefined' && window.document) {
      document.body.style.overflow = 'hidden';
    }
  };

  return (
    <>
      <PopupModal
        open={eventPopup}
        modalClose={modalClose}
        eventData={eventData}
      />
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
            link={item.link}
            modalOpen={() => modalOpen(i, 'technical')}
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
            link={item.link}
            modalOpen={() => modalOpen(i, 'non-technical')}
          />
        ))}
      </BentoGrid>
    </>
  );
};

export default Event;
