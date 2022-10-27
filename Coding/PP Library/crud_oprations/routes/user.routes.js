const express=require("express");
const app=express();
const userRouter=express.Router();
app.use(express.json());

const fs=require('fs');
const { dirname } = require("path");
const path=require('path');
var data=fs.readFileSync('./db.json','utf-8');

let dbusers=JSON.parse(data);

// dbusers=dbusers.users;
// data=data.dbusers;
userRouter.get('/',(req,res)=>{
    console.log("we are here to get data")
    res.send(dbusers)
})
userRouter.post('/',(req,res)=>{
    console.log(req.body)
    // let update=users;
    let data=fs.readFileSync('db.json','utf-8');
     let user=JSON.parse(data);
     user=user.users;
    user.push({...req.body,"id":Date.now()});
    {dbusers.users=user}
    fs.writeFile('db.json',JSON.stringify(dbusers),()=>{});
    res.status(201).send('successfully created');
})
userRouter.delete('/:id',(req,res)=>{
    let {id}=req.params;
    console.log(id)
    let data=dbusers.users;
    let newData=data.filter((user)=>user.id!=id);

    let dbdata=fs.readFileSync('db.json','utf-8');
    let user=JSON.parse(dbdata);
    user=user.users;
//    user.push({...req.body,"id":Date.now()});
   {dbusers.users=newData}
   fs.writeFile('db.json',JSON.stringify(dbusers),()=>{});
   res.status(201).send('Deleted Successfully');
    
})
userRouter.patch("/:id",(req,res)=>{
    let id=req.params.id;
    console.log(id)
    let {username}=req.body;
    let dbdata=fs.readFileSync('db.json','utf-8');
    let user=JSON.parse(dbdata);
    user=user.users;
    dbusers.users.map((user)=>{if(user.id==id){user.username=username}});
    fs.writeFile('db.json',JSON.stringify(dbusers),()=>{});
    res.status(201).send('updated Successfully');
})

module.exports=userRouter;