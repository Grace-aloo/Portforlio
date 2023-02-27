import './App.css';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import React, { useState,useEffect } from "react";
import Signup from './components/Signup';
import Login from './components/Login';
import NavBar from './components/NavBar';
// import Contact from './components/Contact';
// import About from './components/About';
// import Home from './components/Home'

function App() {
  const [isLoggedin, setIsLoggedIn] = useState(false);
  return (
    <div>
      <BrowserRouter>
         <NavBar
           isLoggedin={isLoggedin}
           setIsLoggedIn={setIsLoggedIn}/>
        <Routes>
           {/* <Route path='/home' element={<Home/>}></Route> */}
           {/* <Route path='/about' element={<About/>}></Route> */}
           {/* <Route path='/contact' element={<Contact/>}></Route> */}
           <Route path='/' element={<Login/>}></Route>
           <Route path='/signup' element={<Signup/>}></Route>
        </Routes>
      </BrowserRouter>
    
    </div>
    
  );
}

export default App;
