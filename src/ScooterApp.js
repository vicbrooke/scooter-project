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
    if (user.age < 17) {
      console.log("Too young to register!");
    }
    this.registeredUsers[user.username] = {
      password: user.password,
      age: user.age,
      loggedIn: false,
      accountChange: 0,
    };

    console.log("User has been registered.");
  }
}

module.exports = ScooterApp;
