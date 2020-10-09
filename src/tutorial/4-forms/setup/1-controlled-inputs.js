import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [users, setUsers] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (name && email) {
      setUsers([...users, {id: new Date().getTime().toString(), name, email}])
      setName('')
      setEmail('')
      console.log('new value added')
    }
  }

  return (
    <>
      <h2>Form</h2>
      <article>
        <form className='form' onSubmit={handleSubmit}>
          <div className='form-control'>
            <label htmlFor='name'>Name:</label>
            <input id='name' type='text' value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className='form-control'>
            <label htmlFor='email'>Email:</label>
            <input id='email' type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <button>Add User</button>
        </form>
        {users.map(({name, id, email}) => (
          <div className='item'>
            <h4>{name}</h4>
            <p>{email}</p>
          </div>
        ))}
      </article>
    </>
  );
};

export default ControlledInputs;
