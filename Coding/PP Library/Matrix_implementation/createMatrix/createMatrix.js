module.exports = function createMatrix(n,m,fill){

    const matrix=[];
    
    for(let i = 0; i < n; i++){
        
        let row=[];
        
        for(let j = 0; j < m; j++){
            
            row.push(fill);
        }
        matrix.push(row);
    }
    return matrix;
}