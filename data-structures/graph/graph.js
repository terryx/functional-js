const Dictionary = require('../dictionary/dictionary');
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

  //white = not visited
  //grey = visited not explored
  //black = completely explored
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

    while(!queue.isEmpty()) {
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

      if (callback){
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

    while(!queue.isEmpty()) {
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

    return {
      distances: d,
      predecessors: pred
    };
  }

}

module.exports = Graph;
