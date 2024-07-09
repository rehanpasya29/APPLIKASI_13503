import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Provider, useSelector, useDispatch } from 'react-redux'; // Tambahkan useSelector dan useDispatch
import store from './store';
import Info from './Info';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Users from './Users';
import { setName, setNim } from './actions'; // Tambahkan setName dan setNim

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="min-h-screen bg-gray-100 flex flex-col items-center space-y-4">
          <nav className="bg-white p-4 rounded shadow-md w-full flex justify-around">
            <Link to="/" className="text-blue-500">Home</Link>
            <Link to="/about" className="text-blue-500">About</Link>
            <Link to="/contact" className="text-blue-500">Contact</Link>
            <Link to="/users" className="text-blue-500">Users</Link>
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/users" element={<Users />} />
          </Routes>
          <Info />
          <UserForm />
        </div>
      </Router>
    </Provider>
  );
}

const UserForm = () => {
  const name = useSelector(state => state.name);
  const nim = useSelector(state => state.nim);
  const dispatch = useDispatch();

  return (
    <div className="bg-white p-4 rounded shadow-md text-center">
      <input 
        type="text" 
        value={name} 
        onChange={(e) => dispatch(setName(e.target.value))} 
        className="border p-2 mb-2 w-full"
        placeholder="Masukkan Nama"
      />
      <input 
        type="text" 
        value={nim} 
        onChange={(e) => dispatch(setNim(e.target.value))} 
        className="border p-2 mb-2 w-full"
        placeholder="Masukkan NIM"
      />
    </div>
  );
};

export default App;
