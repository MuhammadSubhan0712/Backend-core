

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



// app.get('/', (req, res) => {
//   res.send('Hello With the new!')
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })
// console.log("Hello Me With the new World")







const users = [];
// // add new user
app.post("/user", (req, res) => {
  const { title , age } = req.body;
  if (!title && age) {
    res.status(400).json({
      message: "title & age is required",
    });
    return;
  }
app.get("/", (req, res) => {
  res.send("hello world!");
});

  users.push({
    title,
    age,
    id: Date.now(),
  });

  res.status(201).json({
    message: "user is created",
    data: users,
  });
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
