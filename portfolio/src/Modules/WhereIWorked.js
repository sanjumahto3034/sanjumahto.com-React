import React, { useEffect, useState } from "react";
import "./WhereIWorked.css";

function WhereIWorked() {
  return (
    <div className="where_i_worked">
      <WorkExperience></WorkExperience>
    </div>
  );
}

const WorkExperience = () => {
  const [selectedCompanyIndex, setSelectedCompanyIndex] = useState(2); // Default index for Emizen Tech Pvt. Ltd.

  const handleButtonClick = (index) => {
    const descriptionElement = document.querySelector(".where_i_worked_left");
    if (descriptionElement) {
      descriptionElement.classList.add("fade-out");
      setTimeout(() => {
        descriptionElement.classList.remove("fade-out");
        setSelectedCompanyIndex(index);
      }, 250);
    }
  };

  return (
    <div className="where_i_worked">
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
                {company.companyName}
              </div>
              <div className="where_i_work_company_duration">
                {company.companyStartDate} To{" "}
                {company.companyEndDate || "Currently Working"}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="where_i_worked_left">
        <div className="where_i_worked_left_company_name">
          {data[selectedCompanyIndex].companyName}
        </div>
        <div className="where_i_worked_left_company_duration">
          {data[selectedCompanyIndex].companyEndDate
            ? data[selectedCompanyIndex].companyStartDate +
              " To " +
              data[selectedCompanyIndex].companyEndDate
            : data[selectedCompanyIndex].companyStartDate +
              " (Currently Working)"}
        </div>
        <div className="where_i_worked_left_company_duration_in_year">
          {/* Calculate and display duration in months or years */}
          {/* You can implement a function to calculate the duration */}
        </div>
        <div className="where_i_worked_left_company_duration_in_description">
          {data[selectedCompanyIndex].companyDescription}
        </div>
      </div>
    </div>
  );
};

export default WhereIWorked;
var data = [
  {
    companyName: "Aforeserver Pvt. Ltd.",
    companyStartDate: "15-Sept-2021",
    companyEndDate: "19-June-2022",
    companyDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting " +
      "industry. Lorem Ipsum has been the industry's standard dummy text ever " +
      "since the 1500s, when an unknown printer took a galley of type and " +
      "scrambled it to make a type specimen book. It has survived not only five " +
      "centuries, but also the leap into electronic typesetting, remaining " +
      "essentially unchanged. It was popularised in the 1960s with the release " +
      "of Letraset sheets containing Lorem Ipsum passages, and more recently " +
      "with desktop publishing software like Aldus PageMaker including versions " +
      "of Lorem Ipsum.",
  },
  {
    companyName: "Assert Infotech",
    companyStartDate: "26-July-2022",
    companyEndDate: "3-June-2023",
    companyDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting " +
      "industry. Lorem Ipsum has been the industry's standard dummy text ever " +
      "since the 1500s, when an unknown printer took a galley of type and " +
      "scrambled it to make a type specimen book. It has survived not only five " +
      "centuries, but also the leap into electronic typesetting, remaining " +
      "essentially unchanged. It was popularised in the 1960s with the release " +
      "of Letraset sheets containing Lorem Ipsum passages, and more recently " +
      "with desktop publishing software like Aldus PageMaker including versions " +
      "of Lorem Ipsum.",
  },
  {
    companyName: "Emizen Tech Pvt. Ltd.",
    companyStartDate: "5-June-2023",
    companyEndDate: "",
    companyDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting " +
      "industry. Lorem Ipsum has been the industry's standard dummy text ever " +
      "since the 1500s, when an unknown printer took a galley of type and " +
      "scrambled it to make a type specimen book. It has survived not only five " +
      "centuries, but also the leap into electronic typesetting, remaining " +
      "essentially unchanged. It was popularised in the 1960s with the release " +
      "of Letraset sheets containing Lorem Ipsum passages, and more recently " +
      "with desktop publishing software like Aldus PageMaker including versions " +
      "of Lorem Ipsum.",
  },
];
