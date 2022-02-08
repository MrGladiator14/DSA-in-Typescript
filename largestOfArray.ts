//returns the max in given input arrays
function maxInArray(mat:number[][]):number[]{
    const result:number[]=[];
    for(let arr of mat){
        let largest=0;
        for(let number of arr){
            largest= largest<number?number:largest;
        }
        result.push(largest);
    }
    return result;
}
console.log(maxInArray([[1,9,6,4,8,3],[1,9,6,4,8,3],[1,9,6,4,8,3],[1,9,6,4,8,3]]));