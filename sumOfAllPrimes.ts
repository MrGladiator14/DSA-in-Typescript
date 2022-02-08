function sumOfAllPrimes(num:number):number{
    let totalOfPrimes=0;
    for(let i=2;i<num;i++){
        for(let j=2;j<=i;j++){
            if(i===j){
                totalOfPrimes+=i;
            }
            if(i%j===0){
                break;
            }
        }
    }
    return totalOfPrimes;
}
console.log(sumOfAllPrimes(9))
console.log(sumOfAllPrimes(977))
console.log(sumOfAllPrimes(233))