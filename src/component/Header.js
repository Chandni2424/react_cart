import React from "react";

function Header(props) {
  return (
    <div className="header flex">
      <h1 onClick={() => props.page("products")}>ShoppingCart</h1>
      <span>{props.cart.length}</span>
      <img onClick={() => props.page("cart")} src="./download.png" alt="" />
    </div>
  );
}

export default Header;
