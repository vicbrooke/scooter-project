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
    if (this.charge <= 20) {
      throw new Error("Scooter low on battery, please charge.");
    }
  }
}

const scooter1 = new Scooter("Manhattan", {
  username: "John",
  password: "abc123",
  age: 20,
});

module.exports = Scooter;
