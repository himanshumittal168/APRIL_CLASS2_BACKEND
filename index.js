// CREATE A SERVER  - DONE
// CONNECT TO DB -- CONNECT TO DB
// npm init -y

const express=require('express');
const { createTodo } = require('./controller/createTodo');
const app=express();

require("dotenv").config();
let port=process.env.port;
const routes=require("./routes/routes");
app.use(express.json());
app.listen(port,()=>{
    console.log("SERVER IS ON")
})
app.get("/",(req,resp)=>
{
    resp.send("HELLO INDIA");
})

const dbConnet=require("./config/db");
dbConnet();
app.use("/base",routes);



