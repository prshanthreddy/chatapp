import './App.css';
import React from 'react';
import Home from './pages/home';
import Login from './pages/Login';
import Register from './pages/Register';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { AuthContext } from './context/AuthContext';
import { useContext } from 'react';

function App() {
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
