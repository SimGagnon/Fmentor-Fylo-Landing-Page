import React from 'react'
import "../scss/_about.scss";
import AboutImg from "../assets/illustration-stay-productive.png"

function About() {
    return (
        <section className="about">
            <div className="about__img">
                <img src={AboutImg} alt="" />
            </div>
            <div className="about__text">
                <h2>Stay productive, wherever you are</h2>
                <p>Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.</p>
                <p>Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.</p>
                <small>See how Fylo works</small>
            </div>
        </section>
    )
}

export default About
