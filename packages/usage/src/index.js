/*eslint no-console: 0 */

// browser code - should throw erorr
// window.foo = 'bar';

require('@lukeaus/js-client-server-common-monorepo-starter-foo');
require('@lukeaus/js-client-server-common-monorepo-starter-bar');
const {baz} = require('./foo');
require('./say');

console.log('baz=', baz);

// es2018 test
const obj = {a: 1, b: 2, c: 3};

const {a, ...rest} = obj;

console.log('a, rest=', a, rest);
