import React from 'react';
import './HomeTitle.css';
import contrllerimage from "./res/contrller.png";
function HomeTitle(){
  return(
      <div className="homepage-background">
      <div className="draw-horizontal-line"></div>
          <div className="homepage-text">Hi I'm Sanju</div>
          <div className="homepage-text">Game Developer</div>
         <img className = "controller-image" src = {contrllerimage} alt ="Controller.png"></img>
      </div>
  );
}


export default HomeTitle;

