import React, { useRef, useEffect } from 'react';

const AudioPlayer = ({ audioSrc, isPlaying }) => {
  const audioRef = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play().catch((error) => console.error(error));
    } else {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  }, [isPlaying]);

  return <audio ref={audioRef} src={audioSrc} />;
};

export default AudioPlayer;
