import React, { useEffect, useState } from "react";
import "./Projects.css";
import { game_image } from "../res/horizon_wallpaper.jpg";
import { download_icon } from "../res/download.png";
import AOS from "aos";
import "aos/dist/aos.css";
const temp_Data = {
  project_title: "Horizon Forbidden West",
  project_description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  project_image: game_image,
  project_video: null,
  project_key_point: [
    "Unreal Engine",
    "C++",
    "Ray Tracing",
    "Environment Design",
  ],
};
const data = [temp_Data, temp_Data, temp_Data, temp_Data, temp_Data];
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
          project_title={value["project_title"]}
          project_description={value["project_description"]}
          project_image={value["project_image"]}
          project_video={value["project_video"]}
          project_key_points={value["project_key_point"]}
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
}) {
  return (
    <div
      className="projects_structure"
      style={{ justifyContent: content_align }}
      data-aos-delay="100"
      data-aos="fade-up"
      data-aos-duration="500"
    >
      <div className="projects_content">
        <div className="project_image">
          <div className="project_black_layer">
            <div className="project_content_data">
              <div
                className="project_title"
                data-aos-delay="300"
                data-aos="fade-up"
                data-aos-duration="500"
              >
                {project_title}
              </div>
              <div className="project_description">{project_description}</div>
              <div className="project_project_links">Download</div>

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
