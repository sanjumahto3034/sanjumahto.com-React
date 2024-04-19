import React, { useEffect, useRef, useState } from "react";
import "./Projects.css";
import game_image from "../res/horizon_wallpaper.jpg";
import game_image_2 from "../res/game_page.jpg";
import download_icon from "../res/download.png";

import agec_game_icon from "../res/agec.jpg";
import poker_game_icon from "../res/poker.jpg";
import dating_app_game_icon from "../res/doraemon.jpg";
import interior_design_game_icon from "../res/interiorDesign.jpg";
import project_escape_game_icon from "../res/horizon_wallpaper.jpg";
import ludo_game_icon from "../res/ludo_game.jpg";

import AOS from "aos";
import "aos/dist/aos.css";

function Projects() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="projects_parent">
      {data.map((value, index) => (
        <ProjectContent
          content_align={
            index % 2 == 0 ? CONTENT_ALIGN.LEFT : CONTENT_ALIGN.RIGHT
          }
          key={index}
          project_title={value.project_title}
          project_description={value.project_description}
          project_image={value.project_image}
          project_video={value.project_video}
          project_key_points={value.project_key_point}
          language_use={value.language_use}
        ></ProjectContent>
      ))}
    </div>
  );
}

const CONTENT_ALIGN = { LEFT: "start", RIGHT: "end" };
function ProjectContent({
  project_title,
  project_description,
  project_image,
  project_video,
  project_key_points,
  content_align,
  project_source,
  language_use,
}) {
  const project_content_data_ref = useRef();
  const projects_content_ref = useRef();

  useEffect(() => {
    if (window.innerWidth < 1500) {
      return;
    }
    var descriptionHeight = project_content_data_ref.current.offsetHeight - 55;

    const contentDataElement = project_content_data_ref.current;
    contentDataElement.style.transform = `translateY(${descriptionHeight}px)`;

    const projectsContentDiv = projects_content_ref.current;

    contentDataElement.style.transform = `translateY(${descriptionHeight}px)`;

    projectsContentDiv.addEventListener("mouseenter", () => {
      contentDataElement.style.transform = "translateY(0px)";
    });
    projectsContentDiv.addEventListener("mouseleave", () => {
      contentDataElement.style.transform = `translateY(${descriptionHeight}px)`;
    });
  }, []);
  return (
    <div
      className="projects_structure"
      style={{ justifyContent: content_align }}
      data-aos-delay="100"
      data-aos="fade-up"
      data-aos-duration="500"
    >
      <div className="projects_content" ref={projects_content_ref}>
        <div
          className="project_image"
          style={{ backgroundImage: `url(${project_image})` }}
        >
          <div className="project_black_layer">
            <div
              className="project_content_data"
              ref={project_content_data_ref}
            >
              <div className="project_title">{project_title}</div>
              <div className="project_description">{project_description}</div>
              {project_source && (
                <div className="project_download_button">
                  Download{" "}
                  <img
                    src={download_icon}
                    alt="download_icon"
                    className="project_download_button_icon"
                  ></img>
                </div>
              )}
              <div className="project_language_use">
                {language_use.map((value, index) => (
                  <div className="project_language_use_div" key={index}>
                    {value}
                  </div>
                ))}
              </div>
              <div className="project_key_point">
                {project_key_points.map((value, index) => (
                  <div className="project_key_point_div" key={index}>
                    {value}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Projects;
const poker_app = {
  project_title: "Poker Card Game",
  project_description:
    "The Ultimate Card-Based Experience is a thrilling game that combines skill, strategy, and luck. Challenge your opponents in fast-paced rounds of this classic card game. With a winning prize system, Poker rewards your expertise with enticing payouts. Sharpen your tactics, and may the best hand win!",
  project_image: poker_game_icon,
  project_video: null,
  project_source: null,
  project_key_point: [
    "Game Mechanics",
    "UI/UX Design",
    "Algorithm Optimization",
    "Monetization Strategy",
    "Networking",
  ],
  language_use: ["C++", "JAVA", "SWIFT"],
};
const dating_app = {
  project_title: "Dating App",
  project_description:
    "The Dating App offers a modern approach to finding meaningful connections. With an intuitive interface and advanced matchmaking algorithms, users can easily discover potential matches based on shared interests and values. Prioritizing user safety, the app ensures a secure and enjoyable dating experience",
  project_image: dating_app_game_icon,
  project_video: null,
  project_source: null,
  project_key_point: [
    "User Privacy",
    "UI/UX Design",
    "Matchmaking Algorithms",
    "In-App Engagement",
    "Data Analytics",
  ],
  language_use: ["C++", "JAVA", "SWIFT"],
};

const agec_game = {
  project_title: "Business Model Game",
  project_description:
    "Business Model Game is a 2D top-down game that immerses players in the world of entrepreneurship. Learn the art of building successful startups by hiring the right team members, managing resources, and strategically marketing your products. Refine your decision-making skills and create a flourishing business empire",
  project_image: agec_game_icon,
  project_video: null,
  project_source: null,
  project_key_point: [
    "Strategic Hiring",
    "Resource Management",
    "Marketing Tactics",
    "Decision Making",
    "Business Strategy",
  ],
  language_use: ["JS/TS", "JAVA", "SWIFT"],
};
const ludo_game = {
  project_title: "Ludo Multiplayer",
  project_description:
    "Online Ludo Multiplayer brings the classic board game experience to the digital realm with real-time gameplay using WebSocket technology. Compete against friends or global players in engaging matches, enjoying seamless communication and dynamic interactions. The game offers a fresh twist on a beloved pastime with its modern online features.",
  project_image: ludo_game_icon,
  project_video: null,
  project_source: null,
  project_key_point: [
    "Real-Time Networking",
    "WebSocket Integration",
    "Game Synchronization",
    "UI/UX Design",
    "Matchmaking Algorithms",
  ],
  language_use: ["JS/TS", "C#"],
};
const interior_design_app = {
  project_title: "Interior Design App",
  project_description:
    "Interior Design App allows users to design and visualize their dream room. With server-side ray tracing rendering, users receive realistic images of their designs. The app includes an e-commerce section for purchasing items and provides a complete bill for products, paint, wallpaper, furniture, and more.",
  project_image: interior_design_game_icon,
  project_video: null,
  project_source: null,
  project_key_point: [
    "Ray Tracing Rendering",
    "E-commerce Integration",
    "Cost Estimation",
    "User Experience Design",
    "Project Management",
  ],
  language_use: ["C#", "JAVA", "SWIFT", "Python"],
};

const data = [poker_app, dating_app, agec_game, ludo_game, interior_design_app];
