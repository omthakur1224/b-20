const express=require("express");
const app=express();
const userRouter=express.Router();
app.use(express.json());

const fs=require('fs');

const { dirname } = require("path");

const path=require('path');

var data=fs.readFileSync('./db.json','utf-8');

let dbusers=JSON.parse(data);

//get method
userRouter.get('/',(req,res)=>{

    console.log("we are here to get data")
    res.send(dbusers)
})

//post method
userRouter.post('/',(req,res)=>{
    console.log(req.body)
  
    let data=fs.readFileSync('db.json','utf-8');

     let user=JSON.parse(data);

     user=user.users;

    user.push({...req.body,"id":Date.now()});

    {dbusers.users=user}

    fs.writeFile('db.json',JSON.stringify(dbusers),()=>{});
    res.status(201).send('successfully created');
})

//delete method 
userRouter.delete('/:id',(req,res)=>{
    let {id}=req.params;

    let data=dbusers.users;

    let newData=data.filter((user)=>user.id!=id);

    let dbdata=fs.readFileSync('db.json','utf-8');

    let user=JSON.parse(dbdata);

    user=user.users;

   {dbusers.users=newData}

   fs.writeFile('db.json',JSON.stringify(dbusers),()=>{});
   res.status(201).send('Deleted Successfully');
    
})

//update method
userRouter.patch("/:id",(req,res)=>{
    let id=req.params.id;

    let {username}=req.body;

    let dbdata=fs.readFileSync('db.json','utf-8');

    let user=JSON.parse(dbdata);

        user=user.users;
  
        dbusers.users.map((user)=>{if(user.id==id){user.username=username}});
    
        fs.writeFile('db.json',JSON.stringify(dbusers),()=>{});
        res.status(201).send('updated Successfully');
})

module.exports=userRouter;