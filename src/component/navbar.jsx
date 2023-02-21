import React from "react";
import logo from "../assets/res-logo.png";


import { useState } from "react";


const navbar = () => {
  const [isOpen, setOpen] = useState(false);


  return (
    <>
      {/* <div id="menu">
        <div id="menu-icon-div">
          <img src="/assets/images/icon-menu-close.svg" alt="" id="menu-icon-close">
        </div>

        <div id="menu-list">
          <a href="#" class="menu--links">Home</a>
          <a href="#" class="menu--links">New</a>
          <a href="#" class="menu--links">Popular</a>
          <a href="#" class="menu--links">Trending</a>
          <a href="#" class="menu--links">Categories</a>
        </div>
      </div> */}
  
      <nav className="nav">
        <div className="nav--logo--div">
          <img src={logo} alt="" width='71px' height="71px"/>
          <caption className="logo--caption">Tasty Treat</caption>
        </div>
        <div className="nav--links">

          
          <a className="nav--a" exact href="/">Home</a>
          <a className="nav--a" href="/food">Food</a>
          <a className="nav--a" href="/cart">Cart</a>
          <a className="nav--a" href="/contact">Contact</a>
        </div>
        <div className="nav--icon">
          <a href="#" className="nav--a"><i class="fas fa-basket-shopping"></i></a>
          <a href="#" className="nav--a"><i class="fas fa-user"></i></a>
          <a id="menu-icon" className="nav--a"><i class="fas fa-bars"></i></a>
        </div>
      </nav>
    </>
  );
};

export default navbar;
