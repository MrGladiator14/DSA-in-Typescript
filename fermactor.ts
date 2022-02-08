function fermactor(n:number):number[]{
    for(let i=0;i<n;i++){
        for(let j=0;j<i;j++){
            const k=i**2 - j**2;
            if(k===n){
                return [i,j];
            }
        }
    }
}
console.log(fermactor(15));
console.log(fermactor(4));
console.log(fermactor(6));