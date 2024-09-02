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

function isValidBST(root: TreeNode | null): boolean {
    return dfs(root).isValid;
    
    function dfs(root: TreeNode | null): { min: number, max: number, isValid: boolean } {
        if (!root) return { min: Infinity, max: -(Infinity), isValid: true };

        let left = dfs(root.left);
        if (left.max >= root.val || !left.isValid) {
            return { min: 0, max: 0, isValid: false }
        }

        let right = dfs(root.right);
        if (right.min <= root.val || !right.isValid) {
            return { min: 0, max: 0, isValid: false }
        }

        return { min: root.left ? left.min : root.val, max: root.right ? right.max : root.val, isValid: true};
    }
};