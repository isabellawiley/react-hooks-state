import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    console.log(`before ${count}`)
    setCount((setCurrentCount) => setCurrentCount + 1);
    // setCount((setCurrentCount) => setCurrentCount + 1);
    console.log(`after ${count}`)
    // setCount(count + 1);
    // console.log(`last ${count}`)
  }

  return <button onClick={increment}>I have been clicked {count} times</button>;
}

export default Counter;
