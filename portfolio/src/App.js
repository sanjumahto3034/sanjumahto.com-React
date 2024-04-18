import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./Modules/Header";
import HomePage from "./Modules/HomePage";
import WhereIWorked from "./Modules/WhereIWorked";
import FrameworkUse from "./Modules/FrameworkUse";
import TomImage from "./res/tom_image.png";
import WebsiteLoader from "./Modules/WebsiteLoader";
import Resume from "./Modules/Resume";

function App() {
  const [IsPageLoaded, setPageLoadSuccess] = useState(false);

  const OnPageLoadSuccess = () => {
    setPageLoadSuccess(true);
    console.log("Page load success");
  };

  // return (
  //   <div className="App">
  //     {!IsPageLoaded && (
  //       <WebsiteLoader OnLoadSuccess={OnPageLoadSuccess}></WebsiteLoader>
  //     )}

  //     {IsPageLoaded && <CustomCursor></CustomCursor>}
  //     {IsPageLoaded && <Header></Header>}
  //     {IsPageLoaded && <HomePage></HomePage>}
  //     {IsPageLoaded && <WhereIWorked></WhereIWorked>}
  //     {IsPageLoaded && <FrameworkUse></FrameworkUse>}
  //   </div>
  // );

  return (
    <div className="App">
      {/* <CustomCursor></CustomCursor> */}
      <Header></Header>
      <HomePage></HomePage>
      <WhereIWorked></WhereIWorked>
      <FrameworkUse></FrameworkUse>
      <Resume></Resume>
    </div>
  );
}

function setRandomColors() {
  // Function to generate a random color
  const getRandomColor = () =>
    `#${Math.floor(Math.random() * 16777215).toString(16)}`;

  document.documentElement.style.setProperty(
    "--secondary-color",
    getRandomColor()
  );
  document.documentElement.style.setProperty(
    "--secondary-color-secondary-light",
    getRandomColor()
  );
  document.documentElement.style.setProperty(
    "--secondary-color-secondary-dark",
    getRandomColor()
  );
  document.documentElement.style.setProperty(
    "--secondary-color-secondary-extra-dark",
    getRandomColor()
  );
  document.documentElement.style.setProperty(
    "--secondary-color-secondary-double-extra-dark",
    getRandomColor()
  );
}

const CustomCursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [angle, setAngle] = useState(0);
  const offsetValue = 0;

  useEffect(() => {
    const handleMouseMove = (e) => {
      const mouseX = e.clientX - offsetValue;
      const mouseY = e.clientY - offsetValue;

      // Calculate the angle between the mouse position and Tom's image center
      const deltaX = mouseX - cursorPosition.x;
      const deltaY = mouseY - cursorPosition.y;
      const newAngle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);

      setCursorPosition({ x: mouseX, y: mouseY });
      setAngle(newAngle);
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [cursorPosition]);

  return (
    <div>
      <div
        className="custom_cursor"
        style={{ left: `${cursorPosition.x}px`, top: `${cursorPosition.y}px` }}
      ></div>
      <div
        className="custom_cursor_chase"
        style={{
          left: `${cursorPosition.x}px`,
          top: `${cursorPosition.y}px`,
        }}
      ></div>
    </div>
  );
};

export default App;
