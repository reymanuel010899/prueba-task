// import store from './store';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { useState } from 'react'

import './App.css'
import Error404 from './pages/Error404';
import Login from './pages/login';
import Home from './pages/Home';
import Update from './pages/Update';
import Create from './pages/create';
import Register from './pages/register';

function App() {
  return (
    <Router>
        <Routes>
          {/* Error Display */}
          <Route path="*" element={<Error404/>}/>
          <Route path="/" element={<Login/>} />
          <Route path="register/" element={<Register/>} />
          <Route path="home" element={<Home/>} />
          <Route path="update/:pk" element={<Update/>} />
          <Route path="create/" element={<Create/>} />



        </Routes>
      </Router>
  )
}
export default App
