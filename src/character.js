import {playbooks} from "./Playbooks";
import {Stat} from "./stat";
import {Gear} from "./gear";

export class Character {
  constructor(characterClass) {
    this.name = "";
    this.characterClass = characterClass;
    this.level = 1;
    this.xp = 0;
    this.strength = new Stat(16);
    this.dexterity = new Stat(15);
    this.constitution = new Stat(13);
    this.intelligence = new Stat(12);
    this.wisdom = new Stat(9);
    this.charisma = new Stat(8);
    this.damage = 0;
    this.armor = 0;
    this.look = {};
    this.drive = {};
    this.coin = 0;
    this.gear = [
      new Gear("Adventuring Gear", 5, 1)
    ];
    this.moves = [];
  }

  get playbook() {
    return playbooks.find(it => it.name === this.characterClass);
  }

  get nextLevel() {
    return this.level + 7;
  }

  get hitPointsMax() {
    return this.playbook.baseHitPoints + this.constitution.value;
  }

  get hitPointsCurrent() {
    return this.hitPointsMax - this.damage;
  }

  set hitPointsCurrent(value) {
    this.damage = this.hitPointsMax - value;
    if (this.damage > this.hitPointsMax) this.damage = this.hitPointsMax;
    else if (this.damage < 0) this.damage = 0;
  }

  get load() {
    return this.gear
      .map(it => it.weight)
      .reduce((a, b) => a + b, 0);
  }

  get maxLoad() {
    return this.playbook.baseLoad + this.strength.bonus;
  }

  static fromJSON(json) {
    let c = JSON.parse(json);
    ["strength", "dexterity", "constitution", "intelligence", "wisdom", "charisma"].forEach(name =>
      c[name] = Object.assign(new Stat, c[name])
    );
    return Object.assign(new Character, c);
  }
}
