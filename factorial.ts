function fact(n:number):number{
    return n===0? 1 : n*fact(n-1);
}
console.log(fact(123));