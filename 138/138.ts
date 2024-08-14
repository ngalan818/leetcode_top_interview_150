/**
 * Definition for _Node.
*/
class _Node {
    val: number
    next: _Node | null
    random: _Node | null

    constructor(val?: number, next?: _Node, random?: _Node) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
        this.random = (random===undefined ? null : random)
    }
}


function copyRandomList(head: _Node | null): _Node | null {
    if (head === null) return null;

    let headCopy: _Node | null = head;
    let dummy = new _Node(0);
    let curr = dummy;
    let mapping: Map<_Node, _Node> = new Map();

    while (head !== null) {
        curr.next = new _Node(head.val);
        mapping.set(head, curr.next);
        head = head.next;
        curr = curr.next;
    }

    curr = dummy.next!;
    while (headCopy !== null) {
        if (headCopy.random) {
            curr.random = mapping.get(headCopy.random)!;
        }
        curr = curr.next!;
        headCopy = headCopy.next;
    }

    return dummy.next;
};