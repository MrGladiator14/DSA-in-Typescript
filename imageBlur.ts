function blurImage(image: number[][]): number[][]{
    const res=[];
    for(let y=0; y<image.length-2;y++){//image.length-2 excludes the all borders on both sides
        const line = [];
        for(let x=0; x<image[y].length-2;x++){ //1st 2 loops to traverse entire image
            let sum=0, count=0;
            for(let a=y; a<y+3;a++){//actual bluring algorithm of each 3*3 basic pixel element
                for(let b=x; b<x+3;b++){
                    sum+=image[a][b];
                    count++;
                }
            }
            line.push(Math.floor(sum/count));
        }
        res.push(line);
    }
    return res;
}
console.log(blurImage([[1,1,1],[1,15,1],[1,1,1]]));