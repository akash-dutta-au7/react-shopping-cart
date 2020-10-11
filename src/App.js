import React, { useState } from "react";
import data from "./data.json";
import Filter from "./components/Filter";
import Products from "./components/Products";
import Cart from "./components/Cart";

function App() {
  // const [search, setSearch] = useState("");
  const [toggle, setToggle] = useState(false);
  const [allItems, setAllItems] = useState({
    products: data.products,
    cartItems: [],
    size: "",
    sort: "",
  });

  //add to cart function
  const addToCart = (product) => {
    const cartItems = allItems.cartItems.slice();
    let alreadyInCart = false;
    cartItems.forEach((item) => {
      if (item._id === product._id) {
        item.count++;
        alreadyInCart = true;
      }
    });
    if (!alreadyInCart) {
      cartItems.push({ ...product, count: 1 });
    }
    setAllItems({
      cartItems: cartItems,
    });
  };

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
    <div className="main-grid-area">
      <header>
        <a href="/">React Shopping Cart</a>
      </header>
      <main>
        <div className="content-page">
          <Filter
            product={!!allItems.products && allItems.products.length}
            size={allItems.size}
            sort={allItems.sort}
            sortByPrice={sortByPrice}
            filterBySize={filterBySize}
            onChange={changeToggle}
          />
          <div className="main-product">
            {" "}
            <Products addToCart={addToCart} products={allItems.products} />
          </div>
          <div className="side-cart">
            <Cart cartItems={allItems.cartItems} />
          </div>
        </div>
      </main>
      <footer>All right reserver || 2020</footer>
    </div>
  );
}

export default App;
