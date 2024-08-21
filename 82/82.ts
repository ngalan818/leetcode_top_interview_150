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

function deleteDuplicates(head: ListNode | null): ListNode | null {
    let dummy = new ListNode(101);
    let curr: ListNode | null = head;
    let prev = dummy;
    let lastNum = dummy;

    while (curr) {
        if (prev.val !== curr.val && curr.next?.val !== curr.val) {
            lastNum.next = curr;
            lastNum = curr;
        }
        prev = curr;
        curr = curr.next;
    }
    lastNum.next = null;

    return dummy.next;
};