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
      expect(log).toHaveBeenCalledWith("User already registered!");
    });
  });
  // log in
  describe("logIn(username, password", () => {
    it("user not in registerdUsers or password does not match return message ", () => {
      scooterApp1.register(user1);
      expect(() => {
        scooterApp1.logIn(user2.username, user2.password);
      }).toThrow("Username or password is incorrect.");
    });
    it("logIn method should mark correct user in registeredUser object loggedIn property to true", () => {
      scooterApp1.register(user1);
      scooterApp1.logIn(user1.username, user1.password);
      expect(scooterApp1.registeredUsers[user1.username].loggedIn).toBe(true);
    });
  });
  // add scooter
  describe("addScooter(location, scooter", () => {
    beforeEach(() => {
      scooter1 = new Scooter("Manhattan", user1);
      scooterApp1.addScooter("Bronx", scooter1);
    });
    it("should set scooter's station property to location argument", () => {
      const scooter1 = new Scooter("Manhattan", user1);
      scooterApp1.addScooter("Bronx", scooter1);
      expect(scooter1.station).toBe("Bronx");
    });
    it("should add scooter argument to stations", () => {
      expect(scooterApp1.stations.Bronx).toEqual([scooter1]);
    });
    it("should only add scooter if location and scooter information are passed", () => {
      expect(() => {
        scooterApp1.addScooter();
      }).toThrow("Need location and scooter information!");
    });
  });
  //remove scooter
  describe("removeScooter(scooterToRemove", () => {
    beforeEach(() => {
      scooter1 = new Scooter("Manhattan", user1);
      scooter2 = new Scooter("Bronx", user2);
      scooterApp1.addScooter("Bronx", scooter1);
    });
    afterEach(() => {
      jest.clearAllMocks();
    });
    it("should remove scooter from correct location list", () => {
      scooterApp1.removeScooter(scooter1);
      expect(scooterApp1.stations.Bronx).toHaveLength(0);
    });
    it("should log a message that the scooter has been removed", () => {
      let log = jest.spyOn(console, "log");
      scooterApp1.removeScooter(scooter1);
      expect(log).toHaveBeenCalledWith("Scooter successfully removed.");
    });
    // it("should throw an error if scooter serial number is not located", () => {
    //   expect(() => {
    //     scooterApp1.removeScooter(scooter2);
    //   }).toThrow("Serial number not located!");
    // });
  });
});
