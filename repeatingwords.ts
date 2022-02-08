function checkrepeat(inputString: string): boolean {
    const wordLength = inputString.length;
    if (wordLength % 2 === 0) {
        const firstHalf = inputString.slice(0, wordLength / 2); const secondHalf = inputString.slice(wordLength / 2, wordLength);
        return firstHalf === secondHalf;
    }
    return false;
}

console.log(checkrepeat('tandemtandem'))
console.log(checkrepeat('qqqq'))
console.log(checkrepeat('2w2ww'))
