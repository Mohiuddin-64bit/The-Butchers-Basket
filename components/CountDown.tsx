"use client"
import React, { useEffect, useState } from "react";

const CountDown = () => {
  const [time, setTime] = useState({ hours: 24, minutes: 0, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      if (time.hours === 0 && time.minutes === 0 && time.seconds === 0) {
        clearInterval(timer);
      } else if (time.minutes === 0 && time.seconds === 0) {
        setTime({ hours: time.hours - 1, minutes: 59, seconds: 59 });
      } else if (time.seconds === 0) {
        setTime({ hours: time.hours, minutes: time.minutes - 1, seconds: 59 });
      } else {
        setTime({
          hours: time.hours,
          minutes: time.minutes,
          seconds: time.seconds - 1,
        });
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [time]);

  return (
    <div className=" flex gap-3 ">
        <span className="text-2xl backdrop-blur-md bg-black/20 dark:bg-white/20 rounded-lg px-4 ">{time.hours}</span>:
        <span className="text-2xl backdrop-blur-md bg-black/20 dark:bg-white/20 rounded-lg px-4 ">{time.minutes}</span>:
        <span className="text-2xl backdrop-blur-md bg-black/20 dark:bg-white/20 rounded-lg px-4 ">{time.seconds}</span>
    </div>
  );
};

export default CountDown;
