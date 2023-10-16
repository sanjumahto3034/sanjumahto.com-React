import React from "react";
import "./StaticColorBackground.css";

export default function StaticColorBackground() {
  const randomDiv = [];
  function getRandomColor() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  }
  for (let i = 0; i < 50; i++) {
    const divStyle = {
      width: "5px",
      height: "5px",
      borderRadius: "50%",
      backgroundColor: getRandomColor(),
      position: "absolute",
      top: `${Math.random() * 100}vh`,
      left: `${Math.random() * 100}vw`,
    };
    randomDiv.push(
      <div key={i} className="child-static" style={divStyle}></div>
    );
  }

  window.addEventListener("scroll", function () {
    // const titleDiv = document.querySelector(".TitleDiv");
    // const childDiv = document.querySelectorAll(".child-static");
    // for (var i = 0; i < childDiv.length; i++) {
    //   if (window.scrollY > 1) {
    //     childDiv[i].style.top =
    //       (parseInt(childDiv[i].style.top) + window.scrollY) / 400 + "px";
    //     // console.log(parseInt(childDiv[i].style.top));
    //   }
    // }
  });
  window.addEventListener("mousemove", (e) => {
    var x = e.clientX;
    var y = e.clientY;
    const childDiv = document.querySelectorAll(".child-static");
    for (var i = 0; i < childDiv.length; i++) {
      var speed = 3;
      if (i % 2 == 0) speed = 5;
      if (i % 3 == 0) speed = 7;
      if (i % 4 == 0) speed = 9;
      if (i % 5 == 0) speed = 11;
      if (i % 6 == 0) speed = 13;
      if (i % 7 == 0) speed = 15;

      childDiv[i].style.transform = `translate(${(x / 100) * speed}px, ${
        (y / 100) * speed
      }px)`;
    }
  });
  return (
    <div className="static-color-main-bg">
      <div className="static-color-white-1"></div>
      <div className="static-color-white-2"></div>
      {randomDiv}
    </div>
  );
}
