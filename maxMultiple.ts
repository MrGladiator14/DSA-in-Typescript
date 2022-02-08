function maxMultiple(n:number,bound:number):number{
    const remainder=bound%n;
    return bound-remainder;
}
console.log(maxMultiple(4,21))