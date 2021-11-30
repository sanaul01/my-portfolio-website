import React, { useState } from "react";
import "./Works.scss"

export default function Works(){
    const [currentSlide, setCurrentSlide] = useState(0)

    const deta = [
        {
            id: "1",
            icon: "asset/logo4.png",
            title: "Web App",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            img: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        },
        {
            id: "2",
            icon: "asset/logo6.png",
            title: "React App",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            img: "https://crowdbotics.ghost.io/content/images/2021/05/React-Native-Img.png"
        },
        {
            id: "3",
            icon: "asset/logo7.png",
            title: "JavaSctipt",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            img: "https://images.unsplash.com/photo-1592609931095-54a2168ae893?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8amF2YXNjcmlwdHxlbnwwfHwwfHw%3D&w=1000&q=80"
        },
    ];

    const handleClick= (way)=>{
        way === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide-1 : 2) : 
        setCurrentSlide(currentSlide < deta.length -1 ? currentSlide + 1 : 0)
    }

    return (
        <div className="works" id="works">
            <div className="slider" style={{transform:`translateX(-${currentSlide *100}vw)`}}>
                {deta.map((d)=>(
                <div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <div className="imageContainer">
                                    <img src={d.icon} alt="" />
                                </div>
                                <h2>{d.title}</h2>
                                <p>{d.desc}</p>
                                <span>Projects</span>
                            </div>
                        </div>
                        <div className="right">
                            <img src="asset/image1.jpg" alt="" />
                        </div>
                    </div>
                </div>
                ))}
            </div>
            <img src="asset/arrow.png" className="arrow left" onClick={()=>handleClick("left")} alt="" />
            <img src="asset/arrow.png" className="arrow right" onClick={()=>handleClick()} alt="" />
        </div>
    )
}