import React from 'react';
import './Introductiondiv.css';


function introductionDiv(){
    return(
        <div className="introduction-background">
        <div className="introduction-verticle-line-1"></div>
        <div className="introduction-verticle-line-2"></div>
        <div className="introduction-verticle-line-3"></div>

        
           <div className="introduction-main-div">
                <div className="introduction-name-div">
                        <div className="introduction-bar"></div>
                        <div className="introduction-welcome-text">Welcome</div>
                        <div className="introduction-custom-text">My name is Sanju Mahto and I started my studies in CITM before embarking on one of my greatest passions: video games.</div>
                        <div className="introduction-custom-text">Holder of Deploma in Computer Science, I have skills in both areas. I like to experiment, discover and learn as and when my professional and personal projects.</div>
                        <div className="introduction-custom-text">Being the versatile type I like to be able to help on different points, whether it is the creative process or the management of the human.</div>

                </div>


                <div className="introduction-detail-div">
                    <div className="introduction-detail-inner-div">
                        <div className="introduction-detail-inner-div-left">
                            <div className="introduction-detail-image"></div>
                        </div>
                        <div className="introduction-detail-inner-div-right">
                            <div className="introduction-detail-title">Computer game</div>
                            <div className="introduction-detail-discription">Console and PC player when ergonomics lend themselves (MMO, FPS). I try to play a little bit of everything in order to discover new game mechanics and new stories. I particularly like action-style games, narrative games, and RPGs, whether AAA or indie.</div>
                        </div>
                    </div>
                       <div className="introduction-detail-inner-div">
                        <div className="introduction-detail-inner-div-left">
                            <div className="introduction-detail-image"></div>
                        </div>
                        <div className="introduction-detail-inner-div-right">
                            <div className="introduction-detail-title">Board game</div>
                            <div className="introduction-detail-discription">From family + games to expert games to role-playing games, I like to test new mechanics and try all kinds of games. I have a soft spot for real-time cooperative games and deckbuilding.</div>
                        </div>
                    </div>
                       
                       
                </div>
           </div>
        
        </div>
    );
}

export default introductionDiv;
