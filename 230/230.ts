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
function kthSmallest(root: TreeNode | null, k: number): number {
    let count = 0;
    let ans: number = 0;
    dfs(root);
    return ans;

    function dfs(root: TreeNode | null) {
        if (!root) return;

        dfs(root.left);
        if (++count === k) {
            ans = root.val;
            return;
        }
        dfs(root.right);
    }
};