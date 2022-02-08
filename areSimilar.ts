function areSimilar(a: number[], b:number[]): boolean{
    var x: number[][]= new Array();
    var y: number[][]= new Array();
    let c=0,d=0;
    /*for(let i=0;i<2; i++){
        for(let j=0;j<(a.length || b.length); j++){*/
            x.push([0,0],[0,0,0,0,0,0,0]);
            y.push([0,0],[0,0,0,0,0,0,0]);
        /*}
    }*/

    for(let i=0; i<a.length; i++)
    {
        for(let j=0; j<=c; j++){
            if(x[0][j]==a[i]){
                x[1][j]++;
            }
            else{
                x[0][i]=a[i];
                c++;
            }
        }
        
    }
    for(let i=0; i<b.length; i++)
    {
        for(let j=0; j<=d; j++){
            if(y[0][j]==b[i]){
                y[1][j]++;
            }
            else{
                y[0][i]=b[i];
                d++;
            }
        }
        d++;
    }
    //if(c!=d){
     //   return false;
    //}else 
    //for(let i=0;i<2; i++){
    //let t=0;
        for(let j=0;j<=7; j++){
            let t=0;
            for(let m=0;m<=7; m++){
                if(x[0][j]==y[0][m] && x[1][j]==y[1][m])
                {t=1;}}
            if(t==0){
                return false;
            }
        }
    return true

}
console.log(areSimilar([1,4,3,2],[1,4,3,2]));