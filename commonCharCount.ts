//The hasOwnProperty() method returns a boolean indicating whether the object has the specified property as its own property
//instead of for loops we used hasOwnProperty() to make the problem more efficient
function commonCharacterCount(s1:string, s2:string):number{
    const s1chars: string []=s1.split('');
    const s2chars: string []=s2.split('');
    const s1Charcount = getCharList(s1chars);
    const s2Charcount = getCharList(s2chars);
    let total =0;
    for(const prop in s1Charcount){ //checking for common elements in 2 objs
        if(s2Charcount.hasOwnProperty(prop)){
            if(s2Charcount[prop]<s1Charcount[prop]){//return min of occurances in objects
                total+=s2Charcount[prop];
            }else{
                total+=s1Charcount[prop];
            }
        }
    }
    return total;
}

function getCharList(chars: string[]):object{
    const wordCount ={}; //object
    for(let i=0;i<chars.length;i++){
        if(wordCount.hasOwnProperty(chars[i])){//object creation
            wordCount[chars[i]]++;
        }else{
            wordCount[chars[i]]=1;
        }
    }
    console.log(wordCount);
    return wordCount;
}

console.log(commonCharacterCount("s1:string","s2:string"));

