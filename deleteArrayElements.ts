//deletes array1 elements if in array1
function deleteArrayElements(array1: number[], array2: number[]):number[] {
return array1.filter((element) => !array2.includes (element));
}
console.log(deleteArrayElements([3, 8, 1, 2, 7, 2], [2, 3, 5, 6]));
console.log(deleteArrayElements([1, 9, 5, 1, 2, 0], [2, 3, 56]))