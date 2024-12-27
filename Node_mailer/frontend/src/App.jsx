import React from "react";
import ProductListing from "./component/ProductListing.jsx";

const App = () => {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">E-Commerce Store</h1>
      <ProductListing />
    </div>
  );
};

export default App;
