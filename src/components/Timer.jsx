import { useState, useEffect, useRef } from "react";

export const Timer = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
      const interval = setInterval(() => {
        setCount(prevCount => prevCount + 1);
      }, 1000);
      return () => clearInterval(interval);
  }, [count]);

  const handleRestart = () => setCount(0)

  return (
    <div>
      Time: {count} sec
      <br/>
      <button onClick={handleRestart}>Restart</button>
    </div>
    );
};