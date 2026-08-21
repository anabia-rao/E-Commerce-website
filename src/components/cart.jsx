import React from "react";  
import { mysupabase } from "../supabase";

function Cart({
  user,
  onchangeQty,
  cartItems,
  onDelete,
  onclearCart,
  Gotohome,
}) {
  const TotalPrice = (cartItems || []).reduce(
    (total, item) =>
      total + Number(item.price || 0) * Number(item.quantity || 0),
    0
  );

  async function handleCheckout() {
    if (!user) {
      alert("Please log in to place an order.");
      return;
    }

    const { error } = await mysupabase.from("orders").insert([
      {
        user_id: user.id,
        user_email: user.email,
        total_price: TotalPrice,
        items: JSON.stringify(cartItems),
      },
    ]);

    if (error) {
      alert("Error: " + error.message);
    } else {
      alert("Order placed successfully!");
      onclearCart();
    }
  }

  return (
    <div className="cart-page">
      <h2>Your shopping cart 🛒.</h2>
      {(cartItems || []).length === 0 ? (
        <div className="empty-cart">
          <span>🛒</span>
          <p>Your cart is empty.</p>
          <button onClick={Gotohome} className="admin-btn">
            Continue Shopping
          </button>
        </div>
      ) : (
        <div className="card-grid">
          <div className="cart-length">
            {(cartItems || []).map((item) => (
              <div className="cart-details" key={item.id}>
                <img
                  src={item.image_URL || "https://via.placeholder.com/60"}
                  alt={item.name}
                  className="cart-img"
                />
                <div className="cart-row-detail">
                  <h4>{item.name}</h4>
                  <span className="price-product">{item.price}</span>
                </div>
                <div className="qty-control">
                  <button
                    onClick={() => onchangeQty(item.id, -1)}
                    className="Qty-btn"
                  >
                    -
                  </button>
                  <span className="qty-num">{item.quantity}</span>
                  <button
                    onClick={() => onchangeQty(item.id, +1)}
                    className="Qty-btn"
                  >
                    +
                  </button>
                </div>
                <span>Rs {(Number(item.price || 0) * Number(item.quantity || 0)).toFixed(2)}</span>
                <button
                  onClick={() => onDelete(item.id)}
                  className="delete-btn"
                >
                  x
                </button>
              </div>
            ))}
          </div>

          <div className="sumary-card">
            <h2>Order Summary</h2>
            <div>
              <span>Total Items : </span>
              <span> Rs{TotalPrice.toFixed(2)}</span>
            </div>
            <div className="shipg">
              <span>shipping </span>
            </div>
            <div className="total">
              <strong> Total : </strong>
              <strong> Rs{TotalPrice.toFixed(2)}</strong>
            </div>

            <button onClick={handleCheckout} className="check-btn">
              Place Order 🚀
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
