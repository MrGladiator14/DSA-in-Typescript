//the program returns ranges of consecutive values to input array
function composeRanges(array:number[]):string[]{
    if(array.length<1)
    {return [];}
    const ranges: any[] = [{start:array[0], end:array[0]}];// array of object
    for(let i=1;i<array.length;i++){
        if(ranges[ranges.length-1].end+1 === array[i]){
            ranges[ranges.length-1].end=array[i];//shifting end key of range
        }else{
            ranges.push({start:array[i], end:array[i]})//new range
        }
    }
    for(let i=0;i< ranges.length ;i++){
        if(ranges[i].start !== ranges[i].end){
        ranges[i]= `${ranges[i].start}->${ranges[i].end}`;//returns string
        }else{
            //console.log(ranges);
            ranges[i] = ranges[i].start.toString();//to string not working
        }
        
    }
    return ranges;

}
console.log(composeRanges([-1,0,1,2,3,6,7,9]));