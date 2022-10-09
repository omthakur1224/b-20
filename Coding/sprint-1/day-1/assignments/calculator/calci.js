
const crypto = require('crypto-random');

let args=process.argv;
let [,,,a,b]=args;
a=+a;
b=+b;
switch(args[2]){
    case "add": 
        return console.log(a+b);
    case "sub": 
        return console.log(a-b);
    case "mul": 
        return console.log(a*b);
    case "sin": 
        return console.log(Math.sin(a+b));
    case "cos": 
        return console.log(Math.cos(a+b));
    case "random": 
        return  console.log(crypto.range(a,b))
    default :
    return "wrong/unexpected input"
}
