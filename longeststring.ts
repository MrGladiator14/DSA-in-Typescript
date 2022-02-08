function longestStrings(input: string[]):string[]{
    let longestLength = 0;
    const longestWords = [];
    input.forEach((word: string)=>{
        longestLength = longestLength < word.length? word.length : longestLength;
    });

    input.forEach((word: string)=>{if(word.length==longestLength){
        longestWords.push(word);
    }});
    return longestWords;
}

console.log(longestStrings(["aaa","bbbb", "ccc","ddd","eeee"]));