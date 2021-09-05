import React from 'react'

function AboutList(props) {
    return (
        <div className="about__item">
            <img src={props.image} alt="" />
            <h2>{props.title}</h2>
            <p>{props.description}</p>
        </div>
    )
}

export default AboutList
