import React, { useEffect, useState } from "react";
import "./TitleBar.css";

function TitleBar({
  onClickHello,
  onClickAbout,
  onClickProjects,
  onClickResume,
}) {
  return (
    <div className="title_bar">
      <div className="title_container">
        <div className="title_name">Sanju Mahto</div>
        <div className="title_page">
          <button className="title_button" onClick={onClickHello}>_hello</button>
          <button className="title_button" onClick={onClickAbout}>_about</button>
          <button className="title_button" onClick={onClickProjects}>_projects</button>
          <button className="title_button" onClick={onClickResume}>_resume</button>
        </div>
        <div className="contact_me">contact_me</div>
      </div>
    </div>
  );
}

export default TitleBar;
