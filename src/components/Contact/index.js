import "./index.scss";
import Loader from "react-loaders";
import React, { useEffect, useRef, useState } from "react";
import AnimatedLetters from "../AnimatedLetters";
import emailjs from 'emailjs-com';


const Contact = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const refForm = useRef();
  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_dfecrid",
        "template_fykc6mu",
        refForm.current,
        "8qk7hth9wEwhikysT"
      )
      .then(
        () => {
          alert("Email successfully sent!");
          window.location.reload(false);
        },
        () => {
          alert("Failed to send email!, please try again.");
        }
      );
  };

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={"Contact me".split("")}
              idx={15}
            />
          </h1>

          <p>
            I am currently open to freelance and working on large ambitious
            projects. Contact me below for requests and questions using the form
            below.
          </p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="example@gmail.com"
                    required
                  />
                </li>
                <li>
                  <input
                    type="text"
                    name="subject"
                    placeholder="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    name="messsage"
                    placeholder="message"
                    id=""
                    cols="30"
                    rows="10"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" value="SEND" className="flat-button" />
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Contact;
