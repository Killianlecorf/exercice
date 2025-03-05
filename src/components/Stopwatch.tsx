import { useEffect, useState } from "react";

interface StopwatchProps {
  onPauseChange: (isPaused: boolean) => void;
}

const Stopwatch = ({ onPauseChange }: StopwatchProps) => {
  const [startTime, setStartTime] = useState<number | null>(null);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    onPauseChange(!isRunning);

    if (!isRunning) return;

    const start = Date.now() - elapsedTime;
    setStartTime(start);

    const interval = setInterval(() => {
      setElapsedTime(Date.now() - start);
    }, 10);

    return () => clearInterval(interval);
  }, [isRunning]);

  const togglePause = () => {
    setIsRunning((prev) => !prev);
  };

  return (
    <div>
      <h2>Chrono: {(elapsedTime / 1000).toFixed(3)} s</h2>
      <button onClick={togglePause}>
        {isRunning ? "Pause" : "Reprendre"}
      </button>
    </div>
  );
};

export default Stopwatch;
