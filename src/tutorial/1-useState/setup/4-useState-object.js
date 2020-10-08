import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({ name: "Ram", age: 18, sex: "Male" });
  const changeSex = () => {
    person.sex === "Male"
      ? setPerson({ ...person, sex: "Female" })
      : setPerson({ ...person, sex: "Male" });
  };
  return (
    <>
      <h4>{person.name}</h4>
      <h4>{person.age}</h4>
      <h4>{person.sex}</h4>
      <button className="btn" onClick={changeSex}>
        alter gender
      </button>
    </>
  );
};

export default UseStateObject;
