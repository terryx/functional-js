const Dictionary = require('../dictionary/dictionary01');
const Queue = require('../queue/queue');

function Graph() {
  let vertices = [];
  let adjList = new Dictionary();

  this.addVertex = (v) => {
    vertices.push(v);
    adjList.set(v, []);
  };

  this.addEdge = (v, w) => {
    adjList.get(v).push(w);
    adjList.get(w).push(v);
  }

  this.getEdges = (vertex) => {
    return adjList.get(vertex);
  };

  //white = not visited grey = visited not explored black = completely explored
  let initializeColor = () => {
    let color = [];

    vertices.forEach((vertex, i) => {
      color[vertices[i]] = 'white';
    });

    return color;
  };

  //breadth-first search
  this.bfs = (v, callback) => {
    let color = initializeColor(),
    queue = Queue();

    queue.enqueue(v);

    while (!queue.isEmpty()) {
      let u = queue.dequeue();
      let neighbors = adjList.get(u);

      color[u] = 'grey';

      for (let i = 0; i < neighbors.length; i++) {
        let w = neighbors[i];

        if (color[w] === 'white') {
          color[w] = 'grey';
          queue.enqueue(w);
        }
      }

      color[u] = 'black';

      if (callback) {
        callback(u);
      }
    }
  };

  this.BFS = (v) => {
    let color = initializeColor();
    let queue = Queue();
    let d = [];
    let pred = [];

    queue.enqueue(v);

    for (let i = 0; i < vertices.length; i++) {
      d[vertices[i]] = 0; //{4}
      pred[vertices[i]] = null; //{5}
    }

    while (!queue.isEmpty()) {
      let u = queue.dequeue();
      let neighbors = adjList.get(u);
      color[u] = 'grey';

      for (let i = 0; i < neighbors.length; i++) {
        let w = neighbors[i];

        if (color[w] === 'white') {
          color[w] = 'grey';
          d[w] = d[u] + 1; //{6}
          pred[w] = u; //{7}

          queue.enqueue(w);
        }
      }

      color[u] = 'black';
    }

    return {distances: d, predecessors: pred};
  }

  let time = 0;
  this.DFS = () => {
    let color = initializeColor(),
    d = [],
    f = [],
    p = [];
    time = [];

    for (let i = 0; i < vertices.length; i++) {
      f[vertices[i]] = 0;
      d[vertices[i]] = 0;
      p[vertices[i]] = null;
    }

    for (let i = 0; i < vertices.length; i++) {
      if (color[vertices[i]] === 'white') {
        DFSVisit(vertices[i], color, d, f, p);
      }
    }

    return {
      discovery: d,
      finished: f,
      predecessors: p
    };
  };

  let DFSVisit = (u, color, d, f, p) => {
    // console.log('discovered ' + u);
    color[u] = 'grey';
    d[u] = ++time;

    let neighbors = adjList.get(u);
    for (let i = 0; i < neighbors.length; i++) {
      let w = neighbors[i];

      if (color[w] === 'white') {
        p[w] = u; //{6}
        DFSVisit(w, color, d, f, p);
      }
    }

    color[u] = 'black';
    f[u] = ++time;
    // console.log('explored ' + u);
  };

}

module.exports = Graph;
