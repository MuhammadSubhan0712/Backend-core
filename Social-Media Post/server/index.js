import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectDB from "./src/db/index.js";
import userRouter from "./src/routes/user.route.js";
import postRouter from "./src/routes/post.route.js";

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("HeLlO Social Media Posts");
});

cookieParser();

app.use("/user" , userRouter);
app.use("/post" , postRouter);


connectDB()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`⚙️   Server is running at the port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log("❌  MONGO DB connection failed  ❌ ", error);
  });
