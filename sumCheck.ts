//ckecks if sum of an element of 1st and 2nd matrix is
//equal to input
function checkSum(a:number[],b:number[],c:number):boolean{
    const difference=[];
    for(let num of a){
        difference.push(c-num)
    }
    for(let num of b){
        if(difference.includes(num)){
            return true
        }
    }
    return false
}
console.log(checkSum([1,3,6,9,5],[44,23,29,27],33))