import React, { useState } from "react";
import PortfolioList from "../PortfolioList/PortfolioList";
import "./Portfolio.scss"

export default function Portfolio(){

    const [selected, setSelected] = useState("featured")

    const projsets = [
        {
            id: 1,
            name: "Bike Lover",
            liveLink: "",
            gitLink: "",
            img1: "",
            description: "This site is created by ReactJS. It is a business or shopping site. It's a full-stack website. Users will see into this site bike and if they want to buy any bike firstly they will be looked in and then pressed order now button for order any bike",
        },
    ]

    const list = [
        {
            id: "featured",
            title: "Featured"
        },
        {
            id: "mobail",
            title: "Mobail App"
        },
        {
            id: "web",
            title: "Web App"
        },
        {
            id: "design",
            title: "Design"
        },
        {
            id: "branding",
            title: "Branding"
        }
    ];

    return (
        <div className="portfolio" id="portfolio">
            <h2>Portfolio</h2>
            <ul>
                {
                    list.map(item => (<PortfolioList 
                    title={item.title}
                    active={selected === item.id}
                    id={item.id}
                    setSelected={setSelected}
                    />))
                }
            </ul>
            <div className="container">
                <div className="item">
                    <img src="asset/developer.jpg" alt="" />
                    <h3>Banking App</h3>
                </div>
                <div className="item">
                    <img src="asset/developer.jpg" alt="" />
                    <h3>Banking App</h3>
                </div>
                <div className="item">
                    <img src="asset/developer.jpg" alt="" />
                    <h3>Banking App</h3>
                </div>
                <div className="item">
                    <img src="asset/developer.jpg" alt="" />
                    <h3>Banking App</h3>
                </div>
                <div className="item">
                    <img src="asset/developer.jpg" alt="" />
                    <h3>Banking App</h3>
                </div>
                <div className="item">
                    <img src="asset/developer.jpg" alt="" />
                    <h3>Banking App</h3>
                </div>
            </div>
        </div>
    )
}