import React from "react";
import "./DemoPage.css";
import { Link } from "react-router-dom";

function DemoPage(){
    
    return(
        <Link onClick={demoBtnClick} to="/">ClickMe</Link>
    );
}

function demoBtnClick(){
    console.log("[ Called Btn From React Code ]");
}

export default DemoPage;