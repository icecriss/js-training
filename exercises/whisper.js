'use strict'

/*
 * Create a `whisper` function that takes a string
 * and return the same string in lower case
 * and wrapped by `*`
 *
 */
function whisper(string) {
    let solution = '* ' + string.toLowerCase() + ' *';
    return solution;
}

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof whisper, 'function')
assert.strictEqual(whisper('Hello I am WHispering!'), '* hello i am whispering! *')
assert.strictEqual(whisper('IF YOU\'RE 15, YOU ARE TOO YOUNG'), '* if you\'re 15, you are too young *')

// assert.fail('You must write your own tests')
// End of tests */
