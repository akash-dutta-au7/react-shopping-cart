import React from "react";
// import Search from "../Search";

const Products = ({ products, addToCart }) => {
  return (
    <div>
      {/*<Search products={allItems.products} />*/}
      <ul className="products">
        {!!products &&
          products.length > 0 &&
          products.map((product) => (
            <li key={product._id}>
              <div className="product">
                <a href={"#" + product._id}>
                  <img src={product.image} alt={product.title} />
                  <p className="product-title">{product.title}</p>
                </a>

                <div className="product-price">
                  <div>INR {product.price}</div>
                  <button
                    className="add-to-cart-btn primary"
                    onClick={() => addToCart(product)}
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </li>
          ))}

        {}
      </ul>
    </div>
  );
};

// const mapStateToProps = (state) => ({
//   cartItems: state.cartReducer.cartItems,
// });
export default Products;
