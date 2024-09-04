/**
 Do not return anything, modify board in-place instead.
 */
 function solve(board: string[][]): void {
    // all O's are going to flipped, the only exception is if a O-region has any one cell that is at the boundary
    // in other words, all O-region in the middle will eventually be surrounded by some X-region
    
    let numRow = board.length;
    let numCol = board[0].length;
    for (let i = 0; i < numCol; i++) {
        dfs(0, i);
        dfs(numRow - 1, i);
    }
    for (let i = 1; i < numRow - 1; i++) {
        dfs(i, 0);
        dfs(i, numCol - 1);
    }
    for (let i = 0; i < numRow; i++) {
        for (let j = 0; j < numCol; j++) {
            if (board[i][j] !== 'Y') board[i][j] = 'X';
            else board[i][j] = 'O';
        }
    }

    function dfs(row: number, col: number) {
        if (row < 0 || row >= numRow ||
            col < 0 || col >= numCol ||
            board[row][col]!= 'O') return;

        board[row][col] = 'Y';
        dfs(row + 1, col);
        dfs(row - 1, col);
        dfs(row, col + 1);
        dfs(row, col - 1);
    }
 };