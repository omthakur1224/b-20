const db=require('./db.json');
const fs=require('fs');

db.posts.push({"id":3,"name":"om"});
const { json } = require('stream/consumers');
fs.writeFileSync("./db.json",JSON.stringify(db),{encoding:"utf-8"},()=>{});
console.log(db)
