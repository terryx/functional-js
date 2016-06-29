function vector() {
  const array = [];

  return {
    get: function get(i) {
      return array[i];
    },
    store: function store(i, v) {
      array[i] = v;
    },
    append: function append(v) {
      array.push(v);
    }
  }
}
var myvector = vector();
var stash;
myvector.store('push', function (){
  stash = this;
})
myvector.append();
stash = 4;
console.log(stash);
