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

function knightMoves(start,end){    
    let queue = [start];
    let visited = new Set();
    visited.add(JSON.stringify(start));
    const parent = {};

    while(queue.length > 0){
        const currOffset = queue.shift();

        if(JSON.stringify(currOffset) === JSON.stringify(end)) break;
        
        for(let possibleMove of getPossibleMoves(currOffset[0],currOffset[1])){
            if(!visited.has(JSON.stringify(possibleMove))){
                visited.add(JSON.stringify(possibleMove));
                parent[possibleMove] = currOffset;
                queue.push(possibleMove);
            }
        }
    }

    const path = [];
    let current = end;

    while(current !== undefined){
        path.push(current);
        current = parent[current];
    }

    console.log(`You made it in ${path.length} moves! Heres your path: `);
    path.reverse().forEach(pos => console.log(pos));
}