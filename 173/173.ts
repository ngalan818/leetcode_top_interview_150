/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */


class BSTIterator {
    stack: number[];
    i: number;
    constructor(root: TreeNode | null) {
        this.stack = [];
        this.i = 0;
        this.dfs(root);
    }

    next(): number {
        return this.stack[this.i++];        
    }

    hasNext(): boolean {
        return this.i < this.stack.length;
    }

    dfs(root: TreeNode | null) {
        if (!root) return;

        this.dfs(root.left);
        this.stack.push(root.val);
        this.dfs(root.right);
    }
}
/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */