import React, { useEffect, useState } from "react";
import "./HomePage.css";
import profile_image from "../res/profile.png";
import { FaLinkedinIn } from "react-icons/fa6";
import { CgFacebook } from "react-icons/cg";
import { PiGithubLogoFill } from "react-icons/pi";
function HomePage() {
  var name = "Sanju Mahto";
  var description_1 = "I'm a Game Developer";
  var description_2 = "at Emizen Tech Pvt. Ltd";

  var characters = name.split("");
  var characters_description_1 = description_1.split("");
  var characters_description_2 = description_2.split("");

  return (
    <div className="home_page_main">
      <div className="home_page_left">
        <div className="home_buttons_parent">
          <FaLinkedinIn className="home_button" onClick={OnClickLinkined} />
          <CgFacebook className="home_button" onClick={OnClickFacebook} />
          <PiGithubLogoFill className="home_button" onClick={OnClickGitHub} />
        </div>

        <div className="home_page_name">
          {characters.map((char, index) => (
            <span key={index} className="char_name">
              {char}
            </span>
          ))}
        </div>
        <div className="home_page_description">
          {characters_description_1.map((char, index) => (
            <span key={index} className="char_name">
              {char}
            </span>
          ))}{" "}
        </div>
        <div className="home_page_description">
          {characters_description_2.map((char, index) => (
            <span key={index} className="char_name">
              {char}
            </span>
          ))}
        </div>
        <div className="contact_me_button">Contact Me</div>
      </div>

      <div className="home_page_right">
        <div className="profile_image_parent">
          <div className="profile_bg_layer_1">
            <div className="profile_bg_layer_2">
              <div className="profile_bg_layer_3">
                <div className="profile_bg_layer_4">
                  <img
                    className="profile_image"
                    src={profile_image}
                    alt="profile_pic"
                  ></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
const OnClickFacebook = () => {
  window.open(
    "https://www.facebook.com/sanjumahto3034",
    "_blank",
    "noopener,noreferrer"
  );
};
const OnClickLinkined = () => {
  window.open(
    "https://www.linkedin.com/in/sanjumahto30340/",
    "_blank",
    "noopener,noreferrer"
  );
};
const OnClickGitHub = () => {
  window.open(
    "https://github.com/sanjumahto3034",
    "_blank",
    "noopener,noreferrer"
  );
};
export default HomePage;
