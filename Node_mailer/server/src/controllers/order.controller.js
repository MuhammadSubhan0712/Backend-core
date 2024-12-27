import nodemailer from "nodemailer";
import Order from "../models/order.model.js";

// To create order
export const placeOrder = async (req, res) => {
  const { userEmail, items, total } = req.body;

  if (!userEmail || !items || !total) {
    res.status(400).json({
      message: "You must enter all fields i.e: email , items , quantity",
    });
    return;
  }

  try {
    const order = await Order.create({ userEmail, items, total });
    await order.save();

    // Send Confirmation email
    const transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false,

      auth: {
        user: "ressie.hermann96@ethereal.email",
        pass: "qAEhKNqtUVUgjW1hj8",
      },
    });

    await transporter.sendMail({
      from: '"Asfar the GrEaT 🥰" <ressie.hermann96@ethereal.email>', //Sender Address
      to: "muhammmadsubhan0712@gmail.com",
      subject: "Order Confirmation",
      text: `Your order has been placed succcessfully. Quantity: ${total} \n Items: ${items}`,
      html: "<abbr title=MSubhanKhan>MSK</abbr>", //html body
    });

    res
      .status(200)
      .json({ message: "Your order has been placed successfully" });
  } catch (error) {
    res.status(400).json({ message: "Error to placed order", error });
  }
};
