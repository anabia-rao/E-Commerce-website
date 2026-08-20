import React from "react";
import burger from "../assets/burger.png";
import mysupabase from "../supabaseClient";
import pizza from "../assets/pizza.png";

function Products({ products = [], onGotoAdmin, onAddToCart }) {
  return (
    <div className="products">
      <div className="burger">
        <img className="burger" src={burger} alt="Burger" />
      </div>
      <div className="pizza">
        <img className="pizza" src={pizza} alt="Pizza" />
      </div>

      <div className="product section ">
        <h2>store items</h2>
        <p>browse items added by Admin</p>
        <button onClick={onGotoAdmin}>+ Add new items </button>
      </div>
      {products.length === 0 ? (
        <div className="Empty-product">
          <p>📦</p>
          <h3>No product found</h3>
          <button onClick={onGotoAdmin}>Goto Admin panael</button>
        </div>
      ) : (
        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="main-card">
              <img
                src={product.image_url}
                alt={product.title}
                className="img-tag"
              />
              <div className="product-info">
                <h3>{product.title}</h3>
                <p>{product.description || "No description ."}</p>
                <div className="pro-info">
                  <span className="price-tag">Rs{product.price}</span>
                  <button
                    onClick={() => onAddToCart(product)}
                    className="add-to-cart"
                  >
                    + Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
export default Products;
