function firstDuplicate(n:number[]):number{
    const firstDup={};
    for(let num of n){
        if(firstDup.hasOwnProperty(num)){
            return num;
        }
        firstDup[num]=num;
    }
}
console.log(firstDuplicate([5,6,3,7,1,9,3,1]));