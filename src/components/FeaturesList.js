import React from 'react'

function FeaturesList(props) {
    return (
        <div className="features__item">
            <div className="features__item__img">
                <img src={props.image} alt="" />
            </div>
            <h2>{props.title}</h2>
            <p>{props.description}</p>  
        </div>
    )
}

export default FeaturesList;
