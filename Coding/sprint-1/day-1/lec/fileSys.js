const fs=require('fs');

// fs.readFile('filepath','encoding method',callback(err,datta));
console.log('start')

fs.readFile('./sample.txt','utf-8',(err,data)=>{
    console.log("console: 1 : ",data);
})
console.log("end async")

let data = fs.readFileSync('./sample.txt','utf-8');
console.log("console: 2 : ",data);
console.log("end")