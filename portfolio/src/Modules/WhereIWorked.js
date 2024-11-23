import React, { useEffect, useState } from "react";
import "./WhereIWorked.css";
import AOS from "aos";
import "aos/dist/aos.css";
function WhereIWorked() {
  return (
    <div className="where_i_worked">
      {/* <WorkExperience_old></WorkExperience_old> */}
      <WorkExperience_new></WorkExperience_new>
    </div>
  );
}

const WorkExperience_new = () => {
  return (
    <div className="work_exp_new_body">
      <div className="work_exp_header_container">
        <div className="work_exp_header">Where I’ve Worked</div>
        <div className="work_exp_header_line"></div>
      </div>
    </div>
  );
};

const WorkExperience_old = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const [selectedCompanyIndex, setSelectedCompanyIndex] = useState(2); // Default index for Emizen Tech Pvt. Ltd.

  const handleButtonClick = (index) => {
    setSelectedCompanyIndex(index);
  };

  return (
    <div
      className="where_i_worked"
      data-aos-delay="0"
      data-aos="fade-up"
      data-aos-duration="500"
    >
      <div className="where_i_worked_right">
        <div className="where_i_worked_right_buttons_parent">
          {data.map((company, index) => (
            <div
              key={index}
              className={`where_i_worked_right_button ${
                index === selectedCompanyIndex ? "selected" : ""
              }`}
              onClick={() => handleButtonClick(index)}
            >
              <div className="where_i_work_company_name">
                {company.companyName.split("").map((char, index) => (
                  <span key={index} className="char_name">
                    {char}
                  </span>
                ))}
              </div>
              <div className="where_i_work_company_duration">
                {company.companyStartDate.split("").map((char, index) => (
                  <span key={index} className="char_name">
                    {char}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        className="where_i_worked_left"
        data-aos-delay="0"
        data-aos="fade-right"
        data-aos-duration="500"
      >
        <div className="where_i_worked_left_childs">
          <div className="where_i_worked_left_company_name">
            {data[selectedCompanyIndex].companyName
              .split("")
              .map((char, index) => (
                <span key={index} className="char_name">
                  {char}
                </span>
              ))}
          </div>
          <div className="where_i_worked_left_company_duration">
            {data[selectedCompanyIndex].companyStartDate
              .split("")
              .map((char, index) => (
                <span key={index} className="char_name">
                  {char}
                </span>
              ))}
          </div>

          <div className="where_i_worked_left_company_duration_in_description">
            {data[selectedCompanyIndex].companyDescription
              .split("")
              .map((char, index) => (
                <span key={index} className="char_name">
                  {char}
                </span>
              ))}
          </div>
        </div>
        {/* Key Skills */}
        <div className="key_work_parent">
          {data[selectedCompanyIndex].keyWork.map((work, index) => (
            <div className="key_work_data" key={index}>
              {" "}
              {work}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhereIWorked;
var data = [
  {
    companyName: "Sag Infotech",
    companyStartDate: "10-July-2021 To 15-Aug-2021",
    companyEndDate: "15-Aug-2021",
    keyWork: ["Marketing", "Troubleshooting", "Customer Support"],
    companyDescription:
      "Teleperformance bridges the gap between brands and customers, weaving a global " +
      "network of customer experience experts. Leveraging technology and empathy, they " +
      "deliver support across languages and cultures, leaving lasting impressions in " +
      "a world of connections.",
  },
  {
    companyName: "Aforeserver Pvt. Ltd.",
    companyStartDate: "15-Sept-2021 To 19-June-2022",
    companyEndDate: "19-June-2022",
    keyWork: [
      "Linux/Windows Admin",
      "Network",
      "Anti-Virus",
      "Hardware",
      "Software",
      "Troubleshooting",
    ],
    companyDescription:
      "Aforeserve is an IT service company providing AI and automation solutions " +
      "to enterprises. Founded in 2000, they boast over 800 clients and offer a variety " +
      "of services including high-end repair, resourcing, IT infrastructure, cloud computing, " +
      "cyber security, and project management. Their team is comprised of over 4000 engineers, making them a formidable force in the IT industry.",
  },
  {
    companyName: "Assert Infotech",
    companyStartDate: "26-July-2022 To 3-June-2023",
    companyEndDate: "3-June-2023",
    keyWork: [
      "JS",
      "TS",
      "C++",
      "Cocos 2d-x",
      "Cocos Creator",
      "Android Studio",
    ],
    companyDescription:
      "Assert Infotech breathes life into captivating games for PC, consoles, and mobile. " +
      "Their expert team blends technical magic (JS, TS, C++, etc.) with creative fire to " +
      "transform your vision into unforgettable gaming experiences. From thrilling adventures " +
      "to casual delights, they craft diverse worlds tailored to every preference. " +
      "Dive into a partnership built on transparency, trust, and shared success." +
      "Let Assert Infotech guide your game from concept to captivating reality. ",
  },
  {
    companyName: "Emizen Tech Pvt. Ltd.",
    companyStartDate: "5-June-2023 - Working",
    companyEndDate: "",
    keyWork: ["C#", "JAVA", "Unity 3D", "Unity Ar", "Android Studio"],
    companyDescription:
      "Emizentech is widely known for implementing the best industrial" +
      "processes and technologies to assist clients in transforming their vision" +
      "into actionable software solutions and a successful business model.",
  },
];
