function firstNonRepeating(str: string):string {
    const chars: string[] = str.split('');
    let indexAnswer = Number.MAX_SAFE_INTEGER;
    let duplicates = {};
    let answer = '_';
    chars.forEach((element, index) => {
        if(! duplicates.hasOwnProperty(element)) {
            duplicates[element] = {
                count: 1, index}
        }
        else {
            duplicates[element].count++;
            duplicates[element].index = index;
        }});
    for(const key in duplicates) {
        if (duplicates[key].count === 1 && duplicates[key].index < indexAnswer) {
            answer = key;
            indexAnswer = duplicates [key].index;
        }}
    return answer;
}
console.log(firstNonRepeating('abacabad'));
console.log(firstNonRepeating('abacabaabacaba'));
console.log(firstNonRepeating('zxcvzxcvbnmmn'));
