function add(a, b) {
  if (a === null || b === null) {
    throw new Error("Can't add null");
  }

  return Number(a) + Number(b);
}
// add folder __tests__ and talk about `convention`
// cd 02-in-jest and npm init (multiple enters)
// run npm install --save-dev jest
// Change Scripts "test": "jest"
// run test and read error (we need to add a test to go)
// add math.spec.js and run an empty test
// note that you'll need to export tested functions
/* 
it('should return 1 when subtracting 7 from 8', () => {
  expect(subtract(8, 7)).toBe(1);
});
*/
// then add describe to describe
// make the output returns one and watch the test pass
// make another test to ensure
// try add function with 2 & 2 toBe 4
// try to add 0 & 4 to give 4
// make the mistake and change return to 4
// let's make stronger tests
// test the strings
// change to parseInt
// try adding floats and change to Number function
// try on terminal or in console adding 0.1 + 0.2
// assert toBeCloseTo()
// try adding null and throw
// run coverage and end this module
/* 
some expectations 
subtract(8, 1) returns 7
subtract(8, 8) returns 0
subtract(8, 10) returns -2
*/

function subtract(a, b) {
  // we need to to some refactor here
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

module.exports = {
  subtract,
  multiply,
  add,
};
