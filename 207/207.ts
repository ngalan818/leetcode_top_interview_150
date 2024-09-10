/**
 * Check cycle using topological sort
 * Topological sort: sort a directed acyclic graph (DAG) so that the vertices that are ordered in a way
 * where a comes before b if there is an edge a->b
 * If there is a cycle in the graph, it is not possible to do Topological sort (some vertices will be missing)
 */
function canFinish(numCourses: number, prerequisites: number[][]): boolean {
    let graph: Record<number, number[]> = [];
    let inDegrees: number[] = new Array<number>(numCourses).fill(0);    // the number of vertices coming into the current vertex

    for (let prereq of prerequisites) {
        inDegrees[prereq[0]]++;
        (graph[prereq[1]] ??= []).push(prereq[0]);
    }

    let queue: number[] = [];
    // find out which vertices have no vertices coming into (like the root of a tree) so we know where to start from
    for (let i = 0; i < numCourses; i++) {
        if (!inDegrees[i]) queue.push(i);   
    }

    let count = 0;
    while (queue.length > 0) {
        let course = queue.shift()!;
        count++;

        let postrequites = graph[course] || [];
        for (let postrequite of postrequites) {
            if (--(inDegrees[postrequite]) === 0) { // only start processing the vertex if we have processed all its ancestors
                queue.push(postrequite);
            }
        }
    }

    return count === numCourses;
};