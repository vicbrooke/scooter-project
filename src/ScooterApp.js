const User = require("./User");
const Scooter = require("./Scooter");

class ScooterApp {
  constructor() {
    this.stations = {
      Manhattan: [],
      Brooklyn: [],
      Queens: [],
      Bronx: [],
      StatenIsland: [],
    };
    this.registeredUsers = {};
  }

  register(user) {
    if (this.registeredUsers.hasOwnProperty(user.username)) {
      console.log("User already registered!");
    } else if (user.age < 17) {
      console.log("Too young to register!");
    } else {
      this.registeredUsers[user.username] = {
        password: user.password,
        age: user.age,
        loggedIn: false,
        accountChange: 0,
      };
      console.log("User has been registered.");
    }
  }

  logIn(username, password) {
    if (
      !this.registeredUsers.hasOwnProperty(username) ||
      this.registeredUsers[username].password !== password
    ) {
      throw new Error("Username or password is incorrect.");
    } else {
      this.registeredUsers[username].loggedIn = true;
      console.log("User logged in successfully");
    }
  }

  addScooter(location, scooter) {
    scooter.station = location;
    this.stations[location].push(scooter);
  }

  removeScooter(scooterToRemove) {
    const location = scooterToRemove.station;
    const scooterSerial = scooterToRemove.serial;

    for (const key in this.stations) {
      const target = (element) => element.serial === scooterSerial;
      if (this.stations[key].some(target)) {
        this.stations[key].splice(this.stations[key].indexOf(target));
        console.log("Scooter successfully removed.");
      }
    }
  }
}

module.exports = ScooterApp;
