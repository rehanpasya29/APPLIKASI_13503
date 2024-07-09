import React, { useReducer } from 'react';

const initialState = {
  name: '',
  email: '',
};

function reducer(state, action) {
  switch (action.type) {
    case 'SET_NAME':
      return { ...state, name: action.payload };
    case 'SET_EMAIL':
      return { ...state, email: action.payload };
    case 'RESET':
      return initialState;
    default:
      return state;
  }
}

function AddUserForm({ addUser }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    addUser({ name: state.name, email: state.email });
    dispatch({ type: 'RESET' });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow-md text-center mb-4">
      <h2 className="text-xl font-bold mb-4">Add New User</h2>
      <input 
        type="text" 
        value={state.name} 
        onChange={(e) => dispatch({ type: 'SET_NAME', payload: e.target.value })} 
        className="border p-2 mb-2 w-full"
        placeholder="Name"
      />
      <input 
        type="email" 
        value={state.email} 
        onChange={(e) => dispatch({ type: 'SET_EMAIL', payload: e.target.value })} 
        className="border p-2 mb-2 w-full"
        placeholder="Email"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">Add User</button>
    </form>
  );
}

export default AddUserForm;
