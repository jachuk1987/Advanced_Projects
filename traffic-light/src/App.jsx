import React, { useEffect, useState } from "react";
import "./App.css";

const TrafficSignal = () => {
  const [light, setLight] = useState("red");

  useEffect(() => {
    const interval = setInterval(() => {
      setLight((prev) => {
        if (prev === "red") return "green";
        if (prev === "green") return "yellow";
        return "red";
      });
    }, 30000); // 30 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      <div className={`light red ${light === "red" ? "on" : ""}`} />
      <div className={`light yellow ${light === "yellow" ? "on" : ""}`} />
      <div className={`light green ${light === "green" ? "on" : ""}`} />
    </div>
  );
};

export default TrafficSignal;
