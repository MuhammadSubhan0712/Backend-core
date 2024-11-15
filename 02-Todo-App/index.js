const express = require('express')
const { todo } = require('node:test')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

const Todo = []
app.use(express.json())


// To add todo 
app.post("/todo" , (req , res) => {
    const { addtodo } = req.body;
    if (! addtodo ) {
        res.status(400).json({
            message:"You must add todo",
        });
        return
    }
    Todo.unshift({
        id:Date.now() ,
        addtodo,
});
res.status(200).json({
    message:"Todo entered successfully",
    Todo,
});
});

// To get all todos
app.get("/todos" , (req , res ) => {
    res.status(200).json({
        message:"ALL Todos ==>",
        Todo,
    })
})





app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})