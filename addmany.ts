function addmany(...parameter: number[]): number{
    let total =0;
    parameter.forEach((num)=>{total+=num;});
    return total
}

console.log(addmany(1,2,3));