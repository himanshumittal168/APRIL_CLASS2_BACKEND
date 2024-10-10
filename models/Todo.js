const mongoose=require('mongoose');


// todo   title, desc,created date



const todoschema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    desc:
    {
        type:String,
        required:true
    },
    createdAt:
    {
        type:Date,
        default:Date.now()
    }
})

module.exports=mongoose.model("Todo",todoschema);

