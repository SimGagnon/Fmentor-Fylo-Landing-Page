import React from 'react'
import "../scss/_hero.scss";
import HeroImg from "../assets/illustration-intro.png"

function Hero() {
    return (
        <section className="hero">
            <div className="hero__image">
                <img src={HeroImg} />
            </div>
            <div className="hero__text">
                <h1>All your files in one secure location, accessible anywhere.</h1>
                <p>Fylo stores all your most important files in one secure location. Access them wherever you need, 
                share and collaborate with friends family, and co-workers.</p>
                <button className="button">Get Started</button>
            </div>
        </section>
    )
}

export default Hero
