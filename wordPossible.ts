//program tells if a word can be formed from given string
function wordPossible(s:string, t:string):boolean{
    let word='';
    for(let i=0;i<t.length;i++){
        for(let j=0;j<s.length;j++){
            if(s[j]===t[i]){
                word = word.concat(s[j]);
                if(word===t){
                    return true;
                }
            }
        }
    }
    return false;
}
console.log(wordPossible('npevoclkm','mellon'));