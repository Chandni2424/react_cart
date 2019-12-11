import React from "react";

function CheckoutPage() {
  return (
    <div>
      <h4>Checkout</h4>
      <form>
        <label>
          Name: <input type="text" name="name" />
        </label>
        <input type="submit" value="submit" />
      </form>
    </div>
  );
}

export default CheckoutPage;
