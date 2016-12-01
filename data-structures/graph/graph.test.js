const test = require('ava');
const Graph = require('./graph');

test('add vertex', t => {
  const graph = new Graph();

  const myVertices = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I'
  ];

  myVertices.forEach(vertex => {
    graph.addVertex(vertex);
  });

  graph.addEdge('A', 'B');
  graph.addEdge('A', 'C');
  graph.addEdge('A', 'D');
  graph.addEdge('C', 'D');
  graph.addEdge('C', 'G');
  graph.addEdge('D', 'G');
  graph.addEdge('D', 'H');
  graph.addEdge('B', 'E');
  graph.addEdge('B', 'F');
  graph.addEdge('E', 'I');

  t.deepEqual(graph.getEdges('A'), ['B', 'C', 'D']);
});

test('breadth-first traversal', t => {
  const graph = new Graph();

  const myVertices = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I'
  ];

  myVertices.forEach(vertex => {
    graph.addVertex(vertex);
  });

  graph.addEdge('A', 'B');
  graph.addEdge('A', 'C');
  graph.addEdge('A', 'D');
  graph.addEdge('C', 'D');
  graph.addEdge('C', 'G');
  graph.addEdge('D', 'G');
  graph.addEdge('D', 'H');
  graph.addEdge('B', 'E');
  graph.addEdge('B', 'F');
  graph.addEdge('E', 'I');

  let result = [];
  function printVertices(vertex) {
    result.push(vertex)
  }

  graph.bfs('A', printVertices)

  t.deepEqual(result, [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I'
  ]);

  let shortestPathA = graph.BFS(myVertices[0]);

  t.is(shortestPathA.distances['A'], 0);
  t.is(shortestPathA.predecessors['B'], 'A');
});
