import React, { useState } from "react";
import data from "../../data.json";
import Filter from "../Filter";
import ProductItem from "../ProductItem";
import "./index.css";
const Products = () => {
  const [allItems, setAllItems] = useState({
    products: data.products,
    size: "",
    sort: "",
  });

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
  return (
    <div className="container">
      <Filter
        product={allItems.products.length}
        size={allItems.size}
        sort={allItems.sort}
        sortByPrice={sortByPrice}
        filterBySize={filterBySize}
      />
      <div className="all-products">
        {allItems.products.map((product) => (
          <ProductItem product={product} key={product._id} />
        ))}
      </div>
    </div>
  );
};

export default Products;
