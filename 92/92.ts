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

function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
    if (left === right) return head;

    let ans = head;
    let lastInOrder: ListNode | null = null;
    let firstReversed: ListNode | null = null;
    let count = 1;
    let prev: ListNode | null = null;
    while (head !== null) {
        if (count > left) {
            if (count === right) {
                let tmp = head.next;
                head.next = prev;
                if (lastInOrder) {
                    lastInOrder.next = head;
                } else {
                    ans = head;
                }
                firstReversed!.next = tmp;
                break;
            }
            let tmp = head.next;
            head.next = prev;
            prev = head;
            head = tmp;
        } else {
            if (count === left) {
                lastInOrder = prev;
                firstReversed = head;
            }
            prev = head;
            head = head.next;
        }
        count++;
    }

    return ans;
};