import React, { useState } from 'react';
import {data} from '../../../data'
// more components
// fix - context api, redux (for more complex cases)

const PropDrilling = () => {
  const [people, setPeople] = useState(data)
  const removePerson = (id) => {
    setPeople(people.filter((person) => person.id !== id))
  }
  return (
    <>
    <h2>Props Drilling</h2>
    <List people={people} removePerson={removePerson} />
    </>
  );
};

const List = ({people, removePerson}) => {
  return <>
    {people.map((person) => <Person key={person.id} {...person} removePerson={removePerson}/>)}
  </>
}

const Person = ({id, name, removePerson}) => (
  <div className='item'>
    <h4>{name}</h4>
    <button onClick={() => removePerson(id)}>remove</button>
  </div>
)

export default PropDrilling;
