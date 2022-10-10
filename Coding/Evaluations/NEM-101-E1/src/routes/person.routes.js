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
    let single=person.filter((user)=>{
        if(user.id==req.params.id){
            return user;
        }
    })
    console.log(single[0])
    res.status(201).send(single[0])
})
router.delete('/:id',(req,res)=>{
    console.log('deleting...')
    let deleted=person.filter((user)=>
        user.id!=(req.params.id)
        )
    res.status(200).send(deleted)
})
router.post('/',(req,res)=>{
    person.push(req.body);
    updateDB(person);
    res.send(person)
})

module.exports=router