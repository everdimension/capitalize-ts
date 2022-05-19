import { capitalize } from './index';

test('hello -> Hello', () => {
  expect(capitalize('hello')).toEqual('Hello');
});

test('Hello -> Hello', () => {
  expect(capitalize('Hello')).toEqual('Hello');
});

test('hello World -> Hello World', () => {
  expect(capitalize('hello')).toEqual('Hello');
});

test('empty string', () => {
  expect(capitalize('')).toEqual('');
});

test('mixed case: capitalizes only first letter ', () => {
  expect(capitalize('heLLo')).toEqual('HeLLo');
});
