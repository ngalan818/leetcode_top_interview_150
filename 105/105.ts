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


function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
    if (preorder.length === 0) return null;
    if (preorder.length === 1 && preorder[0] === inorder[0]) return new TreeNode(preorder[0]);

    let i = inorder.indexOf(preorder[0]);
    return new TreeNode(preorder[0], buildTree(preorder.slice(1, i + 1), inorder.slice(0, i)), buildTree(preorder.slice(i + 1), inorder.slice(i + 1)));
};