import React from 'react';
import * as RadixButton from '@radix-ui/react-button';

const Home = () => {
  const products = [
    {
      title: "Wireless Bluetooth Headphones",
      price: 59.99,
      image: "https://images.pexels.com/photos/14541034/pexels-photo-14541034.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      title: "Smartphone 128GB",
      price: 699.99,
      image: "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      title: "Gaming Laptop",
      price: 1199.99,
      image: "https://images.pexels.com/photos/19012051/pexels-photo-19012051/free-photo-of-modern-gaming-laptop-and-headphones-on-a-desk.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      title: "4K LED Smart TV",
      price: 399.99,
      image: "https://images.pexels.com/photos/28884413/pexels-photo-28884413/free-photo-of-modern-home-office-tech-setup-with-gadgets.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      title: "Stainless Steel Water Bottle",
      price: 15.99,
      image: "https://images.pexels.com/photos/7815021/pexels-photo-7815021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      title: "Noise-Cancelling Earbuds",
      price: 79.99,
      image: "https://images.pexels.com/photos/9610816/pexels-photo-9610816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      title: "Fitness Tracker Watch",
      price: 49.99,
      image: "https://plus.unsplash.com/premium_photo-1681433383783-661b519b154a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zml0bmVzcyUyMHRyYWNrZXJ8ZW58MHx8MHx8fDA%3D",
    },
    {
      title: "Portable Speaker",
      price: 25.99,
      image: "https://images.pexels.com/photos/19238583/pexels-photo-19238583/free-photo-of-magsafe-iphone-stand-oakywood.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      title: "Electric Toothbrush",
      price: 39.99,
      image: "https://images.pexels.com/photos/8823972/pexels-photo-8823972.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      title: "Gaming Mouse",
      price: 29.99,
      image: "https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="text-center py-8">
        <h2 className="text-3xl font-bold text-gray-800">Ecommerce Store</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6 pb-10">
        {products.length > 0 ? (
          products.map((item, id) => (
            <div
              key={id}
              className="bg-white shadow-lg rounded-lg p-4 transform hover:scale-105 transition-transform duration-200"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover rounded-t-md"
              />
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  {item.title}
                </h3>
                <p className="text-gray-600 mt-2">${item.price.toFixed(2)}</p>
                <RadixButton.Root className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500">
                  Add to cart
                </RadixButton.Root>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center">
            <h2 className="text-xl font-bold text-gray-800">No product found</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
