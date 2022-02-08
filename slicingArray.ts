//slicing array dynamically
function slicingArray(array: any, size: number): any[][]{
    const nested=[];
    let count=0;
    while(count<array.length){
        nested.push(array.slice(count,count+=size));
    }
    return nested;
}
console.log(slicingArray(["a","c","b","e","j","j"],3));
console.log(slicingArray(["e","a","t","h"],3));
console.log(slicingArray(["i","l","o","n"],4));