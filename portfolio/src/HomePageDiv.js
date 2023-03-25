import React, { useEffect } from "react";
import "./HomePageDiv.css";
import computerImage from "./res/homePageGame.png";
import gitHub from "./res/github.png";
import instagram from "./res/instagram.png";
import linkined from "./res/linkined.png";
import AOS from "aos";
import 'aos/dist/aos.css'
function HomePageDiv() {
  useEffect(()=>{
    AOS.init({
      // easing: "ease-in-sine"
    })
 },[]);
  return (
    <div className="HomePageDiv">
      <div className="firstContainer">
        <div className="person-name" data-aos ="fade-right" data-aos-duration="1000">Hello, I am Sanju</div>
        <div className="description-name" data-aos-delay="500" data-aos ="fade-right" data-aos-duration="1000">Professional</div>
        <div className="description-name" data-aos-delay="550" data-aos ="fade-right" data-aos-duration="1000">Game Designer</div>
        <div className="description-name" data-aos-delay="600" data-aos ="fade-right" data-aos-duration="1000">& Programmer</div>
        <div className="extraButton" ata-aos-delay="1700" data-aos ="fade-up">
          <div className="square" ><div className="arrow-text" data-aos-duration="1000">&#8594;</div></div>
          <div className="circle-block" ><img className="github" src = {gitHub} alt = "github.png"></img></div>
          <div className="circle-block" ><img className="github" src = {instagram} alt = "github.png"></img></div>
          <div className="circle-block" ><img className="github" src = {linkined} alt = "github.png"></img></div>
        </div>
        <div className="line-draw"></div>
      </div>

      <div className="SecondContainer">
        <img className="computerImage" src ={computerImage} alt = "computer.png" ata-aos-delay="100" data-aos ="fade-left" data-aos-duration="1000"></img>
      </div>




      <div className="bottom-line"></div>
    </div>
  );
}

export default HomePageDiv;
