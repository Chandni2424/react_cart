import React from "react";

class CheckoutPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phone: "",
      address: "",
      state: ""
    };
  }

  handleChange = event => {
    console.log(event);
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    alert("Ordered Successfully");
    event.preventDefault();
  };
  render() {
    return (
      <div>
        <h4>Checkout</h4>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              className="inputBox"
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Email:
            <input
              className="inputBox"
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </label>

          <label>
            Phone:
            <input
              className="inputBox"
              type="number"
              name="phone"
              value={this.state.phone}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Address:
            <input
              className="inputBox"
              type="text"
              name="address"
              value={this.state.address}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Pick Your State:
            <select
              value={this.state.value}
              onChange={this.handleChange}
              name="state"
            >
              <option value="Maharashtra">Maharashtra</option>
              <option value="Madhya Pradesh">Madhya Pradesh</option>
              <option selected value="Himachal Pradesh">
                Himachal Pradesh
              </option>
              <option value="ArunachalPradesh">ArunachalPradesh</option>
            </select>
          </label>

          <input className="submitbtn" type="submit" value="submit" />
        </form>
      </div>
    );
  }
}

export default CheckoutPage;
