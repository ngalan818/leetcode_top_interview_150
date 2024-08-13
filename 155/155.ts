class MinStack {
    stack: number[];
    minIndices: number[];   // can actually keep the val directly
    
    constructor() {
        this.stack = [];
        this.minIndices = [];
    }

    push(val: number): void {
        this.stack.push(val);

        let lastMinIndex = this.minIndices[this.minIndices.length - 1];
        this.minIndices.push(this.stack[lastMinIndex] <= val ? lastMinIndex : this.stack.length - 1);
    }

    pop(): void {
        this.stack.pop();
        this.minIndices.pop();
    }

    top(): number {
        return this.stack[this.stack.length - 1];
    }

    getMin(): number {
        return this.stack[this.minIndices[this.minIndices.length - 1]];
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */