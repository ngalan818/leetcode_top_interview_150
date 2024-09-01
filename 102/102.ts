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

function levelOrder(root: TreeNode | null): number[][] {
    if (!root) return [];

    let ans: number[][] = [];
    let queue: TreeNode[] = [root];

    while (queue.length > 0) {
        let size = queue.length;
        let tmp: number[] = [];
        for (let i = 0; i < size; i++) {
            let node = queue.shift()!;
            tmp.push(node.val);
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }
        ans.push(tmp);
    }
    return ans;
};