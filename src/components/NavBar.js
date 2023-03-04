import React from "react"
import { Link, useNavigate } from "react-router-dom";
import './navbar.css'
import logo from './images/P.png'

function NavBar({isLoggedIn,setIsLoggedIn}){
    let navigate = useNavigate();

    function handleLogout() {
        setIsLoggedIn(false);
    }
    function handleLogin() {

        setIsLoggedIn(true)
        navigate("/home");
    }
    console.log(isLoggedIn)
    return(
        <div>
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    {/* <Link className="navbar-brand" to="#">Navbar</Link> */}
    <div className="collapse navbar-collapse justify-content-end" id="navbarTogglerDemo03">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/skills">Skills</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/projects">Projects</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">Contact</Link>
        </li>
      </ul>
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
      {isLoggedIn?(
        <li className="nav-item">
          <Link className="nav-link" to='/' onClick={handleLogout}>Log out</Link>
          </li>
          ):(
            <li className="nav-item">
            <Link className="nav-link" to="/home" onClick={handleLogin}>Login</Link>
          </li>
            )}
       
      </ul>
    </div>
    <img src={logo} alt="logo" style={{ width: "100px", height: "100%", position: "absolute", top: 0, left: 0 }} />
  </div>
</nav>

        </div>
    )
}

export default NavBar;