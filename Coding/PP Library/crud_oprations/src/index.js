const express=require('express');

const app=express();

app.use(express.json());

app.use('/users',require('../routes/user.route'))

const PORT=8000;

app.listen(PORT,(req,res)=>{

    console.log(`server is running in PORT http://localhost:${PORT}`);

})