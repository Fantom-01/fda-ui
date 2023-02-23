import React, { useState } from "react";
import Menu from "./Menu";
import items from "./data";
import './foodmenu.css';

function Foods() {
  const [menuItems, setMenuItems] = useState(items);


  return (
    <main>
      <section className="menu section">
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default Foods;
