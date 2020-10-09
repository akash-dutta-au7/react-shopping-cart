import React, { useState } from "react";
import data from "../../data.json";
import ProductItem from "../ProductItem";
import "./index.css";
const Products = () => {
  const [allItems, setAllItems] = useState({
    products: data.products,
    size: "",
    sort: "",
  });
  return (
    <div className="container">
      <div className="all-products">
        {allItems.products.map((product) => (
          <ProductItem product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
