import { foo } from './foo';
import ucs from 'use-combined-state';
const fooName = foo();

export function hello() {
  console.log('old fellow:', ucs);
  return `hello: ${fooName}`;
}