import React from "react";

function Product(props) {
  return (
    <li className="flex">
      <h3>{props.title}</h3>
      <span>{props.price}</span>
      <button
        onClick={() =>
          props.cart({
            title: props.title,
            price: props.price,
            id: props.id
          })
        }
      >
        Add To Cart
      </button>
    </li>
  );
}

export default Product;
