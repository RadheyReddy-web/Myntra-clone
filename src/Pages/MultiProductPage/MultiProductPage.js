import React, { useState } from "react";
import "./Index.scss";
import FilterWithBrand from "./FilterItems/FilterWithBrand";
import FilterWithPrice from "./FilterItems/FilterWithPrice";
import PaginationLink from "../../Components/PDP/PaginationLink/PaginationLink";
import ProductsContainer from "./ProductsContainer/ProductsContainer";
import mockProducts from "../../Components/PDP/Cards/mock";
const MultiProductPage = () => {
  const [page, setPage] = useState(1);
  const [products, setProducts] = useState(mockProducts || []);
  return (
    <>
      <div className="body2">
        <div className="leftSide">
          <FilterWithBrand />
          <FilterWithPrice />
        </div>
        <div className="rightSide">
          <ProductsContainer products={products} />
          <PaginationLink count={parseInt(products.length / 4)} />
        </div>
      </div>
    </>
  );
};

export default MultiProductPage;
