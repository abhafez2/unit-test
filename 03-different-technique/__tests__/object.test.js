const { expect, describe } = require("@jest/globals");
const { numeric, programmingLanguages } = require("../object");

describe("Numeric numeric Object", () => {
  it("should return first number", () => {
    const numbers = { ...numeric };
    expect(numbers).toEqual({ one: 1 });
  });
  
  it("should update normally", () => {
    const numbers = { ...numeric };
    numbers["two"] = 2;
    expect(numbers).toEqual({ one: 1, two: 2 });
  });

  it("should update normally", () => {
    const numbers = { ...numeric };
    numbers["one"] = 1.000001;
    expect(numbers).toEqual({ one: 1.000001 });
  });
});

describe("programmingLanguages", () => {
  it("should match object with javascript", () => {
    expect(programmingLanguages).toMatchObject({ javascript: "multi-paradigm" });
  });
  it("should not update", () => {
    programmingLanguages['jest'] = "testing"
    expect(programmingLanguages).not.toMatchObject({ jest: "testing" });
    expect(Object.keys(programmingLanguages)).not.toContain("jest")
    expect(programmingLanguages.jest).not.toBeDefined();
    expect(programmingLanguages.jest).toBeUndefined();
  });
});
