import React from 'react';
import Bell from './Bell';

const App = () => {
  const bellIntervals = [5, 10, 15]; // Example intervals in seconds

  return (
    <div>
      <h1>Bell Intervals</h1>
      {bellIntervals.map((interval, index) => (
        <Bell key={index} interval={interval} audioSrc={process.env.PUBLIC_URL + '/shortBell.mp3'} />
      ))}
    </div>
  );
};

export default App;
