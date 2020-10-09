import React, { useState } from "react";
import data from "../../data.json";
import Filter from "../Filter";
import ProductItem from "../ProductItem";
import Search from "../Search";
import "./index.css";

const Products = () => {
  const [search, setSearch] = useState("");
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
    <div className="container">
      <Filter
        product={allItems.products.length}
        size={allItems.size}
        sort={allItems.sort}
        sortByPrice={sortByPrice}
        filterBySize={filterBySize}
        onChange={changeToggle}
      />
      {/*<Search products={allItems.products} />*/}

      <div className="all-products">
        {allItems.products.map((product) => (
          <ProductItem product={product} key={product._id} />
        ))}

        {}
      </div>
    </div>
  );
};

export default Products;
