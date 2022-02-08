//program returns string of desired length fron RHS 

function desiredString(number: number, length: number): string {
    let stringifiedNumer = number.toString();
    const numberlength = stringifiedNumer.length;
    const lengthDiff = Math.abs(length - numberlength);
    if (numberlength < length) {
        let preZeros = '';
        for (let i = 0; i < lengthDiff; i++) {
            preZeros = preZeros.concat('0');
        }
        return preZeros.concat(stringifiedNumer)
    }
    if(numberlength > length) {
        return stringifiedNumer.substring(lengthDiff, stringifiedNumer.length);
    }
    return stringifiedNumer;
} 

console.log(desiredString(1234, 2));
console.log(desiredString(1234, 4));
console.log(desiredString(1234, 5));