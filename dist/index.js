'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var ucs = _interopDefault(require('use-combined-state'));

function foo() {
  return 'foo';
}

var fooName = foo();
function hello() {
  console.log('old fellow:', ucs);
  return "hello: ".concat(fooName);
}

exports.hello = hello;
