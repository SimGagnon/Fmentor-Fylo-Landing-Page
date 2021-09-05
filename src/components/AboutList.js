import React from 'react'

function AboutList(props) {
    return (
        <div className="about__item">
            <div className="about__item__img">
                <img src={props.image} alt="" />
            </div>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
        </div>
    )
}

export default AboutList
