import React, { useState } from "react";

const UseStateBasics = () => {
  const [title, setTitle] = useState("A good title");
  const handleClick = () => {
    title === "A good title"
      ? setTitle("A better title")
      : setTitle("A good title");
  };
  return (
    <>
      <h2>{title}</h2>
      <button className="btn" onClick={handleClick}>
        change title
      </button>
    </>
  );
};

export default UseStateBasics;
