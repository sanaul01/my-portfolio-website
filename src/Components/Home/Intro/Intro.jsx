import React, { useEffect, useRef } from "react";
import "./Intro.scss"
import { init } from 'ityped'

export default function Intro(){
    const textRef = useRef()

    useEffect(()=>{
        init(textRef.current, {
             showCursor: false,
             backDelay: 1500,
             backSpeed: 60, 
            strings: ["Web Developer", "React Developer", "Javascript Developer"] 
        })
    },[])

    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imageContainer">
                    <img src="asset/logo3.jpg" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>Sanaul Islam</h1>
                    <h3>Full-Time <span ref={textRef}></span></h3>
                </div>
                <a href="#portfolio">
                    <img src="asset/down.jpg" alt="" />
                </a>
            </div>
        </div>
    )
}