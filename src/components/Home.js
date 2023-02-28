import React from "react";
import {Link} from 'react-router-dom'
import './home.css'

function Home(){
    return(
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hi, <br />I'm Grace
                <br />
                 Web Developer
                </h1>
                <h2>Full-stack Web Developer</h2>
                <Link to='/contact' className="flat-button">CONTACT ME</Link>
            </div>
        </div>
    )
}
export default Home