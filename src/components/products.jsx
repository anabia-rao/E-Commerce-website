import React from "react";

function Showproducts({ products, onGoToAdmin, addToCart }) {
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
          {products.map((products) => (
            <div key={products.id} className="main-card">
              <img
                src={products.image_URL}
                alt={products.name}
                className="img-tag"
              />

              <div className="product-info">
                <h3>{products.name}</h3>

                <p>{products.description || "No description."}</p>

                <div className="pro-info">
                  <span className="price-tag">Rs {products.price}</span>

                  <button
                    onClick={() => addToCart(products)}
                    className="add-to-cart admin-btn"
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

export default Showproducts;
