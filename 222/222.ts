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


/**
 * 
 * 3 Cases: 
 *  - Perfect complete tree
 *  - Left subtree is perfect (only right is not)
 *  - Even left subtree is not perfect
 * 
 * Note that for case 3, right subtree is actually perfect, just the level is h-1
 * The number of nodes in (root + one perfect subtree) = 2^h, that's because of the nature of binary trees
 * 
 * So we treat case 1 and 2 equally: 
 *  total number of nodes = (root + perfect left tree) (=2^h) + (nodes in right tree) (perfect or not makes no difference here)
 * 
 * Similarly for case 3:
 *  total number of nodes = (root + perfect right tree) (=2^(h-1)) + (nodes in left tree)
 */
function countNodes(root: TreeNode | null): number {
    if (!root) return 0;
    
    let leftHeight = height(root.left);
    let rightHeight = height(root.right);
    
    if (leftHeight === rightHeight) {   // case 1 and 2
        return 2 ** leftHeight + countNodes(root.right);
    } else {    // case 3
        return 2 ** rightHeight + countNodes(root.left);
    }

    function height(root): number {
        if (!root) return 0;

        return 1 + height(root.left);
    }
};