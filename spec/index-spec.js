const min_max = require('../src');

describe("MinMax", () => {
  it("should return the empty array", () => {
    expect(min_max([])).toEqual([]);
  });

  it("should represent a single element", () => {
    expect(min_max([1])).toEqual([1]);
  });

  it("should sort a couple of elements", () => {
    expect(min_max([2,1])).toEqual([1,2]);
  });

  it("should sort multiple elements", () => {
    expect(min_max([2,1,5,6,9,0])).toEqual([0,9,1,6,2,5]);
  });

  it("should sort multiple elements odd", () => {
    expect(min_max([3,2,1,5,6,9,0])).toEqual([0,9,1,6,2,5,3]);
  });
});
