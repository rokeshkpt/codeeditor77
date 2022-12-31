import React from "react";
import { Link } from "react-router-dom";

// import Document from "./document";


export default function Nav() {
    // let documentation="https://developer.mozilla.org/en-US/docs/Web/HTML"
    return (
        <nav className="nav">
            <Link to="/"><h3 className="logo">
                Code Editor
            </h3></Link>
            <div className="menu">
                <Link to="/intro"><p className="menulist">Learn HTML</p></Link>
                <Link to="/css"><p className="menulist">Learn CSS</p></Link>
                <Link to='/css' ></Link><Link to="/js"><p className="menulist">Learn JS</p></Link>
            </div>
        </nav>
    );
}