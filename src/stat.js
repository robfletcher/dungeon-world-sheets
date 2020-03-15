export class Stat {
  constructor(value) {
    this.value = value;
    this.isDebilitated = false;
  }

  get bonus() {
    return Stat.statToBonus(this.value) - (this.isDebilitated ? 1 : 0);
  }

  static statToBonus(stat) {
    switch (true) {
      case stat < 3 || stat > 18:
        throw `Stat value ${stat} is out of range`;
      case stat === 3:
        return -3;
      case stat <= 5:
        return -2;
      case stat <= 8:
        return -1;
      case stat <= 12:
        return 0;
      case stat <= 15:
        return 1;
      case stat <= 17:
        return 2;
      case stat === 18:
        return 3;
    }
  }
}