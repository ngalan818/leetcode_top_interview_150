function findMinArrowShots(points: number[][]): number {
    if (points.length === 1) return 1;
    
    points.sort((a, b) => a[0] - b[0]);

    let ans = 0;
    let rightBound = points[0][1];
    let i = 1;
    while (i < points.length) {
        if (points[i][0] <= rightBound) {
            rightBound = Math.min(rightBound, points[i][1]);
        } else {
            ans++;
            rightBound = points[i][1];
        }
        i++;
    }

    return ans + 1;
};