class Node {
    constructor(data) {
        this.data = data;
    }
}

class Graph {
    constructor() {
        this.edges = new Map();
    }
    addNode(node) {
        this.edges.set(node, []);
    }
    addEdge(start, end) {
        this.edges.get(start).push(end);
    }
    getNeighbors(node) {
        return this.edges.get(node);
    }
}

/*
Example graph representing states:
*/

const graph = new Graph();

const washington = new Node("Washington");
const oregon = new Node("Oregon");
const idaho = new Node("Idaho");
const california = new Node("California");
const nevada = new Node("Nevada");
const utah = new Node("Utah");

graph.addNode(washington);
graph.addNode(oregon);
graph.addNode(idaho);
graph.addNode(california);
graph.addNode(nevada);
graph.addNode(utah);

graph.addEdge(washington, oregon);
graph.addEdge(washington, idaho);
graph.addEdge(oregon, california);
graph.addEdge(oregon, nevada);
graph.addEdge(oregon, idaho);
graph.addEdge(idaho, utah);
graph.addEdge(nevada, utah);

/*
TODO: find the shortest path between Washington and another state, in terms of the number of states visited.  You can assume that there are no cycles in the graph.

Example IO:
shortestPath(graph, washington, utah)
=> 2 // idaho, utah
shortestPath(graph, washington, oregon)
=> 1 // oregon
*/
function shortestPath(graph, start, end) {
       let queue = [start];
       if(!graph.getNeighbors(start).includes(end)) {
           let distance = 1;
           while (queue.length > 0) {
               let currentNode = queue.shift();
               for (let i = 0; i < graph.getNeighbors(currentNode).length; i++) {
                   if (graph.getNeighbors(currentNode).includes(end)){
                        return distance
                   } else {
                       queue.push(graph.getNeighbors(currentNode)[i]);
                       console.log(graph.getNeighbors(currentNode)[i].data, distance)
                   }
               }
               distance += 1
           }
       } else {
           return 1
       }
}

console.log(shortestPath(graph, washington, utah))
// console.log(shortestPath(graph, washington, california))