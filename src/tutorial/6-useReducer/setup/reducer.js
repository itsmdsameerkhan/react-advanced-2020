// reducer function
export const reducer = (state, action) => {
  if (action.type === 'ADD_ITEM') 
    return {...state, showModal: true, modalMesage: 'New Item Added!', people: [...state.people, action.payload]}
  if (action.type === 'NO_VALUE') 
    return {...state, showModal: true, modalMesage: 'Please Enter Item'}
  
  if (action.type === 'CLOSE_MODAL') 
    return {...state, showModal: false}
  
  if (action.type === 'REMOVE_ITEM') {
    const updatedList = state.people.filter(person => person.id !== action.id)
    return {...state, showModal: true, modalMesage: 'Item Removed', people: updatedList}
  }
  throw new Error('No Valid Action Type Found')
}
