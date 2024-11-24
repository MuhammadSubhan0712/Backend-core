import mongoose from "mongoose";
import Todos from "../models/todos.model.js";

// add todo
export const addTodo = (req, res) => {
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

// To get all todos

export const getallTodos = async (req, res) => {
  try {
    const todo = await Todos.find({});
    res.status(200).json({
      message: "All Todos ==>",
      todo,
    });
  } catch (error) {
    res.status(400).json({
      message: "Error =>",
      error,
    });
  }
};

// To get single todo
export const getsingleTodo = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Invalid ID" });
  }
  try {
    const singletodo = await Todos.findById(id);
    if (!singletodo) {
      res.status(400).json({
        message: "No Todo found",
      });
      return;
    }
    res.status(200).json({
      message: "Your Todo:",
      singletodo,
    });
  } catch (error) {
    res.status(400).json({
      message: "Error ==>",
      error,
    });
  }
};

// To delete single todo
export const deleteTodo = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Invalid ID" });
  }

  try {
    const deletetodo = await Todos.findByIdAndDelete(id);
    if (!deletetodo) {
      res.status(400).json({
        message: "No Todo found",
      });
      return;
    }
    res.status(200).json({
      message: "Todo deleted Successfully",
    });
  } catch (error) {
    res.status(400).json({
      message: "Error ==>",
      error,
    });
  }
};

// To edit single todo

export const editTodo = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Invalid ID" });
  }
  const { title, description } = req.body;

  try {
    const updTodo = await Todos.findByIdAndUpdate(
      id,
      { title, description },
      { new: true }
    );
    if (!title || !description) {
      res.status(400).json({
        message: "You must enter both fields",
      });
      return;
    }
    res.status(200).json({
      message: "Todo Updated",
      todo: updTodo,
    });
  } catch (error) {
    res.status(400).json({
      message: "Error ==>",
      error,
    });
  }
};
