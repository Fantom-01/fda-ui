import React from "react";
import logo from "../assets/res-logo.png";

import { useState } from "react";
import { useEffect } from "react";

// START SHIT HERE!!!!!!!!!!!!!!!!!!!!!

const Menu = () => {
  
  return (
    <div id="sidemenu">
      <section className="transparent--half"></section>
      <section className="main--half">
          <div id="menu-icon-div">
            {/* <a id="menu-icon" className="nav--a" onClick={() => setShow(false)}><i class="fas fa-bars"></i></a> */}
          </div>

          <div id="sidemenu-list">
            <a href="#" class="sidemenu--links">Home</a>
            <a href="#" class="sidemenu--links">Food</a>
            <a href="#" class="sidemenu--links">Cart</a>
            <a href="#" class="sidemenu--links">Contact</a>
          </div>
      </section>
    </div>
  )
}
// END SHIT HERE!!!!!!!!!!!!!!!!!!!!!


const navbar = () => {
  const [show, setShow] = useState(false);

  return (
    <>
    {show && <Menu/>}
  
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
        <a id="menu-icon" className="nav--a" onClick={() => setShow(!show)}><i class="fas fa-bars"></i></a>
        </div>
      </nav>
    </>
  );
};

export default navbar;
