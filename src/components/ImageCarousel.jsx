"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
// import { button } from "@/components/ui/button"

export default function ImageCarousel({ images, alt }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden">
        <img
          src={images[currentIndex] || "/placeholder.svg"}
          alt={alt}
          className="w-[651px] h-full object-cover"
        />

        {/* Navigation Arrows */}
        <button
          variant="outline"
          size="icon"
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full"
          onClick={prevImage}
        >
          <ChevronLeft className="h-4 w-4" />
        </button>

        <button
          variant="outline"
          size="icon"
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full"
          onClick={nextImage}
        >
          <ChevronRight className="h-4 w-4" />
        </button>

        {/* Play button Overlay */}
        <div className="absolute bottom-4 left-4">
          <div className="flex items-center gap-2 bg-black/60 text-white px-3 py-1 rounded-full text-sm">
            <Play className="h-3 w-3 fill-current" />
            <span>K</span>
            <span className="bg-white text-black px-1 rounded text-xs">$</span>
            <span>2</span>
          </div>
        </div>
        
      </div>
      {/* Thumbnail Navigation */}
        <div className="flex gap-2">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-16 h-16 rounded-lg overflow-hidden border-2 ${
                index === currentIndex ? "border-primary" : "border-gray-200"
              }`}
            >
              <img
                src={image || "/placeholder.svg"}
                alt={`${alt} view ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
    </div>
  );
}
