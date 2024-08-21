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

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
    if (head === null || head.next === null || k === 1) return head;

    let dummy: ListNode | null = new ListNode(0);
    
    let i = 0;
    let curr: ListNode | null = head;
    let prev: ListNode | null = dummy;
    let groupHead: ListNode | null;
    let lastGroupTail: ListNode | null;
    while (curr !== null) {
        if (i % k === 0) {
            groupHead = curr;
            lastGroupTail = prev;
            
            prev = curr;
            curr = curr.next;
        } else if ((i + 1) % k === 0) {
            let next = curr.next;
            curr.next = prev;
            lastGroupTail!.next = curr;
            groupHead!.next = next;

            prev = groupHead;
            curr = next;
        } else {
            let next = curr.next;
            if (next !== null) {
                curr.next = prev;
    
                prev = curr;            
                curr = next;
            } 
            else {
                while (curr !== groupHead && prev !== groupHead) {
                    let tmp = prev.next;
                    prev.next = curr;
                    curr = prev;
                    prev = tmp;
                }
                break;
            }
        }
        i++;
    }
    return dummy.next;
};