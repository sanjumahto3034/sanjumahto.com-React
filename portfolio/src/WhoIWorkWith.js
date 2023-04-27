import React, { useEffect } from "react";
import "./WhoIWorkWith.css";
import ludoImage from "./res/ludo.png";
import AOS from "aos";
import "aos/dist/aos.css";

function WhoIWorkWith() {
    useEffect(()=>{
        },[]);
  return (
    <div className="WhoIWorkWithMain" data-aos-delay="200" data-aos ="fade-in"  data-aos-duration="1000">
      <div className="columnContainer"  data-aos-delay="200" data-aos ="fade-right"  data-aos-duration="1000">
        <div className="headerText">----Who I Work With</div>
        <div className="headerDefine">Senior Game</div>
        <div className="headerDefine">Programmer at</div>
        <div className="headerDefine">Assert Infotech</div>
        <div className="headerDescription">Working in Assert Infotech from more than 9-months. And work on many projects. ie, Ludo, Poker & 2D Simulation Game</div>
      </div>

      
      <img className = "ludo-image" src = {ludoImage} alt ="ludo.png" data-aos-delay="200" data-aos ="fade-left" data-aos-duration="1000"></img>
      
    </div>
  );
}
var WhoIWorkWithAnimationDelayTime = 1500;



var getWhoIWorkWithAnimationDelayTime = function () {
    WhoIWorkWithAnimationDelayTime+=100;
    return WhoIWorkWithAnimationDelayTime;
};

export default WhoIWorkWith;
