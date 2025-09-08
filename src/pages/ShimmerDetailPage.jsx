import React from "react";

const ShimmerDetailPage = () => {
  return (
    <div className="animate-pulse">
      {/* Navbar Placeholder */}
      <div className="h-16 w-full bg-gray-200/70" />

      <div className="flex flex-col lg:flex-row gap-10 mt-10 px-6 lg:px-20">
        {/* Image Carousel Placeholder */}
        <div className="flex-1">
          <div className="w-full h-[400px] bg-gray-200 rounded-xl" />
          <div className="flex gap-4 mt-4">
            <div className="w-20 h-20 bg-gray-200 rounded-lg" />
            <div className="w-20 h-20 bg-gray-200 rounded-lg" />
            <div className="w-20 h-20 bg-gray-200 rounded-lg" />
          </div>
        </div>

        {/* Product Details Placeholder */}
        <div className="flex-1 space-y-6">
          <div className="h-8 w-2/3 bg-gray-200 rounded" />
          <div className="h-6 w-1/2 bg-gray-200 rounded" />

          <div className="flex items-center gap-4">
            <div className="h-6 w-20 bg-gray-200 rounded" />
            <div className="h-5 w-16 bg-gray-200 rounded" />
          </div>

          <div className="h-8 w-32 bg-gray-200 rounded" />
          <div className="h-6 w-24 bg-gray-200 rounded" />

          <div className="space-y-2">
            <div className="h-4 w-40 bg-gray-200 rounded" />
            <div className="h-4 w-56 bg-gray-200 rounded" />
            <div className="h-4 w-32 bg-gray-200 rounded" />
          </div>

          <div className="h-12 w-40 bg-gray-300 rounded-lg" />
        </div>
      </div>

      {/* Product Carousels Placeholder */}
      <div className="mt-16 space-y-12 px-6 lg:px-20">
        {[1, 2].map((i) => (
          <div key={i} className="space-y-6">
            <div className="h-8 w-48 bg-gray-200 rounded" />
            <div className="flex gap-6 overflow-x-auto">
              {[...Array(4)].map((_, idx) => (
                <div
                  key={idx}
                  className="w-48 flex-shrink-0 bg-gray-200 rounded-xl h-64"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShimmerDetailPage;
