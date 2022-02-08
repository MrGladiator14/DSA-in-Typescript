function minutesToHours(n:number):string{
    let time:string
    let hours=Math.floor(n/60).toString();
    let min=(n%60).toString();
    hours = hours.concat(':')
    time = hours.concat(min)
    return time;
}
console.log(minutesToHours(808))
console.log(minutesToHours(240))