import React, { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';

function useTimer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timerId = setInterval(setSeconds(prevSeconds => prevSeconds + 1), 1000);
    return () => clearInterval(timerId);
  }, []);

  return seconds;
}

export default useTimer;
