import express from "express";
import { addTodo , getallTodos} from "../controllers/todos.controller.js";

const router = express.Router();

router.post("/todo", addTodo);
router.get("todos/" , getallTodos);
// router.get("todo/:id" , getsingleTodo);
// router.delete("todo/:id" , deleteTodo);
// router.put("todo/:id" , editTodo);

export default router;
