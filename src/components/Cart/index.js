import React from "react";

const Cart = ({ cartItems, removeFromCart }) => {
  return (
    <div>
      {!!cartItems && cartItems.length === 0 ? (
        <div className="cart cart-header">No product in cart</div>
      ) : (
        <div className="cart cart-header">
          {!!cartItems && cartItems.length} product(s) in the cart
        </div>
      )}

      <div>
        <div className="cart">
          <ul className="cart-items">
            {cartItems.map((item) => (
              <li key={item._id}>
                <div>
                  <img src={item.image} alt={item.title} />
                </div>
                <div>
                  <div>{item.title}</div>
                  <div className="button-right">
                    INR {item.price} x {item.count}{" "}
                    <button onClick={() => removeFromCart(item)}>Remove</button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        {cartItems.length !== 0 && (
          <div className="cart">
            <div className="total">
              <div>
                Total : INR{" "}
                {cartItems.reduce(
                  (accum, current) => accum + current.price * current.count,
                  0
                )}
              </div>
              <button className="add-to-cart-btn primary">Proceed</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
