import React from "react";
import "./ProductsContainer.scss";
import SingleCard from "../../../Components/PDP/Cards/SingleCard";

const ProductsContainer = ({ products }) => {
  return (
    <>
      <div className="ProductsContainer">
        <div className="cards">
          {products.map((e, i) => (
            <SingleCard key={i} product={products[i]} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductsContainer;
