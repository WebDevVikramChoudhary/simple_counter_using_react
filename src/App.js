import React, { useState } from "react";

import "./App.css";

const App = () => {
  // Counter is a state initialized to 0
  const [counter, setCounter] = useState(0);

  const handleClick1 = () => {
    // Counter state is incremented
    setCounter(counter + 1);
  };

  const handleClick2 = () => {
    // Counter state is decremented
    setCounter(counter - 1);
  };

  return (
    <div>
      Counter Demo
      <div>Counter: {counter}</div>
      <div className="buttons">
        <button onClick={handleClick1}>Increment counter</button>
        <button onClick={handleClick2}>Decrement counter</button>
      </div>
    </div>
  );
};

export default App;
