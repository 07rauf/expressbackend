const fs = require('fs');
const user = fs.readFileSync('./data.json');

const users = JSON.parse(user);
const express = require('express');
const app = express();
app.get('/', (req,res)=>{
    res.json(users)
})
app.listen(3000, ()=>{
  
})