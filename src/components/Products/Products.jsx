import React from "react";
import "./Products.scss";
import Product from "./Product/Product";

const Products = ({ innerPage }) => {
  return (
    <div className="products-container">
      {/* its means if you are in inner category page than don't show Section heading only if innerPage is true -->see( catogry and products).jsx both for understanding */}
      {!innerPage && <div className="sec-heading"> Section Heading </div>}
      <div className="products">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
};

export default Products;
