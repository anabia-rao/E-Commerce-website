import React from "react";

function Showprodu ({ products, onAddToCart, onGoToAdmin }) {
  return (
    <div className="products">
      <div className="product-section">
        <h2>Store Items</h2>
        <p>Browse items added by Admin</p>
        <button onClick={onGoToAdmin} className="admin-btn">
          + Add New Item
        </button>
      </div>

      {products.length === 0 ? (
        <div className="Empty-product">
          <p>📦</p>

          <h3>No Product Found</h3>

          <button onClick={onGoToAdmin} className="admin-btn">
            Go To Admin Panel
          </button>
        </div>
      ) : (
        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="main-card">
              <img
                src={product.image_URL}
                alt={product.name}
                className="img-tag"
              />

              <div className="product-info">
                <h3>{product.name}</h3>

                <p>{product.description || "No description."}</p>

                <div className="pro-info">
                  <span className="price-tag">Rs {product.price}</span>

                  <button 
                      onClick={() => onAddToCart(product)} 
                      className="add-to-cart-btn admin-btn"
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

export default Showprodu;
