import React, { useState } from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = useState(data);
  const removePerson = (id) =>
    setPeople(people.filter((person) => person.id !== id));
  return (
    <>
      {people.map(({ name, id }) => (
        <div key={id} className="item">
          <h4>{name}</h4>
          <button onClick={() => removePerson(id)}>remove</button>
        </div>
      ))}
      <button className="btn" onClick={() => setPeople([])}>
        clear items
      </button>
    </>
  );
};

export default UseStateArray;
