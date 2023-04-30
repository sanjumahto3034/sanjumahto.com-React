import React from "react";
import './AllGames.css';
import thumbnail from "../res/AllGames/test_thumbnail/thumbnail.jpg";
import icon from "../res/AllGames/test_thumbnail/icon.png";

function AllGames(){

    const GameData = [
                {
                    title:"Jump Jump",
                    background_img:thumbnail,
                    icon_img:icon,
                    rating:"4.5",
                    category:"Action"
                },
                {
                    title:"Zombie-Stand",
                    background_img:thumbnail,
                    icon_img:icon,
                    rating:"3.5",
                    category:"Shooting"
                },
                {
                    title:"Jump Jump",
                    background_img:thumbnail,
                    icon_img:icon,
                    rating:"4.5",
                    category:"Action"
                },
                {
                    title:"Zombie-Stand",
                    background_img:thumbnail,
                    icon_img:icon,
                    rating:"3.5",
                    category:"Shooting"
                },
                {
                    title:"Jump Jump",
                    background_img:thumbnail,
                    icon_img:icon,
                    rating:"4.5",
                    category:"Action"
                },
                {
                    title:"Zombie-Stand",
                    background_img:thumbnail,
                    icon_img:icon,
                    rating:"3.5",
                    category:"Shooting"
                },
                {
                    title:"Jump Jump",
                    background_img:thumbnail,
                    icon_img:icon,
                    rating:"4.5",
                    category:"Action"
                },
                {
                    title:"Zombie-Stand",
                    background_img:thumbnail,
                    icon_img:icon,
                    rating:"3.5",
                    category:"Shooting"
                },

                {
                    title:"Jump Jump",
                    background_img:thumbnail,
                    icon_img:icon,
                    rating:"4.5",
                    category:"Action"
                },
                {
                    title:"Zombie-Stand",
                    background_img:thumbnail,
                    icon_img:icon,
                    rating:"3.5",
                    category:"Shooting"
                },
                {
                    title:"Jump Jump",
                    background_img:thumbnail,
                    icon_img:icon,
                    rating:"4.5",
                    category:"Action"
                },
                {
                    title:"Zombie-Stand",
                    background_img:thumbnail,
                    icon_img:icon,
                    rating:"3.5",
                    category:"Shooting"
                },


            ];

    return(
        <div className="all-games-main">
            <form className="all-games-form">
                {
                    GameData.map(data=>{
                        return(
                            <div className="all-games-btn-main">
                                    <img className="all-games-btn-second-image" src={data.background_img}></img>
                                    <div className="all-games-btn-second-description-main">
                                        <div className="all-games-btn-second-container">
                                            <img className="all-games-btn-second-icon" src={data.icon_img}></img>
                                            <div className="all-games-btn-second-description-text">
                                                <div className="all-games-btn-second-description-name">{data.title}</div>
                                                <div className="all-games-btn-second-description-rating">{data.rating}  &#9733;</div>
                                                <div className="all-games-btn-second-description-category">{data.category}</div>
                                            </div>

                                        </div>
                                    </div>
                            </div>
                        )
                    })
                }
            </form>
        </div>
    );
}


export default AllGames;