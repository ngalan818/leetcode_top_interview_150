function insert(intervals: number[][], newInterval: number[]): number[][] {
    let upTo = 0;   // slice from 0 up to
    let from = intervals.length;    // slice till the end from

    let merged: number[] = newInterval;
    let hasMerged = false;
    for (let i = 0; i <= intervals.length; i++) {
        if (i === intervals.length) {
            if (!hasMerged) {
                upTo = i;
            }
        } else if (intervals[i][0] > newInterval[1]) {
            if (!hasMerged) {
                upTo = i;
                from = i;
            }
            break;
        } else if (intervals[i][1] >= newInterval[0]){
            if (!hasMerged) {
                upTo = i;
                hasMerged = true;
            }
            from = i + 1;
            merged = [ Math.min(intervals[i][0], merged[0]), Math.max(intervals[i][1], merged[1]) ];
        }
    }

    return [ ...(intervals.slice(0, upTo)), merged, ...(intervals.slice(from)) ];

};


function insert(intervals: number[][], newInterval: number[]): number[][] {
    let ans: number[][] = [];

    let merged: number[] = newInterval;
    for (let i = 0; i < intervals.length; i++) {
        if (intervals[i][1] < newInterval[0]) {
            ans.push(intervals[i]);
        } else if (intervals[i][0] > newInterval[1]) {
            if (merged.length > 0) {
                ans.push(merged);
                merged = [];
            }
            ans.push(intervals[i]);
        } else {
            merged = [ Math.min(intervals[i][0], merged[0]), Math.max(intervals[i][1], merged[1]) ];
        }
    }

    if (merged.length > 0) {
        ans.push(merged);
    }

    return ans;
};