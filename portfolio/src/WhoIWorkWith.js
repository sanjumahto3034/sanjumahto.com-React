import React, { useEffect, useState } from "react";
import "./WhoIWorkWith.css";
import ludoImage from "./res/ludo.png";
import AOS from "aos";
import "aos/dist/aos.css";
import game_image from "./res/game_page.jpg";

function WhoIWorkWith() {
  useEffect(() => {}, []);
  const [ScrollValue, SetScrollValue] = useState(1);
  var value = 1;
  window.addEventListener("scroll", function () {
    const titleDiv = document.querySelector(".WhoIWorkWithMain-image-bg");
    value = window.scrollY / 400;
    SetScrollValue(value);
    titleDiv.style.scale = value + "";

  });
  window.addEventListener("mousemove", (e) => {
    var x = e.clientX;
    var y = e.clientY;
    const titleDiv = document.querySelector(".WhoIWorkWithMain-image-bg");
    titleDiv.style.transform =
      "translate(" + (x / 100) * 11 + "px," + (y / 100) * 11 + "px)";
  });
  return (
    <div
      className="WhoIWorkWithMain"
      data-aos-delay="200"
      data-aos="fade-in"
      data-aos-duration="0"
    >
      <img className="WhoIWorkWithMain-image-bg" src={game_image}></img>
      <div
        className="columnContainer"
        data-aos-delay="200"
        data-aos="fade-up"
        data-aos-duration="0"
      >
        <div className="headerText">-Who I Work With.</div>
        <div className="headerDefine">Game Developer, Designer</div>
        <div className="headerDefine">& Programmer at</div>
        <div className="headerDefine">EmizenTech Pvt. Ltd.</div>
        <div className="headerDescription">
          I have been working at EmizenTech for over four{" "}
          {calculateMonthsDifference("2023-06-05")}-months, primarily focusing
          on developing 2D,3D and Augmented Reality (AR) games and applications.
        </div>
      </div>

      <img
        className="ludo-image"
        src={ludoImage}
        alt="ludo.png"
        data-aos-delay="200"
        data-aos="fade-up"
        data-aos-duration="0"
      ></img>
    </div>
  );
}
var WhoIWorkWithAnimationDelayTime = 1500;

function calculateMonthsDifference(startDate) {
  const currentDate = new Date();
  const start = new Date(startDate);

  const yearsDiff = currentDate.getFullYear() - start.getFullYear();
  const monthsDiff = currentDate.getMonth() - start.getMonth();

  const totalMonths = yearsDiff * 12 + monthsDiff;

  return totalMonths;
}

var getWhoIWorkWithAnimationDelayTime = function () {
  WhoIWorkWithAnimationDelayTime += 100;
  return WhoIWorkWithAnimationDelayTime;
};

export default WhoIWorkWith;
