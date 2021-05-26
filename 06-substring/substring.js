/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const splittedString = s.split("");
  let longestSubstr = "";
  let currentSubstr = splittedString.reduce((acc, cur) => {
    if (acc.includes(cur)) {
      if (acc.length > longestSubstr.length) longestSubstr = acc;
      return acc.slice(acc.indexOf(cur) + 1) + cur;
    } else {
      return (acc += cur);
    }
  }, "");

  return Math.max(longestSubstr.length, currentSubstr.length);
};

module.exports = {
  lengthOfLongestSubstring,
};
