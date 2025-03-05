import { useEffect, useState } from "react";

interface StopwatchProps {
  onPauseChange: (isPaused: boolean) => void;
}

const Stopwatch = ({ onPauseChange }: StopwatchProps) => {
  const [time, setTime] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    onPauseChange(isPaused);
    if (isPaused) return;

    const interval = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [isPaused, onPauseChange]);

  return (
    <div>
      <h2>Chrono: {time} s</h2>
      <button onClick={() => setIsPaused(!isPaused)}>
        {isPaused ? "Reprendre" : "Pause"}
      </button>
    </div>
  );
};

export default Stopwatch;
