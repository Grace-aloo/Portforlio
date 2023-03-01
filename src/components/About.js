import React, {useEffect,useState} from "react";
import Animated from "./Animated";
import african from './images/african2.jpg'
import './about.css'

function About(){
    const [letterClass, setLetterClass] = useState('text-animate')
    useEffect(() => {
        const timeout = setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 3000)
      
        return () => {
          clearTimeout(timeout)
        }
      }, [])
    return(
        <div className="about">
            <div className="container about-page">
                <div className="text-zone">
                    <h1>
                        <Animated
                        letterClass={letterClass}
                        strArray={['A','b','o','u','t',' ','m','e']}
                        idx={15}
                        />
                    </h1>
                    <p>Thank you for visiting my portfolio! Grace Aloo, a web developer, is who I am.
                        I am dedicated to generating top-notch work and going above and beyond for clients.
                        I have a passion for designing beautiful and practical websites.
                    </p>
                    <p>
                        I've worked with Ruby on Rails and MySQL for back-end programming as well as front-end web development utilizing HTML, CSS, and JavaScript.
                        I've had success creating user-friendly, responsive websites, and I'm always extending my knowledge and abilities through certifications in web development.
                    </p>
                    <p>
                        I appreciate you taking the time to read more about who I am and what I do. 
                        I'm eager to show you my portfolio and talk with you about how I can help you with your web development goals.
                    </p>
                </div>
            </div>
            <div><img src={african} alt="african" id="img2"/></div>
        </div>
    )
}

export default About