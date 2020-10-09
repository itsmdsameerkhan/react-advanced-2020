import React, {useState} from 'react'

const ControllerInputs = () => {
  const [user, setUser] = useState({name: '', age: '', email: ''})
  const [users, setUsers] = useState([])
  const handleChange = (e) => {
    setUser({...user, [e.target.name]: e.target.value, id: new Date().getTime().toString()})
    console.log(e.target.name, e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (user.name && user.age && user.email) {
      setUsers([...users, user])
      setUser({name: '', age: '', email: ''})
    }
  }
  return (
    <>
    <h2>Form</h2>
    <article>
        <form className='form' onSubmit={handleSubmit}>
          <div className='form-control'>
            <label htmlFor='name'>Name:</label>
            <input id='name' name='name' type='text' value={user.name} onChange={handleChange} />
          </div>
          <div className='form-control'>
            <label htmlFor='email'>Email:</label>
            <input id='email' name='email' type='email' value={user.email} onChange={handleChange} />
          </div>
          <div className='form-control'>
            <label htmlFor='age'>Age:</label>
            <input id='age' name='age' type='number' value={user.age} onChange={handleChange} />
          </div>
          <button>Add User</button>
        </form>
        {users.map(({name, id, email, age}) => (
          <div key={id} class='item'>
            <h4>{name}</h4>
            <p>{age}</p>
            <p>{email}</p>
            </div>
        ))}
      </article>
      </>
  )
}

export default ControllerInputs