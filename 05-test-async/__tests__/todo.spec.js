const { getTodo } = require("../todo");
const axios = require("axios");

afterEach(() => {
  jest.clearAllMocks();
  jest.restoreAllMocks();
});

jest.mock("axios");

axios.get.mockImplementation(() => {
  return Promise.resolve({
    data: {
      userId: 1,
      id: 2,
      title: "quis ut nam facilis et officia qui",
      completed: false,
    },
  });
});


describe("getTodo without done", () => {
  it("should return an object", () => {
    getTodo(3).then((res) => {
      expect(typeof res).toBe("object");
      expect(res).toMatchObject({ id: 2 });
      expect(axios.get).toHaveBeenCalled();
      expect(axios.get).toHaveBeenCalledTimes(1);
      expect(axios.get).toHaveBeenCalledWith(`https://jsonplaceholder.typicode.com/todos/3`);
    });
  });
});

describe("getTodo without done", () => {
  it("should return an object", async () => {
    const todo = await getTodo(2);
    expect(typeof todo).toBe("object");
    expect(todo).toMatchObject({ id: 2 });
    expect(axios.get).toHaveBeenCalled();
    expect(axios.get).toHaveBeenCalledTimes(1);
  });
})
