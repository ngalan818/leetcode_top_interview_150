function isHappy(n: number): boolean {
    
    let sum = 0;
    let cycle: Set<number> = new Set();
    while (true) {
        let digit = n % 10;
        sum += (digit * digit);

        n = (n - digit) / 10;
        if (n === 0) {
            if (sum === 1) {
                return true;
            }
            if (cycle.has(sum)) {
                break;
            }
            cycle.add(sum);
            n = sum;
            sum = 0;
        }
    }

    return false;
};