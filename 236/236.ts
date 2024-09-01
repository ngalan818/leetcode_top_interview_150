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

function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
    let pAncestor: TreeNode[] = findAncestors(root, p);
    let qAncestor: TreeNode[] = findAncestors(root, q);

    let i = 1;
    let n = Math.min(pAncestor.length, qAncestor.length);
    let ans: TreeNode = pAncestor[pAncestor.length - 1];
    while (i < n) {
        if (pAncestor[pAncestor.length - 1 - i] !== qAncestor[qAncestor.length - 1 - i]) break;
        ans = pAncestor[pAncestor.length - 1 - i];
        i++;
    }

    return ans;

    function findAncestors(root: TreeNode | null, node: TreeNode | null): TreeNode[] {
        if (!root) return [];
        if (root === node) return [root];

        let left = findAncestors(root.left, node);
        let right = findAncestors(root.right, node);

        if (left.length > 0) {
            left.push(root);
            return left;
        } else if (right.length > 0) {
            right.push(root);
            return right;
        }
        return [];
    }
};


function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
    if (!root) return null;

    if (root === p || root == q) return root;

    let left = lowestCommonAncestor(root.left, p, q);
    let right = lowestCommonAncestor(root.right, p, q);

    if (left && right) {
        return root;
    }

    return left || right;
};