import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import ProductListPresenter from "./ProductListPresenter";

const ProductListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    category: "all",
    filterType: "all",
    sort: "name",
    search: "",
  });

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async (activeFilters = null) => {
    try {
      setLoading(true);
      const filtersToUse = activeFilters || filters;

      // Build query string only with non-default values
      const queryParams = new URLSearchParams();
      if (filtersToUse.category !== "all") {
        queryParams.append("category", filtersToUse.category);
      }
      if (filtersToUse.filterType !== "all") {
        queryParams.append("filter", filtersToUse.filterType);
      }
      if (filtersToUse.sort !== "name") {
        queryParams.append("sort", filtersToUse.sort);
      }
      if (filtersToUse.search.trim() !== "") {
        queryParams.append("search", filtersToUse.search.trim());
      }

      const queryString = queryParams.toString();
      const url = queryString
        ? `${import.meta.env.VITE_API_BASE_URL}/api/products?${queryString}`
        : `${import.meta.env.VITE_API_BASE_URL}/api/products`;

      const response = await axios.get(url);
      setProducts(response.data);
    } catch (err) {
      setError("Failed to fetch products");
    } finally {
      setLoading(false);
    }
  };

  const handleFilterChange = useCallback(
    async (category, filterType, sort, search) => {
      // Update filter state with all current values
      const newFilters = { category, filterType, sort, search };
      setFilters(newFilters);
      // Fetch with updated filters
      await fetchProducts(newFilters);
    },
    [],
  );

  return (
    <ProductListPresenter
      products={products}
      loading={loading}
      error={error}
      onFilterChange={handleFilterChange}
      filters={filters}
    />
  );
};

export default ProductListContainer;
