import "./index.scss";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import LogoS from "../../assests/images/logo-s.png";
import LogoSubtitle from "../../assests/images/logo_sub.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faContactCard,
  faEnvelope,
  faHome,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Sidebar() {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={LogoS} alt="logo" />
        <img className="sub-logo" src={LogoSubtitle} alt="solbodan" />
      </Link>
      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} color="#4d4d43" />
        </NavLink>

        <NavLink
          exact="true"
          activeclassname="active"
          className="about-link"
          to="/about"
        >
          <FontAwesomeIcon icon={faUser} color="#4d4d43" />
        </NavLink>

        <NavLink
          exact="true"
          activeclassname="active"
          className="contact-link"
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d43" />
        </NavLink>
      </nav>
      <ul>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/salma-ibrahim-a1275817a/"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d43" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/salmy101"
          >
            <FontAwesomeIcon icon={faGithubSquare} color="#4d4d43" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://resume.creddle.io/resume/6x5rwrhs4yh"
          >
            <FontAwesomeIcon icon={faContactCard} color="#4d4d43" />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
