import React from "react";
import { Star, ShoppingCart } from "lucide-react";

const ProductView = ({ product }) => {
  const discount = product.originalPrice
    ? Math.round(
        ((product.originalPrice - product.price) / product.originalPrice) * 100,
      )
    : 0;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow h-full flex flex-col">
      {/* Image Container */}
      <div className="relative bg-gray-100 h-64 overflow-hidden">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
        {discount > 0 && (
          <div className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
            -{discount}%
          </div>
        )}
        {!product.inStock && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <span className="text-white text-lg font-bold">Out of Stock</span>
          </div>
        )}
      </div>

      {/* Content Container */}
      <div className="p-4 flex-1 flex flex-col">
        {/* Brand & Category */}
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-semibold text-blue-600 uppercase tracking-wide">
            {product.brand}
          </span>
          <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
            {product.category}
          </span>
        </div>

        {/* Product Name */}
        <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={16}
                className={`${
                  i < Math.floor(product.rating)
                    ? "fill-yellow-400 text-yellow-400"
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-600">
            ({product.reviewCount} reviews)
          </span>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">
          {product.description}
        </p>

        {/* Features */}
        {product.features && product.features.length > 0 && (
          <div className="mb-3">
            <ul className="text-xs text-gray-700 space-y-1">
              {product.features.slice(0, 2).map((feature, idx) => (
                <li key={idx} className="flex items-center gap-1">
                  <span className="text-green-600">✓</span> {feature}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Tags */}
        {product.tags && product.tags.length > 0 && (
          <div className="mb-3 flex flex-wrap gap-1">
            {product.tags.slice(0, 2).map((tag, idx) => (
              <span
                key={idx}
                className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* Stock Status */}
        <div className="mb-3">
          <p
            className={`text-xs font-semibold ${
              product.inStock
                ? product.stock > 10
                  ? "text-green-600"
                  : "text-orange-600"
                : "text-red-600"
            }`}
          >
            {product.inStock
              ? `${product.stock} items in stock`
              : "Out of stock"}
          </p>
        </div>

        {/* Spacer */}
        <div className="flex-1"></div>

        {/* Price & Button */}
        <div className="border-t pt-3 space-y-3">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-gray-900">
              ${product.price.toFixed(2)}
            </span>
            {product.originalPrice && (
              <span className="text-lg text-gray-400 line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>
          <button
            disabled={!product.inStock}
            className={`w-full py-2 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors ${
              product.inStock
                ? "bg-blue-600 text-white hover:bg-blue-700"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            <ShoppingCart size={18} />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductView;
