import React from 'react';
import { StickyScroll } from './StickyScroll';

const content = [
  {
    title: 'Who are we?',
    description:
      'The Society of Plastics and Rubber Technologists is the student body of the Department of Rubber and Plastics Technology. We are dedicated towards the development of the personal and technical skills of every student from the Department. The association creates various platforms to achieve its goal by organising guest lectures, conferences, industrial visits, smart sessions and many more fruitful activities. The annual symposium is our signature event where we create opportunities for the polymer community from across the country to come together and discuss various advancements, issues and future trends.',
    image:
      'https://media.istockphoto.com/id/1346125184/photo/group-of-successful-multiethnic-business-team.jpg?s=612x612&w=0&k=20&c=5FHgRQZSZed536rHji6w8o5Hco9JVMRe8bpgTa69hE8=',
  },
  {
    title: 'What we do?',
    description:
      'We take pride in organising a national-level intercollegiate technical symposium, "Elastoplaz", which provides the right stage for Rubber and Plastics Technologists in India. Elastoplaz 2018 will be a vibrant concoction of various technical events. We are unfurling new events this year to commemorate this 30th edition. The events are scheduled for two days. There will be some non-technical events for additional entertainment.',

    image:
      'https://www.shutterstock.com/shutterstock/photos/1090916522/display_1500/stock-photo-the-business-people-standing-on-the-white-wall-background-1090916522.jpg',
  },
];
export function InfoSection() {
  return <StickyScroll content={content} />;
}
