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

  const TimeUnit = ({ id, value, unit }: any) => (
    <div className='flex flex-col items-center justify-center text-center'>
      <span
        className='font-semibold max-md:text-6xl max-sm:text-4xl md:text-5xl'
        id={id}
      >
        {value}
      </span>
      <span>{unit}</span>
    </div>
  );

  const TimeSeparator = () => (
    <div className='separator max-md:text-6xl max-sm:text-4xl md:text-5xl'>
      :
    </div>
  );

  return (
    <div className='flex cursor-default items-center justify-center space-x-2 text-white shadow-2xl'>
      <TimeUnit id='days' value={days} unit='Days' />
      <TimeSeparator />
      <TimeUnit id='hours' value={hours} unit='Hours' />
      <TimeSeparator />
      <TimeUnit id='minutes' value={minutes} unit='Minutes' />
      <TimeSeparator />
      <TimeUnit id='seconds' value={seconds} unit='Seconds' />
    </div>
  );
};

export default CountDown;
