var test = require('tape');
var permutations = require('../permutations');

test('permutations', function (t) {
  t.plan(6);

  t.deepEqual(permutations('abc'), [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]);
  t.deepEqual(permutations('ab'), [ 'ab', 'ba']);
  t.deepEqual(permutations('aa'), [ 'aa', 'aa' ]);
  t.deepEqual(permutations('aa', {unique: true}), [ 'aa' ]);
  t.deepEqual(permutations(''), []);
  t.deepEqual(permutations(), []);

});
