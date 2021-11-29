import React, { useState } from "react";
import PortfolioList from "../PortfolioList/PortfolioList";
import "./Portfolio.scss"

export default function Portfolio(){

    const [selected, setSelected] = useState("featured")

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