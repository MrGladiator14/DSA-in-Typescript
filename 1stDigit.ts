function firstDigit(str: string): string {
    const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const chars = str.split("");
    for(let i = 0; i < str.length; i++) { 
        if(digits.includes(str[i])) {
            return str[i];
        }
    }
}
console.log(firstDigit('ben-10'));
console.log(firstDigit('daNc3'));
console.log(firstDigit('t0ss'));
