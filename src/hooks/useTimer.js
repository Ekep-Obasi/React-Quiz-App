import { useEffect, useState } from 'react';
import { formatMinutesSeconds } from '../utils/fomatTimeString';

export default function useTimer(starter = 90) {
  const [timer, setTimer] = useState(starter);

  useEffect(() => {
    let intervalID = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(intervalID);
  }, []);

  const minutes = formatMinutesSeconds(Math.floor(timer / 60));
  const seconds = formatMinutesSeconds(Math.round(timer % 60)); 

  return [minutes, seconds, setTimer];
}
