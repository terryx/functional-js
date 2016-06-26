let count = Array.apply(null, {length: 125000});

var greetings1 = (function(){
var names1 = ['terry', 'simon', 'aiksiang', 'tahir', 'cayter', 'yangshung', 'tim', 'jibone', 'sai', 'harsha', 'ian', 'joel', 'micheal', 'zhouchun'];

return function (n) {
 return names1[n];
}
}());

var names2 = ['terry', 'simon', 'aiksiang', 'tahir', 'cayter', 'yangshung', 'tim', 'jibone', 'sai', 'harsha', 'ian', 'joel', 'micheal', 'zhouchun'];

var greetings2 = function (n) {
 return names2[n];
}

console.time('With closure at 1000');
Array.apply(null, {length: 1000}).forEach(()=> {
  greetings1();
})
console.timeEnd('With closure at 1000');

console.time('Without closure at 1000');
Array.apply(null, {length: 1000}).forEach(()=> {
  greetings2();
})
console.timeEnd('Without closure at 1000');

console.time('With closure at 5000');
Array.apply(null, {length: 5000}).forEach(()=> {
  greetings1();
})
console.timeEnd('With closure at 5000');

console.time('Without closure at 5000');
Array.apply(null, {length: 5000}).forEach(()=> {
  greetings2();
})
console.timeEnd('Without closure at 5000');

console.time('With closure at 125000');
Array.apply(null, {length: 125000}).forEach(()=> {
  greetings1();
})
console.timeEnd('With closure at 125000');

console.time('Without closure at 125000');
Array.apply(null, {length: 125000}).forEach(()=> {
  greetings2();
})
console.timeEnd('Without closure at 125000');
