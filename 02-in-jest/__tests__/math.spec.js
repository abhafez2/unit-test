const math = require("../math");

const { subtract, add } = math;

describe("Subtract function", () => {
  it("should return 1 when subtracting 7 from 8", () => {
    expect(subtract(8, 7)).toBe(1);
  });

  it("should return 0 when subtracting number from it self", () => {
    expect(subtract(8, 8)).toBe(0);
  });
});

describe("Add function", () => {
  it("should return 4 if we sum 2 + 2", () => {
    expect(add(2, 2)).toBe(4);
  });

  it("should return the number if we add it to zero", () => {
    expect(add(0, 8)).toBe(8);
  });

  it("should return 3 if we add two numeric strings `1` & `2`", () => {
    expect(add("1", "2")).toBe(3);
  });

  it("should sum floats too", () => {
    expect(add(0.4, 1.1)).toBe(1.5);
  });

  it("should sum floats too", () => {
    expect(add(0.1, 0.2)).toBeCloseTo(0.3);
  });

  it("should throw if one of the inputs is null", () => {
    expect(() => add(null, 1.1)).toThrow("Can't add null");
  });
});

// مفيش حاجة في التكنيك دا بتقول انك ح تعمل الحاجة صح
// انت بتعمل الحاجة صح 
// according to your understanding
// الخصم والحكم