import React, { useState, useEffect } from "react";
import { ChevronDown, Search, X } from "lucide-react";

const FilterSort = ({ onFilterChange = () => {}, currentFilters }) => {
  const [selectedCategory, setSelectedCategory] = useState(
    currentFilters?.category || "all",
  );
  const [selectedSort, setSelectedSort] = useState(
    currentFilters?.sort || "name",
  );
  const [selectedFilterType, setSelectedFilterType] = useState(
    currentFilters?.filterType || "all",
  );

  const [searchTerm, setSearchTerm] = useState(currentFilters?.search || "");

  const categories = [
    { id: "all", label: "All Categories", value: null },
    { id: "1", label: "Electronics", value: "1" },
    { id: "2", label: "Fashion", value: "2" },
    { id: "3", label: "Home & Garden", value: "3" },
    { id: "4", label: "Sports & Outdoors", value: "4" },
  ];

  const sortOptions = [
    { id: "name", label: "Name (A-Z)" },
    { id: "price-low", label: "Price: Low to High" },
    { id: "price-high", label: "Price: High to Low" },
    { id: "rating", label: "Highest Rated" },
    { id: "newest", label: "Newest First" },
  ];

  const filterTypes = [
    { id: "all", label: "All Products" },
    { id: "in-stock", label: "In Stock Only" },
    { id: "on-sale", label: "On Sale" },
  ];

  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
    // Call API immediately with current search term
    onFilterChange(categoryId, selectedFilterType, selectedSort, searchTerm);
  };

  const handleSortChange = (sortId) => {
    setSelectedSort(sortId);
    // Call API immediately with current search term
    onFilterChange(selectedCategory, selectedFilterType, sortId, searchTerm);
  };

  const handleFilterTypeChange = (filterTypeId) => {
    setSelectedFilterType(filterTypeId);
    // Call API immediately with current search term
    onFilterChange(selectedCategory, filterTypeId, selectedSort, searchTerm);
  };

  const handleSearchChange = (search) => {
    setSearchTerm(search);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      onFilterChange(
        selectedCategory,
        selectedFilterType,
        selectedSort,
        searchTerm,
      );
    }, 500);

    return () => clearTimeout(timer);
  }, [searchTerm]);

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      {/* Filters & Sort Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="relative md:col-span-2">
          <label htmlFor="search" className="sr-only">
            Search Products
          </label>
          <input
            type="text"
            id="search"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => handleSearchChange(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
          />
        </div>

        {/* Category Filter */}
        <div className="relative">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Category
          </label>
          <div className="relative">
            <select
              value={selectedCategory}
              onChange={(e) => handleCategoryChange(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
            >
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.label}
                </option>
              ))}
            </select>
            <ChevronDown
              size={18}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
            />
          </div>
        </div>

        {/* Sort By */}
        <div className="relative">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Sort By
          </label>
          <div className="relative">
            <select
              value={selectedSort}
              onChange={(e) => handleSortChange(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
            >
              {sortOptions.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.label}
                </option>
              ))}
            </select>
            <ChevronDown
              size={18}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
            />
          </div>
        </div>

        {/* Filter Type */}
        <div className="relative">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Filter
          </label>
          <div className="relative">
            <select
              value={selectedFilterType}
              onChange={(e) => handleFilterTypeChange(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
            >
              {filterTypes.map((type) => (
                <option key={type.id} value={type.id}>
                  {type.label}
                </option>
              ))}
            </select>
            <ChevronDown
              size={18}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
            />
          </div>
        </div>

        {/* Active Filters Summary */}
        <div className="flex flex-col justify-end">
          <div className="flex flex-wrap gap-2">
            {selectedCategory !== "all" && (
              <span className="inline-flex items-center gap-1 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">
                Category:{" "}
                {categories.find((c) => c.id === selectedCategory)?.label}
                <button
                  onClick={() => handleCategoryChange("all")}
                  className="hover:text-blue-900"
                >
                  ×
                </button>
              </span>
            )}
            {selectedFilterType !== "all" && (
              <span className="inline-flex items-center gap-1 bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                {filterTypes.find((f) => f.id === selectedFilterType)?.label}
                <button
                  onClick={() => handleFilterTypeChange("all")}
                  className="hover:text-green-900"
                >
                  ×
                </button>
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Collapse Info */}
      <div className="mt-4 text-xs text-gray-500">
        Sorting by:{" "}
        <span className="font-semibold">
          {sortOptions.find((s) => s.id === selectedSort)?.label}
        </span>
      </div>
    </div>
  );
};

export default FilterSort;
