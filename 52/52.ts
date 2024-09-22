function totalNQueens(n: number): number {
    let count = 0;
    backtrack(0, new Set(), new Set(), new Set());
    return count;


    function backtrack(row: number, occupiedCol: Set<number>, occupiedDiag: Set<number>, occupiedAntiDiag: Set<number>) {
        // console.log(intermediate)
        if (row == n) {
            count++;
            return;
        }
            for (let c = 0; c < n; c++) {
                if (!occupiedCol.has(c) && !occupiedDiag.has(row + c) && !occupiedAntiDiag.has(row - c)) {
                    occupiedCol.add(c);
                    occupiedDiag.add(row + c);
                    occupiedAntiDiag.add(row - c);
                    backtrack(row + 1, occupiedCol, occupiedDiag, occupiedAntiDiag);
                    occupiedCol.delete(c);
                    occupiedDiag.delete(row + c);
                    occupiedAntiDiag.delete(row - c);
                }
            }
    }
};