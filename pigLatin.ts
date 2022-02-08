//the program takes in a word and moves the 1st appering consonant
//cluster to the back and adds 'ay' as a suffix, if words begins with a vowel
//it only adds the suffix
function pigLatin(str:string):string{
    const letters:string[]=str.split('')
    const vowelRegEx=/[aeiou]/ //(RegEx)//The exec() method executes a search for a match in a specified string
    //& .test(*string*) returns a boolean 
    if(vowelRegEx.test(str[0])){// checks if word begins with a vowel
        return `${str}way`
    }
    let i=0
    while(true && str.length>i){ //str.length>i if all letters are consonants
        if(!vowelRegEx.test(letters[0])){               //.splice(0,1)*[0]* since letters is a string array
            const firstConsonant=letters.splice(0,1)[0];//Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
            letters.push(firstConsonant)
        }else{
            break;
        }
        i++
    }
    str=letters.join('')+'ay'
    return str;
}
console.log(pigLatin('alakazam'))
console.log(pigLatin('pig'))
console.log(pigLatin('Dwyght'))