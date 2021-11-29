import React from "react";
import "./Portfolio.scss"

export default function Portfolio(){
    return (
        <div className="portfolio" id="portfolio">
            <h2>Portfolio</h2>
            <ul>
                <li className="active">Featured</li>
                <li>Mobail App</li>
                <li>Web App</li>
                <li>Design</li>
                <li>Branding</li>
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