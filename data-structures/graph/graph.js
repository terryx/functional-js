const Dictionary = require('../dictionary/dictionary');
const Queue = require('../queue/Queue');

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

}

module.exports = Graph;
