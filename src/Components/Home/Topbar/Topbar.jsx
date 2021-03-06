import React from "react";
import "./Topbar.scss"
import {Person, Mail} from "@material-ui/icons"

export default function Topbar({menuOpen, setMenuOpen}){
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">Junior</a>
                    <div className="itemContainer">
                        <Person className="icon"/>
                        <span>+8801 722 586 777</span>
                    </div>
                    <div className="itemContainer">
                        <Mail className="icon"/>
                        <span>mdsanaulislam154@gmail.com</span>
                        <a href="https://drive.google.com/file/d/1DN1vvpnEYSXjAV4c7B2ou7QWPxbEbS0T/view" target="_blank">MY Resume</a>
                    </div>
                </div>
                <div className="right">
                    <div className="humberger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}