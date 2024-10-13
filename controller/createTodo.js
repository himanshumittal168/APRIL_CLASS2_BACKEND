const Todo=require("../models/Todo");


// CREATE
// 200? Status Code 
exports.createTodo=async(req,resp)=>
{
    try
    {
        const {title,desc}=req.body;
        const response=await Todo.create({title,desc});

        resp.status(200).json({
            success:true,
            msg:"Todo Added",
        })
    }
    catch(err)
    {
        console.log(err.message);
        resp.status(500).json({
            success:false,
            msg:"INTERNAL SERVER ERROR"
        })
    }
}

//  reading request
//  doing action
//    sending response


