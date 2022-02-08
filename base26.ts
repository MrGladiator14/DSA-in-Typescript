//if A=0,...Z=26 & input is D, result is array pair of digits whose sum is D
//[(0+3),(1+2)] or [["A+D"],["B+C"]]
function newdigitsystem(number: string):string[]{
    const digits:string[]=[]; 
    let startCharCount = 65;
    let endCharCount = number.charCodeAt(0);//ascii value of number[0]
    while(startCharCount <= endCharCount) {
        const digit = `${String.fromCharCode(startCharCount)}+${String.fromCharCode(endCharCount)}`;
        digits.push(digit);
        startCharCount++;
        endCharCount--;}
    return digits;
}
console.log(newdigitsystem('G'));