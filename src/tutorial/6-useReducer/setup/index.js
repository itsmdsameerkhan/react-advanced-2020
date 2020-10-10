import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';
import {reducer} from './reducer'

const Index = () => {
  const [name, setName] = useState('')
  const [state, dispatch] = useReducer(reducer, {
    showModal: false,
    modalMesage: '',
    people: []
  })
  const closeModal = () => dispatch({type: 'CLOSE_MODAL'})
  const handleSubmit = (e) => {
    e.preventDefault()
    if(name) {
      const payload = {id: new Date().getTime().toString(), name}
      dispatch({type: 'ADD_ITEM', payload})
    } else {
      dispatch({type: 'NO_VALUE'})
    }
    setName('')
  }
  return (
    <>
      {state.showModal && <Modal close={closeModal} message={state.modalMesage}/>}
      <form onSubmit={handleSubmit} className='form'>
        <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
        <button>Add</button>
      </form>
      {state.people.map(({id, name}) => (
        <div key={id} className='item'>
          <h4>{name}</h4>
          <button onClick={() => dispatch({type: 'REMOVE_ITEM', id})}>remove</button>
        </div>
      ))}
    </>
  );
};

export default Index;
