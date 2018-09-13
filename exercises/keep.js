'use strict'

/*
 * Create a `keepFirst` function that takes a string as parameter
 * and return the string only keeping the 2 first characters
 *
 * Create a `keepLast` function that takes a string as parameter
 * and return the string only keeping the 2 last characters
 *
 * Create a `keepFirstLast` function that takes a string as parameter
 * and only keep 2 characters from the third character
 *
 */

function keepFirst(string) {
    let shortStringBegin = string[0]+string[1];
    return shortStringBegin;

};

function keepLast(string) {
    let shortStringEnd = string[string.length-1]+string[string.length-2];
    return shortStringEnd;

};

function keepFirstLast(string) {
    let shortStringThird = string[2]+string[3];
    return shortStringThird;

};


//* Begin of tests
const assert = require('assert')

assert.fail('You must write your own tests')
// End of tests */
