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

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
    if (lists.length === 0) return null;
    return mergeKLists(0, lists.length);

    function mergeKLists(start: number, n: number): ListNode | null {
        if (n <= 1) {
            return lists[start];
        } 
        
        let halfN = Math.floor(n / 2);
        let first = mergeKLists(start, halfN);
        let second = mergeKLists(start + halfN, n - halfN);
        let sortedHead = new ListNode();
        let curr = sortedHead;
        while (first && second) {
            if (first.val < second.val) {
                curr.next = first;
                curr = first;
                first = first.next;
            } else {
                curr.next = second;
                curr = second;
                second = second.next;
            }
        }
        if (first) {
            curr.next = first;
        }
        if (second) {
            curr.next = second;
        }
        return sortedHead.next;

    }
};