function snakesAndLadders(board: number[][]): number {
    let n = board.length;
    let dest = n ** 2;
    let visited: Set<number> = new Set();
    let queue: number[] = [1];
    let step = 0;

    while (queue.length > 0){
        let size = queue.length;
        for (let i = 0; i < size; i++) {
            let cell = queue.shift()!;
            if (visited.has(cell)) continue;
            visited.add(cell);
            for (let j = 1; j <= 6; j++) {
                if (cell + j >= dest) return step;
                let [r, c] = boardIndex(cell + j);
                if (board[r][c] !== -1) {
                    if (board[r][c] >= dest) return step;
                    queue.push(board[r][c]);
                } else {
                    queue.push(cell + j);
                }
            }
        }        
        step++;
    }
    return -1;

    // cannot use
    // function dfs(cell: number, step: number) {
    //     if (cell >= dest) {
    //         ans = step;
    //         return;
    //     };
    //     if (visited.has(cell)) return;

    //     visited.add(cell);
    //     let [i, j] = boardIndex(cell);
    //     console.log(`cell: ${cell}, step: ${step}, ${[i,j]}`)
    //     if (board[i][j] != -1) 
    //         dfs(board[i][j], step + 1);
    //     dfs(cell + 1, step + 1);
    //     dfs(cell + 2, step + 1);
    //     dfs(cell + 3, step + 1);
    //     dfs(cell + 4, step + 1);
    //     dfs(cell + 5, step + 1);
    //     dfs(cell + 6, step + 1);
    // }

    function boardIndex(cell: number): [ number, number ] {
        let row = Math.ceil(cell / n);
        if (row % 2 === 0) {
            if (cell % n === 0) return [ n - row, 0];
            else return [ n - row, n - cell % n ];
        } else {
            if (cell % n === 0) return [ n - row, n - 1 ];
            else return [ n - row, cell % n - 1 ];
        }
    }
};