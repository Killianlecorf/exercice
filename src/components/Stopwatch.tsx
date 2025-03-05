import { useEffect, useState } from "react";

interface StopwatchProps {
  onPauseChange: (isPaused: boolean) => void;
}

const Stopwatch = ({ onPauseChange }: StopwatchProps) => {
  const [startTime, setStartTime] = useState<number | null>(null);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    onPauseChange(isPaused);

    if (isPaused) return;

    const start = startTime ?? Date.now() - elapsedTime;
    setStartTime(start);

    const interval = setInterval(() => {
      setElapsedTime(Date.now() - start);
    }, 10);

    return () => clearInterval(interval);
  }, [isPaused, startTime, onPauseChange]);

  const togglePause = () => {
    setIsPaused((prev) => !prev);
  };

  return (
    <div>
      <h2>Chrono: {(elapsedTime / 1000).toFixed(3)} s</h2>
      <button onClick={togglePause}>
        {isPaused ? "Reprendre" : "Pause"}
      </button>
    </div>
  );
};

export default Stopwatch;
