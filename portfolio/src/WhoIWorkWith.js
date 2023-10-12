import React, { useEffect } from "react";
import "./WhoIWorkWith.css";
import ludoImage from "./res/ludo.png";
import AOS from "aos";
import "aos/dist/aos.css";

function WhoIWorkWith() {
  useEffect(() => {}, []);
  return (
    <div
      className="WhoIWorkWithMain"
      data-aos-delay="200"
      data-aos="fade-in"
      data-aos-duration="1000"
    >
      <div
        className="columnContainer"
        data-aos-delay="200"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        <div className="headerText">-Who I Work With</div>
        <div className="headerDefine">Game Developer, Designer</div>
        <div className="headerDefine">& Programmer at</div>
        <div className="headerDefine">EmizenTech Pvt. Ltd.</div>
        <div className="headerDescription">
          Working in EmizenTech from more than{" "}
          {calculateMonthsDifference("2023-06-05")}-months. And 2D Games on Ludo
          And AR Applications.
        </div>
      </div>

      <img
        className="ludo-image"
        src={ludoImage}
        alt="ludo.png"
        data-aos-delay="200"
        data-aos="fade-right"
        data-aos-duration="1000"
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
