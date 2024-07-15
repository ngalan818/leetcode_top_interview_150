class RandomizedSet {
    valToIndex: Map<number, number>;
    vals: number[];

    constructor() {
        this.valToIndex = new Map<number, number>();
        this.vals = [];
    }

    insert(val: number): boolean {
        if (this.valToIndex.has(val)) return false;
        this.vals.push(val);
        this.valToIndex.set(val, this.vals.length - 1);
        return true;
    }

    remove(val: number): boolean {
        let index = this.valToIndex.get(val);
        if (index === undefined) return false;
        this.vals[index] = this.vals[this.vals.length - 1];
        this.vals.pop();
        this.valToIndex.set(this.vals[index], index);
        this.valToIndex.delete(val);
        return true;
    }

    getRandom(): number {
        let index = Math.floor(Math.random() * this.vals.length);
        return this.vals[index];
    }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */