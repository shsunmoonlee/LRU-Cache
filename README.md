# Classic LRU Cache in JavaScript. Goal: Real World Implementation

## Gist

[Gist](https://gist.github.com/SeunghunSunmoonLee/1a3e78d0c4efa5dce4c1272d7067818d)

## Usage

import LRUCache from 'LRU-Cache'

```js
let lruCache = new LRUCache(5); // size 5 for example.
/**
 * @param {number} key
 * @return {number} value
 */
lruCache.get(key);

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
lruCache.put(key, value);

lruCache.removeNode(node);

lruCache.popTail();

lruCache.addNode(node);

lruCache.moveToHead(node);

// test
describe("Awesome test.", () => {
  it("should test default awesome function", () => {
    let obj = new LRUCache(2); // size of LRUCache
    obj.put(1, 10);
    obj.put(2, 2);
    obj.put(3, 3);
    const expectedVal = 10;
    assert(obj.get(1) === expectedVal, "Diddn't pass");
  });
});
```

## Boilerplate info

# NPM Module Boilerplate

[![Build Status](https://travis-ci.org/flexdinesh/npm-module-boilerplate.svg?branch=master)](https://travis-ci.org/flexdinesh/npm-module-boilerplate) [![dependencies Status](https://david-dm.org/flexdinesh/npm-module-boilerplate/status.svg)](https://david-dm.org/flexdinesh/npm-module-boilerplate) [![devDependencies Status](https://david-dm.org/flexdinesh/npm-module-boilerplate/dev-status.svg)](https://david-dm.org/flexdinesh/npm-module-boilerplate?type=dev) [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

**Start developing your NPM module in seconds** ✨

Readymade boilerplate setup with all the best practices to kick start your npm/node module development.

Happy hacking =)

# Features

- **ES6/ESNext** - Write _ES6_ code and _Babel_ will transpile it to ES5 for backwards compatibility
- **Test** - _Mocha_ with _Istanbul_ coverage
- **Lint** - Preconfigured _ESlint_ with _Airbnb_ config
- **CI** - _TravisCI_ configuration setup
- **Minify** - Built code will be minified for performance

# Commands

- `npm run clean` - Remove `lib/` directory
- `npm test` - Run tests with linting and coverage results.
- `npm test:only` - Run tests without linting or coverage.
- `npm test:watch` - You can even re-run tests on file changes!
- `npm test:prod` - Run tests with minified code.
- `npm run test:examples` - Test written examples on pure JS for better understanding module usage.
- `npm run lint` - Run ESlint with airbnb-config
- `npm run cover` - Get coverage report for your code.
- `npm run build` - Babel will transpile ES6 => ES5 and minify the code.
- `npm run prepublish` - Hook for npm. Do all the checks before publishing your module.

# Installation

Just clone this repo and remove `.git` folder.

# License

MIT © Dinesh Pandiyan
