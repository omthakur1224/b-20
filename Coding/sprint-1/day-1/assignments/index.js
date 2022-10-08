let fs=require('fs');
let args=process.argv;
// console.log(args)
if(args[2]=="read"){
    fs.readFile(args[3],'utf-8',(err,data)=>{
        console.log(data);
    })
}
