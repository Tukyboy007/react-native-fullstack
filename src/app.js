const express = require("express");
const serverless = require("serverless-http");

const app = express();
const router = express.Router();

console.log("fucker")

app.get('/', (req,res) =>{
  res.send('HelloWorld');
})

app.listen(8000, ()=>{
  console.log('port listening')
})

module.exports = app;
module.exports.handler = serverless(app);
