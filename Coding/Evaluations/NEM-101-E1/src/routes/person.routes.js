const express=require('express');
let person=require('../person.json');
// person=JSON.parse()
const app=express();
let fs=require("fs");
const router=express.Router();
let data;
router.get('/',(req,res)=>{
    res.send(person)
})
router.get('/:id',(req,res)=>{
    let single=person.filter((user)=>{
        if(user.id==req.params.id){
            return user;
        }
    })
    console.log(single[0])
    res.status(201).send(single[0])
})
router.delete('/:id',(req,res)=>{
    console.log('getting')
    let deleted=person.map((user)=>{
        if(user.id!=req.params)return user;
    })
    res.status(200).send(deleted)
})
router.post('/',(req,res)=>{
    // let data=fs.readFileSync(person);
    // let data1=JSON.parse(data);
    // data1.push(req.body);
    // let x=req.body;
//   let newdata=JSON.stringify(data1);
//     fs.writeFile(person,newdata,(err,data)=>{
//         if(err) throw err;
//         console.log('posted successfully')
//     })
//     console.log('posting')
    person.push(req.body);
    res.send("you are trying to post data")
})

module.exports=router