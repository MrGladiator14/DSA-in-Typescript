// consider a circle where n numbers are placed at equal distances
// the program finds the number exactly opp the input on the circle
function OppInNumberCircle(n1: number,n2: number):number{
    const numArr=[];
    const half=n2/2;
    for(let i=0;i<=n1;i++){
        numArr.push(i);
    }
    if(n2<half){
        return numArr[n2 + half];}
        else{
            return numArr[n2 - half];}
}
console.log(OppInNumberCircle(10,2));
console.log(OppInNumberCircle(99,54));
console.log(OppInNumberCircle(23, 7)); 