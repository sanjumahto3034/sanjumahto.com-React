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
          <img
            className="Resume-profile-picture"
            src={profile_picture}
            alt="ProfilePicture.png"
            data-aos-delay="200"
            data-aos="fade-up"
            data-aos-duration="0"
          ></img>
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
              {calculateMonthsDifference("2022-06-25")} of experience in the
              Game Development, and {calculateMonthsDifference("2020-01-01")}{" "}
              personal experience in Unity 3D
            </div>
          </div>
        </div>

        <div className="Resume-div-divideLine"></div>

        <div className="Resume-div-second-container-main">
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
                  +91 63760 21481
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
                  sanjumahto.site
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
              Education
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
              Interest
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
              Skills
              <div className="Resume-div-details-title">Fast Learner</div>
              <div className="Resume-div-details-description">Intermediate</div>
              <div className="Resume-div-details-title">Problem Solving</div>
              <div className="Resume-div-details-description">Intermediate</div>
              <div className="Resume-div-details-title">Code Analysis</div>
              <div className="Resume-div-details-description">Intermediate</div>
            </div>
          </div>

          {/* <div className="Resume-div-second-container-2"></div> */}

          <div className="Resume-div-second-container-3">
            <div
              className="Resume-div-second-container-title"
              data-aos-delay="200"
              data-aos="fade-up"
              data-aos-duration="0"
            >
              Languages
              <div className="Resume-div-details-title">JS/TS</div>
              <div className="Resume-div-details-description">Intermediate</div>
              <div className="Resume-div-details-title">C#</div>
              <div className="Resume-div-details-description">Intermediate</div>
              <div className="Resume-div-details-title">C++</div>
              <div className="Resume-div-details-description">Beginner</div>
              <div className="Resume-div-details-title">
                JavaScript/TypeScript
              </div>
              <div className="Resume-div-details-description">Intermediate</div>
            </div>

            <div
              className="Resume-div-second-container-title"
              data-aos-delay="200"
              data-aos="fade-up"
              data-aos-duration="0"
            >
              Game Engine
              <div className="Resume-div-details-title">Unity 3D</div>
              <div className="Resume-div-details-description">Intermediate</div>
              <div className="Resume-div-details-title">Unreal Engine</div>
              <div className="Resume-div-details-description">Beginner</div>
              <div className="Resume-div-details-title">Cocos Creator</div>
              <div className="Resume-div-details-description">Intermediate</div>
              <div className="Resume-div-details-title">CocosX2D</div>
              <div className="Resume-div-details-description">Intermediate</div>
            </div>

            <div
              className="Resume-div-second-container-title"
              data-aos-delay="200"
              data-aos="fade-up"
              data-aos-duration="0"
            >
              Work Experience
              <div className="Resume-div-work-experience-content">
                <div className="Resume-div-dot"></div>
                <div>
                  <div className="Resume-div-details-title">
                    Internship Training In Core Java from Cad Desk
                  </div>
                  <div className="Resume-div-details-date">
                    December-2020 To Jan-2021(2-Months)
                  </div>
                  <div className="Resume-div-details-description">
                    Industrial training in Core Java from Cade Desk
                  </div>
                </div>
              </div>
              <div className="Resume-div-work-experience-content">
                <div className="Resume-div-dot"></div>
                <div>
                  <div className="Resume-div-details-title">
                    IT-Engineer At "Aforeserver Pvt. Ltd.
                  </div>
                  <div className="Resume-div-details-date">
                    October-2021 To June-2022
                  </div>
                  <div className="Resume-div-details-description">
                    Become a Software and Hardware troubleshooter, at a small
                    Startup in Anywhere in IT industry, I 'm at a post of
                    RE-Engineer
                  </div>
                </div>
              </div>
              <div className="Resume-div-work-experience-content">
                <div className="Resume-div-dot"></div>
                <div>
                  <div className="Resume-div-details-title">
                    Game Programmer At "Assert Infotech"
                  </div>
                  <div className="Resume-div-details-date">
                    July-2022 To June-2023
                  </div>
                  <div className="Resume-div-details-description">
                    Become a Elementary Programmer at a Assert Infotech Hours in
                    Anywhere, I am using here Unity and Cocos engine to create
                    Mobile, IOS, and Web Games.
                  </div>
                </div>
              </div>
              <div className="Resume-div-work-experience-content">
                <div className="Resume-div-dot"></div>
                <div>
                  <div className="Resume-div-details-title">
                    Game Developer At "EmizenTech Pvt. Ltd."
                  </div>
                  <div className="Resume-div-details-date">
                    June-2023 To Present
                  </div>
                  <div className="Resume-div-details-description">
                    Become a Senior Game Developer, Designer & Programmer, I am
                    using here Unity3D engine to create Mobile, IOS, and Web
                    Games.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function calculateMonthsDifference(startDate) {
  const currentDate = new Date();
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
