import React, { Fragment } from "react";
import "./index.css";
const ProductItem = ({ product }) => {
  return (
    <Fragment>
      <li key={product._id} className="product-li">
        <div className="product-item">
          <div className="item-container">
            <a href={"#" + product._id}>
              <img src={product.image} alt={product.title} />
            </a>
            <p className="product-title">{product.title}</p>
            <div className="price-area">
              <p>INR {product.price}</p>
              <button className="add-to-cart-btn" type="submit">
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </li>
    </Fragment>
  );
};

export default ProductItem;
