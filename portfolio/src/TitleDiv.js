import React from 'react';
import './TitleDiv.css';
import appLogo from './res/logo.png'


function TitleDiv(){
    return (
        <div className='TitleDiv'>
            <div className='logoDiv'>
                <img className='AppLogo' src = {appLogo} alt = "logo"></img>
                <div className='logoName'>Portfolio</div>
            </div>

            <div className='BtnDiv'>
                <div className='all-game-btn'>All Games</div>
                <div className='all-game-btn'>Resume</div>
                <button className='lets-talk-btn' onClick={letsTalkBtnClicked}>Let's Talk</button>

            </div>
            
        </div>
    );


};

function letsTalkBtnClicked(){
    console.log("[ TitleDiv ] lets-talk-btn");
    // document.getElementsByClassName("all-game-btn").namedItem
}


export default TitleDiv;