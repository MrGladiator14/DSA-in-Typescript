//function returns final pg number of printable pages if current pg number is fed
//along with digits printable with left ink
function printablePgs(current: number, numberOfDigitsLeft: number): number {
    while (numberOfDigitsLeft >= current.toString().length) {
        numberOfDigitsLeft -= current.toString().length;
        if (numberOfDigitsLeft >= current.toString().length) {
            current++;}}
    return current;
}
    console.log(printablePgs(1, 5));
    console.log(printablePgs(21, 5));
    console.log(printablePgs(23, 7));