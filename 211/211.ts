class WordDictionary {
    t: _Trie;

    constructor() {
        this.t = new _Trie();
    }

    addWord(word: string): void {
        this.t.insert(word);
    }

    search(word: string): boolean {
        return this.t.match(word);
    }
}

class _Trie {

    map: Set<string>;
    root: _TrieNode;

    constructor() {
        this.map = new Set();    
        this.root = new _TrieNode(false);
    }

    insert(word: string): void {
        if (this.map.has(word)) return;
        this.map.add(word);

        const recursiveAdd = (i: number) => {
            if (i === word.length - 1) return new _TrieNode(true);

            let newNode = new _TrieNode(false); 
            newNode.children.set(word[i + 1], recursiveAdd(i + 1));
            return newNode;
        }
        let i = 0;
        let char = word[i];
        let node: _TrieNode = this.root;
        while (i < word.length) {
            char = word[i];
            if (node.children.has(char)) {
                node = node.children.get(char)!;
            } else {
                break;
            }
            i++;
        }
        if (i == word.length) {
            node.isFullWord = true;
        } else {
            node.children.set(char, recursiveAdd(i));
        }
    }

    match(pattern: string): boolean {
        if (this.map.has(pattern)) return true;

        let queue: _TrieNode[] = [ this.root ];
        let i = 0;

        while (queue.length > 0) {
            if (i == pattern.length) break;
            let letter = pattern[i];
            let size = queue.length;
            let newQ: _TrieNode[] = [];
            for (let j = 0; j < size; j++) {
                let node = queue[j];
                if (letter == '.') {
                    node.children.forEach(c => newQ.push(c));
                } else if (node.children.has(letter)) {
                    newQ.push(node.children.get(letter)!);
                }
            }
            queue = newQ;
            i++;
        }
        return i == pattern.length && queue.some((n => n.isFullWord));
    }
}

class _TrieNode {
    children: Map<string, _TrieNode>;
    isFullWord: boolean;
    constructor(isFullWord: boolean) {
        this.children = new Map();
        this.isFullWord = isFullWord;
    }
}


/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */