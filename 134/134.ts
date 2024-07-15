/** Brute force. Time: O(n^2) space: O(1) */
function canCompleteCircuit(gas: number[], cost: number[]): number {
    let n = gas.length;
    let total = 0;
    for (let i = 0; i < n; i++) {
        total = total + gas[i] - cost[i];
    }
    if (total < 0) return -1;

    for (let i = 0; i < n; i++) {
        if (gas[i] == 0) continue;
        let start = 0;
        let notThisOne = false;
        for (let j = i; j < n; j++) {
            start = start + gas[j] - cost[j];
            if (start < 0) {
                notThisOne = true;
                break;
            }
        }
        if (!notThisOne) {
            for (let j = 0; j < i; j++) {
                start = start + gas[j] - cost[j];
                if (start < 0) {
                    notThisOne = true;
                    break;
                }
            }
        }
        if (!notThisOne) {
            return i;
        }
    }
    return -1;
};

/** Time: O(n) space: O(1) */
function canCompleteCircuit(gas: number[], cost: number[]): number {
    let n = gas.length;
    let overall = 0;
    let tank = 0;
    let start = 0;

    for (let i = 0; i < n; i++) {
        overall = overall + gas[i] - cost[i];
        tank = tank + gas[i] - cost[i];
        if (tank < 0) {
            tank = 0;
            start = i + 1;
        }
    }
    return overall < 0 ? -1 : start;
};