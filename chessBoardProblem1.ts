//objective of this program is to fins wether a block is black or white
function chessBoardcolour(cell: string):string{
    const board={"a":1,"b":2,"c":3,"d":4,"e":5,"f":6,"g":7,"h":8};
    const total=(board[cell[0]]+parseInt(cell[1]));
    if(total%2===0){
        return "black";}
        else{
            return "white";}
}
console.log(chessBoardcolour('a4'));
console.log(chessBoardcolour('b2'));
console.log(chessBoardcolour('h7'));