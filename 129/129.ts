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

function sumNumbers(root: TreeNode | null): number {
    return sumNumbersWithLevel(root).sum;

    function sumNumbersWithLevel(root: TreeNode | null): { sum: number, level: number[]} {
        if (!root) return { sum: 0, level: [] }
        if (root.left === null && root.right === null) return { sum: root.val, level: [1] };

        let left = sumNumbersWithLevel(root.left);
        let leftSum = left.sum;
        left.level.forEach((lv, i, arr) => {
            leftSum += root.val * (10 ** lv);
            arr[i]++;
        })
        let right = sumNumbersWithLevel(root.right);
        let rightSum = right.sum;
        right.level.forEach((lv, i, arr) => {
            rightSum += root.val * (10 ** lv);
            arr[i]++;
        })
        
        return { sum: leftSum + rightSum, level: [ ...left.level, ...right.level ]}
    }
};

function sumNumbers(root: TreeNode | null): number {
    return sumNumbersWithSum(root, 0);
   
    function sumNumbersWithSum(root: TreeNode | null, sum: number): number {
        if (root === null) {
            return 0;
        }
        
        sum = sum * 10 + root.val;
        if (root.left === null && root.right === null) {
            return sum;
        }
        
        return sumNumbersWithSum(root.left, sum) + sumNumbersWithSum(root.right, sum);
    }
}