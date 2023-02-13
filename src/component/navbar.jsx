import React from "react";
import logo from "../assets/res-logo.png";


import { useState } from "react";


const navbar = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <nav>
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
        </div>
      </nav>
    </>
  );
};

export default navbar;
