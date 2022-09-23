import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import Popup from 'reactjs-popup';

import images from "../../constants/images";
import "./Navbar.css";

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);

  return (
  <nav className="app__navbar">
    <div className="app__navbar-logo">
      <img src={images.gericht} alt="app-logo" />
    </div>
    <ul className="app__navbar-links">
      <li className="p__opensans">
        <a href="#home">Home</a>
      </li>
      <li className="p__opensans">
        <a href="#about">About</a>
      </li>
      <li className="p__opensans">
        <a href="#menu">Menu</a>
      </li>
      <li className="p__opensans">
        <a href="#awards">Awards</a>
      </li>
      <li className="p__opensans">
        <a href="#contact">Contact</a>
      </li>
    </ul>
    <div className="app__navbar-login">
      <Popup 
      trigger={<a href="#modal_login" className="p__opensans">Log In / Register</a>}
      modal
      nested>
        {close => (
      <div className="modal_login">
        <button className="close" onClick={close}>
          &times;
        </button>
        <div className="header"> Log In / Register</div>
        <div className="content">
          <form className="form">
            <input className="input_login" type="text" placeholder="Username" />
            <input className="input_login"type="email" placeholder="Password" />
            <button className="custom__button">Sign In</button>
            <a href='norefferer'className="a_register">Register here</a>
          </form>
        </div>
      </div>
    )}
      </Popup>
      <div />
      <Popup  
      trigger={<a href="#modal_book" className="p__opensans">Book Table</a>}
      modal
      nested>
        {close => (
          <div className="modal_book">
            <button className="close" onClick={close}>
              &times;
            </button>
            <div className="header"> Book Your Table</div>
            <div className="book_content">
                <h3 className="p_book">Guest Number</h3>
                <select className="select_book">
                  <option className="option_book">1</option>
                  <option className="option_book">2</option>
                  <option className="option_book">3</option>
                  <option className="option_book">4</option>
                  <option className="option_book">5</option>
                  <option className="option_book">6</option>
                  <option className="option_book">7</option>
                  <option className="option_book">8</option>
                </select>
                <h3 className="p_book">Date & Time</h3>
                 <input type="datetime-local" className="date_book"></input>
                 
                 <button className="custom__button">Reserve my Table</button>
                 
            </div>
          </div>
        )}
     
      </Popup>
    </div>
    <div className="app__navbar-smallscreen">
      <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
      
      {toggleMenu && (
      <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
        <MdOutlineRestaurantMenu
          fontSize={27}
          className="overlay_close"
          onClick={() => setToggleMenu(false)}
        />
        <ul className="app__navbar-smallscreen-links">
          <li className="p__opensans">
            <a href="#home">Home</a>
          </li>
          <li className="p__opensans">
            <a href="#about">About</a>
          </li>
          <li className="p__opensans">
            <a href="#menu">Menu</a>
          </li>
          <li className="p__opensans">
            <a href="#awards">Awards</a>
          </li>
          <li className="p__opensans">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    )}

    </div>
  </nav>
);
}

export default Navbar;
