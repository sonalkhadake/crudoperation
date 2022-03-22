const express=require("express")
const app=express();
const mongoose= require("mongoose")
const port=process.env.PORT || 3000
const User=require("./models/User")
//midleware
app.use(express.json())

mongoose.connect("mongodb+srv://sonalikhdake:25x7f0HzK9Pk6WBO@cluster0.dz1pk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority").then(data=>{
    console.log("connection is success")
}).catch(err=>{
    console.log(err);
})
//post route
app.post("/api/save",(req, res)=>{
    const user= new User({
        name:req.body.name,
        age:req.body.age,
        place:req.body.place

    })
    user.save().then(data=>{
        res.json({message:"success", data:data})
    })
})
//get data
app.get("/api/get", (req, res)=>{
    User.find().then(data=>{
        res.json({message:"success", data:data})
    }).catch(err=>{
        console.log(err)
    })
})
// delete operation
app.delete("/api/delete/:id", (req, res) => {

    const { id } = req.params;
  
    User.find({ _id: id }).remove().then((data) => {
  
        res.json({ message: "success", data: data });
  
      }).catch((err) => {
  
        console.log(err);
  
      });
  
  });


app.listen(port, ()=>{
    console.log("your server is started at port"+port)
})