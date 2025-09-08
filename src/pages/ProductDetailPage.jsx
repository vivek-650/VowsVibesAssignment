import React, { useState } from 'react';
import { ClerkProvider, useUser } from '@clerk/clerk-react';
import CartPage from '../components/CartPage';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Award, ChevronLeft, ChevronRight, Heart, Shield, Star, Truck } from 'lucide-react'
import Nav from '../components/Nav';
import ImageCarousel from '../components/ImageCarousel'
import ProductDetail from '../components/ProductDetail'
import ProductCarousel from '../components/ProductCarousel'
import ShimmerDetailPage from './ShimmerDetailPage';

const productImages = [
  "/gold-plated-pearls-necklace.jpg",
  "/gold-necklace-detail-view.jpg",
  "/jewelry-close-up-pearls.jpg",
]
const similarProducts = [
  {
    id: "1",
    name: "Rose Gold Earrings with alloy",
    price: 1999,
    originalPrice: 2999,
    image: "/rose-gold-earrings.jpg",
    isBestSeller: true,
  },
  {
    id: "2",
    name: "Rose Gold Earrings with alloy",
    price: 1999,
    originalPrice: 2999,
    image: "/gold-earrings-jewelry.jpg",
    isBestSeller: true,
  },
  {
    id: "3",
    name: "Rose Gold Earrings with alloy",
    price: 1999,
    originalPrice: 4999,
    image: "/elegant-earrings.jpg",
    isBestSeller: true,
  },
  {
    id: "4",
    name: "Rose Gold Earrings with alloy",
    price: 1999,
    originalPrice: 2999,
    image: "/luxury-earrings.jpg",
    isBestSeller: true,
  },
  {
    id: "10",
    name: "Rose Gold Earrings with alloy",
    price: 1999,
    originalPrice: 2999,
    image: "/rose-gold-earrings.jpg",
    isBestSeller: true,
  },
]

const topPicks = [
  {
    id: "5",
    name: "Rose Gold Earrings with alloy",
    price: 1999,
    originalPrice: 2999,
    image: "/premium-earrings.jpg",
    isBestSeller: true,
  },
  {
    id: "6",
    name: "Rose Gold Earrings with alloy",
    price: 1999,
    originalPrice: 2999,
    image: "/designer-earrings.jpg",
    isBestSeller: true,
  },
  {
    id: "7",
    name: "Rose Gold Earrings with alloy",
    price: 1999,
    originalPrice: 4999,
    image: "/fashion-earrings.jpg",
    isBestSeller: true,
  },
  {
    id: "8",
    name: "Rose Gold Earrings with alloy",
    price: 1999,
    originalPrice: 2999,
    image: "/trendy-earrings.jpg",
    isBestSeller: true,
  },
  {
    id: "9",
    name: "Rose Gold Earrings with alloy",
    price: 1999,
    originalPrice: 2999,
    image: "/trendy-earrings.jpg",
    isBestSeller: true,
  },
]

const productFeatures = [
  {
    icon: <Truck className="h-5 w-5 text-gray-600" />,
    title: "Easy 30 Day Return",
  },
  {
    icon: <Shield className="h-5 w-5 text-gray-600" />,
    title: "925 Silver Plating",
  },
  {
    icon: <Award className="h-5 w-5 text-gray-600" />,
    title: "6-Month Warranty",
  },
  {
    icon: <Heart className="h-5 w-5 text-gray-600" />,
    title: "Premium Gold",
  },
]
const ProductDetailPage = () => {
  const { isSignedIn } = useUser();
  const [cartItems, setCartItems] = useState(() => {
    const stored = localStorage.getItem('cartItems');
    return stored ? JSON.parse(stored) : [];
  });
  const navigate = useNavigate();
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  // Simulate loading for shimmer
  React.useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 700);
    return () => clearTimeout(timer);
  }, [id]);

  const handleAddToCart = (id) => {
    if (!isSignedIn) return;
    const product = [...similarProducts, ...topPicks].find(p => p.id === id);
    if (product && !cartItems.some(item => item.id === id)) {
      const updatedCart = [...cartItems, product];
      setCartItems(updatedCart);
      localStorage.setItem('cartItems', JSON.stringify(updatedCart));
      toast.success('Item added to cart!');
    }
  };


  const handleWishlistToggle = (id) => {
    console.log("Toggle wishlist:", id);
  };

  // Find product by id from all products
  const allProducts = [...similarProducts, ...topPicks];
  const product = id ? allProducts.find(p => p.id === id) : null;
  if(isLoading){
    return <ShimmerDetailPage/>
  }else{
    return (
    <div>
      <Nav cartCount={cartItems.length} onCartClick={() => navigate('/cart')} />
      <div className='display flex gap-15 mt-30 px-25'>
        {product ? (
          <>
            <ImageCarousel images={[product.image]} alt={product.name} />
            <ProductDetail
              name={product.name}
              subtitle={product.subtitle || "Made with 925 Silver"}
              rating={product.rating || 4.1}
              reviewCount={product.reviewCount || 23}
              price={product.price}
              originalPrice={product.originalPrice}
              discount={product.discount || "20% off"}
              features={productFeatures}
              description={product.description || {
                material: "925 Silver",
                plating: "18K Gold",
                weight: "10grams",
                stoneType: "Premium Jerkin",
              }}
            />
          </>
        ) : (
          <>
            <ImageCarousel images={productImages} alt="Gold-Plated Pearls Necklace" />
            <ProductDetail
              name="Gold-Plated Pearls Necklace"
              subtitle="Made with 925 Silver"
              rating={4.1}
              reviewCount={23}
              price={1600}
              originalPrice={2000}
              discount="20% off"
              features={productFeatures}
              description={{
                material: "925 Silver",
                plating: "18K Gold",
                weight: "10grams",
                stoneType: "Premium Jerkin",
              }}
            />
          </>
        )}
      </div>
      {/* Product Carousels */}
      <ProductCarousel
        title="Similar to this"
        products={similarProducts}
        onAddToCart={handleAddToCart}
        onWishlistToggle={handleWishlistToggle}
        isLoggedIn={isSignedIn}
      />
      <ProductCarousel
        title="Top picks for you"
        products={topPicks}
        onAddToCart={handleAddToCart}
        onWishlistToggle={handleWishlistToggle}
        isLoggedIn={isSignedIn}
      />
    </div>
  );
  }
  
}

export default ProductDetailPage