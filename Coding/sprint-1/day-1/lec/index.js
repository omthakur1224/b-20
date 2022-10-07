const path=require('path');
const { sum, mul, div, sub, mod } = require('./src/math');
console.log(sum(12,14));
console.log(sub(24,12));
console.log(mul(2,4));
console.log(div(234,2));
console.log(mod(254,10))

console.log(process.cwd());
console.log(path.join(process.cwd(),'..','day-2'))