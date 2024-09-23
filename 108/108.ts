/**
 Definition for a binary tree node.
 */
class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}

function sortedArrayToBST(nums: number[]): TreeNode | null {
    return buildTree(0, nums.length - 1);

    function buildTree(left: number, right: number): TreeNode {
        if (left == right) return new TreeNode(nums[left]);
        if (left + 1 == right) return new TreeNode(nums[right], new TreeNode(nums[left]));

        let mid = Math.floor((left + right) / 2);
        return new TreeNode(nums[mid], buildTree(left, mid - 1), buildTree(mid + 1, right))
    }
};