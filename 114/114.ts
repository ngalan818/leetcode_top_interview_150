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
 Do not return anything, modify root in-place instead.
 */
 function flatten(root: TreeNode | null): void {
    flattenWithReturn(root);

    function flattenWithReturn(root: TreeNode | null): { head: TreeNode | null, tail: TreeNode | null} {
        if (!root) return { head: null, tail: null};

        let left = flattenWithReturn(root.left);
        let right = flattenWithReturn(root.right);

        if (left.tail) {
            left.tail.right = right.head;   // it can be {null, null} or whatever, we don't care, we will know in the return statement
            root.right = left.head;
            root.left = null;
            return { head: root, tail: right.tail || left.tail};
        } else {    // it can only be {null, null} because otherwise it would have been at least {root, root}
            root.right = right.head;
            root.left = null;
            return { head: root, tail: right.tail || root};
        }

    }
 };