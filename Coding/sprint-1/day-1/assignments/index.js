let fs=require('fs');
let args=process.argv;
// console.log(args)
if(args[2]=="read"){
    fs.readFile(args[3],'utf-8',(err,data)=>{
        console.log(data);
    })
}else if(args[2]=="append"){
    fs.appendFile(args[3],' having coding course RCT201+NEM101',(err,data)=>{
        console.log(data);
    })
}else if(args[2]=="delete"){
    fs.unlink()
}

