'use strict'

/*
 * Create a `yell` function that takes a string
 * and return the same string in upper case
 *
 */
function yell(string) {
    return string.toUpperCase();
}

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof yell, 'function')
assert.deepStrictEqual(yell('hello'), 'HELLO')

// End of tests */


