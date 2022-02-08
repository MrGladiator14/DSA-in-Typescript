function alphabetShift(input: string): string {
    //const aphabets: string[] = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    //option 2 use object
    const temp: string = "abcdefghijklmnopqrstuvwxyz";
    let input1 = input.split('');
    let alphabets = temp.split('');
    for( let i=0; i<input.length; i++)
    {
        let index =0;
        if(input1[i]!='z'){
            index = alphabets.indexOf(input1[i])+1;
        }
        input1[i]=alphabets[index];
    }
    return input1.join('');
}
console.log(alphabetShift('rdwx'));