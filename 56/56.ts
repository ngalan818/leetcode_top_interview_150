function merge(intervals: number[][]): number[][] {
    intervals.sort((a, b) => a[0] - b[0]);

    let ans: number[][] = [];
    let interval = intervals[0];
    for (let i = 0; i <= intervals.length; i++) {
        if (i === intervals.length || intervals[i][0] > interval[1]) {
            ans.push(interval);
            interval = intervals[i];
        } else if (intervals[i][1] > interval[1]) {
            interval = [ interval[0], intervals[i][1] ];
        }
    }

    return ans;
};