import React, { useEffect, useState } from "react";
import LogoTitle from "../../assets/images/logo-s.png";
import Loader from "react-loaders";
import { Link } from "react-router-dom";
// import Logo from "./Logo";
import "./index.scss";
import AnimatedLetters from "../AnimatedLetters";


const Home = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const nameArray = ["a", "o", "f", "i", "k"];
  const jobArray = [
    "w",
    "e",
    "b",
    " ",
    "d",
    "e",
    "v",
    "e",
    "l",
    "o",
    "p",
    "e",
    "r",
  ]


    useEffect(() => {
     setTimeout(() => {
          setLetterClass('text-animate-hover')
      }, 4000)
    }, [])




  return (
    <>
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <span className={letterClass} >H</span>
          <span className={`${letterClass} _12`} >i,</span>
 <br />
 <span className={`${letterClass} _13`} >I</span>
 <span className={`${letterClass} _14`} >'m</span>
          <img src={LogoTitle} alt="developer" />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={15}
          />
          <br />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={jobArray}
            idx={15}
          />
        </h1>

        <h2>Frontend Developer | JavaScript Expert | ReactJS</h2>
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>

      {/* <Logo /> */}

    </div>
    <Loader type="pacman" />
    </>
  )
}

export default Home;
