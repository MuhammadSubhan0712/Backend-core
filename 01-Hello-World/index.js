// import dotenv from "dotenv"
// dotenv.config()

const express = require("express");

// import express from 'express'
const app = express();
const port = 3000;


// MiddleWare
app.use(express.json((req , res , next) => {
  next
}));

app.get("/", (req, res) => {
  res.send("Hello World With Subhan");
});

app.get("/about", (req, res) => {
  res.send("(!)(!)You're in about(!)(!)");
});

app.get("/contact", (req, res) => {
  res.send("(: Contact with me! :) ");
});

const users = [
  {
    id: 1,
    name: "Shah Mursaleen",
    age: 24,
  },
  {
    id: 2,
    name: "Ahmed Jahanzeb",
    age: 42,
  },
  {
    id: 3,
    name: "Asfar Shah",
    age: 22,
  },
  {
    id: 4,
    name: "Muhammad Mohiuddin",
    age: 22,
  },
];

// For new user
app.post("/user", (req, res) => {
  const { name, age } = req.body;
  if (!name && !age) {
    res.status(400).json({
      message: "Something missing",
    });
    return;
  }
  users.unshift({
    name,
    age,
    id: Date.now(),
  });
  res.status(201).json({
    message: "user is created =>",
    users,
  });
});

// To get all users
app.get("/users", (req, res) => {
  res.status(200).json({
    message: "All users ==>",
    users,
  });
});

// To get single user
app.post("/user/:id", (req, res) => {
  const { id } = req.params;
  const index = users.findIndex((items) => items.id === +id);

  if (index === -1) {
    res.status(404).json({
      message: "user not found",
    });
    return;
  }

  res.status(200).json({
    message: "Single user ==>",
    data: users[index],
  });
});

app.listen(port, () => {
  console.log(`Server is running on port==> ${port}`);
});
