import React from "react";

function CartPage(props) {
  return (
    <>
      <h3>Cart Page</h3>
      <ul>
        {props.items.map(item => (
          <li>
            {item.title}
            {item.price}
          </li>
        ))}
      </ul>
      <hr />
      <h3>Total:{props.items.reduce((acc, item) => acc + item.price, 0)}</h3>
    </>
  );
}

export default CartPage;
