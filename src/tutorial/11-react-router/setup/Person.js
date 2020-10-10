import React, { useState, useEffect } from 'react';
import { data } from '../../../data';
import { Link, useParams } from 'react-router-dom';
const Person = () => {
  const [name, setName] = useState('')
  const {id} = useParams()
  useEffect(() => {
    const person = data.find((each) => each.id === parseInt(id))
    console.log(person)
    setName(person.name)
  }, [id])
  return (
    <div>
      <br />
      <h2>{name}</h2>
      <Link to='/people' className='btn'>{'<'} Back To List</Link>
    </div>
  )
};

export default Person;
