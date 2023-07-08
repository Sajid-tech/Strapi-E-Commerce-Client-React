import React from "react";
import "./Products.scss";
import Product from "./Product/Product";

const Products = ({ products, innerPage, headingText }) => {
  return (
    <div className="products-container">
      {/* its means if you are in inner category page than don't show Section heading only if innerPage is true -->see( catogry and products).jsx both for understanding */}
      {!innerPage && <div className="sec-heading"> {headingText} </div>}
      <div className="products">
        {products?.data?.map((item) => (
          <Product key={item.id} id={item.id} data={item.attributes} />
        ))}
      </div>
    </div>
  );
};

export default Products;
