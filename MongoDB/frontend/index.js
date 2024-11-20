import dotenv from "dotenv"
dotenv.config();

import express from "express";

import connectDB from "./src/db/index.js";
import todosRoutes from  "./src/routes/todos.routes.js"

const app = express();

app.use(express.json());

app.get("/" , (req , res ) => {
    res.send("Hello MongoDB");
});


// routes

