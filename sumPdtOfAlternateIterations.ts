//add alternate elements on odd iterations 
//and multiply alternate elements on even iterations
function AltSumPdt(input: number[]): number{
    let isOdd = true;
    while(input.length !== 1){
        if(input.length % 2 !==0 && isOdd===true){
            input.push(0);
        }
        if(input.length % 2 !==0 && isOdd===false){
            input.push(1);
        }
        input=sumPdt(input,isOdd);
        
        isOdd = !isOdd;
    }
    return input[0];
    
}
function sumPdt(nums: number[], isOdd: boolean): number[]{
    let sumpdt: number[]=[];
    if( isOdd){
        for (let i=0;i<nums.length;i+=2){
            sumpdt.push(nums[i] + nums[i+1]);
        }
    }else{
        for (let i=0;i<nums.length;i+=2){
            sumpdt.push(nums[i] * nums[i+1]);
    }}
    return sumpdt;
}

console.log(AltSumPdt([1,2,3,4,5,6]));