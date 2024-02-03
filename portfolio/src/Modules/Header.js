import React, { useEffect, useState } from "react";
import "./Header.css";

function Header() {
  var name = "Sanju Mahto";
  var characters = name.split("");

  return (
    <div className="header_main">
      <div className="site_name">
        {characters.map((char, index) => (
          <span key={index} className="char_name">
            {char}
          </span>
        ))}
      </div>

      <div className="site_route_buttons">
        <div className="route_button">HOME</div>
        <div className="route_button">About Me</div>
        <div className="route_button">Resume</div>
        <div className="route_button">Contact Me</div>
      </div>
    </div>
  );
}

export default Header;
