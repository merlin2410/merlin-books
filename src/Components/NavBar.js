import React from "react"; 
import logo from "../images/logo.png"
import search from "../images/search.png"
import heart from "../images/heart.png"
import notification from "../images/notification.png"
import diamond from "../images/diamond.png"
import user from "../images/user.png"
const NavBar = ()=>{



    return (
        <div className="NavBar">
        <div className="logo-name">
            <img src={logo} alt="logo"/>
            <p>MerlinBooks</p>
        </div>
        <div className="search">
            <div className="search-field">
                <img src={search} alt="search icon"/>
                <input type="text" placeholder="Search for the book you want and read it now... Sherlock Holmes, Harry Pot..."/>
            </div>
            <button>Search</button>
        </div>
        <div className="menus">
            <img src={heart} alt="heart"/>
            <img src={notification} alt="notification"/>
            <img src={diamond} alt="diamond"/>
            <img src={user} alt="user"/>
        </div>
    </div>
    )
}

export default NavBar;