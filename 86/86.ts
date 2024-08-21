/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function partition(head: ListNode | null, x: number): ListNode | null {
    let left = new ListNode(101);
    let right = new ListNode(101);
    let leftHead = left;
    let rightHead = right;

    while (head !== null) {
        if (head.val < x) {
            left.next = head;
            left = head;
        } else {
            right.next = head;
            right = head;
        }
        head = head.next;
    }

    if (left.val === 101) {
        return rightHead.next;
    }
    
    if (right.val === 101) {
        return leftHead.next;
    }

    left.next = rightHead.next;
    right.next = null;
    return leftHead.next;
};