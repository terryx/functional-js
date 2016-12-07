const dictionary = require('../dictionary/dictionary');
const queue = require('../queue/queue');
const Stack = require('../stack/stack');

const Graph = () => {
  let vertices = [];
  let adjList = dictionary();

  const addVertex = (v) => {
    vertices.push(v);
    adjList.set(v, {}); //vertices[v]
  };

  const addEdge = (v1, v2) => {
    adjList.get(v1)[v2] = 1;
    adjList.get(v2)[v1] = 1;
  };

  const getEdges = (v) => {
    return adjList.get(v);
  };

  const initializeVertices = () => {
    let state = {};

    vertices.forEach(vertex => {
      state[vertex] = 'unvisited';
    });

    return state;
  };

  const bfs = (v) => {
    const q = queue();
    const result = [];
    const state = initializeVertices();

    q.enqueue(v);

    while (!q.isEmpty()) {
      let vertex = q.dequeue();
      let edges = getEdges(vertex);

      Object.keys(edges).forEach(edge => {
        if (state[edge] === 'unvisited') {
          state[edge] = 'visited';
          q.enqueue(edge);
        }
      });

      state[vertex] = 'explored';
      result.push(vertex);
    }

    return result;
  };

  const fullBFS = (v) => {
    const state = initializeVertices();
    const q = queue();
    const distances = {};
    const predecessors = {};

    q.enqueue(v);

    while (!q.isEmpty()) {
      const vertex = q.dequeue();
      const edges = getEdges(vertex);

      Object.keys(edges).forEach(edge => {
        if (state[edge] === 'unvisited') {
          state[edge] = 'visited';
          if (!distances[vertex]) {
            distances[vertex] = 0;
          }

          distances[edge] = distances[vertex] + 1;

          predecessors[edge] = vertex;
          q.enqueue(edge);
        }
      });

      state[vertex] = 'explored';
    }

    return {distances, predecessors};
  };

  const dfs = (v, callback) => {
    const state = initializeVertices();
    const result = [];
    return dfsVisit(v, state, result);
  }

  const dfsVisit = (v, state, result) => {
    state[v] = 'visited';
    result.push(v)

    const edges = getEdges(v);

    Object.keys(edges).forEach(edge => {
      if (state[edge] === 'unvisited') {
        dfsVisit(edge, state, result);
      }
    });

    state[v] = 'explored';

    return result;
  };

  const fullDFS = (v) => {
    const state = initializeVertices();
    const stack = new Stack();
    const path = [];
    const distances = {};
    const predecessors = {};

    stack.push(v)
    state[v] = 'visited';
    path.push(v);

    while(!stack.isEmpty()) {
      const vertex = stack.peek();
      const edges = getEdges(vertex);

      const isFullyVisited = Object.keys(edges).every(edge => state[edge] === 'visited');

      distances[vertex] = 0;

      if (isFullyVisited) {
        stack.pop();
      } else {
        Object.keys(edges).some(edge => {
          if (state[edge] === 'unvisited') {
            state[edge] = 'visited';
            path.push(edge);

            distances[edge] = distances[vertex] + 1; 
            stack.push(edge);
            return true;
          }
        });
      }
    }

    return {
      path,
      distances,
      predecessors
    };
  }

  return Object.freeze({
    addVertex,
    addEdge,
    getEdges,
    bfs,
    fullBFS,
    dfs,
    fullDFS
  });
}

module.exports = Graph;
