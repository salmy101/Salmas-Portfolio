import React, { useEffect, useState, useRef } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters/index";
import emailjs from "@emailjs/browser"
import "./index.scss"

const Contact = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  const refForm = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
    .sendForm(
      process.env.REACT_APP_SERVICE_ID,
      process.env.REACT_APP_TEMPLATE_ID,
      refForm.current,
      process.env.REACT_APP_PUBLIC_KEY
      // 'service_sd3eb2v',//service id
      // 'template_lnxxwaa', //template id
      // refForm.current,
      // '1sBJT3awcj4uFUjfJ' //public key
    ).then(
      () => {
        alert("Message Successful");
        window.location.reload(false) //reload page so the form resets
      }, () => {
        alert("Message Faile, plz try again");
      });

  }

  useEffect(() => {
    let timeoutId = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am interested in freelance opportunities - especially on ambitious
            or large projects. However, if you have any other requests or
            questions, don't hesitate to contact me using below form either.
          </p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
        </div>
        </div>
      </div>

      {/* <Loader type="pacman" /> */}
    </>
  );
};
export default Contact;
