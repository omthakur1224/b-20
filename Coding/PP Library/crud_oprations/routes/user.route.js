const { default: axios } = require("axios");
const express=require("express");
const app=express();
const userRouter=express.Router();

app.use(express.json());

// GET=>POST=>DELETE=>PATCH
//get method
userRouter.get('/',async(req,res)=>{

    // npx json-server db.json --port 8000 --watch

    let response=await axios.get("http://localhost:8000/users")//api call

    // console.log(response.data,"response");
 
    res.status(200).send(response.data)
})

//post method
userRouter.post('/',async(req,res)=>{

    console.log(req.body)
    
    let response=await axios.post("http://localhost:8000/users",{...req.body,"id":Date.now()})
    console.log("we are here to get data")
    res.send(response.data)
  
    res.status(201).send('successfully created');
})

//delete method
userRouter.delete('/:id',async(req,res)=>{
    
    // const id=req.params.id;
    const {id}=req.params;

    let response=await axios.delete(`http://localhost:8000/users/${id}`)

    // console.log("we are here to get data")
    res.send(response)
   res.status(201).send(response);
    
})

//update method
userRouter.patch("/:id",async(req,res)=>{
    const id=req.params.id;
    let response=await axios.patch(`http://localhost:8000/users/${id}`,req.body)
    console.log("we are here to get data")
    res.send(response.data)
        res.status(201).send('updated Successfully');
    
    
})

module.exports=userRouter;