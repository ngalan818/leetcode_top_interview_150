/**
 * Definition for _Node.
*/
class _Node {
    val: boolean
    isLeaf: boolean
    topLeft: _Node | null
	topRight: _Node | null
	bottomLeft: _Node | null
	bottomRight: _Node | null
	constructor(val?: boolean, isLeaf?: boolean, topLeft?: _Node, topRight?: _Node, bottomLeft?: _Node, bottomRight?: _Node) {
        this.val = (val===undefined ? false : val)
        this.isLeaf = (isLeaf===undefined ? false : isLeaf)
        this.topLeft = (topLeft===undefined ? null : topLeft)
        this.topRight = (topRight===undefined ? null : topRight)
        this.bottomLeft = (bottomLeft===undefined ? null : bottomLeft)
        this.bottomRight = (bottomRight===undefined ? null : bottomRight)
  }
}


function construct(grid: number[][]): _Node | null {
    return constructTree(0, 0, grid.length);

    function constructTree(startRow: number, startCol: number, n: number): _Node {
        if (n == 1) return new _Node(grid[startRow][startCol] === 1, true)

        let allSame = true;
        for (let i = startRow; i < startRow + n && allSame; i++) {
            for (let j = startCol; j < startCol + n; j++) {
                if (grid[i][j] !== grid[startRow][startCol]) {
                    allSame = false;
                    break;
                }
            }
        }
        if (allSame) {
            return new _Node(grid[startRow][startCol] == 1, true);
        }
        return new _Node(true, false, 
            constructTree(startRow, startCol, n / 2),
            constructTree(startRow, startCol + n / 2, n / 2),
            constructTree(startRow + n / 2, startCol, n / 2),
            constructTree(startRow + n / 2, startCol + n / 2, n / 2)
        )
    }
};