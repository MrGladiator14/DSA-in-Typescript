//returns sum of ath row and bth columnn
function rowColMatrixSum(m:number[][],a:number,b:number):number{
    const sum1 = m[a].reduce((a,b)=>a+b);//sum of ath row
    let sum2 =0;
    for(let i=0;i<m.length;i++){
        sum2+= (i!==a)?m[i][b]:0;
    }
    return sum1+sum2;
}
console.log(rowColMatrixSum([[1,1,1,1],[3,3,3,3],[-1,-1,-1,-1]],1,3));