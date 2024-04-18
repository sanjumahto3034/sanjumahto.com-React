import React, { useEffect } from "react";
import "./Resume.css";
import profile_picture from "./res/profile_picture.png";
import phone_image from "./res/Phone.png";
import email_image from "./res/email.png";
import web_image from "./res/web.png";
import AOS from "aos";
import "aos/dist/aos.css";

function Resume() {
  useEffect(() => {}, []);

  return (
    <div className="Resume-div-main-parent">
      <div
        className="Resume-div-main"
        data-aos-delay="200"
        data-aos="fade-in"
        data-aos-duration="0"
      >
        <div className="Resume-title-div">
          <ResumeTitle></ResumeTitle>
        </div>
        <div className="Resume-div-divideLine"></div>
        <div className="Resume-div-second-container-main">
          <ResumeLeftDiv></ResumeLeftDiv>
          <ResumeRightDiv></ResumeRightDiv>
        </div>
      </div>
    </div>
  );
}

function ResumeTitle() {
  return (
    <div className="Resume-profile-Description-main">
      <div
        className="Resume-Description-Name"
        data-aos-delay="200"
        data-aos="fade-up"
        data-aos-duration="0"
      >
        Sanju Mahto
      </div>
      <div
        className="Resume-Description-Post"
        data-aos-delay="200"
        data-aos="fade-up"
        data-aos-duration="0"
      >
        Front-End Game Programmer
      </div>
      <div
        className="Resume-Description-About"
        data-aos-delay="200"
        data-aos="fade-up"
        data-aos-duration="0"
      >
        Hello, I'm Sanju. I'm a Game developer expert with{" "}
        {calculateMonthsDifference("2021-07-15")} of experience in the Game
        Development, and {calculateMonthsDifference(new Date().getDate)}{" "}
        personal experience in Unity 3D
      </div>
    </div>
  );
}
function ResumeLeftDiv() {
  return (
    <div className="Resume-div-second-container-1">
      {/* Contact Div Start */}
      <div
        className="Resume-div-second-container-title"
        data-aos-delay="200"
        data-aos="fade-up"
        data-aos-duration="0"
      >
        Contact Info
        <div className="Resume-div-second-container-1-contact-div-contact-info">
          <img
            className="Resume-div-second-container-1-contact-div-contact-info-icon"
            src={phone_image}
            alt="phone.png"
          ></img>
          <div className="Resume-div-second-container-1-contact-div-contact-info-detail">
            +91 6376021481
          </div>
        </div>
        <div className="Resume-div-second-container-1-contact-div-contact-info">
          <img
            className="Resume-div-second-container-1-contact-div-contact-info-icon"
            src={email_image}
            alt="email.png"
          ></img>
          <div className="Resume-div-second-container-1-contact-div-contact-info-detail">
            sanjumahto3034@gmail.com
          </div>
        </div>
        <div className="Resume-div-second-container-1-contact-div-contact-info">
          <img
            className="Resume-div-second-container-1-contact-div-contact-info-icon"
            src={web_image}
            alt="phone.png"
          ></img>
          <div className="Resume-div-second-container-1-contact-div-contact-info-detail">
            sanjudev.site
          </div>
        </div>
      </div>
      {/* Contact Div End */}

      <div
        className="Resume-div-second-container-title"
        data-aos-delay="200"
        data-aos="fade-up"
        data-aos-duration="0"
      >
        {"</education>"}
        <div className="Resume-div-details-title">10th</div>
        <div className="Resume-div-details-description">2005-2018</div>
        <div className="Resume-div-details-title">
          Deploma In Computer Science
        </div>
        <div className="Resume-div-details-description">2018-2021</div>
        <div className="Resume-div-details-title">
          B.Tech In Computer Science
        </div>
        <div className="Resume-div-details-description">
          2021-2024 (Present)
        </div>
      </div>

      <div
        className="Resume-div-second-container-title"
        data-aos-delay="200"
        data-aos="fade-up"
        data-aos-duration="0"
      >
        {"</Interest>"}
        <div className="Resume-div-details-title">Gaming Enthusiast</div>
        <div className="Resume-div-details-description"></div>
        <div className="Resume-div-details-title">
          Space Exploration Enthusiast
        </div>
        <div className="Resume-div-details-description"></div>
      </div>

      <div
        className="Resume-div-second-container-title"
        data-aos-delay="200"
        data-aos="fade-up"
        data-aos-duration="0"
      >
        {"</Skills>"}
        <div className="Resume-div-details-title">Fast Learner</div>
        <div className="Resume-div-details-description">Intermediate</div>
        <div className="Resume-div-details-title">Problem Solving</div>
        <div className="Resume-div-details-description">Intermediate</div>
        <div className="Resume-div-details-title">Code Analysis</div>
        <div className="Resume-div-details-description">Intermediate</div>
      </div>
    </div>
  );
}

function Languages({ title, data }) {
  return (
    <div
      className="Resume-div-second-container-title"
      data-aos-delay="200"
      data-aos="fade-up"
      data-aos-duration="0"
    >
      <div className="Resume-div-details-title-text">{title || "Title"}</div>
      {data &&
        data.map((value, index) => (
          <div key={index}>
            <div className="Resume-div-details-title">{value.key}</div>
            <div className="Resume-div-details-description">{value.value}</div>
          </div>
        ))}
    </div>
  );
}
function WorkExperience({ title, data }) {
  return (
    <div
      className="Resume-div-second-container-title"
      data-aos-delay="200"
      data-aos="fade-up"
      data-aos-duration="0"
    >
      <div className="Resume-div-details-title-text">{title || "Title"}</div>
      {data &&
        data.map((value, index) => (
          <div key={index}>
            <div className="Resume-div-work-experience-content">
              <div>
                <div className="Resume-div-details-title">{value.key}</div>
                <div className="Resume-div-details-date">{value.duration}</div>
                <div className="Resume-div-details-description">
                  {value.description}
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
function ResumeRightDiv() {
  return (
    <div className="Resume-div-second-container-3">
      <div
        className="Resume-div-second-container-title"
        data-aos-delay="200"
        data-aos="fade-up"
        data-aos-duration="0"
      ></div>

      <Languages title={"</languages>"} data={languages_data}></Languages>
      <Languages title={"</game_engine>"} data={engine_data}></Languages>
      <WorkExperience
        title={"</work_experience>"}
        data={work_experience_value}
      ></WorkExperience>
    </div>
  );
}
function TodaysDate() {
  // Create a new Date object
  const today = new Date();

  // Get the year, month, and day
  const year = today.getFullYear();
  const month = today.getMonth() + 1; // Months are zero-indexed, so add 1
  const day = today.getDate();

  // Format the date as YYYY-MM-DD
  console.log(`${year}-${month}-${day}`);
  return `${year}-${month}-${day}`;
}
function calculateMonthsDifference(startDate) {
  const currentDate = new Date();
  const start = new Date(startDate);

  const yearsDiff = currentDate.getFullYear() - start.getFullYear();
  const monthsDiff = currentDate.getMonth() - start.getMonth();

  var totalMonths = yearsDiff * 12 + monthsDiff;
  return totalMonths + " months+";
  var year = 0;
  if (totalMonths > 12) {
    while (totalMonths > 12) {
      year++;
      totalMonths -= 12;
    }
    return year + " yrs+";
  }

  return totalMonths + "months";
}
function calculateMonthsDifferenceOld(startDate, currentDate) {
  const start = new Date(startDate);

  const yearsDiff = currentDate.getFullYear() - start.getFullYear();
  const monthsDiff = currentDate.getMonth() - start.getMonth();

  var totalMonths = yearsDiff * 12 + monthsDiff;

  var year = 0;
  if (totalMonths > 12) {
    while (totalMonths > 12) {
      year++;
      totalMonths -= 12;
    }
    return year + " yrs+";
  }

  return totalMonths + "months";
}
export default Resume;

const languages_data = [
  {
    key: "JS/TS",
    value: "Intermediate",
  },
  {
    key: "C#",
    value: "Intermediate",
  },
  {
    key: "C++",
    value: "Beginner",
  },
  {
    key: "JAVA",
    value: "Beginner",
  },
];

const engine_data = [
  {
    key: "Unity 3D",
    value: "Intermediate",
  },
  {
    key: "Unreal Engine",
    value: "Intermediate",
  },
  {
    key: "Cocos Creator",
    value: "Beginner",
  },
  {
    key: "CocosX2D",
    value: "Beginner",
  },
];

const work_experience_value = [
  {
    key: "Internship Training In Core Java from Cad Desk",
    duration: "December-2020 To Jan-2021(2-Months)",
    description: "Industrial training in Core Java from Cade Desk",
  },
  {
    key: "IT-Engineer At 'Aforeserver Pvt. Ltd.'",
    duration: "October-2021 To June-2022",
    description:
      "Become a Software and Hardware troubleshooter, at a small Startup in Anywhere in IT industry, I 'm at a post of RE-Engineer",
  },
  {
    key: "Game Programmer At 'Assert Infotech'",
    duration: "July-2022 To June-2023",
    description:
      "Become a Elementary Programmer at a Assert Infotech Hours in Anywhere, I am using here Unity and Cocos engine to create Mobile, IOS, and Web Games.",
  },
  {
    key: "Game Developer At 'EmizenTech Pvt. Ltd.'",
    duration: "June-2023 To Present",
    description:
      "Become a Senior Game Developer, Designer & Programmer, I am using here Unity3D engine to create Mobile, IOS, and Web Games.",
  },
];
