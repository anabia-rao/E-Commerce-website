import React from "react";
import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/header";
import Home from "./components/home";
import Showproducts from "./components/products";
import Cart from "./components/cart";
import Adminpanel from "./components/Adminpanel";
import Footer from "./components/Footer";
import { mysupabase } from "./supabase";

const App = () => {
  const [user, setUser] = useState(null);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState("home");

  useEffect(() => {
    const { data: checkUser } = mysupabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user || null);
      },
    );
    return () => checkUser.subscription.unsubscribe();
  }, []);

  function addToCart(product) {
    const found = cart.find((item) => item.id === product.id);

    if (found) {
      setCart(
        cart.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item,
        ),
      );
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
    alert(product.title + " added to cart!");
  }

  async function getproducts() {
    const { data, error } = await mysupabase.from("products").select("*");

    if (error) {
      console.log("Product fetch error:", error);
      return;
    }

    setProducts(data);
  }

  useEffect(() => {
    getproducts();
  }, []);

  function changeQty(id, amount) {
    setCart(
      cart
        .map((item) => {
          if (item.id === id) {
            const newqty = item.qty + amount;
            return newqty > 0 ? { ...item, qty: newqty } : null;
          }
          return item;
        })
        .filter(Boolean),
    );
  }
  function onDelete(id) {
    setCart(cart.filter((item) => item.id !== id));
  }

  async function logout() {
    await mysupabase.auth.signOut();
    setPage("home");
  }

  const cartcount = (cart || []).reduce((total, item) => total + item.qty, 0);

  return (
    <div className="App">
      <Header
        page={page}
        setPage={setPage}
        user={user}
        onLogout={logout}
        cartCount={cartcount}
      />
      <div className="main">
        {page === "home" && (
          <>
            <Home />
            <Showproducts
              products={products}
              onAddToCart={addToCart}
              onGoToAdmin={() => setPage("admin")}
            />
          </>
        )}
        {page === "admin" && (
          <Adminpanel
            user={user}
            onProductsAdded={() => {
              addToCart();
              setPage("home");
            }}
          />
        )}
        {page === "cart" && (
          <Cart
            cart={cart}
            user={user}
            onChangeQty={changeQty}
            onDelete={onDelete}
            onClearCart={() => {
              setCart([]);
              setPage("home");
            }}
            onGoToHome={() => setPage("home")}
          />
        )}
      </div>
      <Footer />
    </div>
  );
};
export default App;
