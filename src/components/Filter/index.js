import React from "react";
import "./index.css";
const Filter = ({ product, size, sort, sortByPrice, filterBySize }) => {
  console.log("From filter page", product);
  return (
    <div className="filter">
      <div className="filter-container">
        <div className="total-products">
          <p>{product} products</p>
        </div>

        <div className="sort-by-price">
          Price{" "}
          <select value={sort} onChange={sortByPrice}>
            <option>Select</option>
            <option value="low-tier">₹ 0 - ₹ 399</option>
            <option value="mid-tier">₹ 400 - ₹ 699</option>
            <option value="high-tier">₹ 700 - ₹ 999</option>
          </select>
        </div>
        <div className="sort-by-size">
          Size{" "}
          <select value={size} onChange={filterBySize}>
            <option>Select</option>
            <option value="XS">XS</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
            <option value="XXL">XXL</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filter;
