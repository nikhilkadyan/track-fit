import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './Auth/login';
import Signup from './Auth/signup';
import './global.scss'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
