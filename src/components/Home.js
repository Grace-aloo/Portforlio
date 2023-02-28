// import React from "react";
// import {Link} from 'react-router-dom'
import './home.css'

// function Home(){
//     return(
//         <div className="container home-page">
//             <div className="text-zone">
//                 <h1>Hi, <br />I'm Grace
//                 <br />
//                  Web Developer
//                 </h1>
//                 <h2>Full-stack Web Developer</h2>
//                 <Link to='/contact' className="flat-button">CONTACT ME</Link>
//             </div>
//         </div>
//     )
// }
// export default Home

import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import Animated from './Animated'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = ['','G','r', 'a', 'c', 'e',]
  const jobArray = ['w','e','b',' ','d', 'e', 'v', 'e', 'l','o','p', 'e', 'r','.', ]

useEffect(() => {
    const timeout = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  
    return () => {
      clearTimeout(timeout)
    }
  }, [])
  console.log(letterClass)

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <Animated
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <Animated
              letterClass={letterClass}
              strArray={jobArray}
              idx={21}
            />
          </h1>
          <h2>Full-stack Web Developer</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Home