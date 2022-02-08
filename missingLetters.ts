//program returns the missing characters in the input alphabet sequence
function missingLetters(input:string):string{
    const str=input.split('');
    const alphabets='abcdefghijklmnopqrstuvwxyz'.split('');
        for(let i=0;i<str.length;i++){
        if(str[i]!==alphabets[i]){
        return alphabets[i]        }
    }
    return undefined;
}
console.log(missingLetters('abde'));
console.log(missingLetters('abdefgh'));
