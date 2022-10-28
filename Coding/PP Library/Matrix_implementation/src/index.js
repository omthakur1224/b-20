//create a matrix of nxm
const createMatrix = require("../createMatrix/createMatrix");
const printMatrix = require("../pritMatrix/printMatrix");

var args=process.argv;
//removed will store only spliced values that are first two array values
let removed=args.splice(0,2);
//args have now updated values
console.log(args);

let matrix = createMatrix(args[0],args[1],args[2]);

printMatrix(matrix);
