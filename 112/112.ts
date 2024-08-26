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

// dfs
function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
    if (!root) return false;
    
    if (root.left === null && root.right === null) return root.val === targetSum;

    return (hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val));
};

// bfs (slow because we have to reach the deepest level regardless, can potentially be faster if there are many levels? But shift() is slow and space is O(n) hmmm)
// function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
//     if (!root) return false;
//     if (root.left === null && root.right === null && root.val === targetSum) return true;
    
//     let queue: TreeNode[] = [root];
//     let targets: number[] = [targetSum - root.val];
    
//     while (queue.length > 0) {
//         let size = queue.length;

//         for (let i = 0; i < size; i++) {
//             let node = queue.shift()!;
//             let target = targets.shift()!;

//             if (node?.left) {
//                 if (target === node.left.val && node.left.left === null && node.left.right === null) return true;
//                 queue.push(node.left);
//                 targets.push(target - node.left.val);
//             }

//             if (node?.right) {
//                 if (target === node.right.val && node.right.left === null && node.right.right === null) return true;
//                 queue.push(node.right);
//                 targets.push(target - node.right.val);
//             }
//         }
//     }

//     return false;
// };
