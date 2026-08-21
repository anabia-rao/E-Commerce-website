import React from "react";
import { mysupabase } from "../supabase";

function Cart({
  cart = [],
  user,
  onChangeQty,
  onDelete,
  onClearCart,
  onGoToHome,
}) {
  const totalAmount = (cart || []).reduce(
    (total, item) =>
      total + Number(item.price || 0) * Number(item.qty || item.quantity || 0),
    0,
  );

  async function handleCheckout() {
    const { error } = await mysupabase.from("orders").insert([
      {
        user_email: user ? user.email : "guest@example.com",
        total_amount: totalAmount,
        items: cart,
      },
    ]);

    if (error) {
      alert("Order Failed: " + error.message);
    } else {
      alert(`🎉 Order Placed Successfully! Total: $${totalAmount.toFixed(2)}`);
      onClearCart();
    }
  }

  return (
    <div className="cart-page">
      <h2>Your shopping cart 🛒.</h2>
      {(cart || []).length === 0 ? (
        <div className="empty-cart">
          <span>🛒</span>
          <p>Your cart is empty.</p>
          <button onClick={onGoToHome} className="admin-btn">
            Continue Shopping
          </button>
        </div>
      ) : (
        <div className="card-grid">
          <div className="cart-length">
            {(cart || []).map((item) => {
              const itemQty = Number(item.qty || item.quantity || 0);

              return (
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
                  <div className="qty-control ">
                    <button
                      onClick={() => onChangeQty(item.id, -1)}
                      className="Qty-btn admin-btn"
                    >
                      -
                    </button>
                    <span className="qty-num">{itemQty}</span>
                    <button
                      onClick={() => onChangeQty(item.id, +1)}
                      className="Qty-btn admin-btn"
                    >
                      +
                    </button>
                  </div>
                  <span>
                    Rs {(Number(item.price || 0) * itemQty).toFixed(2)}
                  </span>
                  <button
                    onClick={() => onDelete(item.id)}
                    className="delete-btn admin-btn"
                  >
                    x
                  </button>
                </div>
              );
            })}
          </div>

          <div className="sumary-card">
            <h2>Order Summary</h2>
            <div>
              <span>Total Items : </span>
              <span> Rs{totalAmount.toFixed(2)}</span>
            </div>
            <div className="shipg">
              <span>shipping </span>
            </div>
            <div className="total">
              <strong> Total : </strong>
              <strong> Rs{totalAmount.toFixed(2)}</strong>
            </div>

            <button onClick={handleCheckout} className="check-btn admin-btn">
              Place Order 🚀
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
