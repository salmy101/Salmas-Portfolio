import "./index.scss";
import "animate.css";
import { Link } from "react-router-dom";
import logo from "../../assests/images/logo-s.png";
import { useState, useEffect } from "react";
import AnimatedLetters from "../AnimatedLetters";
import Logo from "./Logo/index"

const Home = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const nameArray = ['a', 'l', 'm', 'a'];
  const jobArray = [
    'w',
    'e',
    'b',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ];

  
  // useEffect(() => {
  //   return setTimeout(() => {
  //     setLetterClass('text-animate-hover')
  //   }, 4000)
  // }, [])

  useEffect(() => {
        
    let timeoutId = setTimeout(() => {
        setLetterClass('text-animate-hover')
    }, 4000)
    
    return () => {
                clearTimeout(timeoutId)
            }
}, [])
  

  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <span className={letterClass}>H</span> 
          <span className={`${letterClass} _12`}>i,</span> 
          <br />
          <span className={`${letterClass} _13`}>I</span> 
          <span className={`${letterClass} _14`}>m</span> 

          <img src={logo} alt="developer" />
          <AnimatedLetters 
          letterClass={letterClass}
          strArray={nameArray}
          idx={15}
           />
          <br />
          <AnimatedLetters 
          letterClass={letterClass}
          strArray={jobArray}
          idx={22}
           />
        </h1>
        <h2> Developer, Reader, and Tea Lover.</h2>
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
      <Logo />
    </div>
  );
};

export default Home;
