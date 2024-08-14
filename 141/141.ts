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

function hasCycle(head: ListNode | null): boolean {
    if (head === null) return false;

    let visited: Set<ListNode> = new Set();

    while (head !== null) {
        if (visited.has(head)) return true;
        visited.add(head);
        head = head.next;
    }

    return false;
};

/**
 * Hacky solution :p taking advantage of constraints:
 * The number of the nodes in the list is in the range [0, 10^4].
 * -10^5 <= Node.val <= 10^5
 */
function hasCycle(head: ListNode | null): boolean {
    if (head === null || head.next === null) return false;

    let i = 10001
    while (head !== null) {
        if (head.val > 10000) return true;
        head.val = i++;
        head = head.next;
    }

    return false;
};

/**
 * standard solution: fast & slow points algorithm
 */
function hasCycle(head: ListNode | null): boolean {
    if (head === null || head.next === null) return false;

    let fast = head;
    while (fast !== null && fast.next !== null) {
        head = head!.next;
        fast = fast!.next!.next;
        
        if (fast === head) return true;
    }

    return false;
};

