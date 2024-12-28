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

  const [item , setItem] = useState([...cartItems]);
  
  const PayNow = async () => {
    const stripe = await loadStripe();
  }


  const response = await axios.post("http://localhost:3000/api/v1/checkout", {
    products: item,
  });

  console.log(response.data.id);

  const result = stripe.redirectToCheckout({
    sessionId: response.data.id,
  });
};

  const MinusItem = (index) => {
    item[index].quantity -=1;
    setItem([...item]);
  }

  const AddItem = (index) => {
    item[index].quantity +=1;
    setItem([...item]);
  }

  const Delete = (index) => {
    item.splice(index , 1);
    setItem([...item]);
  }
  return(
  <>
  <div>Checkout</div>
  <div>
    {item.map((item , index) => {
      <div key={item.id}>
        <div>
          <img src={item.image} alt="items image" />
        </div>
      <div>
        Title: {item.title}
      </div>
      <div>
        <button onClick={() => MinusItem(index)}> ➖ </button>
      </div>
      <div>
        Quantity: {item.quantity}
      </div>
      <button onClick={() => AddItem(index)}> ➕ </button>

      <div>
        Price: {item.price}$
      </div>
       
       <button onClick={() => Delete(index)}>👉🏻🗑️</button>
      </div>
    })}
    <div>
      <button>
      💸 Proceed to Pay 💵
      </button>
     
    </div>
  </div>
  </>
  );
};

export default Checkout;
