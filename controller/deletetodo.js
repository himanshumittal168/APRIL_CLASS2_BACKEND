const Todo=require('../models/Todo');

exports.deletetodo=async(req,resp)=>
{
    try
    {
        const {id}=req.params;
        const todo=await Todo.findByIdAndDelete(id);  // jo delete karna hn
        resp.status(200).json({
            success:true,
            data:todo,
            msg:"Deleted  Successfully"
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



