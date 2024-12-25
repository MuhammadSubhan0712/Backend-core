import React from "react";

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
          "https://images.pexels.com/photos/8823972/pexels-photo-8823972.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      {
        title: "Gaming Mouse",
        price: 29.99,
        image:
          "https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-10">
      <h2 className="text-4xl font-extrabold text-white text-center mb-10">
        Ecommerce Store
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((item, id) => (
          <div
            key={id}
            className="group relative p-5 bg-white shadow-2xl rounded-2xl hover:shadow-[0_10px_25px_rgba(0,0,0,0.3)] transition-shadow duration-300"
          >
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-yellow-400 to-red-500 opacity-70 blur-md group-hover:opacity-100 group-hover:blur-lg transition-all duration-500"></div>
            <div className="relative">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover rounded-t-xl"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800 group-hover:text-purple-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 group-hover:text-black mt-2">
                  ${item.price.toFixed(2)}
                </p>
                <button className="mt-4 block w-full py-2 px-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold rounded-lg hover:from-purple-600 hover:to-indigo-500 transition-all">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
