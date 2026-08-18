import React from "react";
import './App.css';
import Home from "./components/home";
import Products from "./components/products";
const App = () => {
  return (
    <div className="App">
     <Home/>
     <Products/>
    </div>
  );
};
export default App;