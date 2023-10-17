import React from "react";
import "./EngineLogo.css";
import unity_image from "./res/linkined.png";
import unreal_image from "./res/linkined.png";
import cocos_image from "./res/linkined.png";
export default function EngineLogo() {
  return <div className="engine-logo-main">
    <img className="engine-logo" src={unity_image}></img>
    <img className="engine-logo" src={unity_image}></img>
    <img className="engine-logo" src={unity_image}></img>
  </div>;
}
