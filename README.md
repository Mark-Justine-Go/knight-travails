# Knight Travails

This project consists of 1 function that shows the shortest possible way to get from one square to another in a chessboard using a knight chess piece.

The data structure used in this project is a graph to represent the possible moves in a chessboard that a knight can take. The algorithm used is BFS (Breadth-First-Search). BFS explores all the nodes(possible moves) at move 1 before moving on to the next move and so on. The next time it reaches the right node (target square), its guaranteed to be the shortest path due to the nature of the algorithm.

Usage example: 
knightmove([3,3],[0,0]) - [3,3] being the first position where the knight is and [0,0] being the position the knight should find the shortest path to.