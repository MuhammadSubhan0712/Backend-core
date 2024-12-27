import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("HELLo Nodemailer");
});

app.listen(process.env.PORT, () => {
  console.log(`:) Server is running at the port:${process.env.PORT}`);
});
