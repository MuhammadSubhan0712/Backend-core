import nodemailer from "nodemailer";
import Order from "../models/order.model.js";

// To create order
export const placeOrder = async (req, res) => {
  const { userEmail, items, total } = req.body;

  if (!userEmail ||!items ||!total) {
    res.status(400).json({
      message: "You must enter all fields i.e: email , items , quantity",
    });
    return;
  }
  // const existingOrder = await Order.findOne({ userEmail });
  //   if (existingOrder) {
  //     return res.status(400).json({ message: "🔄 User email already exists in orders. 💥" });
  //   }

  try {
    const order = await Order.create({ userEmail, items, total });
    await order.save();

    // Send Confirmation email
    const transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false,

      auth: {
        user: "muhammadsubhan0712@gmail.com",
        pass: "qAEhKNqtUVUgjW1hj8",
      },
    });
    
    const info = await transporter.sendMail({
      from: '"Asfar the GrEaT 🥰" <ressie.hermann96@ethereal.email>', //Sender Address
      to: userEmail,
      subject: "Order Confirmation",
      text: `Your order has been placed succcessfully. Quantity: ${total} \n Items: ${items}`,
      html: "<h2>MSK</h2>", //html body
    });
    res.status(200).json({ message: "💯 Your order has been placed successfully 💯" });
    console.log("Message sent: %s" .info.messageId);
    
  } 
  catch (error) {
    res.status(400).json({ message: "❗️ Error to placed order ❗️", error });
  }
};
