import React from "react";
import logo from "../assets/res-logo.png";


const navbar = () => {

  return (
    <>
      <nav>
        <div className="nav--logo--div">
          <img src={logo} alt="" width='71px' height="71px"/>
          <caption className="logo--caption">Tasty Treat</caption>
        </div>
        <div className="nav--links">
          <a className="nav--a" href="#">Home</a>
          <a className="nav--a" href="#">Food</a>
          <a className="nav--a" href="#">Cart</a>
          <a className="nav--a" href="#">Contact</a>
        </div>
        <div className="nav--icon">
          <a href="#"><i class="fas fa-basket-shopping"></i></a>
          <a href="#"><i class="fas fa-user"></i></a>
        </div>
      </nav>
    </>
  );
};

export default navbar;
