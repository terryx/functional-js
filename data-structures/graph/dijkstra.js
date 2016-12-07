const graph = [
  [0, 2, 4, 0, 0, 0],
  [0, 0, 1, 4, 2, 0],
  [0, 0, 0, 0, 3, 0],
  [0, 0, 0, 0, 0, 2],
  [0, 0, 0, 3, 0, 2],
  [0, 0, 0, 0, 0, 0]
];

this.dijkstra = function(src) {
  let dist = [], visited = [],
  length = this.graph.length;

  for (let i = 0; i < length; i++) {
    dist[i] = INF;
    visited[i] = false;
  }

  dist[src] = 0;

  for (let i = 0; i < length - 1; i++) {
    let u = minDistance(dist, visited);
    visited[u] = true;

    for (let v = 0; v < length; v++) {
      if (!visited[v] &&
        this.graph[u][v] != 0 &&
        dist[u] != INF &&
        dist[u] + this.graph[u][v] < dist[v]
      ) {
        dist[v] = dist[u] + this.graph[u][v]
      }
    }
  }

  return dist;
};

console.log(this.d);
