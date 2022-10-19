const express=require('express');
const db=require('../db.json')
const cors=require('cors')
const PORT=8000;
const app=express();
// app.use();
app.use(express.json())
const logger=(req,res,next)=>{
    console.log("before",req.method,req.url);
    next();
    console.log("after",req.method,req.url);
}
app.use(logger);
const auth=(req,res,next)=>{
    if(req.body && req.body.username==="om" && req.body.password=="1234"){
        next();
    }else{
        console.log("not authrised");
        res.send('wrong input')
    }
}

app.post('/',auth,(req,res)=>{
    console.log("request",req.method,req.url);
    res.end("success");
    // res.send(db.products);
})

app.get('/',(req,res)=>{
    console.log("request",req.method,req.url);
    res.end("success");
    // res.send(db.products);
})

app.listen(PORT,()=>{
    console.log(`Listening on http://localhost:${PORT}`);
})
