/**
 * Definition for _Node.
*/
class _Node {
    val: number
    left: _Node | null
    right: _Node | null
    next: _Node | null

    constructor(val?: number, left?: _Node, right?: _Node, next?: _Node) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
        this.next = (next===undefined ? null : next)
    }
}


function connect(root: _Node | null): _Node | null {
    if (root === null) return null;

    let queue: _Node[] = [root];
    let firstChildNextLevel: _Node | null = null;

    while (queue.length > 0) {
        let node = queue.shift()!;

        if (queue.length > 0 && queue[0] !== firstChildNextLevel) {
            node.next = queue[0];
        }

        if (node === firstChildNextLevel) {
            firstChildNextLevel = null;
        }

        if (node.left !== null) {
            queue.push(node.left);
            if (!firstChildNextLevel) {
                firstChildNextLevel = node.left;
            }
        }

        if (node.right !== null) {
            queue.push(node.right);
            if (!firstChildNextLevel) {
                firstChildNextLevel = node.right;
            }
        }
    }

    return root;
};