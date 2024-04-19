import React from "react";
import "./Profile.css"; // Import the CSS file

function Profile() {
  return (
    <div className="profile_parent">
      <div className="profile_title">Hello, I'm Sanju Mahto</div>
      <div className="profile_description">
        I'm a dedicated Senior Unity AR and Unity Game Developer at Emizen Tech
        Pvt. Ltd., where I contribute to innovative projects with over 2 years
        of professional experience. My passion for game development spans more
        than 4 years of personal projects, honing my skills in Unity and AR/VR
        technologies.
      </div>
      <div className="profile_other_hobby">
        Beyond game development, I'm always expanding my skill set. I've
        explored React.js, Node.js, and MongoDB, utilizing these technologies
        for various projects and enhancing my understanding of full-stack
        development. My commitment to continuous learning keeps me at the
        forefront of emerging trends and technologies in the industry.
      </div>
    </div>
  );
}

export default Profile;
