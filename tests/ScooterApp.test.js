const Scooter = require("../src/Scooter");
const User = require("../src/User");
const ScooterApp = require("../src/ScooterApp");

// ScooterApp tests here
describe("ScooterApp object", () => {
  beforeEach(() => {
    scooterApp1 = new ScooterApp();
  });
  it("should have a stations property", () => {
    expect(scooterApp1).toHaveProperty("stations");
  });
  it("stations property should be an object", () => {
    expect(typeof scooterApp1.stations).toBe("object");
  });
  it("should have a registeredUsersProperty", () => {
    expect(scooterApp1).toHaveProperty("registeredUsers");
  });
  it("registeredUsers property should be an object", () => {
    expect(typeof scooterApp1.registeredUsers).toBe("object");
  });
});

describe("scooterApp methods", () => {
  beforeEach(() => {
    user1 = new User("John", "abc123", 20);
    user2 = new User("Sam", "abc123", 15);
    scooterApp1 = new ScooterApp();
  });

  // register user
  describe("register(user)", () => {
    afterEach(() => {
      jest.clearAllMocks();
    });
    it("should add user to registeredUsers array if successful", () => {
      let log = jest.spyOn(console, "log");
      scooterApp1.register(user1);
      expect(log).toHaveBeenCalledWith("User has been registered.");
    });
    it("if user age < 17 return message", () => {
      let log = jest.spyOn(console, "log");
      scooterApp1.register(user2);
      expect(log).toHaveBeenCalledWith("Too young to register!");
    });
    it("if user is already registered return message", () => {
      let log = jest.spyOn(console, "log");
      scooterApp1.register(user1);
      scooterApp1.register(user1);
      console.log(user1.username);
      console.log(scooterApp1.registeredUsers);
      expect(log).toHaveBeenCalledWith("User already registered!");
    });
  });
});
// log in

// add scooter

// remove scooter
