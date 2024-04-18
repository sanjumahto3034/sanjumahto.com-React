import React, { useEffect, useState } from "react";
import "./Header.css";
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { MdOutlineColorLens } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";
function Header() {
  useEffect(() => {
    AOS.init();
    EnableDarkMode(true);
    LoadColors();
  }, []);
  var name = "Sanju Mahto";

  var _home = "</home>";
  var _about_me = "</about_me>";
  var _resume = "</resume>";
  var _contact_me = "</contact_me>";
  var _random_color = "</random_color>";
  return (
    <div className="header_main">
      <div className="site_name" data-aos="fade-down" data-aos-duration="500">
        {name.split("").map((char, index) => (
          <span key={index} className="char_name">
            {char}
          </span>
        ))}
      </div>

      <div className="site_route_buttons">
        <div
          className="route_button"
          data-aos-delay="200"
          data-aos="fade-left"
          data-aos-duration="500"
        >
          {_home.split("").map((char, index) => (
            <span key={index} className="char_name">
              {char}
            </span>
          ))}
          <div className="under_line"></div>
        </div>

        <div
          className="route_button"
          data-aos-delay="400"
          data-aos="fade-left"
          data-aos-duration="500"
        >
          {_about_me.split("").map((char, index) => (
            <span key={index} className="char_name">
              {char}
            </span>
          ))}
          <div className="under_line"></div>
        </div>

        <div
          className="route_button"
          data-aos-delay="600"
          data-aos="fade-left"
          data-aos-duration="500"
        >
          {_resume.split("").map((char, index) => (
            <span key={index} className="char_name">
              {char}
            </span>
          ))}
          <div className="under_line"></div>
        </div>

        <div
          className="route_button"
          data-aos-delay="800"
          data-aos="fade-left"
          data-aos-duration="500"
        >
          {_contact_me.split("").map((char, index) => (
            <span key={index} className="char_name">
              {char}
            </span>
          ))}
          <div className="under_line"></div>
        </div>

        <div
          className="route_button"
          onClick={setRandomColors}
          data-aos-delay="1000"
          data-aos="fade-left"
          data-aos-duration="500"
        >
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
  EnableDarkMode(true);
  const getRandomColor = () =>
    `#${Math.floor(Math.random() * 16777215).toString(16)}`;

  colorsArr.forEach((n) => {
    const color = getRandomColor();
    localStorage.setItem(n, color);
    document.documentElement.style.setProperty(n, color);
  });
}
function LoadColors() {
  colorsArr.forEach((n) => {
    const color = localStorage.getItem(n, "");
    if (color) {
      document.documentElement.style.setProperty(n, color);
    }
  });
}
export default Header;
const colorsArr = [
  // "--primary-color",
  // "--primary-color-second",
  "--secondary-color",
  "--secondary-color-offset",
  "--secondary-color-secondary-light",
  "--secondary-color-secondary-dark",
  "--secondary-color-secondary-extra-dark",
  "--secondary-color-secondary-double-extra-dark",
  "--text-color-primary",
  "--text-color-primary-offset",
  "--text-color-secondary",
];
