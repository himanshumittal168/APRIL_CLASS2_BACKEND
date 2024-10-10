// CREATE A SERVER  - DONE
// CONNECT TO DB -- CONNECT TO DB
// npm init -y

const express=require('express');
const { createTodo } = require('./controller/createTodo');
const app=express();

app.use(express.json());
app.listen(4000,()=>{
    console.log("SERVER IS ON")
})


const dbConnet=require("./config/db");

dbConnet();


app.post("/add",createTodo);