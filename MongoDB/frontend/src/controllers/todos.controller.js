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

export const getallTodos = async (req , res) =>{
   try {
    const todo =  await Todos.find({})
    res.status(200).json({
      message:"All Todos ==>",
      todo,
    })  
   } catch (error) {
    res.status(400).json({
      message:"Error =>",error
    })
    
   }
  

}



// To get single todo
export const getsingleTodo = (req , res) =>{
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Invalid ID" });
  }
  try {
    const singletodo = Todos.findById(id);
    if (!singletodo) {
      res.status(400).json({
        message:"No Todo found",
      })
      return;
    }
    res.status(200).json({
      message:"Your Todo:",
      singletodo,
    })
  } catch (error) {
    res.status(400).json({
      message:"Error ==>",error
    })
  }
}



// To delete single todo
export const deleteTodo = (req , res) =>{
  const { id } = req.params;

  const deletetodo = Todos.findById({});

  try {
    if(!deletetodo){
      res.status(400).json({
        message:"No Todo found",
      })
      return;
    }
    Todos.splice( 1 , id)
    res.status(200).json({
      message:"Todo deleted Successfully",
    })
  } catch (error) {
    
  }

  res.status(200).json({
    message:"All Todos ==>",
    Todos,
  })
}



// To edit single todo

export const editTodo = (req , res) =>{
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Invalid ID" });
  }
  const todo = 
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


