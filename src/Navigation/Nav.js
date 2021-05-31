import React from "react";
import {Link} from "react-router-dom";
import "./style.css";
import logo from "../images/logo.jpg";

function Nav() {
    return <nav>
        <ul>
            <li><Link to="/"><img className="logo" src={logo} alt="Logo"></img></Link></li>
        </ul>
    </nav>;
}

export default Nav;