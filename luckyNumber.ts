//numer is a lucky number if summation of 1st half == 
//summation of second half
function lucky(n:number):boolean{
    const luckyStr=n.toString();
    if(luckyStr.length%2==0){
        const firstHalf=getTotal(luckyStr.substring(0,luckyStr.length/2));
        const secondHalf=getTotal(luckyStr.substring(luckyStr.length/2,luckyStr.length)); 
        return firstHalf===secondHalf;
    }
}
function getTotal(str:string){
    return str.split('').map((element)=>parseInt(element)).reduce((a,b)=>a+b);
}
console.log(lucky(3407));
console.log(lucky(123321));