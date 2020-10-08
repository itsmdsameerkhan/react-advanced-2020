import React, { useState } from "react";

const UseStateCounter = () => {
  const [count, setCount] = useState(0);
  const delayIncrease = () => {
    setTimeout(() => {
      setCount((prevState) => prevState + 1);
    }, 2000);
  };
  return (
    <>
      <section>
        <h3>Normal Counter</h3>
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)} className="btn">
          increase
        </button>
        <button onClick={() => setCount(count - 1)} className="btn">
          decrease
        </button>
        <button onClick={() => setCount(0)} className="btn">
          reset
        </button>
      </section>
      <section style={{ marginTop: "4rem" }}>
        <h3>Complex Counter</h3>
        <h1>{count}</h1>
        <button className="btn" onClick={delayIncrease}>
          delay increase
        </button>
      </section>
    </>
  );
};

export default UseStateCounter;
