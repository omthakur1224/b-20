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
    try {
        fs.unlinkSync(args[3])
        console.log('File Deleted Successfully.');
        //file removed
      } catch(err) {
        console.error(err)
      }
}else if(args[2]=="rename"){
    fs.rename(args[3],args[4],(err,data)=>{
        if (err) throw err;
        console.log('File renamed Successfully.');
    })
}
else if(args[2]=="create"){
    fs.writeFileSync(args[3],args[4],(err,data)=>{
        if (err) throw err;
        console.log('File created Successfully.');
    })
}
else if(args[2]=="list ."){
    let path=require('path');
    fs.readdir(__dirname,"utf-8",(err,data)=>{
        if (err) throw err;
        console.log(data,'This is the Filelist .');
    })
}