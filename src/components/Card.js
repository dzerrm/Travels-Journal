import React from "react";

export default function Card (props) {
    return(
        <div className="card">
            <img 
                className="card--image"
                src={`images/${props.img}`} 
                alt={`${props.place}`}    
            />
            <div className="card--content">
                <div className="card--country">
                    <img src='images/marker.png' alt="place marker" />
                    <span> {props.country} </span>
                </div>
                <h1 className="card--place-text">{props.place}</h1>
                <p className="card--dates">{`${props.date.start} - ${props.date.finish}`}</p>
                <p className="card--review">{props.review}</p>
            </div>
        </div>
    )
}