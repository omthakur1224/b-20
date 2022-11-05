const express=require('express');

const app=express();

app.use(express.json());


app.get('/users',(req,res)=>{
    res.status(200).send('successful')
})

app.get('/users/:id',(request,res)=>{
    
    const id=request.params;
    console.log(id)
   let singleUser=data.find(e=>e.id==id)
    res.status(200).send(singleUser)
})

const PORT=8000;
app.listen(PORT,(req,res)=>{
    console.log(`server is running on http://localhost:${PORT}`)
})