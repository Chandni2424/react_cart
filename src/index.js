import React from "react";
import { render } from "react-dom";

import data from "./data.json";
import Product from "./component/Product";
import Header from "./component/Header";
import CheckoutPage from "./component/CheckoutPage";
import CartPage from "./component/CartPage";
import "../src/style.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
      activepage: "products"
    };
  }

  handleAddToCart = singleProduct => {
    const newCart = this.state.cart.concat(singleProduct);
    console.log(newCart);
    this.setState({
      cart: newCart
    });
  };

  handleActivepage = comp => {
    this.setState({ activepage: comp });
  };
  switchPage = () => {
    switch (this.state.activepage) {
      case "products":
        return (
          <>
            <ul>
              {data.products.map(product => (
                <Product {...product} cart={this.handleAddToCart} />
              ))}
            </ul>
          </>
        );
        break;
      case "cart":
        return (
          <>
            <CartPage items={this.state.cart} />
            <div>
              <button onClick={() => this.handleActivepage("checkout")}>
                checkout
              </button>
            </div>
          </>
        );
        break;
      case "checkout":
        return <CheckoutPage />;
      default:
        return <h4>Page Not Found</h4>;
    }
  };
  render() {
    return (
      <div>
        <Header cart={this.state.cart} page={this.handleActivepage} />
        {this.switchPage()}
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
