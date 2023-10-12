import React, { useEffect, useState } from "react";
import illustrator from "./res/illustrator_bg.jpg";
import "./HomePageDiv.css";
import computerImage from "./res/homePageGame.png";
import gitHub from "./res/github.png";
import instagram from "./res/instagram.png";
import linkined from "./res/linkined.png";
import AOS from "aos";
import "aos/dist/aos.css";

const MouseTracker = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleWindowMouseMove = (event) => {
      setCoords({
        x: event.clientX,
        y: event.clientY,
      });
    };
    window.addEventListener("mousemove", handleWindowMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleWindowMouseMove);
    };
  }, []);

  return (
    <div className="Illustrator-class">
      {/* <img
        className="illustrator-image"
        src={illustrator}
        alt="illustrator.png"
      ></img> */}
    </div>
  );
};
function HomePageDiv() {
  useEffect(() => {
    AOS.init({
      easing: "ease-in-sine",
    });
  }, []);
  return (
    <div className="HomePageDiv">
      <MouseTracker />
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
        <img
          className="computerImage"
          src={computerImage}
          alt="computer.png"
          ata-aos-delay="100"
          data-aos="fade-right"
          data-aos-duration="0"
        ></img>
      </div>

      <div className="bottom-line"></div>
    </div>
  );
}

export default HomePageDiv;
