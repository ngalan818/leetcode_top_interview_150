function exist(board: string[][], word: string): boolean {
    let m = board.length;
    let n = board[0].length;
    let visited: boolean[][] = [];
    for (let i = 0; i < m; i++) {
        visited.push(new Array<boolean>(n).fill(false));
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (backtrack(i, j, 0)) return true;
        }
    }

    return false;

    function backtrack(i: number, j: number, k: number): boolean {
        if (i < 0 || i >= m || j < 0 || j >= n) return false;
        if (board[i][j] != word[k]) return false;
        if (visited[i][j]) return false;
        if (k == word.length - 1) return board[i][j] == word[k];
        visited[i][j] = true;

        if (backtrack(i - 1, j, k + 1) ||
            backtrack(i + 1, j, k + 1) ||
            backtrack(i, j - 1, k + 1) ||
            backtrack(i, j + 1, k + 1)) {
            return true;
        } else {
            visited[i][j] = false;
            return false;
        }
    }
};