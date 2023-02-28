import React from "react";
import Animated from "./Animated";

function About(){
    return(
        <div className="container about-page">
            <div>
                <div></div>
                <div className="text-zone">
                    <h1>
                        <Animated
                        strArray={['A','b','a','u','t','','m','e']}
                        idx={15}
                        />
                    </h1>
                    <p>Thank you for visiting my portfolio! Grace Aloo, a web developer, is who I am.
                        I am dedicated to generating top-notch work and going above and beyond for clients.
                        I have a passion for designing beautiful and practical websites.
                        <br />
                        I've worked with Ruby on Rails and MySQL for back-end programming as well as front-end web development utilizing HTML, CSS, and JavaScript.
                        I've had success creating user-friendly, responsive websites, and I'm always extending my knowledge and abilities through certifications in web development.
                        <br/>
                        I appreciate you taking the time to read more about who I am and what I do. 
                        I'm eager to show you my portfolio and talk with you about how I can help you with your web development goals.
                        </p>
                </div>

            </div>
        </div>
    )
}

export default About