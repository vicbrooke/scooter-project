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
  beforeEach(() => {
    user1 = new User("John", "abc123", 20);
    scooter1 = new Scooter("Manhattan", user1);
  });
  afterEach(() => {
    jest.clearAllMocks();
  });
  //rent method
  describe("rent method", () => {
    it("should log to the console if isBroken === false && charge > 20", () => {
      scooter1.charge = 50;
      let log = jest.spyOn(console, "log");
      scooter1.rent();
      expect(log).toHaveBeenCalledWith("Enjoy the ride!");
    });
    it("should throw and error when charge is <= 20", () => {
      scooter1.charge = 10;
      expect(() => {
        scooter1.rent();
      }).toThrow("Scooter low on battery, please charge");
    });
    it("should throw and error if isBroken === true", () => {
      scooter1.isBroken = true;
      expect(() => {
        scooter1.charge = 50;
        scooter1.rent();
      }).toThrow("Scooter is broken, please send a repair request.");
    });
  });

  //dock method
  describe("dock method", () => {
    it("should set the station property of the Scooter to the argument passed in", () => {
      scooter1.dock("Brooklyn");
      expect(scooter1.station).toBe("Brooklyn");
    });
    it("should throw an error if no argument is passed in", () => {
      expect(() => {
        scooter1.dock();
      }).toThrow("Docking station required!");
    });
    it("should set docked property to true", () => {
      scooter1.dock("Brooklyn");
      expect(scooter1.docked).toBe(true);
    });
    it("should set user property to empty string", () => {
      scooter1.dock("Brooklyn");
      expect(scooter1.user).toBe("");
    });
  });
  //charge method
  describe("recharge method", () => {
    it("should update the Scooter's charge to 100", async () => {
      let log = jest.spyOn(console, "log");
      await scooter1.recharge();
      expect(log).toHaveBeenCalledWith("Charge complete");
      expect(scooter1.charge).toBe(100);
    });
  });
  //requestRepair method
  describe("requestRepair method", () => {
    it("should use a setTiemout timer to log a message that the repair has been completed", async () => {
      let log = jest.spyOn(console, "log");
      await scooter1.requestRepair();
      expect(log).toHaveBeenCalledWith("Repair complete");
    });
    it("should set isBroken property to false once repair is complete", async () => {
      scooter1.isBroken = true;
      await scooter1.requestRepair();
      expect(scooter1.isBroken).toBe(false);
    });
  });
});
