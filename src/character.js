import {derived, writable} from 'svelte/store';
import {playbooks} from "./Playbooks";

class Stat {
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

class Character {
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

let saved = localStorage.getItem("character");
let recovered = saved == null ?  new Character("The Barbarian") : Character.fromJSON(saved);
export const character = writable(recovered);

character.subscribe(c => localStorage.setItem("character", JSON.stringify(c)));
