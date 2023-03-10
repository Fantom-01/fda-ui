import React, { useState } from "react";
import Menu from "./Menu.jsx";
import Categories from "./Categories.jsx";
import items from "./data.jsx";
import './foodmenu.css';

const allCategories = ["all", ...new Set(items.map((item) => item.category))];

function Main() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category == "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Popular Foods</h2>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default Main;
