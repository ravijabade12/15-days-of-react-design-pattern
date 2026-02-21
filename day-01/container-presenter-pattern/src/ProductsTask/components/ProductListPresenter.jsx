import React from "react";
import Loading from "./common/Loading";
import Error from "./common/Error";
import ProductView from "./ProductView";
import FilterSort from "./FilterSort";

const ProductListPresenter = ({
  products,
  loading,
  error,
  onFilterChange,
  filters,
}) => {
  if (loading) return <Loading message="Loading products..." />;
  if (error) return <Error message={error} />;

  return (
    <div>
      <FilterSort onFilterChange={onFilterChange} currentFilters={filters} />
      <div className="grid grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductView key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductListPresenter;
