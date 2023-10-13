import React from "react";
import "./TitleDiv.css";
import appLogo from "./res/logo.png";
import { useState } from "react";
import { Link } from "react-router-dom";

function TitleDiv() {
  const [divStyle, setStyle] = useState("hideSideBar");

  const showSideBar = () => {
    setStyle("title-div-mobile-ui-div");
  };
  const hideSideBar = () => {
    setStyle("hideSideBar");
  };
  const underDevelopment = () => {
    alert("Under Development Error : 303");
  };

  window.addEventListener("scroll", function () {
    const titleDiv = document.querySelector(".TitleDiv");
    if (window.scrollY > 200) {
      titleDiv.style.width = "100vw";
      titleDiv.style.borderRadius = "0px";
      titleDiv.style.marginTop = "0px";
      titleDiv.style.paddingRight = "50px";
      titleDiv.style.paddingLeft = "50px";
    } else {
      titleDiv.style.width = "90vw"; // Restore the original width when user scrolls to the top
      titleDiv.style.borderRadius = "70px"; // Restore the original border radius
      titleDiv.style.marginTop = "30px";
      titleDiv.style.paddingRight = "30px";
      titleDiv.style.paddingLeft = "30px";
    }
  });

  return (
    <div className="TitleDiv">
      <Link className="logoDiv" to="/">
        <img className="AppLogo" src={appLogo} alt="logo"></img>
        <div className="logoName">Portfolio </div>
      </Link>
      <div className="title-div-desktop">
        <Link className="title-div-btn" to="/games">
          <div className="title-div-btn-text">All Games</div>
        </Link>
        <Link className="title-div-btn" to="/resume">
          <div className="title-div-btn-text">Resume</div>
        </Link>
        <div className="title-div-btn" onClick={underDevelopment}>
          <div className="title-div-btn-text">Let's Talk</div>
        </div>
      </div>
      {/* <div className='title-div-mobile-show-btn' onClick={showSideBar}>MORE</div> */}
      {/* <div className={divStyle}>
                <Link className='title-div-mobile-ui-btn' to='/games' onClick={hideSideBar}><div className='title-div-btn-text-in'>All Games</div></Link>
                <Link className='title-div-mobile-ui-btn' to='/resume' onClick={hideSideBar}><div className='title-div-btn-text-in'>Resume</div></Link>
                <div className='title-div-mobile-ui-btn' onClick={underDevelopment}><div className='title-div-btn-text-in'>Let's Talk</div></div>
                <div className='title-div-mobile-ui-btn' onClick={hideSideBar}><div className='title-div-btn-text-in'>Close</div></div>
            </div> */}
    </div>
  );
}

function letsTalkBtnClicked() {
  console.log("[ TitleDiv ] lets-talk-btn");
}
function checkIfMobileDevice() {
  return true;
}

export default TitleDiv;
