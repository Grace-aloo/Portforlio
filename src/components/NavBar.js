import React from "react"
import { Link, useNavigate } from "react-router-dom";
import './navbar.css'

function NavBar({isLoggenIn,setIsLoggedIn}){
    let navigate = useNavigate();

    function handleLogout() {
        setIsLoggedIn(false);
    }
    function handleLogin() {

        setIsLoggedIn(true)
        navigate("/login");
    }
    return(
        <div>
            {/* <Link to = "/signup">Signup</Link>
            <Link to = "/home">Home</Link>
            <Link to = "/about">About</Link>
            <Link to = "/contact">Contact</Link>
            <Link to = "/projects">Projects</Link>
            <Link to = "/skills">Skills</Link>
            <Link to = "/">Log out</Link> */}

<nav className="navbar navbar-expand-lg bg-body-tertiary" style={{backgroundColor: "#f7bdf7"}}>
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
          <Link className="nav-link" to="/contact">Contact</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/projects">Projects</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/skills">Skills</Link>
        </li>
      </ul>
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" to="/" onClick={handleLogout}>Log out</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

        </div>
    )
}

export default NavBar;