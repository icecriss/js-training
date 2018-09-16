'use strict'

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */

function jadenCase(string) {
    if (string.length === 0){
        return '';
    } else {
        let words = string.split(' ');
        for (let i = 0; i < words.length; i++) {
          words[i] = words[i][0].toUpperCase() + words[i].slice(1).toLowerCase();
        }
        return words.join(' ');
    }
}


//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof jadenCase, 'function')
assert.strictEqual(jadenCase.length, 1)
assert.strictEqual(jadenCase('hello'), 'Hello')
assert.strictEqual(jadenCase('How are you doing?'), 'How Are You Doing?')
assert.strictEqual(jadenCase('I\'m not TOO OLD to code'), 'I\'m Not Too Old To Code')
assert.strictEqual(jadenCase('i am not 20 anyMore...'), 'I Am Not 20 Anymore...')
assert.strictEqual(jadenCase('j\'aime les frites et les patates, mais aussi la purée!'), 'J\'aime Les Frites Et Les Patates, Mais Aussi La Purée!')
assert.strictEqual(jadenCase(''),'')

// assert.fail('You must write your own tests')
// End of tests */
