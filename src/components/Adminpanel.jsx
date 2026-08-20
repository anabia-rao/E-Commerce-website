import React from "react";
import { useState } from "react";
import mysupabase from "../supabaseClient";

function Adminpanel(user, onproductAdded) {
  const [imageURL, setImageURL] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [name, setName] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Issignedup, setIsSignedup] = useState(false);

  async function handleSignUp() {
    e.preventDefault();
    if (issignedup) {
      const { error } = await mysupabase.auth.signupWithPassword({
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
        email,
        password,
      });
      if (error) {
        alert("login Error:" + error.message);
      } else {
        alert("Logged in successfully!");
      }
    }
  }
  function handleSubmit(e) {
    e.preventDefault();
    // Handle form submission logic here
    const addproduct = async () => {
      const { data, error } = await mysupabase.from("products").insert([
        {
          image_URL: imageURL,
          description: description,
          price: Number(price),
          name: name,
          user_id: user.id,
          user_email: user.email,
        },
      ]);
      if (error) {
        alert("Error:" + error.message);
      } else {
        alert("Product added successfully!");
        setImageURL("");
        setDescription("");
        setPrice("");
        setName("");
        onproductAdded(data[0]);
      }
    };

    addproduct();
  }
  if (!user) {
    return (
      <div className="adminpanel">
        <div className="auth-form">
          <h2>🔐{issignedup ? " Admin Sign Up" : "Admin Log In"}</h2>
          <p>First log in to add products</p>
          <form onclick={handleSignUp}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Aleast 6 digits"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit">{issignedup ? "Sign Up" : "Log In"}</button>
          </form>
          <button onClick={() => setIsSignedup(!issignedup)}>
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
      <h2>Welcome,➕ Add New Product {user.email}</h2>
      <form onSubmit={handleSubmit}>
        <div className="items-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            placeholder="Enter product name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="items-group">
          <label htmlFor="imageURL">Image URL:</label>
          <input
            type="text"
            id="imageURL"
            placeholder="Enter image URL"
            value={imageURL}
            onChange={(e) => setImageURL(e.target.value)}
          />
        </div>
        <div className="items-group">
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            id="description"
            placeholder="Enter product description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="items-group">
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            placeholder="Enter price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}
export default Adminpanel;