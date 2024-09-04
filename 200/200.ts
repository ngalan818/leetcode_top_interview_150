function numIslands(grid: string[][]): number {
    
    let ans = 0;
    let m = grid.length;
    let n = grid[0].length;
    let directions = [[0, 1], [1, 0], [-1, 0], [0, -1]];
    for (let row = 0; row < m; row++) {
        for (let col = 0; col < n; col++) {
            if (grid[row][col] === '1') {
                ans++;
                dfs(row, col);  //  dfs to find all connected 1s and mark them
            }
        }
    }

    
    // function dfs(r: number, c: number) {
    //     let queue = [ [r, c] ];

    //     while (queue.length > 0) {
    //         let [row, col] = queue.pop()!;
    //         for (let [dr, dc] of directions) {
    //             let newRow = row + dr;
    //             let newCol = col + dc;
    //             if (newRow >= 0 && newRow < m &&
    //                 newCol >= 0 && newCol < n &&
    //                 grid[newRow][newCol] === '1') {
    //                     grid[newRow][newCol] = '0'; // mark 0 so we don't visit it again
    //                     queue.push([newRow, newCol]);
    //             }
    //         }
    //     }
    // }

    function dfs(r: number, c: number) {
        if (r < 0 || r >= grid.length || c < 0 || c >= grid[0].length || grid[r][c] !== "1") return;
        grid[r][c] = "X";

        dfs(r + 1, c)
        dfs(r - 1, c)
        dfs(r, c + 1);
        dfs(r, c - 1);
    }

    return ans;
};

