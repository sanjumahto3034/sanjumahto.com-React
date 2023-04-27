import React from "react";
import {useRef} from "react";
import "./SideBar.css";
import {Link} from "react-router-dom";
import appLogo from "../res/logo.png";

function SideBar() {
  const navRef = useRef();

  const showNavbar = () => {
    console.log("bttbt");
    alert("kadlfa")
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <div>
      <Link className="logoDiv" to="/">
        <img className="AppLogo" src={appLogo} alt="logo"></img>
        <div className="logoName">Portfolio</div>
      </Link>
      <nav ref={navRef}>
        <div className="BtnDiv">
          <Link className="all-game-btn" to="/resume">
            Resume
          </Link>
          <Link className="lets-talk-btn" to="/letstalk">
            Let's Talk
          </Link>
        </div>
        <Link className="btn-text" onClick={showNavbar} to='/resume'>HideSideBar</Link>

      </nav>
      <Link className="btn-text" to='/demo'>ShowSideBar</Link>

    </div>
  );
}



export default SideBar;
