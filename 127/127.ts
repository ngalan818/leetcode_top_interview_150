function ladderLength(beginWord: string, endWord: string, wordList: string[]): number {
    let dictionary: Set<string> = new Set(wordList);
    if (!dictionary.has(endWord)) return 0;

    let n = beginWord.length;
    let a = 'a'.charCodeAt(0);
    let z = 'z'.charCodeAt(0);
    let step = 1;
    let queue = [ beginWord ];
    let visited: Set<string> = new Set();
    while (queue.length > 0) {
        step++;
        let size = queue.length;
        let newQueue: string[] = [];
        for (let i = 0; i < size; i++) {
            let word = queue[i];
            if (visited.has(word)) continue;
            visited.add(word);
            for (let transformation of getTransformations(word)) {
                if (transformation === endWord) return step;
                newQueue.push(transformation);
            }
        }
        queue = newQueue;
    }
    return 0;

    function getTransformations(word: string): string[] {
        let transformations: string[] = [];
        for (let i = 0; i < n; i++) {
            for (let j = a; j <= z; j++) {
                if (j !== word.charCodeAt(i)) {
                    let newWord = word.substring(0, i) + String.fromCharCode(j) + word.substring(i + 1);
                    if (dictionary.has(newWord)) transformations.push(newWord);
                }
            }
        }
        return transformations;
    }
};