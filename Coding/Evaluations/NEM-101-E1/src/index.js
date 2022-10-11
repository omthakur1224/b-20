const express=require('express');
let app=express();

let port=8080;
// app.post('/person',(req,res)=>{
//      console.log(req.body)
// })
app.use('/person',require('./routes/person.routes'));
app.listen(port,(req,res)=>{
    console.log(`you are listening at ${port}`)
})