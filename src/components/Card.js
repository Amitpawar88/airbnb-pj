import React from "react";

function Card(props) {
    return (
        <div className="card">
            <img className="card-image" src={`../images/${props.img}`} />
            <div className="card-stats">
                <img className="card-star" src="../images/star.png" />
                <span>{props.rating}</span>
                <span className="grey">({props.reviewCount}) • </span>
                <span className="grey">{props.location}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}

export default Card;