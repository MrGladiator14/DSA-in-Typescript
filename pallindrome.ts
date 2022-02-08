function pallindromeCheck(input: string): boolean{
    const lowercasedInput=input.toLocaleLowerCase();
    const reverseinput = lowercasedInput.split('').reverse().join('');
    return lowercasedInput===reverseinput;
}
console.log(pallindromeCheck("Abba"));
console.log(pallindromeCheck("Babba"));
console.log(pallindromeCheck("lOL"));