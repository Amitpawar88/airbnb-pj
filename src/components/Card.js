import React from "react";

function Card(props) {
    return (
        <div className="card">
            <div className="card--badge">SOLD OUT</div>
            <img className="card--image" src={`../images/${props.img}`} />
            <div className="card--stats">
                <img className="card--star" src="../images/star.png" />
                <span>{props.rating}</span>
                <span className="grey">({props.reviewCount}) • </span>
                <span className="grey">{props.location}</span>
            </div>
            <p className="card--title">{props.title}</p>
            <p  className="card--price"><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}

export default Card;