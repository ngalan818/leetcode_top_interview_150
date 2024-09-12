class Trie {
    map: Set<string>;
    root: TrieNode;

    constructor() {
        this.map = new Set();    
        this.root = new TrieNode();
    }

    insert(word: string): void {
        if (this.map.has(word)) return;
        this.map.add(word);

        const recursiveAdd = (i: number) => {
            if (i === word.length - 1) return new TrieNode();

            let newNode = new TrieNode(); 
            newNode.children.set(word[i + 1], recursiveAdd(i + 1));
            return newNode;
        }
        let i = 0;
        let char = word[i];
        let node: TrieNode = this.root;
        while (i < word.length) {
            char = word[i];
            if (node.children.has(char)) {
                node = node.children.get(char)!;
            } else {
                break;
            }
            i++;
        }
        if (i !== word.length) {
            node.children.set(char, recursiveAdd(i));
        }
    }

    search(word: string): boolean {
        return this.map.has(word);
    }

    startsWith(prefix: string): boolean {
        if (this.map.has(prefix)) return true;

        let node: TrieNode = this.root;
        for (let i = 0; i < prefix.length; i++) {
            let char = prefix[i];
            if (node.children.has(char)) {
                node = node.children.get(char)!;
            } else {
                return false;
            }
        }
        return true;
    }
}

class TrieNode {
    children: Map<string, TrieNode>;
    constructor() {
        this.children = new Map();
    }
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */