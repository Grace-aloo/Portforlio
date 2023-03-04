import React, {useEffect,useState} from "react";
import Animated from "./Animated";
import './contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLinkedin,faGithub,faTwitter,faInstagram} from '@fortawesome/free-brands-svg-icons'


function Contact(){
    const [letterClass, setLetterClass] = useState('text-animate')
    const [formData, setFormData] = useState({
        names: "",
        email: "",
        subject: "",
        message:''
    });


    useEffect(() => {
        const timeout = setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 4000)
      
        return () => {
          clearTimeout(timeout)
        }
    }, [])
    function handleChange(e) {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        });
      }
      function handleSubmit(e) {
        e.preventDefault();
           setFormData({
            names:'',
            message:'',
            email:'',
            subject:''
        })
          
        }
    return(
        <div className="contact">
            <div className="container contact-page">
             <div className="zone">
                <h1>
                <Animated
                    letterClass={letterClass}
                    strArray={['C', 'o', 'n', 't', 'a', 'c', 't']}
                    idx={15}
                 />  
                </h1>
                <div className="zone2">

                <p>I appreciate you taking the time to look at my portfolio. 
                   I would be happy to hear from you if you have any inquiries, suggestions, or would want to collaborate on a project. 
                   Use the form to get in touch with me, and I'll get back to you as soon as I can.
                </p>
                </div>
                <ul>
        <li className="list">
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              color=" #eccfc7"
              size="3x"
              className="anchor-icon"
            />
          </a>
        </li>
        <li className="list">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              color=" #eccfc7"
              size="3x"
              className="anchor-icon"
            />
          </a>
        </li>
        <li className="list">
          <a
            href="https://www.instagram.com/"
            rel="noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              size="3x"
              color="#eccfc7"
              className="anchor-icon"
            />
          </a>
        </li>
        <li className="list">
          <a href="https://twitter.com/" rel="noreferrer" target="_blank">
            <FontAwesomeIcon
              icon={faTwitter}
              size="3x"
              color=" #eccfc7"
              className="anchor-icon"
            />
          </a>
        </li>
      </ul>
            </div>
            
            <div className="contact-form">
                <form onSubmit={handleSubmit}>
                    <ul>
                    <div className="user-input">
                    <input 
                    type="text"
                    placeholder="Name"
                    name="names"
                    id="names"
                    onChange={handleChange}
                    value={formData.names}
                    required
                    />
                    <input 
                    type="email"
                    placeholder="Email"
                    name="email"
                    id="mail"
                    onChange={handleChange}
                    value={formData.email}
                    required
                    />
                    </div>
                    <input 
                    type="text"
                    placeholder="Subject"
                    name="subject"
                    id="subject"
                    onChange={handleChange}
                    value={formData.subject}
                    required
                    />
                    <textarea
                    placeholder="Message"
                    name="message"
                    id="message"
                    onChange={handleChange}
                    value={formData.message}
                    required>
                    </textarea>
                    <center><button type="submit">Submit</button></center>
                    </ul>
                </form>
            </div>
        </div>
        </div>
    )
}
export default Contact