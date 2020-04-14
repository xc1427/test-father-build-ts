import ucs from 'use-combined-state';

function foo() {
  return 'foo';
}

var fooName = foo();
function hello() {
  console.log('old fellow:', ucs);
  return "hello: ".concat(fooName);
}

export { hello };
