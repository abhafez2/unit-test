const { lengthOfLongestSubstring } = require("../substring");

describe("lengthOfLongestSubstring", () => {
  it('should return length 3 for input "abcabcbb" because "abc" is longest', () => {
    expect(lengthOfLongestSubstring("abcabcbb")).toBe(3);
  });

  it('should return length 1 for input "bbbbb" because "b" is longest', () => {
    expect(lengthOfLongestSubstring("bbbbb")).toBe(1);
  });

  it('should return length 3 for input "pwwkew" because "wke" is longest', () => {
    expect(lengthOfLongestSubstring("pwwkew")).toBe(3);
  });

  it('should return length 0 for input "" it is empty', () => {
    expect(lengthOfLongestSubstring("")).toBe(0);
  });

  it('should return length 3 for input "dvdf"', () => {
    expect(lengthOfLongestSubstring("dvdf")).toBe(3);
  });
});
