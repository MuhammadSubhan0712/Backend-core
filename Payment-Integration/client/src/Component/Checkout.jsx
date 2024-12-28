import React , {useState} from "react";
import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";

const Checkout = () => {
  const cartItems = [
    {
      title: "Wireless Bluetooth Headphones",
      price: 59.99,
      quantity: 1,
      image:
        "https://images.pexels.com/photos/14541034/pexels-photo-14541034.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      title: "Smartphone 128GB",
      price: 699.99,
      quantity: 2,
      image:
        "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      title: "Gaming Laptop",
      price: 1199.9,
      quantity: 4,
      image:
        "https://images.pexels.com/photos/19012051/pexels-photo-19012051/free-photo-of-modern-gaming-laptop-and-headphones-on-a-desk.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      title: "4K LED Smart TV",
      price: 399.99,
      quantity: 3,
      image:
        "https://images.pexels.com/photos/28884413/pexels-photo-28884413/free-photo-of-modern-home-office-tech-setup-with-gadgets.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  const [items , setItems] = useState([...cartItems]);
  
  const PayNow = async () => {
    const stripe = await loadStripe();
  
  const response = await axios.post("http://localhost:3000/api/v1/checkout", {
    products: items,
  });

  console.log(response.data.id);

  const result = stripe.redirectToCheckout({
    sessionId: response.data.id,
  });
};

  const MinusItem = (index) => {
    items[index].quantity -=1;
    setItems([...items]);
  }

  const AddItem = (index) => {
    items[index].quantity +=1;
    setItems([...items]);
  }

  const Delete = (index) => {
    items.splice(index , 1);
    setItems([...items]);
  }
  return(
  <>
  <div className="min-h-screen bg-gradient-to-r from-blue-50 via-white to-blue-50 p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Your Cart</h1>

      {items.length === 0 ? (
        <div className="text-center text-gray-500">
          <p>Your cart is empty.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <div
              key={item.id}
              className="bg-white shadow-2xl transform transition-all hover:-translate-y-2 rounded-lg p-4"
            >
              {/* Product Image */}
              <div className="relative overflow-hidden h-48 rounded-lg mb-4">
                <img
                  src={item.image}
                  alt="Product"
                  className="h-full w-full object-cover transform hover:scale-105 transition-all duration-300"
                />
              </div>

              {/* Product Details */}
              <h2 className="text-lg font-bold mb-2">{item.title}</h2>
              <p className="text-gray-600 mb-4">Price: ${item.price}</p>
              <div className="flex items-center justify-between">
                <button
                  onClick={() => MinusItem(index)}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-md shadow-md"
                >
                  ➖
                </button>
                <span className="font-medium text-gray-700">
                  Quantity: {item.quantity}
                </span>
                <button
                  onClick={() => AddItem(index)}
                  className="bg-green-200 hover:bg-green-300 text-green-700 font-bold py-2 px-4 rounded-md shadow-md"
                >
                  ➕
                </button>
              </div>

              {/* Delete Button */}
              <div className="mt-4 flex justify-center items-center">
                <button
                  onClick={() => Delete(index)}
                  className="bg-red-200 hover:bg-red-300 text-red-700 font-bold py-2 px-4 rounded-md shadow-md flex items-center"
                >
                  👉🏻🗑️ Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Checkout Button */}
      {items.length > 0 && (
        <div className="mt-8 text-center">
          <button
            onClick={PayNow}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            💸 Proceed to Pay 💵
          </button>
        </div>
      )}
    </div>
  </>
  );
};

export default Checkout;
