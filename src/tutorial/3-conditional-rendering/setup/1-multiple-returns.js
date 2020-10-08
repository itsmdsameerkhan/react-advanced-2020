import React, { useState, useEffect } from 'react'
const url = 'https://api.github.com/users/itsmdsameerkhan'

const MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [userData, setUserData] = useState('')

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (res.status === 200) return res.json()
        setIsLoading(false)
        setIsError(true)
        throw new Error('Failure to fetch data')
      })
      .then(({ bio }) => {
        setUserData(bio)
        setIsLoading(false)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  if (isLoading) return <h2>Loading...</h2>
  if (isError) return <h2>Error...</h2>
  return <h2>{userData}</h2>
}

export default MultipleReturns
