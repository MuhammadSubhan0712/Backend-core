

const express = require('express')
const app = express()
const port = 3000


// users.push[
// 'Muhammad Subhan',
//   // Id: (),
//  ]
// console.log("Users ==> " , users);

// app.post('/' , (req , res)=> {
//   res.send('/users')
// }
// )



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
console.log("Hello World With the new")






// const users = [];

// app.get("/", (req, res) => {
//   res.send("hello world!");
// });

// // add new user
// app.post("/user", (req, res) => {
//   const { title } = req.body;
//   if (!title) {
//     res.status(400).json({
//       message: "title is required",
//     });
//     return;
//   }

//   users.push({
//     title,
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

