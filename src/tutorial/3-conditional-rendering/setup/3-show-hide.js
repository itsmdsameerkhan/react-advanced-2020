import React, { useState, useEffect } from 'react';

const ShowHide = () => {
  const [show, setShow] = useState(false)
  return (
    <>
      <button style={{marginBottom: '4rem'}} className='btn' onClick={() => setShow(!show)}>Toggle</button>
      {show && <WindowResizer />}
    </>
  )
};

const WindowResizer = () => {
  const [size, setSize] = useState(window.innerWidth)

  const resolutionUpdater =  () => setSize(window.innerWidth)

  useEffect(() => {
    window.addEventListener('resize', resolutionUpdater)
    console.log('re-render bhayo')
    return () => window.removeEventListener('resize', resolutionUpdater)
  })
  
  return (
    <div>
      <h3>Window Resolution</h3>
      <h1>{size}px</h1>
    </div>
  )
}

export default ShowHide;
