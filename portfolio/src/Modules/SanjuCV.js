import React from "react";
import "./SanjuCV.css";
import linkined_image from "../res/instagram.png";
import phone_image from "./res/Phone.png";
import email_image from "./res/email.png";
import web_image from "./res/web.png";

function SanjuCV() {
  return (
    <div className="sanju_cv_parent">
      <div className="sanju_cv_container">
        <SanjuCVTitle
          title={data.name}
          description={data.description}
          otherContactData={data.other_contact}
        ></SanjuCVTitle>
        <DrawLine></DrawLine>
        <ProfessionalExperience
          companyDetails={data.professional_experience}
        ></ProfessionalExperience>
        <ProjectsMake projectWorked={data.projects_created}></ProjectsMake>
        <Certificates certificates={data.certificates}></Certificates>
        <Skills sanju_skills={data.skills}></Skills>
        <Languages
          programming_languages={data.programming_languages}
        ></Languages>
        {/* <Interest projectWorked={data.projects_created}></Interest> */}
      </div>
    </div>
  );
}

function ProfessionalExperience({ companyDetails }) {
  return (
    <div className="sanju_cv_data_div_parent">
      <div className="sanju_cv_data_div">Professional Experience</div>
      {companyDetails.map((value, index) => (
        <div
          className="sanju_cv_professional_experience_company_details"
          key={index}
        >
          <div className="sanju_cv_professional_experience_company_name">
            {value.company_name}
          </div>
          <div className="sanju_cv_professional_experience_company_location">
            <b>Location - </b>
            {value.company_location}
          </div>
          <div className="sanju_cv_professional_experience_company_designation">
            <b>Designation - </b>
            {value.company_designation}
          </div>
          <div className="sanju_cv_professional_experience_company_duration">
            <b>Duration - </b>
            {value.company_duration}
          </div>
          <div className="sanju_cv_professional_experience_company_key_points">
            {value.company_key_points.map((__value, __index) => (
              <div key={__index}>• {__value}</div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function ProjectsMake({ projectWorked }) {
  return (
    <div className="sanju_cv_data_div_parent">
      <div className="sanju_cv_data_div">Projects</div>
      {projectWorked.map((value, index) => (
        <div key={index} className="sanju_cv_project_worked_div">
          <b className="sanju_cv_project_worked_div_title">
            {"• "} {value.title}
          </b>
          {" - "}
          <span className="sanju_cv_project_worked_div_description">
            {value.description}
          </span>
        </div>
      ))}
    </div>
  );
}

function Certificates({ certificates }) {
  return (
    <div className="sanju_cv_data_div_parent">
      <div className="sanju_cv_data_div">Certificates</div>
      {certificates.map((value, index) => (
        <div key={index} className="sanju_cv_project_worked_div">
          <b className="sanju_cv_project_worked_div_title">• {value.title}</b>
          {" - "}
          <span className="sanju_cv_project_worked_div_description">
            {value.description}
          </span>
        </div>
      ))}
    </div>
  );
}

function Skills({ sanju_skills }) {
  return (
    <div className="sanju_cv_data_div_parent">
      <div className="sanju_cv_data_div">Skills</div>
      {sanju_skills.map((value, index) => (
        <div key={index} className="sanju_cv_project_worked_div">
          <span className="sanju_cv_project_worked_div_description">
            • {value}
          </span>
        </div>
      ))}
    </div>
  );
}
function Languages({ programming_languages }) {
  return (
    <div className="sanju_cv_data_div_parent">
      <div className="sanju_cv_data_div">Programming Languages</div>
      {programming_languages.map((value, index) => (
        <div key={index} className="sanju_cv_project_worked_div">
          <span className="sanju_cv_project_worked_div_description">
            • {value}
          </span>
        </div>
      ))}
    </div>
  );
}

function Interest({ projectWorked }) {
  return (
    <div className="sanju_cv_data_div_parent">
      <div className="sanju_cv_data_div">Projects</div>
      {projectWorked.map((value, index) => (
        <div key={index} className="sanju_cv_project_worked_div">
          <b className="sanju_cv_project_worked_div_title">• {value.title}</b>
          {" - "}
          <span className="sanju_cv_project_worked_div_description">
            {value.description}
          </span>
        </div>
      ))}
    </div>
  );
}

function DrawLine() {
  return <div className="sanju_cv_draw_line"></div>;
}
function SanjuCVTitle({ title, description, otherContactData }) {
  return (
    <div className="sanju_cv_title_parent">
      <div className="sanju_cv_name_description">
        <div className="sanju_cv_title">{title}</div>
        <div className="sanju_cv_description">{description}</div>
      </div>
      <div className="sanju_cv_other_contact_div">
        {otherContactData.map((value, index) => (
          <div className="sanju_cv_other_content_parent" key={index}>
            <img
              className="sanju_cv_other_content_icon"
              src={value.image}
              alt="value_image"
            ></img>
            <div className="sanju_cv_other_content_value">{value.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SanjuCV;

const data = {
  name: "Sanju Mahto",
  description:
    "I am an experienced game developer with expertise in Unity 3D and augmented reality (AR) development. With over 3 years of professional development experience and 5 years of self-learning Unity Engine, I specialize in creating immersive gaming and AR experiences. My passion for games based on jungle or old culture themes inspires my innovative and creative approach to projects.",
  other_contact: [
    {
      image: phone_image,
      value: "+91 6376 0214 81",
      actionOnClick: () => {},
    },
    {
      image: email_image,
      value: "sanjumahto3034@gmail.com",
      actionOnClick: () => {},
    },
    {
      image: web_image,
      value: "sanjumahto3034",
      actionOnClick: () => {},
    },
    {
      image: web_image,
      value: "@sanjumahto3034",
      actionOnClick: () => {},
    },
    {
      image: web_image,
      value: "https://sanjudev.site",
      actionOnClick: () => {},
    },
  ],
  professional_experience: [
    {
      company_name: "Emizen Tech Pvt. Ltd. ",
      company_designation: "Senior Game Developer",
      company_duration: "June 2023 - Present",
      company_location: "Jaipur, Rajasthan",
      company_key_points: [
        "Lead the development of AR and Unity-based projects, including interior design apps, AR face filter apps, and AR shopping experiences.",
        "Developed and implemented game mechanics for Ludo games, puzzle games, and other engaging game projects.",
        "Collaborated with cross-functional teams to create innovative gaming experiences and improve existing projects.",
      ],
    },
    {
      company_name: "Assert Infotech",
      company_designation: "Senior Game Developer",
      company_duration: "July 2022 - June 2023",
      company_location: "Jaipur, Rajasthan",
      company_key_points: [
        "Worked on various projects, including Ludo games, poker games, dating apps, and simulation games.",
        "Designed and developed engaging game mechanics and features to improve user experience.",
      ],
    },
    {
      company_name: "Aforeserve Pvt.",
      company_designation: "Windows Admin & Hardware Support",
      company_duration: "October 2021 - June 2022",
      company_location: "Jaipur, Rajasthan",
      company_key_points: [
        "Lead the development of AR and Unity-based projects, including interior design apps, AR face filter apps, and AR shopping experiences.",
        "Developed and implemented game mechanics for Ludo games, puzzle games, and other engaging game projects.",
        "Collaborated with cross-functional teams to create innovative gaming experiences and improve existing projects.",
      ],
    },
  ],
  projects_created: [
    {
      title: "AR App: Interior Design",
      description:
        "Created an app that allows users to visualize interior designs using AR technology.",
    },
    {
      title: "Poker Game",
      description:
        "Developed a poker game with engaging gameplay and user-friendly interface.",
    },
    {
      title: "Open World Game",
      description:
        "Worked on an open-world game project with expansive environments and dynamic gameplay.",
    },
    {
      title: "Simulation Games (2D)",
      description:
        "Designed and developed 2D simulation games with complex mechanics and entertaining experiences.",
    },
    {
      title: "Ludo Online Games",
      description:
        "Built Ludo games with online multiplayer functionality and smooth gameplay.",
    },
    {
      title: "Words Matching Game",
      description:
        "Developed a word matching game with challenging puzzles and engaging levels.",
    },
    {
      title: "Flip The Card Game - Card Matching Game",
      description:
        "Created a card matching game with various difficulty levels and exciting gameplay.",
    },
    {
      title: "AR Face Filter App",
      description:
        "Designed an AR face filter app with various fun and creative filters.",
    },
    {
      title: "AR Meta Room",
      description:
        "Created an AR app that allows users to see their rooms in a virtual world.",
    },
    {
      title: "AR Shopping",
      description:
        "Developed an AR shopping app that enables users to visit stores in a virtual world.",
    },
  ],
  certificates: [
    {
      title: "RS-CIT",
      description: "Basic Computer Certificate",
    },
    {
      title: "Core Java",
      description: "From Cad Desk Institute",
    },
  ],
  skills: [
    "Game development using Unity 3D",
    "AR app development",
    "Simulation and strategy game design",
    "User experience and interface design",
    "Team collaboration and project management",
  ],
  programming_languages: ["C#", "JAVA", "JS/TS"],
};
