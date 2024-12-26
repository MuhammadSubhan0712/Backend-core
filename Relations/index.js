import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./src/db/index.js";
import courseRoute from "./src/routes/course.route.js";
import studentRoute from "./src/routes/student.route.js";

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("HeLlO rElATi0n");
});

// routes
app.use("api/v1", courseRoute);
app.use("api/v1", studentRoute);

connectDB()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`⚙️ Server is running at the port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log("MONGO DB connection failed !!! ", err);
  });
