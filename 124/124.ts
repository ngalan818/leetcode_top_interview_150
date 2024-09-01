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

function maxPathSum(root: TreeNode | null): number {
    if (!root.left && !root.right) return root.val; // single node
    let max = -(Infinity);

    pathSum(root);

    return max;

    function pathSum(root: TreeNode | null): number {
        if (!root) return -(Infinity);
        if (!root.left && !root.right) return root.val;   // leaf

        let left = pathSum(root.left);
        let right = pathSum(root?.right);
        
        max = Math.max(max, root.val, left, right, root.val + left, root.val + right, root.val + left + right);

        return root.val + Math.max(left, right, 0);
    }
};