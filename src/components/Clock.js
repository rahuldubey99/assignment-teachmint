// Clock.js
import React, { useState, useEffect } from 'react';

const Clock = ({ clockData, running }) => {
  const [time, setTime] = useState(new Date());
  const [lastPausedTime, setLastPausedTime] = useState(null);


  useEffect(() => {
    let interval;

    if (running) {
      interval = setInterval(() => {
        const currentTime = new Date();
        if (clockData) {
          const offset = new Date(clockData.utc_datetime).getTimezoneOffset();
          currentTime.setMinutes(currentTime.getMinutes() - offset);
        }
        setTime(currentTime);
      }, 1000);
    } else {
        setLastPausedTime(time)
      clearInterval(interval);
    }
    console.log('setTime', time)
    return () => clearInterval(interval);
  }, [running, clockData]);

  return (
    <div className="clock">
  
    {time.getUTCDay() +'/' + time.getUTCMonth() + '/' + time.getUTCFullYear()}
    <br/>
      {time.toLocaleTimeString()}
    </div>
  );
};

export default Clock;
