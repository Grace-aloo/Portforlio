import React from "react"
import { Link, useNavigate } from "react-router-dom";


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
            {/* <Link to = "/signup">Signup</Link> */}
            <Link to = "/home">Home</Link>
            <Link to = "/about">About</Link>
            <Link to = "/contact">Contact</Link>
            <Link to = "/projects">Projects</Link>
            <Link to = "/skills">Skills</Link>
            <Link to = "/">Log out</Link>

        </div>
    )
}

export default NavBar;