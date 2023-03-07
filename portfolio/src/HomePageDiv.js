import React from "react";
import "./HomePageDiv.css";
import computerImage from "./res/homePageGame.png";
import gitHub from "./res/github.png";
import instagram from "./res/instagram.png";
import linkined from "./res/linkined.png";

function HomePageDiv() {
  return (
    <div className="HomePageDiv">
      <div className="firstContainer">
        <div className="person-name">Hello, I am Sanju</div>
        <div className="description-name">Professional</div>
        <div className="description-name">Game Designer</div>
        <div className="description-name">& Programmer</div>
        <div className="extraButton">
          <div className="square"><div className="arrow-text">&#8594;</div></div>
          <div className="circle-block"><img className="github" src = {gitHub} alt = "github.png"></img></div>
          <div className="circle-block"><img className="github" src = {instagram} alt = "github.png"></img></div>
          <div className="circle-block"><img className="github" src = {linkined} alt = "github.png"></img></div>
        </div>
        <div className="line-draw"></div>
      </div>

      <div className="SecondContainer">
        <img className="computerImage" src ={computerImage} alt = "computer.png"></img>
      </div>




      <div className="bottom-line"></div>
    </div>
  );
}

export default HomePageDiv;
