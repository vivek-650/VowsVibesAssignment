import React, { useEffect, useState } from "react";

const CartPage = ({ cartItems }) => {
  const [items, setItems] = useState(cartItems || []);

  // Load from localStorage if no props
  useEffect(() => {
    if (!cartItems) {
      const stored = localStorage.getItem("cartItems");
      setItems(stored ? JSON.parse(stored) : []);
    }
  }, [cartItems]);

  const handleRemove = (id) => {
    const updated = items.filter((item) => item.id !== id);
    setItems(updated);
    localStorage.setItem("cartItems", JSON.stringify(updated));
  };

  const total = items.reduce((sum, item) => sum + Number(item.price), 0);

  const handleCheckout = () => {
    if (items.length === 0) {
      alert("Your cart is empty.");
      return;
    }

    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID, // ✅ loaded from .env
      amount: total * 100, // amount in paise
      currency: "INR",
      name: "Luxury Jewellery",
      description: "Order Payment",
      image: "/logo.png",
      handler: function (response) {
        alert(`✅ Payment successful! Payment ID: ${response.razorpay_payment_id}`);
        localStorage.removeItem("cartItems");
        setItems([]);
      },
      prefill: {
        name: "Guest User",
        email: "guest@example.com",
        contact: "9999999999",
      },
      theme: {
        color: "#d4af37",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-12 font-serif bg-gradient-to-b from-white to-[#faf7f2]">
      <h2 className="text-4xl font-bold text-center mb-12 tracking-wide text-gray-800">
        Your Cart
      </h2>

      {items.length === 0 ? (
        <div className="text-gray-500 text-xl text-center py-16 bg-white/70 rounded-xl shadow-inner border border-[#e5d3b3]">
          Your cart is empty.
        </div>
      ) : (
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-8">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-6 p-6 border border-[#e5d3b3]/70 rounded-2xl bg-white/70 shadow-sm hover:shadow-md transition"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-28 h-28 object-cover rounded-xl border border-[#e5d3b3]"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-lg tracking-wide text-gray-800">
                    {item.name}
                  </h3>
                  <div className="text-xl font-bold bg-gradient-to-r from-yellow-700 to-yellow-500 bg-clip-text text-transparent">
                    ₹ {item.price}
                  </div>
                </div>
                <button
                  onClick={() => handleRemove(item.id)}
                  className="px-4 py-2 border border-red-400 text-red-500 rounded-lg hover:bg-red-50 transition"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* Cart Summary */}
          <div className="bg-white/80 p-8 rounded-2xl shadow-lg border border-[#e5d3b3] backdrop-blur">
            <h3 className="text-2xl font-bold mb-6 text-gray-800 tracking-wide">
              Order Summary
            </h3>
            <div className="flex justify-between mb-3 text-gray-700">
              <span>Subtotal</span>
              <span>₹ {total}</span>
            </div>
            <div className="flex justify-between mb-3 text-gray-700">
              <span>Shipping</span>
              <span className="text-green-600">Free</span>
            </div>
            <hr className="my-5 border-[#e5d3b3]" />
            <div className="flex justify-between text-xl font-bold mb-8">
              <span>Total</span>
              <span className="bg-gradient-to-r from-yellow-700 to-yellow-500 bg-clip-text text-transparent">
                ₹ {total}
              </span>
            </div>
            <button
              onClick={handleCheckout}
              className="w-full py-4 rounded-xl font-semibold tracking-wide text-lg text-white bg-gradient-to-r from-yellow-700 to-yellow-500 shadow-md hover:shadow-lg transition"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
