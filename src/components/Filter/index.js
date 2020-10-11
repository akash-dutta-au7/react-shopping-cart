import React from "react";

const Filter = ({ product, size, sort, sortByPrice, filterBySize }) => {
  console.log("From filter page", product);
  return (
    <div className="filter">
      <div className="filter-result">{product} products</div>
      <div className="filter-sort">
        Price{" "}
        <select value={sort} onChange={sortByPrice}>
          <option>Select</option>
          <option value="low-tier">₹ 0 - ₹ 399</option>
          <option value="mid-tier">₹ 400 - ₹ 699</option>
          <option value="high-tier">₹ 700 - ₹ 999</option>
        </select>
      </div>
      <div className="filter-size">
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
  );
};

export default Filter;
