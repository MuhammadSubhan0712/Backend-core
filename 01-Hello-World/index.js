const express = require("express");

// import express from 'express'
const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World With Subhan");
});

app.get("/about", (req, res) => {
  res.send("(!)(!)You're in about(!)(!)");
});

app.get("/contact", (req, res) => {
  res.send("(: Contact with me! :) ");
});

const users = [];
app.post("/user", (req, res) => {
  const { name, age } = req.body;
  if (!name && !age) {
    res.status(400).json({
      message: "Something missing"
    })
  }
  users.push({
    name,
    age,
    id: Date.now(),
  });
  res.status(201).json({ users });
});



app.post ("/user/:id" , (req , res) => {
  const {id} =  res.params
})


app.listen(port, () => {
  console.log(`Server is running on port==> ${port}`);
});

// // // add new user
// app.post("/user", (req, res) => {
//   const { title , age } = req.body;
//   if (!title && age) {
//     res.status(400).json({
//       message: "title & age is required",
//     });
//     return;
//   }
// app.get("/", (req, res) => {
//   res.send("hello world!");
// });
//   users.push({
//     title,
//     age,
//     id: Date.now(),
//   });

//   res.status(201).json({
//     message: "user is created",
//     data: users,
//   });
// });

// // get all user
// app.get("/users", (req, res) => {
//   res.status(200).json({
//     data: users,
//   });
// });

// // get single user
// app.get("/user/:id", (req, res) => {
//   const { id } = req.params;

//   const index = users.findIndex((item) => item.id === +id);

//   if (index === -1) {
//     res.status(404).json({
//       message: "user not found",
//     });
//     return;
//   }

//   res.status(200).json({
//     data: users[index],
//   });
// });

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });
