const test = require('ava');
const Graph = require('./graph02');

test.beforeEach(t => {
  const graph = Graph();
  const vertices = [
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

  vertices.forEach(vertex => {
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

  t.context.graph = graph;
  t.context.vertices = vertices;
});

test('add vertex', t => {
  const graph = t.context.graph;
  t.deepEqual(graph.getEdges('A'), {
    B: 1,
    C: 1,
    D: 1
  });
});

test('breadth-first traversal', t => {
  const graph = t.context.graph;

  t.deepEqual(graph.bfs('A'), [
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
});

test('shortestPathA using breadth-first search', t => {
  const graph = t.context.graph;

  let shortestPathA = graph.fullBFS('A');

  t.deepEqual(shortestPathA.distances, {
    A: 0,
    B: 1,
    C: 1,
    D: 1,
    E: 2,
    F: 2,
    G: 2,
    H: 2,
    I: 3
  });

  t.deepEqual(shortestPathA.predecessors, {
    B: 'A',
    C: 'A',
    D: 'A',
    E: 'B',
    F: 'B',
    G: 'C',
    H: 'D',
    I: 'E'
  });
});

test('depth-first search', t => {
  const graph = t.context.graph;
  const dfs = graph.dfs('A');

  t.deepEqual(dfs, [
    'A',
    'B',
    'E',
    'I',
    'F',
    'C',
    'D',
    'G',
    'H'
  ]);
});

test('full depth-first search', t => {
  const graph = t.context.graph;
  const dfsB = graph.fullDFS('B');
  const dfsD = graph.fullDFS('D');
  
  t.deepEqual(dfsB.path, ['B','A','C','D','G','H','E','I','F']);
  t.deepEqual(dfsD.path, ['D', 'A', 'B', 'E', 'I', 'F', 'C', 'G', 'H'])
});
