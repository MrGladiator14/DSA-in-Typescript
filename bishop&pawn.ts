//assume a matrix as the chess board 8*8, find if bishop can
//eliminate a pawn on the chessboard
function bishopNpawn(bishop: number[], pawn:number[]): boolean{
    const bishopX=bishop[0];
    const bishopY=bishop[1];
    const pawnX=pawn[0];
    const pawnY=pawn[1];
    if((bishopX+bishopY === pawnX+pawnX)||(bishopX+pawnX === pawnX+bishopY))
    {
        return true;
    }

    return false;
}
console.log(bishopNpawn([4,4],[0,7]));
