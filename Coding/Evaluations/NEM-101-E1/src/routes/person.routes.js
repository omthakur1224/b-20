const express=require('express');
let fs=require("fs");
let path=require('path');
let personDB=fs.readFileSync(`${__dirname}../../../person.json`,{encoding:'utf-8',});
let person=JSON.parse(personDB);

let updateDB=(data)=>{
    fs.writeFileSync(
        `${__dirname}/../../../person.json`,
        JSON.stringify(data),
        { encoding: 'utf-8' }
      );
}

const app=express();
const router=express.Router();
let data;
router.get('/',(req,res)=>{
    res.send(person);
})
router.get('/:id',(req,res)=>{
    let single=person.find((p) => p.id ==req.params.id)
    console.log(single)
    res.status(201).send(single)
})
router.delete('/:id',(req,res)=>{
    console.log('deleting...',req.params,person[1].id)
    let deleted=person.filter((user)=>user.id!=req.params.id);
        console.log(deleted);
        res.status(200).send(deleted);
})
router.post("/",(req,res)=>{
    console.log("heleo",req.body)
    person.push({...req.body});
    // updateDB(person);
    let data=JSON.stringify(person)
    // console.log(__dirname);
    let dir=path.join(`${__dirname},../../../person.json`);
    fs.writeFile('./person.routes.j',data,()=>{});
    res.send(person);
})
module.exports=router