/**
 * Definition for singly-linked list.
*/
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}
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


function sortList(head: ListNode | null): ListNode | null {
    return quickSort(head)[0];

    function quickSort(head: ListNode | null): [ListNode | null, ListNode | null] {
        if (head == null) return [null, null];
        let pivot = head;
        let curr = head.next;
        let leftHead = new ListNode();
        let leftCurr = leftHead;
        let rightHead = new ListNode();
        let rightCurr = rightHead;
        let prev: ListNode | null = head;
        let sorted = true;
        let inverted = true;
        while (curr) {
            if (curr.val <= prev.val) sorted = false;
            if (curr.val > prev.val) inverted = false;

            if (curr.val > pivot.val) {
                rightCurr.next = curr;
                rightCurr = curr;
            } else {
                leftCurr.next = curr;
                leftCurr = curr;
            }
            prev = curr;
            curr = curr.next;
        }
        if (sorted) return [head, prev];
        if (inverted) {
            curr = head;
            prev = null;
            let next: ListNode | null;
            while (curr !== null) {
                next = curr.next;
                curr.next = prev;
                prev = curr;
                curr = next;
            }
            return [prev, head];
        }
        
        leftCurr.next = null;
        rightCurr.next = null;
        
        let [sortedLeftHead, sortedLeftTail] = quickSort(leftHead.next);
        let [sortedRightHead, sortedRightTail] = quickSort(rightHead.next);
        
        if (!sortedLeftTail && !sortedRightHead) {
            pivot.next = null;
            return [pivot, pivot];
        } else if (!sortedLeftTail) {
            pivot.next = sortedRightHead;
            return [pivot, sortedRightTail];
        } else if (!sortedRightHead) {
            pivot.next = null;
            sortedLeftTail.next = pivot;
            return [sortedLeftHead, pivot];
        } else {
            sortedLeftTail.next = pivot;
            pivot.next = sortedRightHead;
            return [sortedLeftHead, sortedRightTail];
        }
    }
};


function sortList(head: ListNode | null): ListNode | null {
    return mergeSort(head);

    function mergeSort(head: ListNode | null): ListNode | null {
        if (!head) return null;
        if (!head.next) return head;
        if (!head.next.next) {
            let second = head.next;
            if (head.val > second.val) {
                second.next = head;
                head.next = null;
                return second;
            }
            return head;
        }

        let mid = findMid(head)!;
        let right = mergeSort(mid.next);

        mid.next = null;
        let left = mergeSort(head);

        let sortedHead = new ListNode();
        let curr = sortedHead;
        while (left && right) {
            if (left.val < right.val) {
                curr.next = left;
                curr = left;
                left = left.next;
            } else {
                curr.next = right;
                curr = right;
                right = right.next;
            }
        }
        if (left) {
            curr.next = left;
        }
        if (right) {
            curr.next = right;
        }
        return sortedHead.next;
    }

    function findMid(head: ListNode | null) {
        if (!head) return null;

        let fast = head;

        while (fast?.next?.next) {
            fast = fast.next.next;
            head = head.next!;
        }
        return head;
    }
}