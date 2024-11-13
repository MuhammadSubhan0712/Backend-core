

const express = require('express')
const app = express()
const port = 3003
const users = [];

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

