import React, { useEffect } from "react";
import "./WhatIDo.css";
import linkined from "./res/linkined.png";
import AOS from "aos";
import 'aos/dist/aos.css'
function WhatIDo(){
    useEffect(()=>{
    //    AOS.init({duration:1000})
    },[]);
    return(
        <div className="WhatIDo">
            <div className="first-div"  data-aos = "fade-right" data-aos-duration="1000">
                <div className="first-div-main">
                    <div className="title-first-div" >Working<br/>Experience</div>
                    <div className="description-first-div">I'm Sanju Mahto, Unity and Cocos Game Programmer at Assert Infotech. Have a experience more than a 6-Months.</div>
                    <div className="description-first-div">I have work on many other self projects based on Unity and Cocos.</div>
                    <div className="description-first-div">The language I use to write program that is C++, C#, JavaScript, TypeScript</div>
                    <div className="learn-more">Learn More  &#8594;</div>
                    <div className="bottom-border-learn"></div>
                </div>
            </div>


            <div className="second-div" data-aos = "fade-left">
                <div className="second-div-main">
                        <div className="display-engine" data-aos-delay="200" data-aos ="fade-left" data-aos-duration="1000">
                            <div className="engine-logo"><img className="engine-logo-png" src = {linkined} alt="unity.png"></img></div>
                            <div className="engine-section">
                                <div className="engine-title">Unity 3D</div>
                                <div className="engine-description">This engine is unity is very useful at any cost must try it</div>
                            </div>
                        </div>


                        <div className="display-engine" data-aos-delay="300" data-aos ="fade-left" data-aos-duration="700">
                            <div className="engine-logo"><img className="engine-logo-png" src = {linkined} alt="unity.png"></img></div>
                            <div className="engine-section">
                                <div className="engine-title">Cocos Creator</div>
                                <div className="engine-description">This engine is unity is very useful at any cost must try it</div>
                            </div>
                        </div>



                        <div className="display-engine" data-aos-delay="400" data-aos ="fade-left" data-aos-duration="600">
                            <div className="engine-logo"><img className="engine-logo-png" src = {linkined} alt="unity.png"></img></div>
                            <div className="engine-section">
                                <div className="engine-title">Unreal Engine</div>
                                <div className="engine-description">This engine is unity is very useful at any cost must try it</div>
                            </div>
                        </div>

                </div>
            </div>

        </div>
    );
};

export default WhatIDo;