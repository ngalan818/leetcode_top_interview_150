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

function rightSideView(root: TreeNode | null): number[] {
    if (!root) return [];
    
    let ans: number[] = [];
    let queue: TreeNode[] = [root];
    while (queue.length > 0) {
        let size = queue.length;
        for (let i = 0; i < size; i++) {
            let node = queue.shift()!;
            if (i === size - 1) {
                ans.push(node.val);
            }
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }
    }
    return ans;
};

function rightSideView(root: TreeNode | null): number[] {
    if (!root) return [];
    
    let ans: number[] = [];
    dfs(root, 0);
    return ans;

    function dfs(node: TreeNode | null, level: number) {
        if (!node) return;
        if (ans.length <= level) ans.push(node.val);

        dfs(node.right, level + 1);
        dfs(node.left, level + 1);
    }
};