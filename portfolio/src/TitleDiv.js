import React from 'react';
import './TitleDiv.css';
import appLogo from './res/logo.png'
import { useState } from 'react';
import {Link} from "react-router-dom";

function TitleDiv(){ 
    const [divStyle,setStyle] = useState("hideSideBar");

    const showSideBar = ()=>{
        setStyle("title-div-mobile-ui-div");
    }
    const hideSideBar = ()=>{
        setStyle("hideSideBar");
    }
    const underDevelopment = () =>{
        alert("Under Development Error : 303");
    }
    // hideSideBar();
    return (
        <div className="TitleDiv">
            <div className='logoDiv'>
                <img className='AppLogo' src = {appLogo} alt = "logo"></img>
                <div className='logoName'>Portfolio</div>
            </div>
            <div className='title-div-desktop'>
                <div className='title-div-btn' onClick={underDevelopment}><div className='title-div-btn-text'>All Games</div></div>
                <Link className='title-div-btn' to='/resume'><div className='title-div-btn-text'>Resume</div></Link>
                <div className='title-div-btn' onClick={underDevelopment}><div className='title-div-btn-text'>Let's Talk</div></div>
            </div>
            <div className='title-div-mobile-show-btn' onClick={showSideBar}>MORE</div>
            <div className={divStyle}>
                <div className='title-div-mobile-ui-btn' onClick={underDevelopment}><div className='title-div-btn-text-in'>All Games</div></div>
                <Link className='title-div-mobile-ui-btn' to='/resume' onClick={hideSideBar}><div className='title-div-btn-text-in'>Resume</div></Link>
                <div className='title-div-mobile-ui-btn' onClick={underDevelopment}><div className='title-div-btn-text-in'>Let's Talk</div></div>
                <div className='title-div-mobile-ui-btn' onClick={hideSideBar}><div className='title-div-btn-text-in'>Close</div></div>
            </div>

        </div>
    );

};

function letsTalkBtnClicked(){
    console.log("[ TitleDiv ] lets-talk-btn");
    
    // document.getElementsByClassName("all-game-btn").namedItem
}
function checkIfMobileDevice(){

    return true;
}


export default TitleDiv;