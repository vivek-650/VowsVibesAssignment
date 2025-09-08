"use client"
import { useState } from "react"
import { Heart } from "lucide-react"
// import { button } from "@/components/custom-button"

export function ProductCard({ product, onAddToCart, onWishlistToggle, isLoggedIn }) {
  const [isWishlisted, setIsWishlisted] = useState(false)

  const handleWishlistClick = () => {
    setIsWishlisted(!isWishlisted)
    onWishlistToggle?.(product.id)
  }

  const handleAddToCart = () => {
    if (isLoggedIn) {
      onAddToCart?.(product.id)
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden group hover:shadow-md transition-shadow">
      <a href={`/product/${product.id}`} className="block">
      {/* Product Image */}
      <div className="relative aspect-square bg-gray-100">
        {product.isBestSeller && (
          <div className="absolute top-2 left-0 bg-[#A50302] text-white text-xs px-8 py-1 rounded-r-xl z-10">BestSeller</div>
        )}

        <button
          onClick={handleWishlistClick}
          className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow z-10"
        >
          <Heart className={`h-4 w-4 ${isWishlisted ? "fill-red-500 text-red-500" : "text-gray-400"}`} />
        </button>

        <img src={product.image || "/placeholder.svg"} alt={product.name} className="w-full h-full object-cover" />
      </div>
      </a>

      {/* Product Info */}
      <div className="p-4">
        <h3 className="text-sm font-medium text-gray-900 mb-2 line-clamp-2">{product.name}</h3>

        <div className="flex items-center gap-2 mb-3">
          <span className="text-lg font-bold text-gray-900">₹ {product.price}</span>
          {product.originalPrice && (
            <span className="text-sm text-gray-500 line-through">₹ {product.originalPrice}</span>
          )}
        </div>

        <button
          onClick={handleAddToCart}
          className={`w-full px-4 py-1 rounded bg-[#CA8787] text-white ${isLoggedIn ? 'hover:bg-[#CA8787]/90' : 'opacity-50 cursor-not-allowed'}`}
          disabled={!isLoggedIn}
        >
          {isLoggedIn ? 'Add to Cart' : 'Login to Add'}
        </button>
      </div>
    </div>
  )
}
