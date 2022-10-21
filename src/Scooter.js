class Scooter {
  constructor(station, user) {
    this.station = station;
    this.user = user;
    this.serial = Math.floor(Math.random() * 1000);
    this.charge = Math.floor(Math.random() * 100);
    this.isBroken = false;
    this.docked = true;
  }

  rent() {
    if (!this.isBroken && this.charge > 20) {
      this.docked = false;
      console.log("Enjoy the ride!");
    } else if (this.charge <= 20) {
      throw new Error("Scooter low on battery, please charge.");
    } else {
      throw new Error("Scooter is broken, please send a repair request.");
    }
  }

  dock(station) {
    if (arguments.length === 0) {
      throw new Error("Docking station required!");
    }
    this.station = station;
    this.docked = true;
    this.user = "";
  }

  async recharge() {
    console.log("Starting charge");

    await new Promise((resolve) => setTimeout(resolve, 2000)); // wait 2 seconds
    this.charge = 100;

    console.log("Charge complete");
  }
}

const scooter1 = new Scooter("Manhattan", {
  username: "John",
  password: "abc123",
  age: 20,
});

module.exports = Scooter;
