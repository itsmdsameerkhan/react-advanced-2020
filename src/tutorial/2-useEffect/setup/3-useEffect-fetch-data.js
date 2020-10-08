import React, { useState, useEffect } from 'react'

const url = 'https://api.github.com/users'

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([])
  useEffect(() => {
    const getUsers = async () => {
      const data = await fetch(url)
      const users = await data.json()
      console.log(users)
      setUsers(users)
    }
    getUsers()
  }, [])
  return (
    <>
      <h2>github users</h2>
      <ul className="users">
        {users.map(({ avatar_url, login, id, html_url }) => (
          <li key={id}>
            <img src={avatar_url} alt={login} />
            <div>
              <h4>{login}</h4>
              <a href={html_url}>See Profile</a>
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}

export default UseEffectFetchData
