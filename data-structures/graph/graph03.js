const queue = require('../queue/queue');
const stack = require('../stack/better-stack');
const dictionary = require('../dictionary/dictionary');

module.exports = () => {
  let vertices = [];

  const adjList = dictionary();

  const addVertex = (v) => {
    vertices.push(v);
    adjList.set(v, {});
  };

  const addEdge = (v, w) => {
    adjList.get(v)[w] = 1;
    adjList.get(w)[v] = 1;
  }

  const getEdges = (v) => {
    return Object.keys(adjList.get(v));
  };

  const initializeVertexState = () => {
    const result = {};

    vertices.forEach(v => result[v] = 'unvisited');

    return result;
  }

  const dfs = (v) => {
    const s = stack();
    const state = initializeVertexState();
    const result = {
      path: []
    };
    s.push(v);
    result.path.push(v);

    while(!s.isEmpty()) {
      let current = s.peek();

      state[current] = 'visited';
      const edges = getEdges(current);

      const isAllVisited = edges.every(edge => state[edge] === 'visited');
      if (isAllVisited) {
        s.pop();
      } else {
        edges.some(edge => {
          if (state[edge] === 'unvisited') {
            state[edge] = 'visited';
            s.push(edge);
            result.path.push(edge);
            return true;
          }
        });

      }
    }

    return result;
  }

  return Object.freeze({ addEdge, addVertex, dfs });
};
