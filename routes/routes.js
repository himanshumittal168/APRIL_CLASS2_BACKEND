const express=require('express');
const { createTodo } = require('../controller/createTodo');
const { getTodo, getTodobyid } = require('../controller/getTodo');
const { deletetodo } = require('../controller/deletetodo');
const { updatetodo } = require('../controller/updateTodo');


const router=express.Router();



router.post("/add",createTodo);
router.get("/viewall",getTodo);

router.get("/viewbyid/:id",getTodobyid);

router.delete("/remove/:id",deletetodo);

router.put("/update/:id",updatetodo);

module.exports=router;