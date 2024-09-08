/**
 * Definition for _Node.
 * 
*/
class _Node {
    val: number
    neighbors: _Node[]

    constructor(val?: number, neighbors?: _Node[]) {
        this.val = (val===undefined ? 0 : val)
        this.neighbors = (neighbors===undefined ? [] : neighbors)
    }
}


function cloneGraph(node: _Node | null): _Node | null {
	if (!node) return null;

    let visited: Map<number, _Node> = new Map();
    return dfsCloneGraph(node);

    function dfsCloneGraph(node: _Node): _Node {
        if (node.neighbors.length == 0) return new _Node(node.val);
    
        let neighbors: _Node[] = [];
        let thisNode = new _Node(node.val, neighbors);
        visited.set(node.val, thisNode);
        for (let neighbor of node.neighbors) {
            if (!visited.has(neighbor.val)) {
                let neighborNode = dfsCloneGraph(neighbor);
                if (neighborNode) neighbors.push(neighborNode);
            } else {
                neighbors.push(visited.get(neighbor.val)!);
            }
        }

        return thisNode;
    }
};