import React from 'react';
import './TitleDiv.css';
import appLogo from './res/logo.png'
import { Link } from 'react-router-dom';


function TitleDiv(){
    return (
        <div className='TitleDiv'>
            <div className='logoDiv'>
                <img className='AppLogo' src = {appLogo} alt = "logo"></img>
                <div className='logoName'>Portfolio</div>
            </div>

            <div className='BtnDiv'>
                <div className='all-game-btn'>All Games</div>
                <Link className='all-game-btn' to='/demo'>Resume</Link>
                <button className='lets-talk-btn' onClick={letsTalkBtnClicked} >Let's Talk</button>

            </div>
            
        </div>
    );


};

function letsTalkBtnClicked(){
    console.log("[ TitleDiv ] lets-talk-btn");
    // document.getElementsByClassName("all-game-btn").namedItem
}


export default TitleDiv;