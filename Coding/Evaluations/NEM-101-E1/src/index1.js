// Start here
const express = require('express')

let db=require('../person.json')

const fs=require('fs')

const app=express()

var bodyParser=require('body-parser')

app.use(bodyParser.json())


app.get('/person',(req,res)=>{
    var {birth,current,visited}=req.query

    let dataP=db
    if(birth){
       dataP=dataP.filter((el)=>{
           return el.birth.toLowerCase()==birth.toLowerCase()
       })
       console.log(dataP);
    }

    if(current){
       dataP=dataP.filter((el)=>{
           return el.current.toLowerCase()==current.toLowerCase()
       })
    }

    if(visited){
       dataP=dataP.filter((el)=>{
           let arr=[]
           for(let i in el.visited){
               arr.push((el.visited[i]).name)
           }
           for(let i in arr){
               return (arr[i].toLowerCase()==visited.toLowerCase())
           }
       })
    }

    res.send(dataP)
})

// app.get('/person',(req,res)=>{
//     res.send(db)
// })

app.get('/person/:id',(req,res)=>{
    console.log(req.params)
    let id=+req.params.id

    let persondata=db.find((el)=>el.id===id)

    if(persondata){
        res.send(persondata)
    }
    else{
        res.status(404).send(`person with id ${id} not found`)
    }
})

app.post('/person',(req,res)=>{
    db.push({id:db.length+1 , ...req.body})

    fs.writeFile('../person.json',JSON.stringify(db),"utf-8",()=>{
        res.status(201)
        .set('Content-Type','application/json').send(db)
    })
})

app.delete('/person/:id',(req,res)=>{
    let id = +req.params.id
    let persondata=db.filter((el)=>el.id!=id)
    db=persondata

    fs.writeFile('../person.json',JSON.stringify(db),'utf-8',()=>{
        res.send(`data of id : ${id} Deleted Successfully`)
    })
})




app.listen(8000,()=>{
    console.log('hello http://localhost:8000')
})