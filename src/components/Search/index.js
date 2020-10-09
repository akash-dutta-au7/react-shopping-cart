import React, { useState } from "react";
import ProductItem from "../ProductItem";
import "./index.css";

const Search = ({ products }) => {
  const [search, setSearch] = useState("");
  const searchChange = (e) => {
    setSearch(e.target.value);
  };

  const searchProduct = products.filter((product) => {
    return product.title.toLowerCase().includes(search.toLocaleLowerCase());
  });
  return (
    <div className="product-search">
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={searchChange}
      />{" "}
      <div className="all-products">
        {searchProduct.map((product) => (
          <ProductItem product={product} key={product._id} />
        ))}
      </div>
    </div>
  );
};

export default Search;
