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
    hashtag: ['#Solo', '#Workshop'],
    description: [
      'A technical workshop for polymer and mechanical stream on the topic " DISCOVER THE LATEST TRENDS IN MIXING FOR THE TIRE INDUSTRY WITH KOBELCO"',
    ],
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
    hashtag: ['#Team', '#Hackathon'],
    description: [
      '1. Maximum team size of 3 is allowed. Make sure your team complies with this rule.',
      '2. Your project should be original and created during the hackathon timeframe. Avoid using pre-existing ideas.',
      "3. Understand the ownership rights of your project. Usually, participants retain ownership, but it's essential to clarify this beforehand.",
      '4. Make sure to submit your abstract on or before 2nd March, 6pm. Late submissions may not be accepted.',
      '5. For demonstration of your product or solution, you can use pluck cards/charts.',
      '6. Laptops you have to bring for the final round of demonstration.',
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
    hashtag: ['#Team'],
    description: [
      'Submit the Abstract by 10/03/2024 (Sunday)',
      'Submit the PPT by 15/03/2024 (Friday)',
      'Send your Abstract and PPT to marthinirm@gmail.com',
      'Abstract Format link: https://shorturl.at/xQR17',
    ],
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
    location: 'M. Tech Classroom, 2nd floor, RPT Dept., MIT',
    time: '1:30PM to 2:30PM - 16th March',
    organizer: ['Salai Siva (9080508420)', 'Suriya Pandian (6374918991)'],
    hashtag: ['#Team'],
    description: [
      'Rules:',
      '1. A team of maximum 3 members.',
      '2. Time limit for each team - 7 minutes and 3 minutes - Question session.',
      'Topic:',
      '1. Sustainable polymer materials.',
      '2. Polymer composites.',
      '3. Smart polymers.',
      'Send your Abstract to: salaisiva1411@gmai.com',
      'Abstract Format link: https://shorturl.at/qstyI',
    ],
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
    location: 'RPT 101 Ground Floor Classroom, MIT',
    time: '1:30PM to 2:30PM - 16th March',
    organizer: ['Gnaneshwaran (6379456512)', 'Anzio Ebin (9444372907)'],
    hashtag: ['#Team'],
    description: [
      'Rules:',
      '1. A team can consist of maximum 3 persons.',
      '2. Time limit for each team - 15 minutes.',
      '3. Send your presentation files (in both .pdf and .pptx formats) to email id: 281388@student.annauniv.edu on or before 14/03/2024.',
    ],
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
    hashtag: ['#Solo'],
    description: [
      'A Technical debate is an intellectual discourse focused on discussing and analysing specific technical topics.Participants engage in a structured argumentative dialogue,presenting and defending their viewpoints on complex technical issues.These debates require a deep understanding of the subject matter,critical thinking skills ,and the ability to articulate and support arguments with evidence and logic.',
      ' Join us to showcase your knowledge, enhance your communication skill and foster a collaborative learning environment within the technical community.',
    ],
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
    hashtag: ['#Solo'],
    description: [
      'Welcome to our Technical Quiz Challenge! Put your knowledge to the test with our series of thought-provoking questions covering a wide range of technical topics.This quiz will challenge your understanding and broaden your horizons. Compete against fellow enthusiasts, showcase your expertise, and learn something new along the way. Are you ready to embark on this thrilling journey through the realms of technology? Sign up now and let the challenge begin!',
    ],
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
    hashtag: ['#Team'],
    description: [
      'A Thrilling Hunt for the Unknown..',
      'Calling all budding detectives, and inquisitive minds! We invite you to participate in a Product Decoding Competition that will push your observational skills, analytical thinking, and material knowledge to the limit. Results are based on both accuracy and speed, adding an element of urgency to the race against time. Who will emerge victorious in decoding the ultimate innovation?',
    ],
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
    hashtag: ['#Solo'],
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSd7JaDULNAO_aTz_9KxsvygisPVs3tM3hZXuueWYtZP2ofc-Q/viewform',
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
    time: '6th March',
    organizer: ['Gowthami (9080480192)', 'Sharini (9080539055)'],
    hashtag: ['#Solo'],
    link: 'https://forms.gle/psbB63JZxVx7Ysbw8',
  },
  {
    title: 'Polypix',
    image: '/Events/photo-contest.jpeg',
    price: 'Free',
    open: true,
    recommended: true,
    prize: ['Winner: ₹500'],
    type: 'Solo Registration',
    location: 'Online',
    time: '12th March',
    organizer: ['Krithika (9445102447)'],
    hashtag: ['#Solo'],
    link: 'https://forms.gle/BVsjYc4WoNMe4N2v9',
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
    hashtag: ['#Solo'],
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
    setEventData(
      type === 'technical' ? TechnicalEvents[idx] : NonTechnicalEvents[idx]
    );
    if (typeof window != 'undefined' && window.document) {
      document.body.style.overflow = 'hidden';
    }
    setEventPopup(true);
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
            hashtag={item.hashtag}
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
            hashtag={item.hashtag}
            modalOpen={() => modalOpen(i, 'non-technical')}
          />
        ))}
      </BentoGrid>
    </>
  );
};

export default Event;
