import React, { useState, useRef, useEffect } from 'react';
import AudioPlayer from './AudioPlayer';

const Bell = ({ interval, audioSrc }) => {
  const [remainingTime, setRemainingTime] = useState(interval);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const timerRef = useRef(null);

  const handleButtonClick = () => {
    if (!isTimerRunning) {
      setRemainingTime(interval);
      setIsTimerRunning(true);
    } else {
      setIsTimerRunning(false);
      setRemainingTime(interval); // Reset remaining time to the interval value
    }
  };

  useEffect(() => {
    const handleTimer = () => {
      setRemainingTime((prevRemainingTime) => {
        const nextRemainingTime = prevRemainingTime - 1;
        if (nextRemainingTime === 0) {
          setIsTimerRunning(false);
          return interval; // Reset remaining time to the interval value
        }
        return nextRemainingTime;
      });
    };

    if (isTimerRunning && remainingTime > 0) {
      clearInterval(timerRef.current);
      timerRef.current = setInterval(handleTimer, 1000);
    } else {
      clearInterval(timerRef.current);
      setRemainingTime(interval); // Reset remaining time to the interval value
    }

    return () => {
      clearInterval(timerRef.current);
    };
  }, [isTimerRunning, remainingTime, interval]);

  return (
    <div>
      <button onClick={handleButtonClick}>{isTimerRunning ? 'Stop' : 'Ring Bell'}</button>
      <p>Remaining Time: {remainingTime}</p>
      <AudioPlayer audioSrc={audioSrc} isPlaying={isTimerRunning} />
    </div>
  );
};

export default Bell;
