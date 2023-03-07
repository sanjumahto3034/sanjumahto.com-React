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
                <div className='lets-talk-btn'>Let's Talk</div>

            </div>
            
        </div>
    );

};


export default TitleDiv;