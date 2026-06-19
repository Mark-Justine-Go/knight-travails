function getPossibleMoves(x,y,boardSize = 7){
    const possible_offsets = [[-2, -1], [-2, 1], [-1, -2], [-1, 2], [1, -2],  [1, 2], [2, -1],  [2, 1]];
    const validMoves = [];

    possible_offsets.forEach(offset => {
        const newRow = x+offset[0];
        const newCol = y+offset[1];
        
        if((newRow >= 0 && newRow <= boardSize)  && (newCol >= 0 && newCol <= boardSize)){
            validMoves.push([newRow,newCol]);
        }
    })

    return validMoves;
}