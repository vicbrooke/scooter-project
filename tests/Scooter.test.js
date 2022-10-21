const Scooter = require("../src/Scooter");
const User = require("../src/User");

//typeof scooter === object
describe("scooter object", () => {
  beforeEach(() => {
    scooter1 = new Scooter("Manhattan", {
      username: "John",
      passowrd: "abc123",
      age: 20,
    });
  });
  it("should have a station property", () => {
    expect(scooter1.station).toBe("Manhattan");
  });
  it("should have a user property", () => {
    expect(scooter1.user).toEqual({
      username: "John",
      passowrd: "abc123",
      age: 20,
    });
  });
  it("user property should be an object", () => {
    expect(typeof scooter1.user).toBe("object");
  });
});

//Method tests
describe("scooter methods", () => {
  // tests here!
  //rent method
  //dock method
  //requestRepair method
  //charge method
});
