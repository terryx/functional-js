/*
Write a function identifyf
that takes an arguement and
return a function that returns that arguement
*/

var identifyf = function(val) {
  var a = function() {
    return val;
  }

  return a;
}

var three = identifyf(3);

// console.log(three);

/*
Write a function addf that
adds from two invocations
*/

var addf = function(first) {
  return function(second) {
    return first + second;
  }
}

//console.log(addf(4, 3)); //7

/*
Write a function liftf that takes a binary function
and makes it callable with two invocations.
*/
var add = function(a, b) {
  return a + b;
}

var mul = function(a, b) {
  return a * b;
}

var liftf = function(binary) {
  return function(first) {
    return function(second) {
      return binary(first, second)
    }
  }
}

// console.log(liftf(mul)(5)(6)) //30


/*
Write a function curry that
takes a binary function and an
arguement, and returns a
function that can take a
second arguement
*/

var curry = function(binary, first) {
  return function (second) {
    return binary(first, second);
  }
}

//function curry(binary, first) {
// return lift(binary)(first)
//}
var add3 = curry(add ,3);
add3(4); //7

console.log(add3(4));

curry(mul, 5)(6) //30

console.log(curry(mul, 5)(6));
