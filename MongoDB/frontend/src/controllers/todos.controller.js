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

export const getallTodos = (req , res) =>{
  if(!Todos){
    res.status(400).json({
      message:"No Todos added Yet",
      Todos,
    })
    return;
  }
  res.status(200).json({
    message:"All Todos ==>",
    Todos,
  })
}



// To get single todo
export const getsingleTodo = (req , res) =>{
  const { id } = req.params;
  if(!Todos){
    res.status(400).json({
      message:"No Todos added Yet",
      Todos,
    })
    return;
  }
  res.status(200).json({
    message:"All Todos ==>",
    Todos,
  })
}



// To delete single todo

export const deleteTodo = (req , res) =>{
  const { id } = req.params;
  if(!Todos){
    res.status(400).json({
      message:"No Todos added Yet",
      Todos,
    })
    return;
  }
  res.status(200).json({
    message:"All Todos ==>",
    Todos,
  })
}



// To edit single todo

export const editTodo = (req , res) =>{
  const { id } = req.params;
  if(!Todos){
    res.status(400).json({
      message:"No Todos added Yet",
      Todos,
    })
    return;
  }
  res.status(200).json({
    message:"All Todos ==>",
    Todos,
  })
}


