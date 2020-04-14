(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react'], factory) :
  (global = global || self, factory(global.foo = {}, global.react));
}(this, (function (exports, react) { 'use strict';

  react = react && react.hasOwnProperty('default') ? react['default'] : react;

  function foo() {
    return 'foo';
  }

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function unwrapExports (x) {
  	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
  }

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  var lib = createCommonjsModule(function (module, exports) {
  var __assign = (commonjsGlobal && commonjsGlobal.__assign) || function () {
      __assign = Object.assign || function(t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
              s = arguments[i];
              for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                  t[p] = s[p];
          }
          return t;
      };
      return __assign.apply(this, arguments);
  };
  Object.defineProperty(exports, "__esModule", { value: true });

  function useCombinedState(initialState) {
      var _a = react.useState(initialState), combinedState = _a[0], setCombinedState = _a[1];
      var setPartialState = function (partialState) {
          if (typeof partialState === 'function') {
              setCombinedState(function (prevState) {
                  return __assign({}, prevState, partialState(prevState));
              });
          }
          else {
              setCombinedState(__assign({}, combinedState, partialState));
          }
      };
      return [combinedState, setPartialState];
  }
  exports.useCombinedState = useCombinedState;
  exports.default = useCombinedState;

  });

  var ucs = unwrapExports(lib);
  var lib_1 = lib.useCombinedState;

  var fooName = foo();
  function hello() {
    console.log('old fellow:', ucs);
    return "hello: ".concat(fooName);
  }

  exports.hello = hello;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
