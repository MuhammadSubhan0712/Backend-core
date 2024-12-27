import React from "react";



const ProductListing = () => {
  const products = [
    {
      id: 1,
      name: "Smartphone",
      price: "$699",
      image: "https://via.placeholder.com/150",
      description: "Latest smartphone with advanced features.",
    },
    {
      id: 2,
      name: "Headphones",
      price: "$199",
      image: "https://via.placeholder.com/150",
      description: "Noise-cancelling over-ear headphones.",
    },
    {
      id: 3,
      name: "Smartwatch",
      price: "$299",
      image: "https://via.placeholder.com/150",
      description: "Track your fitness and stay connected.",
    },
    {
      id: 4,
      name: "Gaming Console",
      price: "$499",
      image: "https://via.placeholder.com/150",
      description: "Experience immersive gaming like never before.",
    },
  ];
  return (
    <div className="row g-4">
      {products.map((product) => (
        <div className="col-md-3" key={product.id}>
          <div className="card product-card shadow-lg border-0">
            <div className="product-image-wrapper">
              <img
                src={product.image}
                className="card-img-top product-image"
                alt={product.name}
              />
            </div>
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text text-muted">{product.description}</p>
              <p className="card-text fw-bold">{product.price}</p>
              <button className="btn btn-primary w-100">Add to Cart</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
};

export default ProductListing;
