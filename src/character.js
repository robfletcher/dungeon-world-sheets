import {playbooks} from "./Playbooks";
import {Stat} from "./stat";

export class Character {
  constructor(characterClass, name, strength, dexterity, constitution, intelligence, wisdom, charisma) {
    this.name = name;
    this.characterClass = characterClass;
    this.level = 1;
    this.xp = 0;
    this.strength = new Stat(strength);
    this.dexterity = new Stat(dexterity);
    this.constitution = new Stat(constitution);
    this.intelligence = new Stat(intelligence);
    this.wisdom = new Stat(wisdom);
    this.charisma = new Stat(charisma);
    this.damage = 0;
    this.armor = 0;
    this.look = {};
    this.drive = {};
    this.bonds = [];
    this.coin = 0;
    this.gear = [];
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

  get canLevelUp() {
    return this.xp > this.nextLevel && this.level < 10;
  }

  static fromObject(obj) {
    ["strength", "dexterity", "constitution", "intelligence", "wisdom", "charisma"].forEach(name =>
      obj[name] = Object.assign(new Stat, obj[name])
    );
    return Object.assign(new Character, obj);
  }

  static fromJSON(json) {
    return Character.fromObject(JSON.parse(json));
  }
}
