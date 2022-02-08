// program extracts number prefix of given input string
function longestDigitsPrefix(inputString: string): string {
    let prefix = '';
    const chars = inputString.split('');
    for(let char of inputString) {
        const num = parseInt(char);
        if(isNaN(num)) {
            break;}
        prefix += char;
    }
    return prefix;
}
console.log(longestDigitsPrefix('12Bat128'))
console.log(longestDigitsPrefix('4565MikeOxBig32'))