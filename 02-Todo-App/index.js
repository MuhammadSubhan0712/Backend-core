const express = require("express");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const Todo = [];
app.use(express.json());

// To add todo:
app.post("/todo", (req, res) => {
  const { addtodo } = req.body;
  if (!addtodo) {
    res.status(400).json({
      message: "You must add todo",
    });
    return;
  }

  Todo.unshift({
    id: Date.now(),
    Todo: addtodo,
  });
  res.status(200).json({
    message: "Todo entered successfully",
    Todo,
  });
});

// To get all todos:
app.get("/todos", (req, res) => {
  if (Todo.length === 0) {
    res.status(400).json({
      message: "No todos entered yet",
      Todo,
    });
    return;
  }
  res.status(200).json({
    message: "ALL Todos =>",
    Todo,
  });
});

// To get single todo:
app.post("/todo/:id", (req, res) => {
  const { id } = req.params;
  const index = Todo.findIndex((item) => item.id === +id);

  if (index === -1) {
    res.status(400).json({
      message: "No todo found",
    });
    return;
  }
  res.status(200).json({
    message: "Your Todo",
    Data: Todo[index],
  });
});

// To delete Specific Todo:

app.delete("/todo/:id", (req, res) => {
  const { id } = req.params;
  const index = Todo.findIndex((item) => item.id === +id);
  if (index === -1) {
    res.status(400).json({
      message: "No todo found",
    });
    return;
  }
  Todo.splice(index, 1);
  res.status(200).json({
    message: "Todo Deleted Successfully",
    Todo,
  });
});

// To edit Todo:

app.put("/todo/:id", (req, res) => {
  const { id } = req.params;
  const index = Todo.findIndex((item) => item.id === +id);
  if (index === -1) {
    res.status(400).json({
      message: "No todo found",
    });
    return;
  }
  Todo.splice(index, 1);
  const { editTodo } = req.body;

  if (!editTodo) {
    res.status(400).json({
      message: "You must add new edited todo",
    });
    return;
  }
  Todo = {
    Todo: editTodo,
  };
  res.status(200).json({
    message: "Todo Edited Successfully",
    Todo,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
