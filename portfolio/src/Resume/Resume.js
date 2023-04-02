import React from "react";
import "./Resume.css";
import profile_picture from './res/profile_picture.png';

function Resume() {
  return (
    <div className="Resume-div-main">

      <div className="Resume-title-div">
        <img className = "Resume-profile-picture" src = {profile_picture} alt ="ProfilePicture.png"></img>
        <div className="Resume-profile-Description-main">
          <div className="Resume-Description-Name">Sanju Mahto</div>
          <div className="Resume-Description-Post">Front-End Game Programmer</div>
          <div className="Resume-Description-About">
            Hello, I'm Sanju. I'm a Game developer expert with 1 years of
            experience in the field, and 2yrs+ personal experience in Unity 3D
          </div>
        </div>
      </div>
      <div className="Resume-div-divideLine"></div>
    </div>
  );
}
export default Resume;
