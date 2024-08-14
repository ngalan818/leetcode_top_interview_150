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

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let ans: ListNode | null;

    let sum = l1!.val + l2!.val;
    let extraDigit = Math.floor(sum / 10);
    let prev: ListNode | null = new ListNode(sum % 10);
    ans = prev;
    l1 = l1!.next;
    l2 = l2!.next;
    while (l1 != null || l2 != null) {
        sum = (l1?.val || 0) + (l2?.val || 0) + extraDigit;
        extraDigit = Math.floor(sum / 10);
        let tmp = new ListNode(sum % 10);
        prev.next = tmp;
        prev = tmp;
        l1 = l1 ? l1.next : l1;
        l2 = l2 ? l2.next : l2;
    }

    if (extraDigit > 0) {
        ans.next = new ListNode(extraDigit);
    }

    return ans;
};