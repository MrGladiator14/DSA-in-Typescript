function flattenArray(arr:any[]):any[]{
    const array=[];
    flatten(arr);
    function flatten(arr:any[]){
        arr.forEach((element)=>{
            if(Array.isArray(element)){
                flatten(element);}
            else{
                array.push(element);
                }
        });             
    }
    return array;
}
console.log(flattenArray([[['a']],[[["b"]]]]));