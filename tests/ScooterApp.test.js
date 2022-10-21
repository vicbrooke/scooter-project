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
  it("registeredUsers property should be an array", () => {
    expect(Array.isArray(scooterApp1.registeredUsers)).toBe(true);
  });
});
// register user

// log in

// add scooter

// remove scooter
