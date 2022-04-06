import { useState,useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Page/Home';
import Student from './Page/Student';
import Company from './Page/Company';
import Mycv from './Page/Mycv';
import Login from './Page/Login';
import aos from 'aos';
import 'aos/dist/aos.css';
import Register from './Page/Register';
import Createcv from './Page/Createcv';

function App() {
  useEffect(() => {
    aos.init();
    aos.refresh()
  },[])
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/student' element={<Student />}/>
        <Route path='/company' element={<Company />}/>
        <Route path='/mycv' element={<Mycv />}/>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/createcv' element={<Createcv />}/>
      </Routes>
    </div>
  )
}

export default App;
