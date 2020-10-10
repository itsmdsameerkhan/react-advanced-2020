import React, { useEffect } from 'react';

const Modal = ({message, close}) => {
  useEffect(() => {
    setTimeout(() => {
      close()
    }, 2500)
  })
  return <div className='modal'>
    <p>{message}</p>
  </div>;
};

export default Modal;
