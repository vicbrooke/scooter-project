const Scooter = require("../src/Scooter");
const User = require("../src/User");

//typeof scooter === object
describe("scooter object", () => {
  beforeEach(() => {
    user1 = new User("John", "abc123", 20);
    scooter1 = new Scooter("Manhattan", user1);
  });
  it("should be an object", () => {
    expect(typeof scooter1).toBe("object");
  });
  it("should have a station property", () => {
    expect(scooter1.station).toBe("Manhattan");
  });
  it("should have a user property", () => {
    expect(scooter1.user).toEqual({
      username: "John",
      password: "abc123",
      age: 20,
    });
  });
  it("user property should be an object", () => {
    expect(typeof scooter1.user).toBe("object");
  });
  it("should have a serial property which is a random number between 1 and 1000", () => {
    expect(typeof scooter1.serial).toBe("number");
  });
  it("serial property should be >=1 and <=1000", () => {
    expect(scooter1.serial).toBeGreaterThanOrEqual(1);
    expect(scooter1.serial).toBeLessThanOrEqual(1000);
  });
  it("should have a charge property", () => {
    expect(typeof scooter1.charge).toBe("number");
  });
  it("charge property should be >=1 and <=100", () => {
    expect(scooter1.charge).toBeGreaterThanOrEqual(1);
    expect(scooter1.charge).toBeLessThanOrEqual(100);
  });
  it("should have an isBroken property which is a boolean", () => {
    expect(typeof scooter1.isBroken).toBe("boolean");
  });
  it("should have an docked property which is a boolean", () => {
    expect(typeof scooter1.docked).toBe("boolean");
  });
});

//Method tests
describe("scooter methods", () => {
  //rent method
  describe("rent method", () => {
    beforeEach(() => {
      user1 = new User("John", "abc123", 20);
      scooter1 = new Scooter("Manhattan", user1);
    });
    it("should throw and error when charge is <= 20", () => {
      scooter1.charge = 10;
      expect(() => {
        scooter1.rent();
      }).toThrow("Scooter low on battery, please charge");
    });
  });

  //dock method
  //requestRepair method
  //charge method
});
