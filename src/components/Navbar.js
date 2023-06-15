import React from 'react';
import Logo from "../images/arthmateLogo.png";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
    return (
        <div className="navbar">
            <div className="leftSide">
                <img src={Logo} />
            </div>
            <div className="rightSide">
            <Link to="/"> Introduction </Link> 
            <Link to="/team"> Team </Link> 
            <Link to="/about"> About </Link> 
            <Link to="/login"> Login </Link>
            </div>
        </div>
    );
}

export default Navbar;
