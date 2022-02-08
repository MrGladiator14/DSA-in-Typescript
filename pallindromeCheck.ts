function palindromCheck(input: string): boolean {
    const chars = input.split('');
    const charCount = {};
    let oddC = 0;
    for (let char of chars) {
        if (charCount.hasOwnProperty(char)) {
        charCount[char]++; }
        else {
        charCount[char] = 1;}
    }
    for (let key in charCount) {
        if (charCount[key] % 2 !== 0) {
            oddC++;
        }
    }
    return oddC>1? false:true
}
console.log(palindromCheck('kitkat'))
console.log(palindromCheck('tweet'))
