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

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    if (head === null || head.next === null) return null;
    
    let curr: ListNode | null = head;
    let heap: ListNode[] = new Array<ListNode>(n + 1);
    while (curr !== null) {
        heap.push(curr);
        if (heap.length >= n + 1) {
            heap.shift();
        }
        curr = curr.next;
    }
    if (n === 1) {
        heap[0].next = null;
    } else {
        heap[0].next = heap[2];
    }
    return head;
};


function removeNthFromEnd(head, n) {
    let fast = head;
    let slow = head;
  
    for (let i = 0; i < n; i++) {
      fast = fast.next;
    }
  
    if (!fast) return head.next;
  
    while (fast.next) {
      fast = fast.next;
      slow = slow.next;
    }
  
    slow.next = slow.next.next;
    return head;
  }