import React from "react";
// import "./DemoPage.css";

function DemoPage(){
    
    return(
        <button onClick={demoBtnClick}>ClickMe</button>
    );
}

function demoBtnClick(){
    console.log("[ Called Btn From React Code ]");
}

export default DemoPage;