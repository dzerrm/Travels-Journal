import React from "react";

export default function Navbar(){
    return(
        <div className ="navbar">
            <img src="images/globe-earth.png" className="navbar--image" alt='earth icon'/>
            <h1 className="navbar--text">My travels journal</h1>
        </div>
    );
}