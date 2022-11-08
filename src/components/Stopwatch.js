import React, { useEffect, useState } from 'react';
import '../App.css';

const Stopwatch = () => {
  const [count, setCount] = useState(0);
  const [start, setStart] = useState(false);

  useEffect(() => {
    let interval = null;
    if (start) {
      interval = setInterval(() => {
        setCount((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [start]);

  return (
    <>
      <h1>{count}</h1>
      <button className='button' onClick={() => setStart(true)}>
        Start
      </button>
      <button className='button' onClick={() => setStart(false)}>
        Stop
      </button>
      <button
        className='button'
        onClick={() => {
          setStart(false);
          setCount(0);
        }}
      >
        Reset
      </button>
    </>
  );
};

export default Stopwatch;
