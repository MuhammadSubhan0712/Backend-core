import mongoose from "mongoose";
import Todos from "../models/todos.model.js";

// add todo

const addTodo = (req, res) => {
  const { title, description } = req.body;

  if (!title || !description) {
    res.status(400).json({
      message: "Title or descirption both required",
    });
    return;
  }

  const todo = Todos.create({
    title,
    description,
  });
  res.status(201).json({
    message: "Todo added to the database successfully",
  });
};

export { addTodo };
