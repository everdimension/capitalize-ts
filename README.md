# Capitalize

A helper in typescript for capitalizing first letter in a string, leaving rest letter untouched

## Usage

```typescript
import { capitalize } from 'capitalize-ts';

capitalize('hello'); // 'Hello'
capitalize('hello, World'); // 'Hello World'
```

## Install

```sh
npm install capitalize-ts
```

## Strict Typing

Leverage the built-in [Capitalize](https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html#capitalizestringtype)
generic for more precise typing

```typescript
const result = capitalize('hello');
// type of `result` is Hello instead of string

```
