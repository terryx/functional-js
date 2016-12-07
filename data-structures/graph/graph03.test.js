const test = require('ava');
const graph = require('./graph03');

test.beforeEach(t => {
  const g = graph();
  g.addVertex('A');
  g.addVertex('B');
  g.addVertex('C');
  g.addVertex('D');
  g.addVertex('E');
  g.addVertex('F');
  g.addVertex('G');
  g.addVertex('H');
  g.addVertex('I');

  g.addEdge('A', 'B');
  g.addEdge('A', 'C');
  g.addEdge('A', 'D');
  g.addEdge('C', 'D');
  g.addEdge('C', 'G');
  g.addEdge('D', 'G');
  g.addEdge('D', 'H');
  g.addEdge('B', 'E');
  g.addEdge('B', 'F');
  g.addEdge('E', 'I');

  t.context.g = g;
});

test('dfs', t => {
  const g = t.context.g;

  const result = g.dfs('A');
  t.deepEqual(result.path, [ 'A', 'B', 'E', 'I', 'F', 'C', 'D', 'G', 'H' ]);
});
