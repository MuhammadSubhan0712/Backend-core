import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./src/db/index.js";
import orderRoute from "./src/routes/order.route.js"
dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

// routes
app.use("/api/v1" , orderRoute);


app.get("/", (req, res) => {
  res.send("HELLo Nodemailer");
});


connectDB()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`⚙️  Server is running at the port:${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log("❌  MONGO DB connection failed  ❌ ", error);
  });
