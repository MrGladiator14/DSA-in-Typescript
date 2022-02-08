//sorts array except given value
function sortByHeight(a: number[]):number[]{
    const array2 = a.filter((element) => {if(element !== -69) {
    return element;}}).sort((x, b) => x - b);
    let indexVal = 0;
    for(let i = 0; i < a.length; i++) {
        if(a[i] !== -69) {
            a[i] = array2[indexVal]; indexVal++;
        }
    }
    return a;
}
console.log(sortByHeight([23, -69, 15, 19, 170, -69, -69, 16, 18]));