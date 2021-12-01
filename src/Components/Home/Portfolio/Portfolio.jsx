import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PortfolioList from "../PortfolioList/PortfolioList";
import "./Portfolio.scss"

export default function Portfolio(){

    const [selected, setSelected] = useState("featured")
    const [projects, setProjects] = useState();


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

    useEffect(()=>{
        fetch("https://enigmatic-beyond-94168.herokuapp.com/projects")
        .then(res=>res.json())
        .then(data=> setProjects(data) )
    }, [])

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
                {
                    projects?.map((project)=>(
                        
                    <div className="item"
                    key={project.id}
                    >
                        <img src={project.img1} alt="" />
                        <Link className="button" to={`/project/${project._id}`}>
                            <button>{project.name}</button>
                        </Link>
                    
                    </div>
                    ))
                }
            </div>
        </div>
    )
}