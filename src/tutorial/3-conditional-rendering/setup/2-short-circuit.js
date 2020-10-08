import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('')
  const [isError, setIsError] = useState(false)
  const firstValue = text || 'hello world';
  const secondValue = !text && 'hello world';

  return (
    <>
      <h1>{firstValue}</h1>
      <button className='btn' onClick={() => setIsError(!isError)}>click</button>
      {isError && <h6 style={{marginTop: '4rem'}}>Error...</h6>}
    </>
  );
};

export default ShortCircuit;
