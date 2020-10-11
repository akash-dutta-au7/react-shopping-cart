
import React, { useState } from "react";
import data from "../../data.json";
import Filter from "../Filter";
import ProductItem from "../ProductItem";
// import Search from "../Search";
import "./index.css";

const Products = () => {
  // const [search, setSearch] = useState("");
  const [toggle, setToggle] = useState(false);
  const [allItems, setAllItems] = useState({
    products: data.products,
    size: "",
    sort: "",
  });

  //sort by price range
  const sortByPrice = (e) => {
    const value = e.target.value;
    console.log(value);
    if (value === "") {
      setAllItems({
        products: data.products,
      });
    } else if (value === "low-tier") {
      setAllItems({
        products: data.products.filter((product) => product.price <= 399),
      });
    } else if (value === "mid-tier") {
      setAllItems({
        products: data.products.filter(
          (product) => product.price >= 400 && product.price <= 699
        ),
      });
    } else {
      setAllItems({
        products: data.products.filter((product) => product.price >= 700),
      });
    }
  };

  //sort by size
  const filterBySize = (e) => {
    if (e.target.value === "") {
      setAllItems({ size: e.target.value, products: data.products });
    }
    setAllItems({
      size: e.target.value,
      products: data.products.filter(
        (product) => product.availableSizes.indexOf(e.target.value) >= 0
      ),
    });
  };

  const changeToggle = () => {
    const newToggle = !toggle;
    setToggle(newToggle);
  };

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
