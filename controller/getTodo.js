// read todo



// CRUD
const Todo =require("../models/Todo");

exports.getTodo=async(req,resp)=>
{
    try
    {
        const todos=await Todo.find({});
        resp.status(200).json({
            success:true,
            data:todos,
            msg:"Data Fetched Successfully"
        })
    }
    catch(err)
    {
        resp.status(500).json({
            success:false,
            msg:err.message,
        })
    }
}


exports.getTodobyid=async(req,resp)=>
{
    try
    {
        const id=req.params.id;
        try
        {
            const todo=await Todo.findById({_id:id});
        
            resp.status(200).json({
                success:true,
                data:todo,
                msg:"Todo Find Successfully"
            })
        }
        catch(err)
        {
            return resp.status(404).json({
                success:false,
                msg:"No Todo of Desired Id Found"
            })          
        }
    }
    catch(err)
    {
        resp.status(500).json({
            success:false,
            msg:err.message,
        })
    }
}