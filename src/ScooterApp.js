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
}

module.exports = ScooterApp;
