
import React from "react";
import Navbar from "../components/Navbar";
import "./Home.css";

// ========================================
// PRODUCT DATA
// ========================================

const products = [
  {
    id: 1,
    name: "boAt Rockerz 450",
    category: "Electronics",
    price: 1599,
    rating: 4.5,
    reviews: 1200,
    image: "/images/products/headphones.png",
  },
  {
    id: 2,
    name: "Noise ColorFit Pro 4",
    category: "Electronics",
    price: 2999,
    rating: 4.6,
    reviews: 2300,
    image: "/images/products/noisefit.png",
  },
  {
    id: 3,
    name: "Red Tape Sneakers",
    category: "Fashion",
    price: 2099,
    rating: 4.5,
    reviews: 890,
    image: "/images/products/sneakers.png",
  },
  {
    id: 4,
    name: "Levi's Jeans",
    category: "Fashion",
    price: 2099,
    rating: 4.5,
    reviews: 890,
    image: "/images/products/jeans.png",
  },
  {
    id: 5,
    name: "boAt Airdopes 141",
    category: "Electronics",
    price: 1299,
    rating: 4.4,
    reviews: 3400,
    image: "/images/products/airdopes.png",
  },
  {
    id: 6,
    name: "iPhone 17 Pro Max",
    category: "Electronics",
    price: 124000,
    rating: 4.9,
    reviews: 2100,
    image: "/images/products/iphone.png",
  },
  {
    id: 7,
    name: "Men's Casual Shirt",
    category: "Fashion",
    price: 899,
    rating: 4.3,
    reviews: 760,
    image: "/images/products/ferrari.png",
  },
  {
    id: 8,
    name: "Minimalist Table Lamp",
    category: "Home & Kitchen",
    price: 1199,
    rating: 4.5,
    reviews: 540,
    image: "/images/products/lamp.png",
  },
];

// ========================================
// HOME COMPONENT
// ========================================

function Home() {
  return (
    <>
      {/* NAVBAR */}
      <Navbar />

      {/* ========================================
          HERO SECTION
      ======================================== */}

      <section className="hero-section">
        <div className="hero-content">
          <h1>
            Good Choices.
            <br />
            <span>Great Prices.</span>
          </h1>

          <p>
            Everything you need,
            <br />
            delivered to your door.
          </p>

          {/* Hero Buttons */}
          <div className="hero-buttons">
            <button type="button" className="shop-btn">
              Shop Now →
            </button>

            <button type="button" className="deal-btn">
              Explore Deals
            </button>
          </div>

          {/* Hero Benefits */}
          <div className="hero-benefits">
            <div className="benefit-item">
              <img src="/icons/secure.png" alt="Secure Payments" />
              <p>100% Secure Payments</p>
            </div>

            <div className="benefit-item">
              <img src="/icons/clock.png" alt="Easy Returns" />
              <p>7 Days Easy Returns</p>
            </div>

            <div className="benefit-item">
              <img
                src="/icons/express-delivery.png"
                alt="Fast Delivery"
              />
              <p>Fast & Free Delivery</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================
          SHOP BY CATEGORY
      ======================================== */}

      <section className="category-section">
        <div className="section-heading">
          <h2>Shop by Category</h2>

          <a href="/categories">
            View All Categories →
          </a>
        </div>

        <div className="category-list">
          <div className="category-card electronics">
            <img
              src="/images/category-electronics.png"
              alt="Electronics"
            />
            <h3>Electronics</h3>
            <p>1200+ Products</p>
          </div>

          <div className="category-card fashion">
            <img
              src="/images/category-fashion.png"
              alt="Fashion"
            />
            <h3>Fashion</h3>
            <p>1800+ Products</p>
          </div>

          <div className="category-card home-kitchen">
            <img
              src="/images/category-home.png"
              alt="Home and Kitchen"
            />
            <h3>Home & Kitchen</h3>
            <p>950+ Products</p>
          </div>

          <div className="category-card beauty">
            <img
              src="/images/category-beauty.png"
              alt="Beauty and Personal Care"
            />
            <h3>Beauty & Personal Care</h3>
            <p>750+ Products</p>
          </div>

          <div className="category-card sports">
            <img
              src="/images/category-fitness.png"
              alt="Sports and Fitness"
            />
            <h3>Sports & Fitness</h3>
            <p>600+ Products</p>
          </div>

          <div className="category-card books">
            <img
              src="/images/category-books.png"
              alt="Books and Stationery"
            />
            <h3>Books & Stationery</h3>
            <p>500+ Products</p>
          </div>
        </div>
      </section>

      {/* ========================================
          TRENDING PRODUCTS
      ======================================== */}

      <section className="products-section" id="trending">
        {/* Section Heading */}
        <div className="section-heading">
          <div className="trending-heading">
            <h2 className="trending-title">
              <span className="trending-icon">
                <img src="/icons/trending.png" alt="" />
              </span>

              <span>
                Trending <strong>Now</strong>
              </span>
            </h2>

            <div className="trending-accent"></div>

            <p className="trending-subtitle">
              Most popular choices this week
            </p>
          </div>

          <a href="/products" className="view-products">
            View All Products →
          </a>
        </div>

        {/* Product Grid */}
        <div className="product-grid">
          {products.map((product) => (
            <div className="product-card" key={product.id}>
              {/* Product Image */}
              <div className="product-image">
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                />
              </div>

              {/* Product Details */}
              <div className="product-details">
                <div className="product-meta">
                  <span className="product-category">
                    {product.category}
                  </span>

                  <span className="product-rating">
                    ⭐ {product.rating} ({product.reviews})
                  </span>
                </div>

                <h3>{product.name}</h3>

                {/* Product Price */}
                <div className="product-price">
                  ₹{product.price.toLocaleString("en-IN")}
                </div>

                {/* Product Actions */}
                <div className="product-actions">
                  <button
                    type="button"
                    className="buy-now-button"
                  >
                    Buy Now
                  </button>

                  <button
                    type="button"
                    className="cart-button"
                    aria-label={`Add ${product.name} to cart`}
                  >
                    <img
                      src="/icons/product-cart.png"
                      alt=""
                    />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;
