import React from 'react';
import './Header.css';


function Header() {
//   alert("Called Header div");

  return (
    <div className="Header-background">
      <div className="title-background">
        <div className="title-div-start"> 
            <div className="logo-text1">b</div>
            <div className="logo-dot"></div>
            <div className="logo-text2">studio</div>
        </div>
        <div className="title-div-middle">
            <div className="title-div-middle-text"><div>HOME</div><div className="red-underline"></div></div>
            <div className="logo-dot-custom"></div>
            <div className="title-div-middle-text"><div>ABOUT</div><div className="red-underline"></div></div>
            <div className="logo-dot-custom"></div>
            <div className="title-div-middle-text"><div>PORTFOLIO</div><div className="red-underline"></div></div>
        </div>
        <div className="title-div-end">
            <div className="title-get-in-touch-button">GET IN TOUCH</div>
        </div>
      </div>
    </div>



  );
}




export default Header;
