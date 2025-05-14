"use client";
import React from "react";

const Home = () => {
    
  return (
    <div>
      <h1>This is Home Page</h1>
      <button
        onClick={() => {
          console.log("Clicked");
        }}
      >
        Add
      </button>
    </div>
  );
};

export default Home;
