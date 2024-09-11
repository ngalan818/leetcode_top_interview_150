function minMutation(startGene: string, endGene: string, bank: string[]): number {
    let set: Set<string> = new Set(bank);
    if (!set.has(endGene)) return -1;

    let queue: string[] = [ startGene ];
    let step = 0;
    let visited: Set<string> = new Set();
    let mutations = { 
        'A': [ 'C', 'G', 'T' ], 
        'C': [ 'A', 'G', 'T' ], 
        'G': [ 'A', 'C', 'T' ], 
        'T': [ 'A', 'C', 'G' ] 
    };
    while (queue.length > 0) {
        let size = queue.length;
        step++;
        for (let i = 0; i < size; i++) {
            let gene = queue.shift()!;
            if (visited.has(gene)) continue;
            visited.add(gene);
            for (let mutation of possibleMutations(gene)) {
                if (mutation === endGene) return step;
                queue.push(mutation);
            }
        }
    }

    return -1;

    function possibleMutations(gene: string): string[] {
        let res: string[] = [];
        for (let i = 0; i < 8; i++) {
            for (let mut of mutations[gene.charAt(i)]) {
                let newGene = gene.substring(0, i) + mut + gene.substring(i + 1);
                if (set.has(newGene)) res.push(newGene);
            }
        }
        return res;
    }
};