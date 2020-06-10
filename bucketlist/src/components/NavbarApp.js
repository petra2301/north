import React, { Component } from 'react';

class NavbarApp extends Component {
    openMenuHandler = () => {
        const menu = document.querySelector(".appMenu");
        menu.style.padding = "20px 20px 0 20px";
        menu.style.width = "300px";
    }

    closeMenuHandler = () => {
        const menu = document.querySelector(".appMenu");
        menu.style.padding = "0";
        menu.style.width = "0";
    }

render() {
    return (
        <div>
            <img src="img/icons/menu.png" alt="open mobile menu" className="appMenuIcon" id="openMobileMenu" onClick={this.openMenuHandler}/>
        <div className="appMenu">
            <img src="img/icons/close.png" alt="close menu" id="closeMobileMenu" onClick={this.closeMenuHandler} height="30"/>
            <nav>
            <a href="index.html">Home</a><br/>
            <a href="countries.html">Countries</a><br/>
            <a href="denmark.html" className="subMenu">Denmark</a><br/>
            <a href="faroeislands.html" className="subMenu">Faroe islands</a><br/>
            <a href="finland.html" className="subMenu">Finland</a><br/>
            <a href="greenland.html" className="subMenu">Greenland</a><br/>
            <a href="iceland.html" className="subMenu">Iceland</a><br/>
            <a href="norway.html" className="subMenu">Norway</a><br/>
            <a href="scotland.html" className="subMenu">Scotland</a><br/>
            <a href="sweden.html" className="subMenu">Sweden</a><br/>
            <a href="accomodation.html">Accomodation</a><br/>
            <a href="trips.html">Trips</a><br/>
            <a href="contact.html">Contact</a><br/>
            <a href="about.html">About us</a><br/>
            </nav>
        </div>
        </div>
    )
}
} 

export default NavbarApp;