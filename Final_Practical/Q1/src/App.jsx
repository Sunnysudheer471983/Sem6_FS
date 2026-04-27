import React, { useState, useEffect } from "react";
import "./App.css";

function CounterBug() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Stale Closure Bug
      setCount(count + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []); // count missing

  return (
    <div className="box">
      <h2>Buggy Counter</h2>
      <p>Count: {count}</p>
      <p>Stops at 1 due to stale closure bug</p>
    </div>
  );
}


// ----------- FIX 1: DEPENDENCY ARRAY ----------
function FixedCounterDependency() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [count]);

  return (
    <div className="box">
      <h2>Fixed with Dependency</h2>
      <p>Count: {count}</p>
    </div>
  );
}




// ---------------- MAIN APP ----------------
export default function App() {
  return (
    <div className="container">
      <h1>Stale Closure</h1>

      <CounterBug />
      <FixedCounterDependency />
      
    </div>
  );
}