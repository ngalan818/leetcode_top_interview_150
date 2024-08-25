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

function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
    if (inorder.length === 0) return null;
    if (inorder.length === 1) return new TreeNode(inorder[0]);

    let indexMap: Map<number, number> = new Map();
    inorder.forEach((n, i) => indexMap.set(n, i));

    return buildTreeWithMap(postorder.length - 1, 0, postorder.length - 1);
 
    /**
     * Build tree recursively, using the indexMap of `inorder` to avoid calling indexOf() every time 
     * @param postLastIndex the supposedly last index of `postorder` in this recursion (imagine we are using slice and then find slicedPostOrder[n-1])
     * @param inLeftBound the left bound in `inorder` for the subtree we are building in this recursion (use as terminating condition w/ `inRightBound)
     * @param inRightBound the right bound in `inorder` for the subtree we are building in this recursion (use as terminating condition w/ `inLeftBound)
     * @returns the builtTree (subtree)
     */
    function buildTreeWithMap(postLastIndex: number, inLeftBound: number, inRightBound: number): TreeNode | null {
        if (inLeftBound > inRightBound) return null;

        let rootVal: number = postorder[postLastIndex];
        if (inLeftBound === inRightBound) return new TreeNode(rootVal);

        let i: number = indexMap.get(rootVal)!;

        let right = buildTreeWithMap(postLastIndex - 1, i + 1, inRightBound);
        let left = buildTreeWithMap(postLastIndex - (inRightBound - i) - 1, inLeftBound, i - 1);    // size of right tree is inRightBound - (i + 1) + 1
        
        return new TreeNode(rootVal, left, right);
    }
};