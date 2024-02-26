'use client';

import React, { useEffect, useState } from 'react';

const CountDown = () => {
  const [days, setDays] = useState<number>(0);
  const [hours, setHours] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);

  let countDownDate = 1710556200000;

  useEffect(() => {
    var updateTime = setInterval(() => {
      var now = new Date().getTime();

      var difference = countDownDate - now;

      var newDays = Math.floor(difference / (1000 * 60 * 60 * 24));
      var newHours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      var newMinutes = Math.floor(
        (difference % (1000 * 60 * 60)) / (1000 * 60)
      );
      var newSeconds = Math.floor((difference % (1000 * 60)) / 1000);

      setDays(newDays);
      setHours(newHours);
      setMinutes(newMinutes);
      setSeconds(newSeconds);

      if (difference <= 0) {
        clearInterval(updateTime);
        setDays(0);
        setHours(0);
        setMinutes(0);
        setSeconds(0);
      }
    });

    return () => {
      clearInterval(updateTime);
    };
  }, [countDownDate]);

  // const TimeCircle = ({ id, unit, value }: any) => (
  //   <li>
  //     <div
  //       className='flex h-16 w-16 items-center justify-center rounded-full border-4 border-dotted border-gray-700 bg-gradient-to-b from-neutral-200 to-neutral-600 bg-clip-text text-center text-2xl font-bold text-transparent shadow-2xl lg:h-24 lg:w-24 lg:text-4xl'
  //       id={id}
  //     >
  //       {value}
  //     </div>
  //     <p className='mt-2 bg-gradient-to-b from-neutral-200 to-neutral-300 bg-clip-text text-center text-xs text-transparent shadow-2xl'>
  //       {unit}
  //     </p>
  //   </li>
  // );

  return (
    <>
      {days} Days {hours} Hours {minutes} Min {seconds} Sec To Go
    </>
  );
};

export default CountDown;
