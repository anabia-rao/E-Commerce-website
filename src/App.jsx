import React from "react";
import Header from "./components/header";
import './App.css';
const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <h1>Welcome to Mughal Foods</h1>
        <p>Experience the taste of authentic Mughal cuisine.</p>
      </main>
    </div>
  );
};
export default App;