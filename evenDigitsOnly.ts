function evenDigitsOnly(n:number):boolean{
    const digits=n.toString().split('');
    return digits.every((element)=>parseInt(element)%2===0);
}
console.log(evenDigitsOnly(1234));
console.log(evenDigitsOnly(8642468));