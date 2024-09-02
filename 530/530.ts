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

function getMinimumDifference(root: TreeNode | null): number {
    let min = Infinity;
    let values: number[] = [];
    dfs(root);

    for (let i = 1; i < values.length; i++) {
        min = Math.min(min, values[i] - values[i - 1]);
    }
    return min;

    function dfs(root: TreeNode | null) {
        if (!root) return;

        if (root.left) {
            dfs(root.left);
        }
        values.push(root.val);
        if (root.right) {
            dfs(root.right);
        }
    }
};