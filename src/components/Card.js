import React from "react";

function Card() {
    return (
        <div className="card">
            <img className="card-image" src={require("../images/Katie-Zaferes.png")} />
            <div className="card-stats">
                <img className="card-star" src={require("../images/star.png")} />
                <span>5.0</span>
                <span className="grey">(6) • </span>
                <span className="grey">USA</span>
            </div>
            <p>Life lessons with Katie Zaferes</p>
            <p><span className="bold">From $136</span> / person</p>
        </div>
    )
}

export default Card;