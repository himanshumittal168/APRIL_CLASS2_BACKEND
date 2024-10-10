// HERE I WILL WRITE THE CODE FOR CONNECTING TO DB

const mongoose=require('mongoose');

let url='mongodb+srv://himanshumittal168:OhNNAFyzbcIuvkZb@cluster0.samc3.mongodb.net/april_batch'

const dbConnet=()=>
{
    mongoose.connect(url)
    .then(()=> console.log("CONNECTED TO Db"))
    .catch((err)=>{
        console.log("ISSUE IN CONNECTING");
    })
}

module.exports=dbConnet;