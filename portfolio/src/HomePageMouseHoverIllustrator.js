import React, { useEffect, useState } from "react";
import "./HomePageMouseHoverIllustrator.css";
import illustrator from "./res/wallpaperflare.com_wallpaper.jpg";
import astronaut_image from "./res/HomePageIcon/astronoat.png";
import astronaut_with_balloon_image from "./res/HomePageIcon/astronoat_with_balloon.png";
import rocket_image from "./res/HomePageIcon/rocket.png";
const HomePageMouseHoverIllustrator = () => {
  window.addEventListener("scroll", function () {
    const background_div = document.querySelector(".Illustrator-image");
    background_div.style.marginTop = window.scrollY * -0.05 + "px";
    background_div.style.scale = window.scrollY * 0.0001 + 1;
  });
  window.addEventListener("mousemove", (e) => {
    var x = e.clientX;
    var y = e.clientY;
    const background_div = document.querySelector(".Illustrator-image");
    const astronaut_div = document.querySelector(".astronaut-image");
    const rocket_div = document.querySelector(".rocket-image");
    // const child_div = document.querySelector(".child-with-balloon-image");

    background_div.style.transform ="translate(" + (x / 100) * 6 + "px," + (y / 100) * 6 + "px)";
    astronaut_div.style.transform ="translate(" + (x / 100) * 17 + "px," + (y / 100) * 17 + "px)";
    rocket_div.style.transform ="translate(" + (x / 100) * 25 + "px," + (y / 100) * 25 + "px)";
    // child_div.style.transform ="translate(" + (x / 100) * 25 + "px," + (y / 100) * 25 + "px)";
  });
  return (
    <div className="Illustrator-class">
      <img className="astronaut-image" src={astronaut_image}></img>
      {/* <img className="child-with-balloon-image" src={astronaut_with_balloon_image}></img> */}
      <img className="rocket-image" src={rocket_image}></img>
      <img className="Illustrator-image-static" src={illustrator}></img>
      <img className="Illustrator-image" src={illustrator}></img>
    </div>
  );
};

export default HomePageMouseHoverIllustrator;
