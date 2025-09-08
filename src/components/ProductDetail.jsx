"use client";

import { useState } from "react";
import { toast } from "react-toastify";
import { Star, LucideTruck } from "lucide-react";
// import { button } from "@/components/custom-button"
// import { input } from "@/components/custom-input"

export default function ProductDetails({
  name,
  subtitle,
  rating,
  reviewCount,
  price,
  originalPrice,
  discount,
  features,
  description,
}) {
  const [pincode, setPincode] = useState("");

  // Razorpay payment handler
  const handleBuyNow = () => {
    const options = {
      key: "rzp_test_YourKeyHere", // Replace with your Razorpay key
      amount: price * 100,
      currency: "INR",
      name: name,
      description: subtitle,
      image: "https://yourdomain.com/logo.png",
      handler: function (response) {
        alert("Payment successful! Payment ID: " + response.razorpay_payment_id);
      },
      prefill: {
        name: "",
        email: "",
        contact: ""
      },
      theme: {
        color: "#CA8787"
      }
    };
    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  // Add to Cart handler
  const handleAddToCart = () => {
    // Get cart from localStorage
    const stored = localStorage.getItem('cartItems');
    const cart = stored ? JSON.parse(stored) : [];
    // Avoid duplicates
    if (!cart.some(item => item.name === name)) {
      cart.push({ name, subtitle, price, originalPrice, discount, image: features[0]?.icon });
      localStorage.setItem('cartItems', JSON.stringify(cart));
      window.dispatchEvent(new Event('storage'));
      toast.success('Item added to cart!');
    } else {
      toast.info('Item already in cart!');
    }
  };

  return (
    <div className="space-y-6">
      {/* Product Title */}
      <div>
        <h1 className="text-2xl font-bold text-foreground mb-2">{name}</h1>
        <p className="text-muted-foreground">{subtitle}</p>
      </div>

      {/* Rating */}
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-1 bg-green-600 text-white px-2 py-1 rounded text-sm">
          <span>{rating}</span>
          <Star className="h-3 w-3 fill-current" />
        </div>
        <span className="text-sm text-muted-foreground">({reviewCount})</span>
      </div>

      {/* Price */}
      <div className="flex items-center gap-3">
        <span className="text-3xl font-bold text-foreground">
          ₹ {price.toLocaleString()}
        </span>
        <span className="text-lg text-muted-foreground line-through">
          ₹ {originalPrice?.toLocaleString()}
        </span>
        <span className="text-green-600 font-medium">({discount})</span>
      </div>

      {/* Features */}
      <div className="grid grid-cols-2 gap-4">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center gap-3">
            {feature.icon}
            <span className="text-sm text-foreground">{feature.title}</span>
          </div>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3">
        <button
          className="flex-1 py-2 px-6 border border-[#CA8787] text-[#CA8787] hover:bg-[#CA8787]/10 bg-transparent"
          onClick={handleAddToCart}
        >
          ADD TO CART
        </button>
        <button
          className="flex-1 py-2 px-6 bg-[#CA8787] hover:bg-[#CA8787]/90 text-white"
          onClick={handleBuyNow}
        >
          BUY NOW
        </button>
      </div>

      {/* Delivery Estimation */}
      <div>
        <h3 className="font-semibold text-foreground mb-3">
          Estimated Delivery Time
        </h3>
        <div className="flex gap-2 border border-gray-700/20 px-3 py-2 rounded">
          <input
            placeholder="Enter Pincode"
            value={pincode}
            onChange={(e) => setPincode(e.target.value)}
            className="flex-1 focus:outline-none"
          />
          <button className="text-[#CA8787] border-[#CA8787] bg-transparent cursor-pointer">
            Check
          </button>
        </div>
      </div>

      {/* Offers */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <div className="flex gap-3 items-center">
            <span className="font-semibold text-foreground">Offers</span>
            <span className="text-sm text-muted-foreground">2 available</span>
          </div>
          
          <button variant="link" className="text-[#CA8787] p-0 h-auto">
            Check
          </button>
        </div>
        <p className="text-sm text-muted-foreground">
          Coupon can be applied at checkout
        </p>
      </div>

      {/* Product Description */}
      <div>
        <h3 className="font-semibold text-foreground mb-3">
          Product Description
        </h3>
        <ul className="space-y-2 text-sm">
          <li className="flex items-center gap-2">
            <span className="text-green-600">✓</span>
            <span>
              <strong>Material:</strong> {description.material}
            </span>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-green-600">✓</span>
            <span>
              <strong>Plating:</strong> {description.plating}
            </span>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-green-600">✓</span>
            <span>
              <strong>Weight:</strong> {description.weight}
            </span>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-green-600">✓</span>
            <span>
              <strong>Stone Type:</strong> {description.stoneType}
            </span>
          </li>
        </ul>
      </div>
      {/* Shipping */}
      <section className="mb-6">
        <h4 className="font-medium">Shipping</h4>
        <p className="text-sm text-gray-600">
          Get it by <span className="text-pink-400 font-semibold">25 Sept</span>
        </p>
      </section>

      <hr className="my-2 text-pink-600" />

      {/* Customer Ratings / Reviews */}
      <section>
        <h3 className="text-xl font-medium mb-2">Customer Ratings</h3>
        <hr className="my-2 text-pink-600" />

        <Review
          name="Anu"
          date="15/08/24"
          text="Such a gorgeous necklace. Got many compliments as well. Absolutely loved it"
          images={2}
        />

        <hr className="my-2 text-pink-600" />

        <Review
          name="Anu"
          date="15/08/24"
          text={
            "Looks beautiful 😍❤️❤️❤️ Go for it girls 😍💝🌸 the quality is good .."
          }
          images={1}
        />
      </section>
    </div>
  );
}
function Review({ name, date, text, images = 0 }) {
  return (
    <div className="py-4">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-400">
          👤
        </div>
        <div>
          <div className="font-medium">{name}</div>
          <div className="text-xs text-gray-400">{date}</div>
        </div>
      </div>

      <p className="mt-3 text-sm text-gray-700">{text}</p>

      {images > 0 && (
        <div className={`mt-3 grid grid-cols-${images} gap-3`}>
          {Array.from({ length: images }).map((_, i) => (
            <div key={i} className="w-full h-28 bg-gray-200 rounded" />
          ))}
        </div>
      )}
    </div>
  );
}
