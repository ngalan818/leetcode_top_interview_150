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

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    if (list1 === null && list2 === null) return null;
    if (list1 === null) return list2;
    if (list2 === null) return list1;

    let ans: ListNode | null = null;
    let prev: ListNode | null = null;
    
    while(list1 !== null && list2 !== null) {
        if (list1.val < list2.val) {
            if (prev === null) {
                ans = list1;
            } else {
                prev.next = list1;
            }
            prev = list1;
            list1 = list1.next;
        } else {
            if (prev === null) {
                ans = list2;
            } else {
                prev.next = list2;
            }
            prev = list2;
            list2 = list2.next;
        }
    }

    if (list1 === null) {
        prev!.next = list2;
    } else {
        prev!.next = list1;
    }

    return ans;
};