class LRUCache {
    map: Map<number, DoubleLinkedListNode>;
    head: DoubleLinkedListNode;
    tail: DoubleLinkedListNode;
    capacity: number;

    constructor(capacity: number) {
        this.map = new Map<number, DoubleLinkedListNode>();
        this.head = new DoubleLinkedListNode(-1, -1);
        this.tail = new DoubleLinkedListNode(-1, -1);
        this.head.next = this.tail;
        this.tail.prev = this.head;
        this.capacity = capacity;
    }

    get(key: number): number {
        if (this.map.has(key)) {
            let node = this.map.get(key);
            node.prev.next = node.next;
            node.next.prev = node.prev;

            node.prev = this.head;
            node.next = this.head.next;
            this.head.next.prev = node;
            this.head.next = node;

            return node.val;
        }
        return -1;
    }

    put(key: number, value: number): void {
        if (this.map.has(key)) {
            this.map.get(key).val = value;
            this.get(key);
        } else {
            if (this.map.size === this.capacity) {
                let deleteKey = this.tail.prev.key;
                this.map.delete(deleteKey);
                this.tail.prev.prev.next = this.tail;
                this.tail.prev = this.tail.prev.prev;
            }
            let node = new DoubleLinkedListNode(key, value, this.head, this.head.next);
            this.head.next.prev = node;
            this.head.next = node;
            this.map.set(key, node);
        }
    }

}

class DoubleLinkedListNode {
    key: number;
    val: number;
    prev: DoubleLinkedListNode | null;
    next: DoubleLinkedListNode | null;

    constructor(key: number, val: number, prev?: DoubleLinkedListNode | null, next?: DoubleLinkedListNode | null) {
        this.key = key;
        this.val = val;
        this.prev = prev || null;
        this.next = next || null;
    }
}
/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */