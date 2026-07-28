import { useState, useEffect } from 'react';

const CountdownTimer = () => {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [inputTime, setInputTime] = useState(0);

    useEffect(() => {
        let timerId;
        if (isRunning) {
            timerId = setInterval(() => {
                setTime((prev) => prev + 1);
            }, 1000);
        }
        return () => clearInterval(timerId);
    }, [isRunning]);

    const handleStart = () => setIsRunning(true);
    const handleStop = () => setIsRunning(false);
    const handleReset = () => {
        setIsRunning(false);
        setTime(inputTime); // User-ka input-ka ku bilaab
    };

    return (
        <div>
            <h2>Stopwatch: {time} seconds</h2>

            <p>
                Set Start Time (seconds):
                <input
                    type="number"
                    value={inputTime}
                    min="0"
                    onChange={(e) => {
                        setInputTime(Number(e.target.value));
                        setTime(Number(e.target.value)); // Isla markiiba time-ka u beddel
                    }}
                    style={{ margin: "5px", padding: "5px" }}
                />
            </p>

           {/* <p>Time Left: {timeLeft} seconds</p> */}
            <button onClick={handleStart} disabled={isRunning}>Start</button>
            <button onClick={handleStop} disabled={!isRunning}>Stop</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    );
};

export default CountdownTimer;