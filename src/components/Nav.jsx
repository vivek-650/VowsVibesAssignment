import React, { useEffect, useState } from "react";
import { ShoppingCart } from "lucide-react";
import {
  useUser,
  SignInButton,
  UserButton,
  SignUpButton,
} from "@clerk/clerk-react";

const Nav = ({ cartCount = 0, onCartClick }) => {
  const { isSignedIn } = useUser();

  // Countdown state (3h 36m 15s = 12975 seconds)
  const [timeLeft, setTimeLeft] = useState(3 * 3600 + 36 * 60 + 15);

  useEffect(() => {
    if (timeLeft <= 0) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft]);

  // Convert seconds to HH:MM:SS format
  const formatTime = (seconds) => {
    const h = String(Math.floor(seconds / 3600)).padStart(2, "0");
    const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
    const s = String(seconds % 60).padStart(2, "0");
    return `${h}:${m}:${s}`;
  };

  return (
    <div>
      {/* Top banner with countdown */}
      <div className="bg-[#CA8787] text-white text-center py-2 text-sm">
        50% off on all items — Only Limited Time Deal! Offer ending in{" "}
        <span className="font-bold">{formatTime(timeLeft)}</span>
      </div>

      {/* Header */}
      <div className="w-full bg-[#FAF8F7] py-4 flex items-center justify-between px-25">
        <h1 className="text-xl font-bold">LOGO</h1>
        <div className="flex">
          <ul className="flex gap-6">
            <li>Collection</li>
            <li>Categories</li>
            <li>Hot Picks</li>
            <li>Gifts</li>
            <li>Shop All</li>
          </ul>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 items-center">
          {isSignedIn ? (
            <>
              <button className="relative" onClick={onCartClick}>
                <ShoppingCart className="w-8 h-8 text-[#FE8F9C] cursor-pointer" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full px-2 text-xs">
                    {cartCount}
                  </span>
                )}
              </button>
              <UserButton />
            </>
          ) : (
            <div className="flex gap-0">
              <SignInButton>
                <button className="w-35 bg-[#FE8F9C] text-white py-2 px-6 font-bold cursor-pointer">
                  LOGIN
                </button>
              </SignInButton>
              <span className="mx-1"></span>
              <SignUpButton>
                <button className="w-35 border border-[#FE8F9C] py-2 px-6 text-[#FE8F9C] font-bold cursor-pointer">
                  REGISTER
                </button>
              </SignUpButton>
            </div>
          )}
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="text-sm text-muted-foreground absolute top-[156px] left-[100px]">
        <span>Home</span> &gt; <span>Jewellery</span> &gt; <span>Gifts</span>{" "}
        &gt; <span>Necklace</span> &gt; <span>Chains</span> &gt;{" "}
        <span className="text-foreground">Shining Diva...</span>
      </div>
    </div>
  );
};

export default Nav;
