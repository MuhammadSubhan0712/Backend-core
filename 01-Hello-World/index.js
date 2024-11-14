
import dotenv from "dotenv"
dotenv.config()

 

import express from 'express'
const app = express();
const port = process.env.PORT;

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

// For new user
app.post("/user", (req, res) => {
  const { name, age } = req.body;
  if (!name && !age) {
    res.status(400).json({
      message: "Something missing",
    });
    return
  }
  users.push({
    name,
    age,
    id: Date.now(),
  });
  res.status(201).json({
    message:"user is created =>", 
    users ,
  });
});

app.get("/users" , (req , res ) => {
  res.status(200).json({
    message:"All users ==>",
    users,
  });
});


app.post ("/user/:id" , (req , res) => {
  const {id} =  res.params
})


app.listen(port, () => {
  console.log(`Server is running on port==> ${port}`);
});

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
