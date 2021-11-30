import React, { useState } from "react";
import "./Contact.scss"

export default function Contact(){

    const [message, setMessage] = useState(false)

    const handleSubmit=(e)=>{
        e.preventDefault()
        setMessage(true)
    }

    return (
        <div className="contact" id="contact">
            <div className="left">
                <img src="asset/Email.png" alt="" />
            </div>
            <div className="right">
                <h2>Contact</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Email" />
                    <textarea placeholder="message"></textarea>
                    <button type="submit">Send</button>
                    {message && <span>Thanks, I'll Replay Soon : )</span>}
                </form>
            </div>
        </div>
    )
}