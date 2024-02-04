import React, { useEffect, useState } from "react";
import "./Header.css";
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { MdOutlineColorLens } from "react-icons/md";
function Header() {
  var name = "Sanju Mahto";

  var _home = "</home>";
  var _about_me = "</about_me>";
  var _resume = "</resume>";
  var _contact_me = "</contact_me>";
  var _random_color = "</random_color>";

  return (
    <div className="header_main">
      <div className="site_name">
        {name.split("").map((char, index) => (
          <span key={index} className="char_name">
            {char}
          </span>
        ))}
      </div>

      <div className="site_route_buttons">
        <div className="route_button">
          {_home.split("").map((char, index) => (
            <span key={index} className="char_name">
              {char}
            </span>
          ))}
          <div className="under_line"></div>
        </div>

        <div className="route_button">
          {_about_me.split("").map((char, index) => (
            <span key={index} className="char_name">
              {char}
            </span>
          ))}
          <div className="under_line"></div>
        </div>

        <div className="route_button">
          {_resume.split("").map((char, index) => (
            <span key={index} className="char_name">
              {char}
            </span>
          ))}
          <div className="under_line"></div>
        </div>

        <div className="route_button">
          {_contact_me.split("").map((char, index) => (
            <span key={index} className="char_name">
              {char}
            </span>
          ))}
          <div className="under_line"></div>
        </div>

        <div className="route_button" onClick={setRandomColors}>
          {_random_color.split("").map((char, index) => (
            <span key={index} className="char_name">
              {char}
            </span>
          ))}
          <div className="under_line"></div>
        </div>
        {/* Dark Mode Toggle */}
        {/* <DarkModeToggle></DarkModeToggle> */}

      </div>
    </div>
  );
}
const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);
  // EnableDarkMode(false);
  const handleToggle = () => {
    setIsFadingOut(true);
    setTimeout(() => {
      setIsDarkMode((prevMode) => !prevMode);
      setIsFadingOut(false);
    }, 300); // 300ms should match the transition duration in CSS
    EnableDarkMode(!isDarkMode);
  };

  return (
    <div
      className={`dark_mode_toggle ${isDarkMode ? "dark_mode" : "light_mode"} ${
        isFadingOut ? "fade-out" : ""
      }`}
      onClick={handleToggle}
    >
      {isDarkMode ? <MdDarkMode /> : <CiLight />}
    </div>
  );
};
const EnableDarkMode = (enable) => {
  console.log("enable: " + enable);

  const colors = {
    light: {
      "--primary-color": "#0b0c14",
      "--primary-color-second": "#FFFFFF",
      "--secondary-color": "#D04848",
      "--secondary-color-light": "#81332f",
      "--secondary-color-dark": "#632a2a",
      "--secondary-color-extra-dark": "#3e1e24",
      "--secondary-color-double-extra-dark": "#993a33",
      "--text-color-primary": "#FFFFFF",
      "--text-color-secondary": "#000000",
    },
    dark: {
      "--primary-color": "#0b0c14",
      "--primary-color-second": "#0f101c",
      "--secondary-color": "#D04848",
      "--secondary-color-light": "#81332f",
      "--secondary-color-dark": "#632a2a",
      "--secondary-color-extra-dark": "#3e1e24",
      "--secondary-color-double-extra-dark": "#993a33",
      "--text-color-primary": "#ffffff",
      "--text-color-secondary": "#ffffff",
    },
  };

  const modeColors = enable ? colors.dark : colors.light;


  Object.entries(modeColors).forEach(([key, value]) => {
    document.documentElement.style.setProperty(key, value);
  });
};

function setRandomColors() {
  // Function to generate a random color
  EnableDarkMode(true);
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

export default Header;
