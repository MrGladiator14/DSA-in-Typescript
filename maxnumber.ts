//returns largest possible number for given number of digits
function maxnumber(n:number):number{
    let result='1';
    for(let i=0; i<n;i++){
        result=result.concat('0');
    }
    return parseInt(result)-1;
}
console.log(maxnumber(3))
console.log(maxnumber(5))