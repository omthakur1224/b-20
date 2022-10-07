const os=require('os');
console.log(os.cpus()[0].model);
console.log(os.version());
console.log(os.hostname());
console.log(os.cpus().map((e)=>e));