import React from "react";

import banner from "../assets/banner.png";
function Home() {
  return (
    <div className="home">
      <main>
        <img className="banner" src={banner} alt="Mughal Foods" />
        <div className="home-content">
          <h1 style={{ fontSize: "2.5rem", fontWeight: "bold" }}>
            Welcome to Mughal Foods
          </h1>
          <p>Experience the taste of authentic Mughal cuisine.</p>
        </div>
      </main>
    </div>
  );
}
export default Home;
