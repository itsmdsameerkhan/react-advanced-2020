import React, { useState, useEffect } from 'react'
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  console.log('render bhayo')
  const [value, setValue] = useState(0)
  useEffect(() => {
    console.log('re-render bhayo')
    if (value > 0) document.title = `New Messages (${value})`
  }, [value])
  return (
    <>
      <h3>Tap to get a message</h3>
      <h1>{value}</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>
        Tap Here
      </button>
    </>
  )
}

export default UseEffectBasics
