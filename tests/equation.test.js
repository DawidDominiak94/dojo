const assert = require('assert');

function resolveParams(targetValue) {
  return targetValue * (10 % 4);
}

function runTests() {
  const result = resolveParams(132.993);
  assert.strictEqual(result, 265.986, 'Expected params to equal 265.986');

  console.log('PASS: resolveParams returns correct value');
}

runTests();
