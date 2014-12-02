# permutations

Find all permutations of string

# Install

```bash
npm install permutation
```

# Usage

```javascript
var permutations = require('permutation');

permutations('abc') // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
permutations('ab') // [ 'ab', 'ba']
permutations('aa') // [ 'aa', 'aa' ]
permutations('aa', {unique: true}) // [ 'aa' ]
```

# License

MIT
