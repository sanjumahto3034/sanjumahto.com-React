import React, { useEffect, useState } from "react";
import "./HomePage.css";
import profile_image from "../res/profile.png";
import { FaLinkedinIn } from "react-icons/fa6";
import { CgFacebook } from "react-icons/cg";
import { PiGithubLogoFill } from "react-icons/pi";
import AOS from "aos";
import "aos/dist/aos.css";

function HomePage() {
  useEffect(() => {
    AOS.init();
  }, []);

  const myNameIs = "Hi, my name is ";
  const name = "Sanju Mahto";
  const description_1 = "I'm a Game Developer";
  const description_2 = "at Emizen Tech Pvt. Ltd";
  const myDescription =
    "I am an AR/VR and Game Developer, currently focused on" +
    "creating innovative Interior Design apps and immersive 3D" +
    "games at";
  const characters = name.split("");
  const myNameIsMap = myNameIs.split("");
  const description_1_map = description_1.split("");

  OnMouseMove(".profile_bg_layer_2");
  OnMouseMove(".profile_bg_layer_3");
  OnMouseMove(".profile_bg_layer_4");
  OnMouseMove(".profile_image");
  var m_timer = 0;
  const GetTimeIncrease200 = () => {
    m_timer += 200;
    return m_timer;
  };
  const GetTimeIncrease100 = () => {
    m_timer += 100;
    return m_timer;
  };
  return (
    <div className="home_page_main">
      {/* Left Container */}
      <div className="home_page_left">
        <div className="home_page_description_h2_colored">
          {myNameIsMap.map((char, index) => (
            <span key={index} className="char_name">
              {char}
            </span>
          ))}
          <span
            className="continue_blink"
            data-aos-delay={20 * 200}
            data-aos="fade-up"
            data-aos-duration="500"
          >
            _
          </span>
        </div>
        <div className="home_page_name">
          {characters.map((char, index) => (
            <span
              key={index}
              className="char_name"
              data-aos-delay={getRandomInt(10000, 15000) + ""}
              data-aos={
                animationDirections[
                  getRandomInt(0, animationDirections.length - 1)
                ]
              }
              data-aos-duration={getRandomInt(10000, 15000) + ""}
            >
              {char}
            </span>
          ))}
        </div>
        <div
          className="home_page_description_h1"
          data-aos-delay={GetTimeIncrease200()}
          data-aos="fade-up"
          data-aos-duration="500"
        >
          {description_1_map.map((char, index) => (
            <span key={index} className="char_name">
              {char}
            </span>
          ))}
        </div>

        <div
          className="home_page_description_h2"
          data-aos-delay={GetTimeIncrease200()}
          data-aos="fade-up"
          data-aos-duration="500"
        >
          {myDescription.split("").map((char, index) => (
            <span key={index} className="char_name">
              {char}
            </span>
          ))}{" "}
          <a
            href="https://www.emizentech.com/"
            className="current_company_hyperlink"
            target="_blank"
          >
            Emizen Tech Pvt. Ltd.
          </a>
        </div>

        <div className="contact_button_container">
          <div
            className="contact_me_button"
            data-aos-delay={GetTimeIncrease200()}
            data-aos="fade-right"
            data-aos-duration="500"
          >
            Say Hello <span className="right_arrow_contact_us">&#8594;</span>
          </div>
          <div className="home_buttons_parent">
            <FaLinkedinIn
              className="home_button"
              onClick={OnClickLinkined}
              data-aos-delay={GetTimeIncrease200()}
              data-aos="fade-left"
              data-aos-duration="500"
            />
            <CgFacebook
              className="home_button"
              onClick={OnClickFacebook}
              data-aos-delay={GetTimeIncrease200()}
              data-aos="fade-left"
              data-aos-duration="500"
            />
            <PiGithubLogoFill
              className="home_button"
              onClick={OnClickGitHub}
              data-aos-delay={GetTimeIncrease200()}
              data-aos="fade-left"
              data-aos-duration="500"
            />
            <div className="home_button_line"></div>
          </div>
        </div>
      </div>

      {/* Right Container */}
      <div
        className="home_page_right"
        data-aos-delay="1000"
        data-aos="fade-left"
        data-aos-duration="500"
      >
        <div className="profile_image_parent">
          <div
            className="profile_bg_layer_1"
            data-aos-delay="1000"
            data-aos="fade-in"
            data-aos-duration="500"
          >
            <div
              className="profile_bg_layer_2"
              data-aos-delay="1200"
              data-aos="fade-in"
              data-aos-duration="500"
            >
              <div
                className="profile_bg_layer_3"
                data-aos-delay="1400"
                data-aos="fade-in"
                data-aos-duration="500"
              >
                <div
                  className="profile_bg_layer_4"
                  data-aos-delay="1600"
                  data-aos="fade-in"
                  data-aos-duration="500"
                >
                  <img
                    className="profile_image"
                    src={profile_image}
                    alt="profile_pic"
                    data-aos-delay="1800"
                    data-aos="fade-in"
                    data-aos-duration="500"
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
  window.open("https://www.facebook.com/sanjumahto3034");
};
const OnClickLinkined = () => {
  window.open("https://www.linkedin.com/in/sanjumahto3034/");
};
const OnClickGitHub = () => {
  window.open("https://github.com/sanjumahto3034");
};
const OnMouseMove = (layer_name) => {
  var sensitivity = Math.random() * 0.5;
  window.addEventListener("mousemove", (e) => {
    var x = e.clientX;
    var y = e.clientY;

    const layer = document.querySelector(layer_name);

    if (layer) {
      layer.style.transform =
        "translate(" +
        (x / 100) * sensitivity +
        "px," +
        (y / 100) * sensitivity +
        "px)";
    }
  });
};

function getRandomInt(min, max) {
  const value = Math.floor(Math.random() * (max - min + 1)) + min;
  return value;
}
const animationDirections = ["fade-left", "fade-right", "fade-up", "fade-down"];

export default HomePage;
