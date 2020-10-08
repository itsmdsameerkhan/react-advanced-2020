import React from "react";

const ErrorExample = () => {
  let title = "A Good Title";
  const handleClick = () => console.log(title);
  return (
    <>
      <h2>{title}</h2>
      <button className="btn" onClick={handleClick}>
        Change Title
      </button>
    </>
  );
};

export default ErrorExample;
