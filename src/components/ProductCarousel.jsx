"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
// import { button } from "@/components/ui/button"
import { ProductCard } from "./ProductCard";

export default function ProductCarousel({
  title,
  products,
  onAddToCart,
  onWishlistToggle,
  isLoggedIn = false,
}) {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div className="mb-12 px-8">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-center flex-1">{title}</h2>
      </div>

      {/* Carousel Row: Buttons + Cards */}
      <div className="flex items-center w-full">
        <button
          onClick={scrollLeft}
          className="mx-2 p-3 rounded-full bg-gray-200 hover:bg-gray-300 shadow-lg flex items-center justify-center"
          style={{ minWidth: 20, minHeight: 20 }}
        >
          <ChevronLeft className="h-6" />
        </button>
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide pb-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {products.map((product) => (
            <div key={product.id} className="flex-none w-64">
              <ProductCard
                product={product}
                onAddToCart={onAddToCart}
                onWishlistToggle={onWishlistToggle}
                isLoggedIn={isLoggedIn}
              />
            </div>
          ))}
        </div>
        <button
          onClick={scrollRight}
          className="mx-2 p-3 rounded-full bg-gray-200 hover:bg-gray-300 shadow-lg flex items-center justify-center"
          style={{ minWidth: 20, minHeight: 20 }}
        >
          <ChevronRight className="h-6" />
        </button>
      </div>
    </div>
  );
}
