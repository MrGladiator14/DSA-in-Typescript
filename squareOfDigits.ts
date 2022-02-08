//check sum of sq of digits till you get a repeating digit
// and return the count
function squareDigitsSequence(a: number): number {
    let count = 1;
    const uniqueNums = [a];
    while (true) {
        count++
        a = digitPower(a);
        if (uniqueNums. includes(a)) {
            return count;}
        uniqueNums.push(a)
    }
}
function digitPower(num: number): number {
    const digits = num.toString().split('').map((element) => parseInt(element) ** 2)
    const sum = digits.reduce((a, b) => a + b);
    return sum;
}
console.log(squareDigitsSequence (99))
console.log( squareDigitsSequence (34))