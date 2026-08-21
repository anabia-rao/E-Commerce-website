import React, { useState } from "react";
import { mysupabase } from "../supabase";

function Adminpanel({ user, onProductsAdded }) {
  const [imageURL, setImageURL] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [name, setName] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [issignedup, setIsSignedup] = useState(false);

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (issignedup) {
      const { error } = await mysupabase.auth.signUp({
        email,
        password,
      });

      if (error) {
        alert("Error:" + error.message);
      } else {
        alert("Signed up successfully!");
      }
    } else {
      const { error } = await mysupabase.auth.signInWithPassword({
        email: email,
        password: password,
      });

      if (error) {
        alert("login Error:" + error.message);
      } else {
        alert("Logged in successfully!");
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { data, error } = await mysupabase
      .from("products")
      .insert([
        {
          image_URL: imageURL,
          description: description,
          price: Number(price),
          name: name,
          user_id: user.id,
          user_email: user.email,
        },
      ])
      .select()
      .single();

    if (error) {
      console.log("Product Insert Error:", error);
      alert("Error: " + error.message);
      return;
    }

    alert("Product added successfully!");

    setImageURL("");
    setDescription("");
    setPrice("");
    setName("");

    onProductsAdded(data);
  };
  if (!user) {
    return (
      <div className="adminpanel">
        <div className="auth-form">
          <h2 className="h33">
            🔐{issignedup ? " Admin Sign Up" : "Admin Log In"}
          </h2>
          <p className="para">First log in to add products</p>
          <form onSubmit={handleSignUp} className="Admin-form">
            <h2 className="h33">Email</h2>
            <input
              className="admin-input"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <h2 className="h33">Password</h2>
            <input
              className="admin-input"
              type="password"
              placeholder="At least 6 digits"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button type="submit" className="admin-btn">
              {issignedup ? "Sign Up" : "Log In"}
            </button>
          </form>
          <button
            onClick={() => setIsSignedup(!issignedup)}
            className="admin-btn"
          >
            {issignedup
              ? "Already have an account? Log In"
              : "Don't have an account? Sign Up"}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="adminpanelcontainer">
      <h2>Welcome, ➕ Add New Product {user.email}</h2>
      <form className="admin-form" onSubmit={handleSubmit}>
        <div className="parent-first">
          <div className="items-group">
            <label htmlFor="name" className="form-title">
              Name:
            </label>
            <input
              className="input"
              type="text"
              id="name"
              placeholder="Enter product name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="items-group">
            <label htmlFor="imageURL" className="form-title">
              Image URL:
            </label>
            <input
              className="input"
              type="text"
              id="imageURL"
              placeholder="Enter image URL"
              value={imageURL}
              onChange={(e) => setImageURL(e.target.value)}
            />
          </div>
        </div>
        <div className="parent-sec">
          <div className="items-group">
            <label htmlFor="description" className="form-title">
              Description:
            </label>
            <input
              className="input"
              type="text"
              id="description"
              placeholder="Enter product description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="items-group">
            <label htmlFor="price" className="form-title">
              Price:
            </label>
            <input
              className="input"
              type="number"
              id="price"
              placeholder="Enter price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
        </div>

        <button type="submit" className="admin-btn">
          Add Product
        </button>
      </form>
    </div>
  );
}

export default Adminpanel;
