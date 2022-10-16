import "./index.scss";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import LogoS from '../../assests/images/logo-s.png'
import LogoSubtitle from '../../assests/images/logo_sub.png'


function Sidebar() {
  return (
    <div className="nav-bar">
      <h1>sidebar</h1>
      <Link className="logo" to="/">
        <img src={LogoS} alt="logo"/>
        <img className="sub-logo" src={LogoSubtitle} alt="solbodan"/>

        
      </Link>
    </div>
  );
}

export default Sidebar;
