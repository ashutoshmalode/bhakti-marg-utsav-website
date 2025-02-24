import React, { useState, useEffect } from "react";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(10 * 24 * 60 * 60 * 1000); // 10 days in milliseconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        const newTime = prevTime - 1000;
        if (newTime <= 0) {
          clearInterval(timer);
          return 0;
        }
        return newTime;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  return (
    <>
      <div className="my-4">
        <h3>Time Until utsav:</h3>
      </div>
      <div style={{ textAlign: "center", fontSize: "34px" }}>
        {timeLeft > 0 ? (
          <div style={{ display: "flex", alignItems: "center" }}>
            {days}d :{hours.toString().padStart(2, "0")}h :
            {minutes.toString().padStart(2, "0")}m :
            <div className="text-danger flex">
              {seconds.toString().padStart(2, "0")}s
            </div>
          </div>
        ) : (
          <div>Countdown Finished! 🎉</div>
        )}
      </div>
    </>
  );
};

export default CountdownTimer;
