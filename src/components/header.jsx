import React from "react";
import "../App.css";

function Header() {
  return (
    <header>
      <div>
        <h2 className="brand-logo" onClick={() => setpage("home")}>
          <img src="../logo.png/public" alt="" />
          MUghal Food
        </h2>
        <nav className="nav-links">
          <button
            className={`nav-btn ${page === "admin" ? "active" : ""}`}
            onClick={() => setPage("admin")}
          >
            Home
          </button>
          <button
            className={`nav-btn ${page === "admin" ? "active" : ""}`}
            onClick={() => setPage("admin")}
          >
            {user ? "+ Add product" : "🔐Admin "}
          </button>
          <button
            className={`nav-btn ${page === "admin" ? "active" : ""}`}
            onClick={() => setPage("admin")}
          >
            🛒 Cart ({cartCount})
          </button>
        </nav>
       {user ? (
         <div className="user-profile">
              <span className="user-email">{user.email}</span>
              <button onClick={onLogout} className="logout-btn">Logout</button>
            </div>
          ) : (
            <button onClick={() => setPage('admin')} className="admin-login-btn">
              Login as Admin
            </button>
          )}
        </div>
    </header>
  );
}
export default Header;
