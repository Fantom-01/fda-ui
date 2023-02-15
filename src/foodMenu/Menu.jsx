import React from "react";

const Menu = ({ items }) => {
  return (
    <div className="section-center">
      {items.map((menuItem) => {
        const { id, title, img, desc, price } = menuItem;
        return (
          // <article key={id} className="menu-item">
          //   <img src={img} alt={title} className="photo" />
          //   <div className="item-info">
          //     <header>
          //       <h4>{title}</h4>
          //       <h4 className="price">${price}</h4>
          //     </header>
          //     <p className="item-text">{desc}</p>
          //   </div>
          // </article>
          <article key={id} className="menu-item">
            <div className="product--image">
              <img src={img} alt={title} className="photo" />
            </div>
            <div className="product--text">
              <h4><a href="#">{title}</a></h4>
              <div className="price--div">
                <span><h4 className="price">${price}</h4></span>
                <button className="to--cart--btn">Add To Cart</button>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;
