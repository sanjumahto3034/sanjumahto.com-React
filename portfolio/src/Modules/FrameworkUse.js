import React, { useEffect, useState } from "react";
import "./FrameworkUse.css";
import unity_engine_image from "../res/unity_engine_image.png";
import unreal_engine_image from "../res/unreal_engine_image.png";
import cocos_engine_image from "../res/cocos_creator_image.png";
function FrameworkUse() {
  var text =
    "Lorem Ipsum is simply dummy text of the printing and typesetting " +
    "industry. Lorem Ipsum has been the industry's standard dummy text ever " +
    "scrambled it to make a type specimen book. It has survived not only five " +
    "of Lorem Ipsum.";

  const text_unity =
    "Unleash your creativity with Unity! Craft stunning 2D, 3D, VR, and AR experiences – beginner-friendly yet powerful. Visual scripting streamlines coding, while a massive asset store fuels your vision. Publish across PC, mobile, consoles, and VR, reaching audiences everywhere. Free to start, with paid plans for extra power. Unity: your gateway to interactive worlds.";

  const text_unreal =
    "Unreal Engine brings cinematic visuals and cutting-edge tech to your fingertips. Create stunning games, interactive experiences, and even film with its powerful suite of tools. Enjoy photorealistic rendering, robust physics, and a vast learning ecosystem. Embrace professional-grade features, free for individuals and startups.";

  const text_cocos_2dx =
    "Mature 2D engine perfect for mobile games. Code-based, offering high customizability and low resource usage. Choose it for focused 2D development, especially with existing C++ knowledge.";
  const text_cocos_creator =
    "Modern, all-in-one engine for 2D & 3D projects. Visual scripting, real-time editing, and cross-platform publishing make it beginner-friendly and versatile. Consider it for games, XR, and more.";
  const frameworksData = [
    {
      icon: unity_engine_image,
      name: "Unity 3D",
      language: "C#",
      description: text_unity,
    },
    {
      icon: unreal_engine_image,
      name: "Unreal Engine",
      language: "C++",
      description: text_unreal,
    },
    {
      icon: cocos_engine_image,
      name: "Cocos 2d",
      language: "JS, TS, C++",
      description: text_cocos_2dx,
    },
    {
      icon: cocos_engine_image,
      name: "Cocos Creator",
      language: "JS, TS, C++",
      description: text_cocos_creator,
    },
  ];

  return (
    <div className="framework_container">
      {frameworksData.map((framework, index) => (
        <div key={index} className="framework_parent">
          <img
            src={framework.icon}
            alt={framework.icon}
            className="framework_icon"
          ></img>
          <div className="framework_name">{framework.name}</div>
          <div className="framework_language">
            Language Support : {framework.language}
          </div>
          <div className="framework_description">{framework.description}</div>
        </div>
      ))}
    </div>
  );
}

export default FrameworkUse;
