import React from "react"
import "./style.css"
import {NavLink} from "react-router-dom";
function Header(){

    return (
         <header className ="head">
            <nav className = "navbar">
                <div className = "navbar-logo"><img src = {require("./TAMULOGO.png")}/></div>   
                <div className = "navbar-items">
                    <ul>
                    <li><NavLink to={"/home"}activeStyle = {{color: "Grey"}} >Home</NavLink></li>
                    <li><NavLink to={"/school"}activeStyle = {{color: "Grey"}}>School</NavLink></li>
                    <li><NavLink to={"/gainZ"}activeStyle = {{color: "Grey"}}>GainZ</NavLink></li>
                    </ul>
                </div>
            </nav>

         </header>
    )
}

export default Header
