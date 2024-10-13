// id , title, desc


const Todo=require("../models/Todo");

exports.updatetodo=async(req,resp)=>
{
    try
    {
        const {id}=req.params;
        const {title,desc}=req.body;
        const todo=await Todo.findByIdAndUpdate({_id:id},{title,desc},{new:true});  // old data


        resp.status(200).json({
            success:true,
            data:todo,
            msg:"Updated Successfully"
        })
    }
    catch(err)
    {
        resp.status(500).json({
            success:false,
            msg:"internal server error"
        })
    }
}