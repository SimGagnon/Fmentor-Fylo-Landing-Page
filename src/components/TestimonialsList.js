import React from 'react'

function TestimonialsList(props) {
    return (
        <div className="testimonials__items">
            <div className="testimonials__text">
                <p>{props.description}</p>
            </div>
            <div className="testimonials__person">
                <img src={props.image} alt="" />
                <div className="testimonials__person__text">
                    <h3>{props.name}</h3>
                    <small>{props.role}</small>
                </div>
            </div>
        </div>
    )
}

export default TestimonialsList;
