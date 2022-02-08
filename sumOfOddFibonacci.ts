function sumOfOddFibonacci(num:number):number{
    let curr=1, prev=0, nextCurr=0, sum=0
    while(curr<=num){
        if(curr%2!==0){
            sum+=curr;
        }
        nextCurr=prev+curr
        prev=curr
        curr=nextCurr
    }
    return sum
}
console.log(sumOfOddFibonacci(34))