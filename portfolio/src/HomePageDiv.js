import React, { useEffect, useState } from "react";
import "./HomePageDiv.css";
import computerImage from "./res/homePageGame.png";
import astronaut_with_balloon_image from "./res/HomePageIcon/astronoat_with_balloon.png";
import gitHub from "./res/github.png";
import instagram from "./res/instagram.png";
import linkined from "./res/linkined.png";
import AOS from "aos";
import "aos/dist/aos.css";

function HomePageDiv() {
  window.addEventListener("scroll", function () {
    const titleDiv = document.querySelector(".TitleDiv");
    if (window.scrollY > 200) {
    } else {
    }
  });
  window.addEventListener("mousemove", (e) => {
    var x = e.clientX;
    var y = e.clientY;
    const computerImageDiv = document.querySelector(".computerImage");
    computerImageDiv.style.transform = "translate(" + (x / 100) * 4 + "px," + (y / 100) * 4 + "px)";
  });
  useEffect(() => {
    AOS.init({
      easing: "ease-in-sine",
    });
  }, []);
  return (
    <div className="HomePageDiv">
      <div className="firstContainer">
        <div
          className="person-name"
          data-aos="fade-right"
          data-aos-duration="0"
        >
          Hello, I am Sanju
        </div>
        <div
          className="description-name"
          data-aos-delay="100"
          data-aos="fade-right"
          data-aos-duration="0"
        >
          Professional
        </div>
        <div
          className="description-name"
          data-aos-delay="200"
          data-aos="fade-right"
          data-aos-duration="0"
        >
          Game Designer
        </div>
        <div
          className="description-name"
          data-aos-delay="300"
          data-aos="fade-right"
          data-aos-duration="0"
        >
          & Programmer
        </div>
        <div className="extraButton" ata-aos-delay="1700" data-aos="fade-up">
          <div className="square">
            <div className="arrow-text" data-aos-duration="0">
              &#8594;
            </div>
          </div>
          <a
            className="circle-block"
            href="https://www.github.com/sanjumahto3034"
          >
            <img className="github" src={gitHub} alt="github.png"></img>
          </a>
          <a
            className="circle-block"
            href="https://www.instagram.com/sanjumahto3034/"
          >
            <img className="github" src={instagram} alt="github.png"></img>
          </a>
          <a
            className="circle-block"
            href="https://www.linkedin.com/in/sanjumahto30340/"
          >
            <img className="github" src={linkined} alt="github.png"></img>
          </a>
        </div>
        <div className="line-draw"></div>
      </div>

      <div className="SecondContainer">
        {/* <img
          className="computerImage"
          src={computerImage}
          alt="computer.png"
          ata-aos-delay="100"
          data-aos="fade-left"
          data-aos-duration="0"
        ></img>    */}

        <img
          className="computerImage"
          src={astronaut_with_balloon_image}
          alt="computer.png"
        ></img>
      </div>

      <div className="bottom-line"></div>
    </div>
  );
}

export default HomePageDiv;
