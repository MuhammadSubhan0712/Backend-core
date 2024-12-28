import React from "react";
import { Link } from "react-router-dom";


const Home = () => {
  const products = [
    {
      title: "Wireless Bluetooth Headphones",
      price: 59.99,
      image:
        "https://images.pexels.com/photos/14541034/pexels-photo-14541034.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      title: "Smartphone 128GB",
      price: 699.99,
      image:
        "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      title: "Gaming Laptop",
      price: 1199.99,
      image:
        "https://images.pexels.com/photos/19012051/pexels-photo-19012051/free-photo-of-modern-gaming-laptop-and-headphones-on-a-desk.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      title: "4K LED Smart TV",
      price: 399.99,
      image:
        "https://images.pexels.com/photos/28884413/pexels-photo-28884413/free-photo-of-modern-home-office-tech-setup-with-gadgets.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      title: "Stainless Steel Water Bottle",
      price: 15.99,
      image:
        "https://images.pexels.com/photos/7815021/pexels-photo-7815021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      title: "Noise-Cancelling Earbuds",
      price: 79.99,
      image:
        "https://images.pexels.com/photos/9610816/pexels-photo-9610816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      title: "Fitness Tracker Watch",
      price: 49.99,
      image:
        "https://plus.unsplash.com/premium_photo-1681433383783-661b519b154a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zml0bmVzcyUyMHRyYWNrZXJ8ZW58MHx8MHx8fDA%3D",
    },
    {
      title: "Portable Speaker",
      price: 25.99,
      image:
        "https://images.pexels.com/photos/19238583/pexels-photo-19238583/free-photo-of-magsafe-iphone-stand-oakywood.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      title: "Electric Toothbrush",
      price: 39.99,
      image:
        "https://www.health.com/thmb/MMdfrhzTd8sC-XGIPOPgdwpqEOY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/HLT-Group-Electric-Toothbrushes-tamara-staples-0625-2000-ac77f54d9fdb4b22993318f78ca6137f.jpg",
    },
    {
      title: "Gaming Mouse",
      price: 29.99,
      image:
        "https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  
  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-100 via-green-200 to-cyan-100 p-10">
      <h2 className="text-4xl font-extrabold text-gray-600 text-center mb-10">
        Ecommerce Store
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((item, id) => (
          <div
            key={id}
            className="relative bg-white shadow-2xl rounded-2xl overflow-hidden hover:scale-105 cursor:pointer transition-transform duration-300">
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-tr from-yellow-400 to-red-500 blur-md opacity-60 hover:opacity-90 transition-all duration-500"></div>
            {/* Content */}
            <div className="relative z-10">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-60 object-cover rounded-t-2xl"
              />
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-800 hover:text-red-900 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 hover:text-black font-bold mt-2">
                  ${item.price.toFixed(2)}
                </p>
                <button onClick={() => addToCart(item)} className="mt-4 block w-full py-3 px-4 bg-gradient-to-r from-indigo-800 to-purple-800 text-white font-bold rounded-lg shadow-lg hover:from-purple-900 hover:to-indigo-900 transition-all">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center mt-5 mb-5">
        <Link to={'/checkout'}>
        <button
          className="p-2 bg-green-800 text-white text-xl border-2 border-cyan-500 rounded-xl hover:text-blue-500 cursor-pointer active:bg-green-300 active:text-gray-600"
          >
          {" "}
          Checkout
        </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
