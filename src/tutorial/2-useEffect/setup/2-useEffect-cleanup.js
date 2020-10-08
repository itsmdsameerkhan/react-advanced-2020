import React, { useState, useEffect } from 'react'

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [pixels, setPixels] = useState(window.innerWidth)
  const coreLogic = () => setPixels(window.innerWidth)
  useEffect(() => {
    console.log('re-render bhayo')
    window.addEventListener('resize', coreLogic)
    // cleanup
    return () => window.removeEventListener('resize', coreLogic)
    // or just remove and add empty list as dependency arg
  })
  return (
    <>
      <h2>window resolution</h2>
      <h1>{pixels}px</h1>
    </>
  )
}

export default UseEffectCleanup
