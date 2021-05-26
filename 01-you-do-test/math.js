function add(a, b) {
  return a + b;
}
// TODO: write this line and talk about logging problems
console.log(add(3, 5) === 8 ? "✅ your test passes" : "❌ your test faild");

// run: node 01-you-do-test/math.js
console.log(add(3, 5) === 9 ? "✅ your test passes" : "❌ your test faild");

// let's write out unit test framework
function expect(actual) {
  return {
    toBe(expected) {
      if (actual === expected) {
        console.log(`✅ your test passes`);
      } else {
        console.log(
          `❌ your test faild expected ${expected} but received ${actual}`
        );
      }
    },
  };
}

// prepare
let actual = add(3, 5);
let expected = 8;

// expectations
expect(actual).toBe(expected);
expect(add(6, 8)).toBe(14);