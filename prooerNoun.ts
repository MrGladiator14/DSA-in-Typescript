function properNounCorrection(noun: string): string {
    const firstChar = noun[0].toUpperCase();
    const restWord = noun.slice(1,noun.length).toLowerCase();
    return firstChar.concat(restWord);
}

console.log(properNounCorrection ('agaSSaiM'));
console.log(properNounCorrection ('saMuEl'));
