import React from "react";

const Cart = ({ cartItems }) => {
  console.log("CartItems", cartItems);
  return (
    <div>
      {!!cartItems && cartItems.length === 0 ? (
        <div>No product in cart</div>
      ) : (
        <div>{!!cartItems && cartItems.length} product(s) in the cart</div>
      )}
    </div>
  );
};

export default Cart;
