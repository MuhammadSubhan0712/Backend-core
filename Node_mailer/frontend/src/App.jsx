import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductListing from "./ProductListing";

const App = () => {
  return (
    <div className="container my-5">
      <h1 className="text-center text-dark mb-4">E-Commerce Store</h1>
      <ProductListing />
    </div>
  );
};

export default App;
