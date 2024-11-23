import React from "react";
import "../Modules/PageNotFound.css";
function PageNotFound() {
  return (
    <div className="page_not_found">
      <div className="page_not_found_text">
        4<span style={{ color: "#E30022" }}>0</span>4
      </div>
      <div className="page_not_found_sorry_there">Sorry, There's</div>
      <div className="page_not_found_nothing_here">Nothing Here</div>
      <div className="page_not_found_go_home_btn">GO HOME</div>
    </div>
  );
}
export default PageNotFound;
