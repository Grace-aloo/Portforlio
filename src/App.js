import './App.css';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import React, { useState } from "react";
import Signup from './components/Signup';
import Login from './components/Login';
import NavBar from './components/NavBar';
import Contact from './components/Contact';
import About from './components/About';
 import Home from './components/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css'
import Skills from './components/skills';
import Project from './components/Project';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div>
      <BrowserRouter>
         <NavBar
           isLoggedIn={isLoggedIn}
           setIsLoggedIn={setIsLoggedIn}/>
        <Routes>
           <Route path='/projects' element={<Project/>}></Route>
           <Route path='/skills' element={<Skills/>}></Route>
           <Route path='/home' element={<Home/>}></Route>
           <Route path='/about' element={<About/>}></Route>
           <Route path='/contact' element={<Contact/>}></Route>
           <Route path='/' element={<Login setIsLoggedIn={setIsLoggedIn}/>}></Route>
           <Route path='/signup' element={<Signup/>}></Route>
        </Routes>
      </BrowserRouter>
    
    </div>
    
  );
}

export default App;
