import { useState, useEffect } from "react";

const App = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const formatTime = (time) => {
    const hours = String(Math.floor(time / 3600)).padStart(2, "0");
    const minutes = String(Math.floor((time % 3600) / 60)).padStart(2, "0");
    const seconds = String(time % 60).padStart(2, "0");
    return ` ${hours} : ${minutes} : ${seconds} `;
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="p-8 bg-gray-900 rounded-lg shadow-lg flex flex-col items-center space-y-6">
        
        <h1 className="text-5xl font-bold text-cyan-400 neon-text">{formatTime(time)}</h1>

       
        <div className="flex space-x-4">
          <button
            onClick={() => setIsRunning(!isRunning)}
            className="px-6 py-2 text-lg font-semibold bg-gray-800 text-orange-400 rounded shadow-lg hover:bg-gray-700 hover:scale-105 transform transition-all"
          >
            {isRunning ? "PAUSE" : "PLAY"}
          </button>
          <button
            onClick={() => {
              setTime(0);
              setIsRunning(false);
            }}
            className="px-6 py-2 text-lg font-semibold bg-gray-800 text-purple-400 rounded shadow-lg hover:bg-gray-700 hover:scale-105 transform transition-all"
          >
            RESET
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
