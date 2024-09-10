function findOrder(numCourses: number, prerequisites: number[][]): number[] {
    if (numCourses === 1) return [0];

    let graph: Record<number, number[]> = [];
    let inDegrees: number[] = new Array<number>(numCourses).fill(0);

    for (let prereq of prerequisites) {
        inDegrees[prereq[0]]++;
        (graph[prereq[1]] ??= []).push(prereq[0]);
    }

    let queue: number[] = [];
    for (let i = 0; i < numCourses; i++) {
        if (inDegrees[i] === 0) queue.push(i);
    }

    let ans: number[] = [];
    while (queue.length > 0) {
        let course = queue.shift()!;
        ans.push(course);

        if (graph[course]) {
            for (let postreq of graph[course]) {
                if (--(inDegrees[postreq]) === 0) {
                    queue.push(postreq);
                }
            }
        }
    }

    return ans.length === numCourses ? ans : [];
};