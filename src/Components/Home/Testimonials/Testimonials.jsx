import React from "react";
import "./Testimonials.scss"


export default function Testimonials(){

    const deta =[
        {
            id: 1,
            name: "Rahul",
            title: "Sinior Developer",
            icon: "asset/logo7.png",
            img: "https://images.pexels.com/photos/1280162/pexels-photo-1280162.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            desc: "The Bike-Lover projects is very attractive and responsive site which is my favourite",
        },
        {
            id: 2,
            name: "Joker",
            title: "Sinior React Developer",
            icon: "asset/logo7.png",
            img: "https://images.ctfassets.net/hrltx12pl8hq/3MbF54EhWUhsXunc5Keueb/60774fbbff86e6bf6776f1e17a8016b4/04-nature_721703848.jpg?fit=fill&w=480&h=270",
            desc: "The Tour-Plan projects is very attractive and responsive site which is my favourite",
            featured: true,
        },
        {
            id: 3,
            name: "Tekka",
            title: "Sinior Full-Stack Developer",
            icon: "asset/logo7.png",
            img: "https://media.gettyimages.com/photos/success-picture-id912928582?s=612x612",
            desc: "The Bike-Lover projects is very attractive and responsive site which is my favourite",
        },
    ]
    return (
        <div className="testimonials" id="testimonials">
            <h1>Testimonials</h1>
            <div className="container">
                {deta.map((d)=>(
                <div className={d.featured ? "card featured" : "card"}>
                    <div className="top">
                        <img src="asset/right-arrow.png" className="left" alt="" />
                        <img className="user" src={d.img} alt="" />
                        <img className="right" src={d.icon} alt="" />
                    </div>
                    <div className="center">
                        {d.desc}
                    </div>
                    <div className="bottom">
                        <h3>{d.name}</h3>
                        <h4>{d.title}</h4>
                    </div>
                </div>
                ))}
            </div>
        </div>
    )
}