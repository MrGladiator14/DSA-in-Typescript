//return count till sum of digits is reduced to one digit
function digitDegree(n:number):number{
    let count=0;
    let currNum=n;
    if(n<9){
        return count;
    }else{while(true){
        count++;
        currNum=getDigitSum(currNum);
        if(currNum<9){
            break;
        }
    }}
    return count;
}
function getDigitSum(num:number):number{
    const numArr:number[]=num.toString().split('').map(Element=>parseInt(Element));//saparating digits of num and returns mapping
    return numArr.reduce((a,b)=>{return a+b});
}
console.log(digitDegree(554));