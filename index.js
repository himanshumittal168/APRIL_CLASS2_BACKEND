// CREATE A SERVER  - DONE
// CONNECT TO DB -- CONNECT TO DB
// npm init -y

const express=require('express');

const app=express();


app.listen(4000,()=>{
    console.log("SERVER IS ON")
})


const dbConnet=require("./config/db");
dbConnet();