class Scooter {
  constructor(station, user) {
    this.station = station;
    this.user = user;
    this.serial = Math.floor(Math.random() * 1000);
    this.charge = Math.floor(Math.random() * 100);
    this.isBroken = false;
    this.docked = true;
  }
}

module.exports = Scooter;
