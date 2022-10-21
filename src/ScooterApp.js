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
    console.log("app", this.registeredUsers.hasOwnProperty(username));
    if (
      !this.registeredUsers.hasOwnProperty(username) ||
      this.registeredUsers.username.password !== password
    ) {
      throw new Error("Username or password is incorrect.");
    }
  }
}

module.exports = ScooterApp;
